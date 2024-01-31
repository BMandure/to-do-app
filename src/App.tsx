import { useEffect, useState } from "react";
import "./App.css";
import ThemeBtn from "./components/ThemeBtn";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import Title from "./components/Title";
import Note from "./components/Note";
import { NoteInfo } from "../types";

function App() {
  const [isLight, setIsLight] = useState(true);

  const testInfo = {
    name: "This is a Title",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, minima.",
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
    notes.push(<Note info={info} />);
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
          <article>Filter Buttons</article>
          {/*TODO: Adjust Grid */}
          <article className="px-16 py-8 grid grid-cols-5 grid-auto-flow-column gap-14">
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
