import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import editIcon from "../assets/editIcon.svg";
import TagContainer from "./TagContainer";

function EditModal(props: { isLight: boolean }) {
  const [show, setShow] = useState(false);

  const [selectedTag, setSelectedTag] = useState("Select a tag");

  const [tags, setTags] = useState(["Tag1", "Tag2", "Tag3", "Tag4"]);

  const [tagInput, setTagInput] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleApply = () => alert("Apply Changes");

  const handlerAddTag = (
    e: React.MouseEvent<HTMLButtonElement>,
    existing?: boolean
  ) => {
    e.preventDefault();
    if (existing) {
      if (tagInput !== "") {
        setTags([...tags, tagInput]);
      }
    } else {
      if (selectedTag !== "Select a tag") {
        setTags([...tags, selectedTag]);
      }
    }
  };

  const btnStyle = `flex gap-3 items-center ${
    props.isLight
      ? "text-white border border-white bg-zinc-800 hover:bg-zinc-800 hover:text-white"
      : "text-zinc-800 border border-black bg-[#F5F5F5] hover:bg-zinc-800 hover:text-white"
  } px-3 py-1 rounded-full`;

  return (
    <>
      <button onClick={handleShow}>
        <img src={editIcon} alt="Edit Note" className="h-[35px] w-[35px]" />
      </button>

      <Modal show={show} onHide={handleClose} animation={true} centered>
        <Modal.Body>
          <form action="">
            <div className="flex flex-col gap-2 [&>span>label]:pb-1">
              <span className="flex flex-col">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="border-2 p-1"
                  placeholder="Title here..."
                />
              </span>
              <span className="flex flex-col">
                <label htmlFor="content">Content:</label>
                <textarea
                  name="content"
                  id="content"
                  cols={30}
                  rows={5}
                  className="border-2 p-1"
                  placeholder="Write something..."
                ></textarea>
              </span>
              <span className="flex flex-col pb-3">
                <label htmlFor="tags">Tags:</label>
                <div className="flex flex-col gap-2">
                  <span className="flex gap-2">
                    <input
                      type="text"
                      className="border-2 p-1 flex-1"
                      placeholder="New Tag..."
                      value={tagInput}
                      onChange={(e) => {
                        setTagInput(e.target.value);
                      }}
                    />
                    <button
                      onClick={(e) => {
                        handlerAddTag(e);
                      }}
                      className={btnStyle}
                    >
                      Add
                    </button>
                  </span>
                  <span className="flex gap-2">
                    <select
                      name="tag-list"
                      id="tag-list"
                      value={selectedTag}
                      className="border-2 p-1 flex-1"
                      onChange={(e) => {
                        setSelectedTag(e.target.value);
                        console.log(e.target.value);
                      }}
                    >
                      {tags.map((tag, i) =>
                        i === 0 ? (
                          <option key={i} value="Select a tag">
                            Select a tag
                          </option>
                        ) : (
                          <option key={i} value={tag}>
                            {tag}
                          </option>
                        )
                      )}
                    </select>
                    <button
                      onClick={(e) => {
                        handlerAddTag(e, true);
                      }}
                      className={btnStyle}
                    >
                      Add
                    </button>
                  </span>
                </div>
                <TagContainer tags={tags} setTags={setTags} />
              </span>
            </div>
          </form>
          <section className="w-full flex gap-2 justify-end">
            <button onClick={handleClose} className={btnStyle}>
              Cancel
            </button>
            <button onClick={handleApply} className={btnStyle}>
              Apply
            </button>
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditModal;
