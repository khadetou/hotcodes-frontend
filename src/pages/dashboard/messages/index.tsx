import SEO from "@/components/Seo";
import MessagesScreen from "@/screens/dashboard/messagesScreen";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import React from "react";
import { getCookie } from "store/action-creators";

const Messages = () => {
  return (
    <>
      <SEO title="Messages" />
      <MessagesScreen />
    </>
  );
};

export default Messages;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = getCookie("token", ctx.req);
  if (token) {
    if (jwtDecode<any>(token).exp < Date.now() / 1000) {
      return {
        redirect: {
          destination: "/",
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
