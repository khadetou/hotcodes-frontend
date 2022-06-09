import { useActions } from "@/hooks/useActions";
import OrdersScreen from "@/screens/dashboard/ordersScreen";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { getCookie, LoadUser } from "store/action-creators";
import { useRouter } from "next/router";
import { useTypedSelector } from "@/hooks/useTypeSelector";
import SEO from "@/components/Seo";

const Orders = () => {
  const { LoadUser } = useActions();
  const { isAuthenticated, loading, user } = useTypedSelector(
    (state) => state.authReducer
  );
  const router = useRouter();
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
    if (!loading && !isAuthenticated) {
      router.push("/login");
    }
  }, [loading, user, isAuthenticated, router]);
  return (
    <>
      <SEO title="Orders" />
      <OrdersScreen />
    </>
  );
};

export default Orders;
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
