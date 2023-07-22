"use client";
import { useState } from "react";
import React from "react";
import AuthInput from "@/components/AuthInput";
import { useMutation } from "@tanstack/react-query";
import CircularProgress from "@mui/material/CircularProgress";
import { AuthErrorCodes } from "firebase/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, SubmitHandler } from "react-hook-form";
type IFormInput = {
  email: string;
  name: string;
  username: string;
  password: string;
};
const schema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(22),
  username: z.string().min(2).max(22),
  password: z.string().min(6),
});
const SignUpForm = () => {
  const mutate = useMutation({});
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: zodResolver(schema),
    mode: "all",
  });
  const [err, setErr] = useState<string>("");
  const handleForm: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(handleForm)} className="mt-5">
      <AuthInput
        type={"text"}
        inputId={"email"}
        labelTxt={"Mobile Number Or Email"}
        toggle={false}
        register={register}
        error={errors.email}
      />
      <AuthInput
        type={"text"}
        inputId={"name"}
        labelTxt={"Full Name"}
        toggle={false}
        register={register}
        error={errors.name}
      />
      <AuthInput
        type={"text"}
        inputId={"username"}
        labelTxt={"Username"}
        toggle={false}
        register={register}
        error={errors.username}
      />
      <AuthInput
        type={"password"}
        inputId={"password"}
        labelTxt={"Password"}
        register={register}
        toggle={true}
        error={errors.password}
      />
      <button
        type="submit"
        className="my-[8px] bg-blue w-full text-white py-1 transition-opacity delay-200 rounded-md hover:bg-sky-600 disabled:opacity-70 disabled:hover:bg-blue  "
        disabled={!formState.isValid || formState.isSubmitting}
      >
        {mutate.isLoading && (
          <span className="flex items-center justify-center">
            <CircularProgress size={20} color="inherit" />
          </span>
        )}
        Sign up
      </button>
      {err && (
        <div className="my-3 text-red-500 text-[15px]">
          <p className="leading-[18px] text-center">{err}</p>
        </div>
      )}
    </form>
  );
};

export default SignUpForm;
