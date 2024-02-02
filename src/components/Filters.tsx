import React, { useEffect, useState } from "react";
import { NoteInfo, Tag } from "../../types";
import axios from "axios";

function Filters(props: {
  tags: Tag[];
  setNotes: React.Dispatch<React.SetStateAction<NoteInfo[]>>;
}) {
  const [selectedTag, setSelectedTag] = useState("0");

  const handlerChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTag(e.target.value);
  };

  useEffect(() => {
    const getFilteredNotes = () => {
      axios
        .get(`http://localhost:3000/api/notes/${selectedTag}`)
        .then((response) => {
          props.setNotes(response.data);
        })
        .catch();
    };
    getFilteredNotes();
  }, [selectedTag]);

  return (
    <div className="flex items-center gap-3 [&>select]:text-black">
      <span>Filters:</span>
      <select
        className="min-w-[150px] border-2 p-1"
        value={selectedTag}
        onChange={(e) => handlerChangeFilter(e)}
      >
        {props.tags.map((tag, i) =>
          i === 0 ? (
            <React.Fragment key={i}>
              <option value="0">All</option>
              <option value={tag.id}>{tag.name}</option>
            </React.Fragment>
          ) : (
            <option key={i} value={tag.id}>
              {tag.name}
            </option>
          )
        )}
      </select>
    </div>
  );
}

export default Filters;
