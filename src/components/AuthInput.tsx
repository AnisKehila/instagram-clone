import Image from "next/image";
import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import cheked from "@/assets/icons/Checked.svg";
import wrong from "@/assets/icons/Wrong.svg";
type AuthInputProps = {
  setter?: (value: string) => void;
  inputId: string;
  labelTxt: string;
  toggle?: boolean;
  error?: any;
  register?: UseFormRegister<any>; // Replace 'any' with your form input type if you have one
} & React.InputHTMLAttributes<HTMLInputElement>;
function AuthInput({
  setter,
  inputId,
  labelTxt,
  toggle,
  register,
  error,
  ...props // Collect any additional props in the restProps object
}: AuthInputProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const { onChange, onBlur, name, ref } = register(inputId);
  return (
    <div
      className={`relative h-[37px] w-full sm:w-[268px] border "border-neutral-300"
      bg-neutral-100 rounded-[3px] px-[8px] mb-[6px] overflow-hidden flex items-center`}
    >
      <div className="w-full">
        <label
          htmlFor={inputId}
          className={`absolute text-neutral-600 top-[50%] cursor-text select-none w-full transition duration-300 break-keep whitespace-nowrap	 ${
            inputValue
              ? "text-xs translate-y-[-110%]"
              : "text-sm translate-y-[-50%]"
          }`}
        >
          {labelTxt}
        </label>
        <input
          onChange={(e) => {
            setter && setter(e.target.value);
            setInputValue(e.target.value);
            onChange(e);
          }}
          onBlur={(e) => {
            onBlur(e);
            setIsFocused(false);
          }}
          onFocus={() => setIsFocused(true)}
          name={name} // assign name prop
          ref={ref} // assign ref prop
          className={`w-full h-full outline-none bg-transparent text-sm ${
            inputValue && "pt-[8px]"
          }`}
          id={inputId}
          {...props}
        />
      </div>
      {register && (
        <span className="flex h-full">
          {inputValue && !error && (
            <Image
              width={22}
              height={22}
              src={cheked}
              alt="field validated"
              className="w-[22px]"
            />
          )}
          {error && !isFocused && (
            <Image
              width={44}
              height={44}
              src={wrong}
              alt="field is wrong"
              className="w-[44px]"
            />
          )}
        </span>
      )}
    </div>
  );
}

export default AuthInput;
