import { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypeSelector";
import { useRouter } from "next/router";
import { getCookie } from "store/action-creators";
import jwtDecode from "jwt-decode";
import LoginScreen from "@/screens/login";
import Header from "@/components/header";
import Footer from "@/components/footer/Footer";
import Seo from "@/components/Seo";

const Login: NextPage = () => {
  const { SetSuccess, LoadUser } = useActions();
  const { success, isAuthenticated, user } = useTypedSelector(
    (state) => state.authReducer
  );
  const router = useRouter();

  useEffect(() => {
    LoadUser();

    if (success) {
      SetSuccess(false);
    }
    if (isAuthenticated) {
      if (router.query && router.query.from) {
        router.push(`${router.query.from}`);
      } else {
        router.push("/");
      }
    }
  }, [router, isAuthenticated, success]);

  return (
    <>
      <Seo title="Login" />
      <Header />
      <LoginScreen />
      <Footer />
    </>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = getCookie("token", ctx.req);
  if (token) {
    if (jwtDecode<any>(token).exp > Date.now() / 1000) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  }
  return {
    props: {},
  };
};
