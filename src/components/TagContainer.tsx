import Tag from "./Tag";
import { Tag as TagType } from "../../types";

function TagContainer(props: {
  noteTags: TagType[];
  setTags: React.Dispatch<React.SetStateAction<TagType[]>>;
}) {
  return (
    <div
      className={`${
        (props.noteTags.length !== 0 || props.noteTags === undefined) &&
        "grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-auto-flow-column gap-2"
      } pt-2`}
    >
      {props.noteTags ? (
        props.noteTags.length !== 0 ? (
          props.noteTags.map((tag, i) => (
            <Tag
              key={i}
              tagInfo={tag}
              setTags={props.setTags}
              noteTags={props.noteTags}
            />
          ))
        ) : (
          <div className="px-3 py-2 text-center border-red-500 border-[1px] bg-red-50">
            There are no tags assigned to this note
          </div>
        )
      ) : (
        <div className="px-3 py-2 rounded-full text-center border-red-500 border-[1px] bg-red-50">
          Loading...
        </div>
      )}
    </div>
  );
}

export default TagContainer;
