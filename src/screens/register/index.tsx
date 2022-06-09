import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTypedSelector } from "@/hooks/useTypeSelector";
import { useActions } from "@/hooks/useActions";
import { useRouter } from "next/router";
import AuthBg from "/public/images/authbg.png";
import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import GoogleLogin from "react-google-login";
import CountryDropdown from "@/components/Countrycodes";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const RegisterScreen = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [countrycode, setCountrycode] = useState("+221");

  const [firsnamefocused, setFirstnameFocused] = useState(false);
  const [lastnamefocused, setLastnameFocused] = useState(false);
  const [emailfocused, setEmailFocused] = useState(false);
  const [phonefocused, setPhoneFocused] = useState(false);
  const [passwordfocused, setPasswordFocused] = useState(false);
  const [confirmpasswordfocused, setConfirmpasswordFocused] = useState(false);

  const { RegisterUser, GoogleLoginUser, LoadUser, ClearError } = useActions();
  const { error, loading, success, user } = useTypedSelector(
    (state) => state.authReducer
  );

  useEffect(() => {
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
        title: "Oops...",
        text: error,
      });
      ClearError();
    }
    console.log("Hello world!");
    LoadUser();
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (countrycode && !formData.phone.includes(countrycode)) {
      formData.phone = countrycode + formData.phone;
    }

    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords don't match");
    } else {
      RegisterUser(formData);
    }
  };

  if (success) {
    router.push("/login");
  }

  const onFocus = (setFocused: (val: boolean) => void) => {
    setFocused(true);
  };

  const onBlur = (e: any, setFocused: (val: boolean) => void) => {
    if (e.target.value === "") {
      setFocused(false);
    }
  };

  const inputs = [
    {
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      onFocus: () => onFocus(setFirstnameFocused),
      onBlur: (e: any) => onBlur(e, setFirstnameFocused),
      focused: firsnamefocused,
      value: formData.firstName,
      required: true,
      logo: <FaUserAlt size="20px" />,
    },
    {
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      onFocus: () => onFocus(setLastnameFocused),
      onBlur: (e: any) => onBlur(e, setLastnameFocused),
      focused: lastnamefocused,
      value: formData.lastName,
      required: true,
      logo: <FaUserAlt size="20px" />,
    },

    {
      name: "email",
      type: "email",
      placeholder: "Email",
      onFocus: () => onFocus(setEmailFocused),
      onBlur: (e: any) => onBlur(e, setEmailFocused),
      focused: emailfocused,
      value: formData.email,
      required: true,
      logo: <MdEmail size="20px" />,
    },
    {
      name: "phone",
      type: "tel",
      placeholder: "Phone",
      onFocus: () => onFocus(setPhoneFocused),
      onBlur: (e: any) => onBlur(e, setPhoneFocused),
      focused: phonefocused,
      value: formData.phone,
      required: true,
      logo: <FaPhoneAlt size="20px" />,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      onFocus: () => onFocus(setPasswordFocused),
      onBlur: (e: any) => onBlur(e, setPasswordFocused),
      focused: passwordfocused,
      value: formData.password,
      required: true,
      logo: <RiLockPasswordFill size="20px" />,
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      onFocus: () => onFocus(setConfirmpasswordFocused),
      onBlur: (e: any) => onBlur(e, setConfirmpasswordFocused),
      focused: confirmpasswordfocused,
      value: formData.confirmPassword,
      required: true,
      logo: <RiLockPasswordFill size="20px" />,
    },
  ];

  return (
    <section className="h-screen mt-[160px] mb-[500px] relative">
      <div className="absolute -z-10 -top-1/2 right-0">
        <Image src={AuthBg} />
      </div>
      <div className="containers flex flex-col justify-center">
        <form
          onSubmit={(e) => onSubmit(e)}
          className="flex flex-col px-5 justify-center items-center h-full w-full py-[37px] rounded-[35px]  max-w-[1066px] bg-pink-transparent-1 backdrop-blur-[30px]"
        >
          {inputs.map(
            (
              {
                name,
                onFocus,
                onBlur,
                focused,
                logo,
                required,
                type,
                value,
                placeholder,
              },
              idx
            ) => (
              <label
                key={idx}
                htmlFor={name}
                className={`max-w-[686px] w-full h-[73px] rounded-2xl md:rounded-[23px] bg-white  mb-[36px] relative`}
              >
                <div className="absolute left-5 top-1/2 -translate-y-1/2">
                  {logo}
                </div>
                {type === "tel" && (
                  <label htmlFor="">
                    <CountryDropdown
                      onChange={(e) => setCountrycode(e.value)}
                      className="md:!left-[60px]"
                      instanceId="register"
                    />
                  </label>
                )}
                <input
                  type={type}
                  id={name}
                  name={name}
                  value={value}
                  onChange={(e) => onChange(e)}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  required={required}
                  className={`bg-transparent absolute focus:border focus:border-[#e293d3] focus:ring-0 border-none focus:shadow-input focus:shadow-[#e9aede] w-full h-full rounded-[23px] outline-none px-[55px] md:px-[60px] py-2 text-dark text-lg md:text-[22px] font-medium ${
                    type === "tel" &&
                    "xsm:!pl-[150px] !pl-[80px]  md:!pl-[260px]"
                  }`}
                />
                <label
                  htmlFor={name}
                  className={`text-[#b2b2b2] absolute left-[55px] md:left-[60px] font-normal text-base xxs:text-[18px] top-1/2 -translate-y-1/2 transition-all duration-300 ${
                    type === "tel" &&
                    "xsm:!left-[150px] !left-[80px]  md:!left-[260px]"
                  }  ${focused && "focus"}`}
                >
                  {placeholder}
                </label>
              </label>
            )
          )}
          <div className="flex justify-between w-full max-w-[686px]">
            <button
              type="submit"
              className="max-w-[312px] w-full h-[49px] rounded-md bg-dark-pink text-white font-bold text-base"
            >
              Sign up
            </button>
            <div>
              <Link href="/login">
                <button
                  type="button"
                  className="max-w-[312px] w-full h-[49px] rounded-md ml-2 text-dark font-bold text-sm md:text-base"
                >
                  You Already have an account?{"  "} <br />
                  <span className="text-dark-pink text-base md:text-2xl">
                    Login
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <GoogleLogin
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
            buttonText="Login with Google"
            className="max-w-[312px] mt-7 cursor-pointer w-full h-[49px]  text-white !font-bold justify-center !text-xl !rounded-full"
            onSuccess={GoogleLoginUser}
            onFailure={(res) => console.log(res)}
          />
        </form>
      </div>
    </section>
  );
};

export default RegisterScreen;
