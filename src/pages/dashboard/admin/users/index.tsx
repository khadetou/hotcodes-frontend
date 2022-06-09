import { GetServerSideProps, NextPage } from "next";
import { wrapper } from "../../../../store";
import { getCookie, LoadUserSsr } from "../../../../store/action-creators";
import { useActions } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypeSelector";
import { useEffect } from "react";
import Link from "next/link";
import jwtDecode from "jwt-decode";

const Users: NextPage = () => {
  const { GetAllUsers, DeleteUser } = useActions();
  const { users } = useTypedSelector((state) => state.authReducer);

  useEffect(() => {
    GetAllUsers();
  });

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users &&
          users.map((user) => (
            <>
              <Link passHref key={user?._id} href={`/admin/users/${user?._id}`}>
                <li>{user?.email}</li>
              </Link>
              <button onClick={() => DeleteUser(user?._id as string)}>
                Delete user
              </button>
            </>
          ))}
      </ul>
    </div>
  );
};

export default Users;

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
        if (!user?.roles.includes("admin")) {
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
