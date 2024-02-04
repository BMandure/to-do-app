import React, { useState } from "react";
import { NoteInfo } from "../../types";
import Modal from "react-bootstrap/Modal";
import editIcon from "../assets/editIcon.svg";
import axios from "axios";

function EditModal(props: {
  noteInfo: NoteInfo;
  isLight: boolean;
  tags: string[];
  allTags: any[];
  render: boolean;
  setRender: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [show, setShow] = useState(false);

  const [selectedTag, setSelectedTag] = useState("Select a tag");

  const [nameInput, setNameInput] = useState(props.noteInfo.name);
  const [contentInput, setContentInput] = useState(props.noteInfo.content);

  const [tagInput, setTagInput] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setNewNote = (newNote: {
    name: string;
    content: string;
    tags: string[];
  }) => {
    //TODO: MODIFY TAGS TOO
    axios({
      method: "patch",
      url: `http://localhost:3000/api/notes/${props.noteInfo._id}`,
      data: {
        name: newNote.name,
        content: newNote.content,
        tags: newNote.tags,
      },
    })
      .then((response) => {
        response.status !== 404 && props.setRender(!props.render);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  };

  const handleApply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const patchNote = {
      name: nameInput,
      content: contentInput,
      tags: props.tags,
    };

    setNewNote(patchNote);
    props.setRender(!props.render);
    handleClose();
  };

  const handlerAddTag = (
    e: React.MouseEvent<HTMLButtonElement>,
    existing: boolean
  ) => {
    e.preventDefault();
    console.log(existing);
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
          <form onSubmit={(e) => handleApply(e)}>
            <div className="flex flex-col gap-2 [&>span>label]:pb-1">
              <span className="flex flex-col">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="border-2 p-1"
                  placeholder="Title here..."
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
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
                  value={contentInput}
                  onChange={(e) => setContentInput(e.target.value)}
                ></textarea>
              </span>
              <span className="flex flex-col pb-3">
                <label htmlFor="tags">Tags:</label>
                <div className="flex flex-col gap-2">
                  <span className="flex gap-2">
                    <input
                      type="text"
                      name="tags"
                      id="tags"
                      className="border-2 p-1 flex-1"
                      placeholder="Create a new Tag..."
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                    />
                    <button
                      onClick={(e) => handlerAddTag(e, false)}
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
                      }}
                    >
                      {props.allTags.map((tag, i) =>
                        i === 0 ? (
                          <React.Fragment key={i}>
                            <option value="Select a tag">Select a tag</option>
                            <option value={tag._id}>{tag.name}</option>
                          </React.Fragment>
                        ) : (
                          <option key={i} value={tag._id}>
                            {tag.name}
                          </option>
                        )
                      )}
                    </select>
                    <button
                      onClick={(e) => handlerAddTag(e, true)}
                      className={btnStyle}
                    >
                      Add
                    </button>
                  </span>
                </div>
              </span>
            </div>
            <section className="w-full flex gap-2 justify-end">
              <button onClick={handleClose} className={btnStyle}>
                Cancel
              </button>
              <button type="submit" className={btnStyle}>
                Apply
              </button>
            </section>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditModal;
