import Footer from "@/components/footer/Footer";
import SEO from "@/components/Seo";
import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypeSelector";
import DashboardScreen from "@/screens/dashboard";
import jwtDecode from "jwt-decode";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getCookie } from "store/action-creators";

const Dashboard: NextPage = () => {
  const { LoadUser } = useActions();
  const { isAuthenticated, loading, user } = useTypedSelector(
    (state) => state.authReducer
  );
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      LoadUser();
    }

    if (!loading && !user) {
      router.push("/login");
    }
    if (!loading && !isAuthenticated) {
      router.push("/login");
    }
  }, [loading, user, isAuthenticated, router]);

  return (
    <>
      <SEO title="Dashboard" />
      <DashboardScreen />
    </>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = getCookie("token", ctx.req);

  if (token) {
    if (jwtDecode<any>(token).exp < Date.now() / 1000) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
  } else {
    return {
      props: {},
    };
  }
  return {
    props: {},
  };
};
