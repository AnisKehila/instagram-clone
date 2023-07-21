import React from "react";

type AuthInputProps = {
  setter: (value: string) => void;
  isRequired: boolean;
  type: string;
  inputValue: string;
  inputName: string;
  inputId: string;
  labelTxt: string;
  toggle: boolean;
};
function AuthInput({
  setter,
  inputValue,
  isRequired,
  type,
  inputName,
  inputId,
  labelTxt,
  toggle,
}: AuthInputProps) {
  return (
    <div className="relative h-[37px] w-full sm:w-[268px] border border-neutral-300 bg-neutral-100 rounded-[3px] px-[8px] mb-[6px] overflow-hidden ">
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
        onChange={(e) => setter(e.target.value)}
        required={isRequired}
        type={type}
        name={inputName}
        id={inputId}
        aria-label={labelTxt}
        value={inputValue}
        className={`w-full h-full outline-none bg-transparent text-sm ${
          inputValue && "pt-[8px]"
        }`}
      />
    </div>
  );
}

export default AuthInput;
