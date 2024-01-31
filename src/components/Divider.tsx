import { Width } from "../../types.ts";

function Divider(props: { width: Width; isLight: boolean }) {
  const width =
    props.width !== "full" ? `w-[${props.width}%]` : `w-${props.width}`;
  return (
    <hr
      className={`mx-auto ${width} h-[2px] ${
        props.isLight ? "bg-white" : "bg-black"
      }`}
    />
  );
}

export default Divider;
