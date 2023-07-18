import React from "react";

type AuthInputProps = {
  setter: (value: string) => void;
  isRequired: boolean;
  type: string;
  inputValue: string;
  inputName: string;
  inputId: string;
  labelTxt: string;
};
function AuthInput({
  setter,
  inputValue,
  isRequired,
  type,
  inputName,
  inputId,
  labelTxt,
}: AuthInputProps) {
  return (
    <div className="relative h-[37px] w-[268px] border border-neutral-300 bg-neutral-100 rounded-[3px] px-[8px] mb-[6px] ">
      <label
        htmlFor={inputId}
        className="absolute text-neutral-600 top-[50%] translate-y-[-50%] cursor-text select-none w-full transition-transform delay-300 text-sm"
      >
        {labelTxt}
      </label>
      <input
        onChange={(e) => setter(e.target.value)}
        required={isRequired}
        type={type}
        name={inputName}
        id={inputId}
        aria-label={labelTxt}
        value={inputValue}
        className="w-full h-full outline-none bg-transparent text-sm"
      />
    </div>
  );
}

export default AuthInput;
