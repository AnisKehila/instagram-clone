"use client";
import { useState, FormEvent, useEffect } from "react";
import signIn from "@/firebase/auth/signIn";
import Image from "next/image";
import AuthInput from "@/components/AuthInput";
import { useMutation } from "@tanstack/react-query";
import CircularProgress from "@mui/material/CircularProgress";
import { AuthErrorCodes } from "firebase/auth";
import { z } from "zod"; // Import zod
import Link from "next/link";

const emailSchema = z.string().email();
const passwordSchema = z.string().min(6); // Assuming minimum password length of 6 characters

function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [activeImg, setActiveImg] = useState<number>(1);
  const [err, setErr] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImg((prevActiveImg) => (prevActiveImg % 3) + 1);
    }, 4000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);
  useEffect(() => {
    const emailResult = emailSchema.safeParse(email);
    const passwordResult = passwordSchema.safeParse(password);
    if (emailResult.success && passwordResult.success) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [email, password]);
  const mutate = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signIn(email, password),
    onError: (error: any) => {
      if (error.code === AuthErrorCodes.USER_DISABLED) {
        setErr("User account is disabled.");
      } else if (error.code === AuthErrorCodes.USER_DELETED) {
        setErr(
          "Sorry, your password was incorrect. Please double-check your password."
        );
      } else {
        setErr(`An error occurred:, ${(error.code, error.message)}`);
      }
    },
  });
  const handleForm = async (e: FormEvent) => {
    e.preventDefault();
    mutate.mutate({ email, password });
  };
  return (
    <main className="max-w-[1260px] mx-auto mt-[14vh]">
      <div className="flex gap-[48px] justify-center items-center md:ml-28 ">
        <div className="hidden md:block relative w-[250px] h-[538.84px]">
          <Image
            src="/home-phones.png"
            height={634.15}
            width={468.32}
            alt="phones"
            className="absolute right-[-60px] top-[-28px] min-w-[468.32px] min-h-[634.15px] w-auto h-auto"
            priority={true}
          />
          <Image
            src="/screenshot1.png"
            fill
            sizes="100%"
            alt="screenshots"
            priority={true}
            className={`${
              activeImg == 1 ? "opacity-1" : "opacity-0"
            } transition-opacity duration-[2s]`}
          />
          <Image
            src="/screenshot2.png"
            fill
            sizes="100%"
            alt="screenshots"
            priority={true}
            className={`${
              activeImg == 2 ? "opacity-1" : "opacity-0"
            } transition-opacity duration-[2s]`}
          />
          <Image
            src="/screenshot3.png"
            fill
            sizes="100%"
            alt="screenshots"
            priority={true}
            className={`${
              activeImg == 3 ? "opacity-1" : "opacity-0"
            } transition-opacity duration-[2s]`}
          />
        </div>
        <div className="flex flex-col gap-[10px] w-[350px]">
          <form
            onSubmit={handleForm}
            className="flex flex-col items-center mt-[36px] mg-b[12px] border border-borderColor px-[40px] py-[10px]"
          >
            <Image
              src="/logo-inline.png"
              width={400}
              height={400}
              alt="instagram-logo-inline"
              priority={true}
              className="w-[175px] mt-[24px] mb-[18px] "
            />
            <AuthInput
              setter={setEmail}
              isRequired={true}
              type={"email"}
              inputName={"email"}
              inputId={"email"}
              labelTxt={"Phone number, username, or email"}
              inputValue={email}
              toggle={false}
            />
            <AuthInput
              setter={setPassword}
              isRequired={true}
              type={"password"}
              inputName={"password"}
              inputId={"password"}
              labelTxt={"Password"}
              inputValue={password}
              toggle={true}
            />

            <button
              type="submit"
              disabled={!isFormValid}
              className="my-[8px] bg-blue w-full text-white py-1 transition-opacity delay-200 rounded-md hover:bg-sky-600 disabled:opacity-70 disabled:hover:bg-blue  "
            >
              {mutate.isLoading ? (
                <span className="flex items-center justify-center">
                  <CircularProgress size={20} color="inherit" />
                </span>
              ) : (
                "Log in"
              )}
            </button>
            {err && (
              <div className="my-3 text-red-500 text-[15px]">
                <p className="leading-[18px] text-center">{err}</p>
              </div>
            )}
          </form>
          <div className="flex gap-1 items-center justify-center text-center border border-borderColor py-[10px]">
            <span>{"Don't have an account?"}</span>
            <Link href="/signup" className="text-blue font-semibold	">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
