import { useEffect, useState } from "react";
import "./App.css";
import ThemeBtn from "./components/ThemeBtn";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import Title from "./components/Title";
import Note from "./components/Note";
import { NoteInfo } from "../types";
import newNoteIconBlack from "./assets/newNoteIconBlack.svg";
import newNoteIconWhite from "./assets/newNoteIconWhite.svg";

function App() {
  const [isLight, setIsLight] = useState(true);

  const testInfo = {
    name: "This is a Title",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, minima.",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
  };

  const [info, setInfo] = useState<NoteInfo>(testInfo);

  useEffect(() => {
    const themePreference = window.matchMedia("(prefers-color-scheme: light)");
    if (themePreference.matches) {
      setIsLight(true);
    }
  });

  const notes = [];
  for (let i = 0; i < 25; i++) {
    notes.push(<Note key={i} info={info} isLight={isLight} />);
  }

  return (
    <>
      <header
        className={`flex gap-5 w-full flex-col p-8 ${
          isLight ? "bg-zinc-800 text-white" : "bg-[#F5F5F5] text-zinc-800"
        }`}
      >
        <Title text="TO DO APP" />
        <Divider width={"full"} isLight={isLight} />
      </header>
      <main
        className={`min-h-screen px-16 ${
          isLight ? "bg-zinc-800 text-white" : "bg-[#F5F5F5] text-zinc-800"
        }`}
      >
        <section>
          <article className="flex justify-between">
            <button
              className={`flex gap-3 items-center ${
                isLight
                  ? "border text-white border-white bg-zinc-800"
                  : "border text-black border-black bg-[#F5F5F5]"
              } p-3 rounded-full`}
            >
              <img
                src={isLight ? newNoteIconWhite : newNoteIconBlack}
                alt="Delete Note"
                className="h-[25px] w-[25px]"
              />
              New Note
            </button>
            <span>Filter buttons</span>
          </article>
          {/*TODO: Adjust Grid */}
          <article className="px-16 py-8 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-auto-flow-column gap-14">
            {notes}
          </article>
        </section>
      </main>
      <Footer isLight={isLight} />
      <ThemeBtn isLight={isLight} setIsLight={setIsLight} />
    </>
  );
}

export default App;
