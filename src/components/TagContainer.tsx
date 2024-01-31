import Tag from "./Tag";

function TagContainer(props: {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-auto-flow-column gap-2 pt-2">
      {props.tags.length !== 0 &&
        props.tags.map((tag, i) => (
          <Tag key={i} text={tag} setTags={props.setTags} tags={props.tags} />
        ))}
    </div>
  );
}

export default TagContainer;
