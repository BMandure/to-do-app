import React, { useEffect, useState } from "react";
import { NoteInfo } from "../../types";
import axios from "axios";

function Filters(props: {
  tags: any[];
  setNotes: React.Dispatch<React.SetStateAction<NoteInfo[]>>;
}) {
  const [tagId, setTagId] = useState("");
  const handlerChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTagId(e.target.value);
  };

  useEffect(() => {
    const getFilteredNotes = () => {
      axios
        .get(`http://localhost:3000/api/notes/${tagId}`)
        .then((response) => {
          props.setNotes(response.data);
        })
        .catch(() => console.log("No tag fetched"));
    };
    getFilteredNotes();
  }, [tagId]);

  return (
    <div className="flex items-center gap-3 [&>select]:text-black">
      <span>Filters:</span>
      <select
        className="min-w-[150px] border-2 p-1"
        value={tagId}
        onChange={(e) => handlerChangeFilter(e)}
      >
        {props.tags.length > 0 ? (
          props.tags.map((tag, i) =>
            i === 0 ? (
              <React.Fragment key={i}>
                <option value="noTag">All</option>
                <option value={tag._id}>{tag.name}</option>
              </React.Fragment>
            ) : (
              <option key={i} value={tag._id}>
                {tag.name}
              </option>
            )
          )
        ) : (
          <option disabled>No Tags</option>
        )}
      </select>
    </div>
  );
}

export default Filters;
