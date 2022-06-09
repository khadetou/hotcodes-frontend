import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypeSelector";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const ProfileForm = () => {
  const { user, success, error } = useTypedSelector(
    (state) => state.authReducer
  );
  console.log(error);
  //GET THE FIRST LETTER OF EACH NAME
  const getInitials = (name: string) => {
    const names = name.split(" ");
    return names.map((n) => n[0]).join("");
  };
  const { UpdateUserProfile, SetSuccess, ClearError } = useActions();

  const [form, setForm] = useState({
    firstName: user ? user.firstName : "",
    lastName: user ? user.lastName : "",
    email: user ? user.email : "",
    phone: user ? user.phone : "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      return MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password and Confirm Password do not match",
      });
    } else {
      UpdateUserProfile(form);
    }
  };

  useEffect(() => {
    if (success) {
      MySwal.fire({
        toast: true,
        showCancelButton: false,
        position: "top-end",
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
        icon: "success",
        title: "Profile Updated Successfully",
      });
      SetSuccess(false);
    }
    if (error) {
      MySwal.fire({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
        icon: "error",
        title: error,
      });
      ClearError();
    }
  }, [success, error, ClearError, SetSuccess]);

  return (
    <div className="flex flex-wrap">
      <div className="flex-auto w-full lg:w-1/4 lg:pr-4">
        <div className="relative flex flex-col mb-8 text-gray-500 bg-white shadow-shadow rounded-xl">
          <div className="flex justify-between flex-auto p-6 pb-0">
            <div className="header-title">
              <h4 className="text-2xl font-medium text-dark">
                {user && `${user.firstName} ${user.lastName}`}
              </h4>
            </div>
          </div>
          <div className="p-6">
            <form>
              <div className="mb-4">
                <div className="relative">
                  <div className="w-24 flex items-center justify-center h-24 rounded-full bg-blue-700">
                    <h1 className="text-base font-bold text-white">
                      {user &&
                        `${getInitials(user!.firstName)}${getInitials(
                          user!.lastName
                        )}`}
                    </h1>
                  </div>

                  <div className="image-upload absolute cursor-pointer top-auto w-8 h-8 text-center bg-dark-pink border-2 focus:ring-0-4 border-white focus:ring-0-white rounded-full left-16 -bottom-2">
                    <label htmlFor="file-input">
                      <svg
                        className="inline-block pb-1"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#ffffff"
                          d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
                        ></path>
                      </svg>
                    </label>
                    <input
                      id="file-input"
                      className="hidden file-upload"
                      type="file"
                      accept="image/*"
                    />
                  </div>
                </div>
                <div className="mt-4 ">
                  <div className="items-center inline-block">
                    {user && user.roles.includes("admin")
                      ? "Administrator"
                      : "User"}
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm font-normal text-gray">Number Phone</p>
                <h1 className="text-base font-bold text-dark">
                  {user?.phone && user.phone}
                </h1>
              </div>
              <div className="mb-4">
                <p className="text-sm font-normal text-gray">Email</p>
                <h1 className="text-base font-bold text-dark">
                  {user && user.email}
                </h1>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="flex-auto w-full lg:w-3/4 lg:pl-4 ">
        <div className="relative flex flex-col mb-8 text-gray-500 bg-white shadow-shadow rounded-xl">
          <div className="flex justify-between flex-auto p-6 pb-0">
            <div className="header-title">
              <h4 className="text-2xl font-medium text-dark">
                Upadate Profile
              </h4>
            </div>
          </div>
          <div className="p-6 ">
            <div>
              <form onSubmit={onSubmit}>
                <div className="flex flex-wrap">
                  <div className="mb-4 md:w-2/4 md:flex-auto md:pr-3 ">
                    <label
                      className="inline-block mb-2 text-gray-500"
                      htmlFor="fname"
                    >
                      First Name:
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-2 placeholder-gray-600 text-base font-normal bg-white border focus:ring-0 rounded outline-none focus:border-dark-pink focus:shadow"
                      id="fname"
                      name="frstName"
                      placeholder="First Name"
                      value={form.firstName}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mb-4 md:w-2/4 md:flex-auto md:pl-3 ">
                    <label
                      className="inline-block mb-2 text-gray-500"
                      htmlFor="lname"
                    >
                      Last Name:
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-2 placeholder-gray-600 text-base font-normal bg-white border focus:ring-0 rounded outline-none focus:border-dark-pink focus:shadow"
                      id="lname"
                      name="lastName"
                      value={form.lastName}
                      onChange={onChange}
                      placeholder="Last Name"
                    />
                  </div>

                  <div className="mb-4 md:w-2/4 md:flex-auto md:pr-3 ">
                    <label
                      className="inline-block mb-2 text-gray-500"
                      htmlFor="mobno"
                    >
                      Mobile Number:
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-2 placeholder-gray-600 text-base font-normal bg-white border focus:ring-0 rounded outline-none focus:border-dark-pink focus:shadow"
                      id="mobno"
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div className="mb-4 md:w-2/4 md:flex-auto md:pl-3 ">
                    <label
                      className="inline-block mb-2 text-gray-500"
                      htmlFor="email"
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      className="block w-full px-4 py-2 placeholder-gray-600 text-base font-normal bg-white border focus:ring-0 rounded outline-none focus:border-dark-pink focus:shadow"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="Email"
                    />
                  </div>

                  <div className="mb-4 md:w-2/4 md:flex-auto md:pr-3 ">
                    <label
                      className="inline-block mb-2 text-gray-500"
                      htmlFor="pass"
                    >
                      Password:
                    </label>
                    <input
                      type="password"
                      className="block w-full px-4 py-2 placeholder-gray-600 text-base font-normal bg-white border focus:ring-0 rounded outline-none focus:border-dark-pink focus:shadow"
                      id="pass"
                      name="password"
                      value={form.password}
                      onChange={onChange}
                      placeholder="Password"
                    />
                  </div>
                  <div className="mb-4 md:w-2/4 md:flex-auto md:pl-3 ">
                    <label
                      className="inline-block mb-2 text-gray-500"
                      htmlFor="rpass"
                    >
                      Repeat Password:
                    </label>
                    <input
                      type="password"
                      className="block w-full px-4 py-2 placeholder-gray-600 text-base font-normal bg-white border focus:ring-0 rounded outline-none focus:border-dark-pink focus:shadow"
                      id="rpass"
                      name="confirmPassword"
                      value={form.confirmPassword}
                      onChange={onChange}
                      placeholder="Repeat Password "
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-block p-2 px-6 py-2 text-base font-normal  text-center text-white transition-all duration-500 ease-in-out bg-dark-pink border focus:ring-0  focus:ring-0-dark-pink rounded-md shadow-md hover:shadow-md hover:bg-pink-800 hover:text-white"
                >
                  Upadete User infos
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
