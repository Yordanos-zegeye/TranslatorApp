import React from "react";

export default function HomePage() {
  return (
    <main className="flex-1 p-4 flex flex-col gap-3 sm:gap-4 md:gap-5 justify-center items-center">
      <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl">
        Word<span className="text-teal-400 bold">Smith</span>
      </h1>
      <h3 className="font-medium md:text-lg ">
        Record <span className="text-teal-400">&rarr;</span>Transcribe{" "}
        <span className="text-teal-400">&rarr;</span>Translate
      </h3>
      <button className="flex items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4 specialBtn px-4 py-2 rounded-xl ">
        <p className="text-teal-400">Record</p>
        <i className="fa-solid fa-microphone"></i>
      </button>
      <p>
        Or{" "}
        <label className="text-teal-400 cursor-pointer hover:text-blue-600 duration-200">
          upload <input type="file" className="hidden" accept=".mp3" />
        </label>{" "}
        an mp3 file
      </p>
    </main>
  );
}
