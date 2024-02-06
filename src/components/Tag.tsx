import { useEffect } from "react";
import { Tag as TagType } from "../../types";

function Tag(props: {
  tagInfo: TagType;
  setTags: React.Dispatch<React.SetStateAction<TagType[]>>;
  noteTags: TagType[];
}) {
  useEffect(() => {}, []);
  const handlerOnDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const removeTag = () => {
      return props.noteTags.filter((tag) => tag.id !== props.tagInfo.id);
    };

    props.setTags(removeTag());
  };
  return (
    <span className="px-2 py-1 border-2 flex justify-between">
      {props.tagInfo.name}{" "}
      <button onClick={(e) => handlerOnDelete(e)}>X</button>
    </span>
  );
}

export default Tag;
