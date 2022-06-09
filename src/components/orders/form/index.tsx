import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypeSelector";
import React, { useState, useEffect, FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Selects from "@/components/orders/form/select/select";
import Input from "./input/input";
import Upload from "./uploads";
import Titlebold from "@/components/Title/titlebold";
import { useTranslation } from "next-i18next";
import toast, { Toaster } from "react-hot-toast";

interface FormProps {
  title: string;
  Action: (order?: any) => (dispatch: any) => Promise<void>;
  formData?: any;
  setFormData?: any;
}

const Form: FC<FormProps> = ({ title, Action, formData, setFormData }) => {
  const { t } = useTranslation("common");
  //USE ACTIONS-------------------------------------------
  const { LoadUser, SetSuccess } = useActions();
  const { isAuthenticated } = useTypedSelector((state) => state.authReducer);
  const { error, success } = useTypedSelector((state) => state.orderReducer);

  //USE ROUTER-------------------------------------------------------------
  const router = useRouter();

  //USE STATES--------------------------------------

  const [other, setOther] = useState(false);
  const [otherfunc, setOtherfunc] = useState(false);
  const [otherTypeApp, setOtherTypeApp] = useState(false);
  const [otherGoal, setOtherGoal] = useState(false);
  const [previewImages, setPreviewImages] = useState<any>([]);
  const [images, setImages] = useState<any>([]);
  const [textareaFocused, setTextareaFocused] = useState(false);

  //LOCAL STORAGE ITEMS--------------------------------------

  useEffect(() => {
    if (success) {
      toast.success("Order created successfully");
      SetSuccess(false);
    }
    if (error) {
      toast.error("THERE IS AN ERROR!!!");
    }
  }, [error, success, SetSuccess]);

  //HANDLE CHANGES-------------------------------------------------------------
  const onChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onCheckboxChangeFunc = (e: any) => {
    let value = e.target.value === "Autre" ? "Other" : e.target.value;
    e.target.checked &&
      e.target.name === "functionnality" &&
      value === "Other" &&
      setOtherfunc(true);
    !e.target.checked &&
      e.target.name === "functionnality" &&
      value === "Other" &&
      setOtherfunc(false);

    e.target.checked &&
      e.target.name === "target" &&
      value === "Other" &&
      setOther(true);
    !e.target.checked &&
      e.target.name === "target" &&
      value === "Other" &&
      setOther(false);
    if (e.target.checked && value !== "Other") {
      if (formData.functionnality !== "") {
        formData.functionnality += "," + value;
      } else {
        formData.functionnality = value;
      }
    } else if (
      formData.functionnality.indexOf(",") === -1 &&
      formData.functionnality.includes(value)
    ) {
      formData.functionnality = formData.functionnality.replace(value, "");
    } else if (formData.functionnality.includes(value) && !e.target.checked) {
      formData.functionnality = formData.functionnality.replace(
        "," + value,
        ""
      );
    } else if (formData.functionnality.includes(value)) {
      console.log("It run");
      formData.functionnality = formData.functionnality.replace(value, "");
    }
    if (
      formData.functionnality.includes(value + ",") &&
      formData.functionnality !== "" &&
      formData.functionnality.startsWith(value)
    ) {
      formData.functionnality = formData.functionnality.replace(
        value + ",",
        ""
      );
    }

    setFormData({ ...formData, [e.target.name]: formData.functionnality });
  };
  const onCheckboxChangeTarget = (e: any) => {
    let value = e.target.value === "Autre" ? "Other" : e.target.value;
    e.target.checked &&
      e.target.name === "functionnality" &&
      value === "Other" &&
      setOtherfunc(true);
    !e.target.checked &&
      e.target.name === "functionnality" &&
      value === "Other" &&
      setOtherfunc(false);

    e.target.checked &&
      e.target.name === "target" &&
      value === "Other" &&
      setOther(true);
    !e.target.checked &&
      e.target.name === "target" &&
      value === "Other" &&
      setOther(false);
    if (e.target.checked && value !== "Other") {
      if (formData.target !== "") {
        formData.target += "," + value;
      } else {
        formData.target = value;
      }
    } else if (
      formData.target.indexOf(",") === -1 &&
      formData.target.includes(value)
    ) {
      formData.target = formData.target.replace(value, "");
    } else if (formData.target.includes(value) && !e.target.checked) {
      formData.target = formData.target.replace("," + value, "");
    } else if (formData.target.includes(value)) {
      console.log("It run");
      formData.target = formData.target.replace(value, "");
    }
    if (
      formData.target.includes(value + ",") &&
      formData.target !== "" &&
      formData.target.startsWith(value)
    ) {
      formData.target = formData.target.replace(value + ",", "");
    }

    setFormData({ ...formData, [e.target.name]: formData.target });
  };

  const onChangeImage = (e: any) => {
    const files = Array.from(e.target.files);
    setImages([]);
    setPreviewImages([]);

    files.forEach((file: any) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((oldArray: any) => [...oldArray, reader.result]);
          setPreviewImages((oldArray: any) => [...oldArray, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);

    if (isAuthenticated) {
      const order = {
        ...formData,
        design: images,
      };
      if (images.length !== 0) {
        Action(order);
      } else {
        Action(formData);
      }
      typeof localStorage !== "undefined" &&
        localStorage.removeItem("formData");
    } else {
      router.push({
        pathname: "/login",
        query: { from: router.pathname },
      });
    }
  };

  const onFocus = () => {
    setTextareaFocused(true);
  };

  const onBlur = (e: any) => {
    if (e.target.value === "") {
      setTextareaFocused(false);
    }
  };

  //Arrays-------------------------------------------
  const plateforms = [
    {
      id: "website",
      title: t("Form.form1.plateform.list1"),
    },
    {
      id: "webapp",
      title: t("Form.form1.plateform.list2"),
    },
    {
      id: "pwa",
      title: t("Form.form1.plateform.list3"),
    },
  ];
  const typeApp = [
    {
      id: "ecommerce",
      title: t("Form.form1.type.list1"),
    },
    {
      id: "blog",
      title: t("Form.form1.type.list2"),
    },
    {
      id: "portfolio",
      title: t("Form.form1.type.list3"),
    },
    {
      id: "entertainment",
      title: t("Form.form1.type.list4"),
    },

    {
      id: "elearning",
      title: t("Form.form1.type.list5"),
    },
    {
      id: "infopreneur",
      title: t("Form.form1.type.list6"),
    },
    {
      id: "webportal",
      title: t("Form.form1.type.list7"),
    },
    {
      id: "tother",
      title: t("Form.form1.type.list8"),
    },
  ];
  const goal = [
    {
      id: "signin",
      title: t("Form.Goal.goal1"),
    },
    {
      id: "benefits",
      title: t("Form.Goal.goal2"),
    },
    {
      id: "promote",
      title: t("Form.Goal.goal3"),
    },
    {
      id: "gother",
      title: t("Form.Goal.goal4"),
    },
  ];

  const checkbox = [
    {
      id: "blog",
      title: t("Form.functionnality.functionnality1"),
    },
    {
      id: "news",
      title: t("Form.functionnality.functionnality2"),
    },
    {
      id: "form",
      title: t("Form.functionnality.functionnality3"),
    },
    {
      id: "functionnality",
      title: t("Form.Goal.goal4"),
    },
  ];

  const targets = [
    {
      id: "team",
      title: t("Form.target.target1"),
    },
    {
      id: "individual",
      title: t("Form.target.target2"),
    },
    {
      id: "puclic",
      title: t("Form.target.target3"),
    },
    {
      id: "startups",
      title: t("Form.target.target4"),
    },
    {
      id: "target",
      title: t("Form.target.target5"),
    },
  ];

  //OnChangeSelect-----------------------------------------------------
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggle2, setToggle2] = useState<boolean>(false);
  const onChangeSelect = (e: any, selected: string) => {
    e.value === "Other" ? setOtherTypeApp(true) : setOtherTypeApp(false);
    e.value === "Other" ? setToggle2(true) : setToggle2(false);
    setFormData({
      ...formData,
      [selected]: e.value !== "Other" ? e.value : "",
    });

    setToggle(false);
  };

  //JSX RETURN-----------------------------------------------------------------
  return (
    <section>
      {/* <a href="https://api.whatsapp.com/send/?phone=+221786004564&text&app_absent=0">
        Call me
      </a> */}

      <div className="containers">
        <form onSubmit={onSubmit}>
          <Titlebold title={title} />

          <div className="flex flex-col justify-between mt-[60px] mb-[104px] lg:flex-row">
            <Selects
              options={plateforms}
              selected="plateform"
              formData={formData}
              onChangeSelect={onChangeSelect}
              toggle={toggle}
              setToggle={setToggle}
              selectedTitle={t("Form.form1.type.placeholder1")}
              className="mb-[50px] mr-5 lg:mb-[inherit]"
            />
            <Selects
              onChangeSelect={onChangeSelect}
              options={typeApp}
              formData={formData}
              selected="typeapp"
              setToggle={setToggle}
              toggle={toggle}
              selectedTitle={t("Form.form1.type.placeholder2")}
              className="flex justify-end"
            />
          </div>

          <div className="flex mb-[47px] justify-between items-center flex-col lg:flex-row">
            {toggle2 && (
              <Input
                type="text"
                name="typeapp"
                id="typeofapp"
                value={formData.typeofapp}
                label={t("Form.form1.type.placeholder3")}
                onChange={onChange}
                labelClassName="mb-[30px]"
              />
            )}

            <Input
              type="text"
              name="appName"
              value={formData.appName}
              label={t("Form.form1.type.placeholder4")}
              onChange={onChange}
              labelClassName="mb-[30px]"
            />
          </div>

          <div className="bg-white shadow-shadow-sm py-5 px-8 max-w-[1300px] rounded-[51px] flex flex-col justify-center w-full relative">
            <label
              className={`text-[#b2b2b2] absolute left-[50px] md:left-[90px] font-normal mb-4 text-sm xxs:text-base  top-[13%] transition-all duration-300 -translate-y-1/2 ${
                textareaFocused && "focus !top-[10%]"
              }`}
              htmlFor="decription"
            >
              {t("Form.form1.type.placeholder5")}
            </label>

            <textarea
              className="focus:border focus:ring-0 bg-[#f5f5f5]  focus:border-[#e293d3] focus:shadow-input border-none focus:shadow-[#e9aede] w-full h-full rounded-[23px] outline-none px-5  md:px-[60px] py-8 text-dark text-[22px] font-medium"
              name="description"
              value={formData.description}
              id="description"
              onFocus={onFocus}
              onBlur={onBlur}
              cols={30}
              rows={10}
              onChange={onChange}
            ></textarea>
          </div>
          <Titlebold title={t("Form.Goal.title")} />

          <div className="flex items-center mt-[62px] mb-[62px] flex-col lg:flex-row">
            <Selects
              onChangeSelect={onChangeSelect}
              options={goal}
              formData={formData}
              setToggle={setToggle}
              toggle={toggle}
              selected="goal"
              selectedTitle={t("Form.form1.type.placeholder6")}
              className="mb-8 lg:mb-0"
            />
            {toggle2 && (
              <Input
                type="text"
                name="goal"
                label={t("Form.Goal.placeholder")}
                value={formData.goal}
                onChange={onChange}
              />
            )}
          </div>

          <Titlebold title={t("Form.target.title")} />
          {/* <label htmlFor="">Select a functionnality</label> */}
          <div className="grid gap-1 mt-[65px] grid-cols-1  md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            {targets.map(({ id, title }, idx) => (
              <React.Fragment key={idx}>
                <Input
                  type="checkbox"
                  name="target"
                  label={title}
                  value={title}
                  id={id}
                  onChange={onCheckboxChangeTarget}
                />
              </React.Fragment>
            ))}
            {other && (
              <>
                <Input
                  type="text"
                  value={formData.target}
                  onChange={onChange}
                  label={t("Form.target.placeholder")}
                  name="target"
                  className="!p-[12px] !text-[18px] !rounded-lg"
                  containerClassName="!py-[13px] !shadow-shadow-sm !h-[82px] !max-w-[348px] !px-[20px]"
                  labelClassName=" !w-full flex  items-center"
                />
              </>
            )}
          </div>

          <Titlebold title={t("Form.functionnality.title")} />
          <div className="grid gap-1 mx-auto mt-[65px] grid-cols-1  md:grid-cols-2 lg:grid-cols-3 lg:gap-4 ">
            {checkbox.map(({ id, title }, idx) => (
              <React.Fragment key={idx}>
                <Input
                  type="checkbox"
                  name="functionnality"
                  label={title}
                  value={title}
                  id={id}
                  onChange={onCheckboxChangeFunc}
                />
              </React.Fragment>
            ))}
            {otherfunc && (
              <>
                <Input
                  type="text"
                  value={formData.functionnality}
                  onChange={onChange}
                  label={t("Form.functionnality.placeholder")}
                  name="functionnality"
                  className="!p-[12px] !text-[18px] !rounded-lg"
                  containerClassName="!py-[13px] !shadow-shadow-sm !h-[82px] !max-w-[348px] !px-[20px]"
                  labelClassName="!w-full flex items-center"
                />
              </>
            )}
          </div>

          <div className="flex flex-col md:flex-row mt-5 justify-center">
            <button
              type="submit"
              className="text-base font-bold text-white bg-grad-btn px-24 py-4 rounded-full shadow-shadow mb-4 md:mb-0 "
            >
              {t("Form.button1")}
            </button>

            {/* <button
              className="flex items-center justify-center  font-bold bg-grad-btn text-white uppercase rounded-full px-9 py-4 text-xs mb:text-base"
            >
              {t("Form.button2")}
              <HiOutlineDownload size="20px" className="ml-[8px]" />
            </button> */}
          </div>

          <Titlebold title={t("Form.title2")} />

          <div className=" grid  gap-4 mt-10 mb-[137px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Upload onChange={onChangeImage} />
            {previewImages.length > 0 &&
              previewImages.map((image: any, idx: any) => (
                <Image
                  key={idx}
                  src={image}
                  alt="Images preview"
                  width={55}
                  height={55}
                />
              ))}

            <Input
              type="text"
              name="link"
              value={formData.link}
              label="Place your figma design link"
              onChange={onChange}
            />

            <button
              className="bg-white max-h-[58px] shadow-shadow rounded-full text-base font-bold px-24 py-4 uppercase"
              type="submit"
            >
              {t("Form.button")}
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </section>
  );
};

export default Form;
