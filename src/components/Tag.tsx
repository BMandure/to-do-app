function Tag(props: {
  text: string;
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  tags: string[];
}) {
  const handlerOnDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Delete Tag");

    const removeTag = () => props.tags.filter((tag) => tag !== props.text);

    props.setTags(removeTag());
  };
  return (
    <span className="px-2 py-1 border-2 flex justify-between">
      {props.text} <button onClick={(e) => handlerOnDelete(e)}>X</button>
    </span>
  );
}

export default Tag;
