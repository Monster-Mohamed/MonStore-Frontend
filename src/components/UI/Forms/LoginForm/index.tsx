import React, { useState } from "react";
import { InputSite } from "../../Inputs";
import { ButtonSite } from "../../Buttons";
import FormParent from "../FormParent";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginSchema, { LoginProps } from "./LoginSchema";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AppURL from "./../../../../api/AppURL";
import { toast } from "react-toastify";
import { ErrorForm } from "./../../Alerts/index";
import Toast from "../../Toasts";
import { NormalTitle } from "../../SectionTitle";

const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<LoginProps>({
    resolver: yupResolver(LoginSchema()),
  });

  const onSubmit = async (Formdata: LoginProps) => {
    // to make the button loading...
    setLoading(true);
    // sending data to db
    axios.post(AppURL.LoginURL, Formdata).then((res) => {
      // if the message sent successfully
      if (res.status === 200 && res.data == 1) {
        // reset the data from form
        reset();
        // show success toast
        toast.success("Login Successfully", {
          position: "bottom-right",
          autoClose: 2400,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // close loading
        setLoading(false);
        // go to the home page after 2.5 seconds
        const timer = setTimeout(() => {
          nav("/");
          clearTimeout(timer);
        }, 2500);
      } else {
        toast.error("Something went wrong, Please try again later", {
          position: "bottom-right",
          autoClose: 2400,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  };

  return (
    <>
      <FormParent onSubmit={handleSubmit(onSubmit)} title="">
        <NormalTitle className="text-start" title="Login Page" />
        <div className="mb-4">
          <Controller
            control={control}
            defaultValue=""
            render={({ field: { onBlur, onChange, value } }) => (
              <InputSite
                settings={{
                  type: "email",
                  placeholder: "Enter Your Email Address",
                  onChange: onChange,
                  onBlur: onBlur,
                  value: value,
                }}
              />
            )}
            name="email"
          />
          <ErrorForm error={errors?.email} />
        </div>
        <div className="mb-4">
          <Controller
            control={control}
            defaultValue=""
            render={({ field: { onBlur, onChange, value } }) => (
              <InputSite
                settings={{
                  type: "password",
                  placeholder: "Enter Your Password",
                  onChange: onChange,
                  onBlur: onBlur,
                  value: value,
                }}
              />
            )}
            name="password"
          />
          <ErrorForm error={errors?.password} />
        </div>
        <p>
          Forgot your password? <Link to="/forget">Forgot Password</Link>
        </p>
        <p>
          Don't have account? <Link to="/register">Register</Link>
        </p>
        <ButtonSite width="100%" type="submit">
          {!loading ? "Login" : "Loading..."}
        </ButtonSite>
      </FormParent>
      <Toast />
    </>
  );
};

export default LoginForm;
