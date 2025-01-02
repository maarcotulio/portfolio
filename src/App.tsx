import GithubIcon from "./assets/icons/github.svg";
import LinkedinIcon from "./assets/icons/linkedin.svg";

import ChevronDownIcon from "./assets/icons/chevron-down.svg";

import ReactIcon from "./assets/icons/react.svg";
import NodeIcon from "./assets/icons/nodejs-icon.svg";

import fincheckImage from "./assets/images/fincheck.png";
import ankiAddImage from "./assets/images/ankiadd.png";

export default function App() {
  function handleClickAnkiAdd() {
    window.open("https://github.com/maarcotulio/AnkiAdd", "_blank")?.focus();
  }

  function handleClickFincheck() {
    window.open("https://github.com/maarcotulio/fincheck/", "_blank")?.focus();
  }

  return (
    <>
      <div className="h-screen w-full bg-WhiteBackground flex flex-col items-center justify-center relative">
        <h1 className="font-merriWeather text-5xl">Marco Túlio</h1>
        <p className="mt-4 text-lg">Full Stack Developer</p>

        <div className="flex mt-4 gap-4">
          <a
            className="hover:scale-125"
            href="https://github.com/maarcotulio"
            target="_blank"
          >
            <img src={GithubIcon} alt="Github" />
          </a>
          <a
            className="hover:scale-125"
            href="https://www.linkedin.com/in/marco-túlio-b4225b340"
            target="_blank"
          >
            <img src={LinkedinIcon} alt="Linkedin" />
          </a>
        </div>

        <div className="absolute bottom-24 flex items-center justify-center animate-bounce">
          <img src={ChevronDownIcon} alt="Go Down Chevron Icon" />
        </div>
      </div>
      <div className=" bg-DarkBaground text-white  p-28">
        <h1 className="text-center text-4xl font-merriWeather tracking-wide font-semibold mb-12">
          Main Skills
        </h1>
        <div className="flex gap-8 items-center justify-evenly">
          <div>
            <img src={ReactIcon} alt="React Icon" className="h-24" />
            <p className="mt-6 tracking-wide text-center  text-2xl">React</p>
          </div>
          <div className="fll">
            <img src={NodeIcon} alt="NodeJS Icon" className="h-24" />
            <p className="mt-6 tracking-wide text-center text-2xl">Node</p>
          </div>
        </div>
      </div>

      <div className="w-full h-screen bg-WhiteBackground flex flex-col items-center justify-center relative">
        <h1 className="absolute top-28 text-center text-4xl font-merriWeather tracking-wide font-semibold ">
          Main Projects
        </h1>

        <div className="flex justify-evenly mt-32  w-full">
          <div
            className="bg-CardBackground rounded-lg overflow-hidden flex flex-col w-96 hover:cursor-pointer hover:scale-105"
            onClick={handleClickFincheck}
          >
            <img
              src={fincheckImage}
              alt="Project Image"
              className="w-96 h-72 object-cover"
            />
            <div className="p-4 ">
              <h1 className="font-semibold text-lg">Fincheck</h1>
              <p className="text-gray-800">
                The main goal is to help users manage their finances in a simple
                and effective way. The project provides tools to record expenses
                and investments and track their transactions.
              </p>
            </div>
          </div>

          <div
            className="bg-CardBackground rounded-lg overflow-hidden flex flex-col w-96 hover:cursor-pointer hover:scale-105"
            onClick={handleClickAnkiAdd}
          >
            <img
              src={ankiAddImage}
              alt="Project Image"
              className="w-96 h-72 object-cover"
            />
            <div className=" p-4">
              <h1 className="font-semibold text-lg">AnkiAdd</h1>
              <p className="text-gray-800">
                This project automatically creates flashcards in Anki, reducing
                manual entry time by 80%. The main goal is to make learning new
                languages easier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}