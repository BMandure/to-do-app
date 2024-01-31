import { NoteInfo } from "../../types";
import deleteIcon from "../assets/deleteIcon.svg";
import EditModal from "./EditModal";

function Note(props: { info: NoteInfo; isLight: boolean }) {
  const shortContent = props.info.content.slice(0, 180) + "...";
  const handleDelete = () => {
    console.log("Delete");
  };
  return (
    <div className="w-[250px] h-[250px] p-3 mx-auto bg-note [&]:text-black note-clip relative [&>span]:hidden [&>span]:hover:flex">
      <div className="triangle-clip bg-[#ebe06a]"></div>
      <h2 className="text-2xl pb-2">{props.info.name}</h2>
      <p>{shortContent}</p>
      <span className="absolute bottom-0 right-0 p-2 flex gap-3 bg-[#ffffff80]">
        <EditModal isLight={props.isLight} />
        <button onClick={() => handleDelete()}>
          <img
            src={deleteIcon}
            alt="Delete Note"
            className="h-[35px] w-[35px]"
          />
        </button>
      </span>
    </div>
  );
}

export default Note;
