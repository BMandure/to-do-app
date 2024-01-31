import { NoteInfo } from "../../types";

function Note(props: { info: NoteInfo }) {
  const handleEdit = () => {
    console.log("Edit");
  };
  const handleDelete = () => {
    console.log("Delete");
  };
  return (
    <div className="w-[250px] h-[250px] p-3 bg-note [&]:text-black note-clip relative [&>span>button]:hidden [&>span>button]:hover:flex">
      <div className="triangle-clip bg-[#ebe06a]"></div>
      <h2 className="text-2xl pb-2">{props.info.name}</h2>
      <p>{props.info.content}</p>
      <span className="absolute bottom-2 right-2 flex gap-5 ">
        <button onClick={() => handleEdit()}>
          <img src="..." alt="Edit Note" className="h-[35px] w-[35px]" />
        </button>
        <button onClick={() => handleDelete()}>
          <img src="..." alt="Delete Note" className="h-[35px] w-[35px]" />
        </button>
      </span>
    </div>
  );
}

export default Note;
