import React, { useEffect } from "react";
import { useState } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypeSelector";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { getCookie } from "../../../store/action-creators";
import jwtDecode from "jwt-decode";
const ConfirmEmail = () => {
  const { ResetPassword } = useActions();
  const { user } = useTypedSelector((state) => state.authReducer);
  const router = useRouter();
  const [passwords, setPasswords] = useState({
    password: "",
    confirmPassword: "",
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (passwords.password !== passwords.confirmPassword) {
      alert("Passwords do not match");
    } else {
      ResetPassword(passwords.password, router.query.token as string);
    }
  };

  useEffect(() => {
    if (user) {
      router.push("/login");
    }
  }, [user, router]);

  return (
    <div>
      <h1>Reset Password</h1>
      <form onSubmit={onSubmit}>
        <label>Password</label>
        <input
          type="password"
          value={passwords.password}
          onChange={(e) => onChange(e)}
          name="password"
        />
        <label>Confirm Password</label>
        <input
          type="password"
          value={passwords.confirmPassword}
          onChange={(e) => onChange(e)}
          name="confirmPassword"
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ConfirmEmail;
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
  }
  return {
    props: {},
  };
};
