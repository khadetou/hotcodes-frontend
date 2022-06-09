import { GetServerSideProps, NextPage } from "next";
import { useState, useEffect } from "react";
import { useTypedSelector } from "@/hooks/useTypeSelector";
import { useActions } from "@/hooks/useActions";
import { useRouter } from "next/router";
import { getCookie } from "store/action-creators";
import GoogleLogin from "react-google-login";
import jwtDecode from "jwt-decode";
import RegisterScreen from "@/screens/register";
import Header from "@/components/header";
import Footer from "@/components/footer/Footer";
import Seo from "@/components/Seo";

const Register: NextPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const { LoadUser } = useActions();
  const { success, user } = useTypedSelector((state) => state.authReducer);

  useEffect(() => {
    LoadUser();
    if (user) {
      router.push("/");
    }
  }, [router, user]);

  if (success) {
    router.push("/login");
  }

  return (
    <>
      <Seo title="Register" />
      <Header />
      <RegisterScreen />
      <Footer />
    </>
  );
};

export default Register;
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
