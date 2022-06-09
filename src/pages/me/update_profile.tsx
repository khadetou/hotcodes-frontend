import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
import { GetServerSideProps, NextPage } from "next/types";
import { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import { wrapper } from "../../store";
import { getCookie, LoadUserSsr } from "../../store/action-creators";

const UpdateProfile: NextPage = () => {
  const router = useRouter();
  const { UpdateUserProfile } = useActions();
  const { error, loading, success, user } = useTypedSelector(
    (state) => state.authReducer
  );

  const [formData, setFormData] = useState<any>({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: user?.phone || "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [router, user]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords don't match");
    } else {
      UpdateUserProfile(formData);
    }
  };

  if (success) {
    router.push("/");
  }

  return (
    <div>
      <h1>{user?.password ? "Update user profile" : "Proceed Checking"}</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        {user?.password && (
          <>
            <label htmlFor="firstname">FirstName</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => onChange(e)}
            />
            <label htmlFor="lastname">LastName</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => onChange(e)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => onChange(e)}
            />
          </>
        )}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => onChange(e)}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) => onChange(e)}
        />
        <button type="submit">Register</button>
        {user?.password && (
          <button onClick={() => router.push("/")}>Go back</button>
        )}
      </form>
    </div>
  );
};

export default UpdateProfile;
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
