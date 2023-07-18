"use client";
import { useState, FormEvent, useEffect } from "react";
import signIn from "../firebase/auth/signIn";
import { useRouter } from "next/navigation";
import Image from "next/image";
import AuthInput from "../components/AuthInput";
function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [activeImg, setActiveImg] = useState<number>(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImg((prevActiveImg) => (prevActiveImg % 3) + 1);
    }, 4000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);
  const handleForm = async (event: FormEvent) => {
    event.preventDefault();
    const { result, error } = await signIn(email, password);
    if (error) {
      return console.log(error);
    }
  };
  return (
    <main className="max-w-[1260px] mx-auto mt-[13vh]">
      <div className="flex gap-[32px] justify-center items-center">
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
        <div className="flex flex-col gap-[10px]">
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
              className="w-[175px]"
            />
            <AuthInput
              setter={setEmail}
              isRequired={true}
              type={"email"}
              inputName={"email"}
              inputId={"email"}
              labelTxt={"Phone number, username, or email"}
              inputValue={email}
            />
            <AuthInput
              setter={setPassword}
              isRequired={true}
              type={"password"}
              inputName={"password"}
              inputId={"password"}
              labelTxt={"Password"}
              inputValue={password}
            />

            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
