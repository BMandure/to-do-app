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
      className={`flex gap-3 items-center [&>img]:hover:-rotate-[145deg] [&>img]:hover:transition-all ${
        props.isLight
          ? "border text-white border-white bg-zinc-800"
          : "border text-black border-black bg-[#F5F5F5]"
      } p-3 rounded-full fixed left-6 bottom-6`}
    >
      <img
        src={themeIcon}
        alt="Change Theme"
        className="bg-white rounded-full h-[25px] rotate-45 transition-all"
      />
      Change Theme
    </button>
  );
}

export default ThemeBtn;
