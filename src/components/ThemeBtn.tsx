import { Dispatch, SetStateAction } from "react";

import themeIcon from "../assets/theme-icon.svg";

function ThemeBtn(props: {
  setIsLight: Dispatch<SetStateAction<boolean>>;
  isLight: boolean;
}) {
  const handlerOnThemeChange = () => {
    props.setIsLight(!props.isLight);
  };

  return (
    <button
      onClick={() => handlerOnThemeChange()}
      className={`flex gap-3 [&>img]:hover:-rotate-[145deg] [&>img]:hover:transition-all ${
        props.isLight
          ? "border text-white border-white bg-zinc-800"
          : "border text-black border-black bg-[#F5F5F5]"
      } px-3 py-2 rounded-full fixed left-8 bottom-6`}
    >
      <img
        src={themeIcon}
        alt="Change Theme"
        className="bg-white rounded-full h-[25px] rotate-45 transition-all"
      />
      <span>Change Theme</span>
    </button>
  );
}

export default ThemeBtn;
