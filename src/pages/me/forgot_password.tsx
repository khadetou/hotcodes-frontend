import jwtDecode from "jwt-decode";
import { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import { useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import { getCookie } from "../../store/action-creators";
import { useRouter } from "next/router";

interface IProps {
  tokens: string;
}

const ForgotPassword: NextPage<IProps> = ({ tokens }) => {
  const { SendConfirmationEmail, LogoutUser } = useActions();
  const router = useRouter();
  const { token } = useTypedSelector((state) => state.authReducer);
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    SendConfirmationEmail(email);
  };
  console.log(tokens);

  useEffect(() => {
    if (tokens) {
      LogoutUser();
      router.push("/");
    }
  }, [tokens, router]);

  return (
    <div>
      <h1>Forgot Password</h1>
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ForgotPassword;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = getCookie("token", ctx.req);
  console.log(token);
  if (token) {
    if (jwtDecode<any>(token).exp > Date.now() / 1000) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    } else {
      return {
        props: {
          tokens: token,
        },
      };
    }
  }
  return {
    props: {},
  };
};
