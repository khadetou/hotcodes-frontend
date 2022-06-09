import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { wrapper } from "../../../../store";
import { getCookie, LoadUserSsr } from "../../../../store/action-creators";
import { useActions } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypeSelector";
import { useEffect } from "react";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";

const User: NextPage = () => {
  const { GetUserById } = useActions();
  const router = useRouter();

  useEffect(() => {
    GetUserById(router.query.id as string);
  }, [router]);
  return <div>User</div>;
};

export default User;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx): Promise<any> => {
    const token = getCookie("token", ctx.req);
    if (token) {
      if (jwtDecode<any>(token).exp < Date.now() / 1000) {
        return {
          redirect: {
            destination: "/",
            permanent: false,
          },
        };
      } else {
        await store.dispatch(LoadUserSsr(token));
        const { user } = store.getState().authReducer;

        if (!user!.roles.includes("admin")) {
          return {
            redirect: {
              destination: "/",
              permanentf: false,
            },
          };
        }
        return {
          props: {
            user,
          },
        };
      }
    }

    return {
      props: {},
    };
  });
