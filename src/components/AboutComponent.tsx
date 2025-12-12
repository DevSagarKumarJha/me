import React from "react";
import LeetCodeStatusComponent from "./LeetCodeStatusComponent";

const AboutComponent: React.FC = () => {
  return (
    <div className=" flex flex-col-reverse sm:flex-row  justify-center items-center sm:items-start sm:justify-start p-1 gap-2">
      <LeetCodeStatusComponent />
      <div className=" shadow-md flex flex-col border px-2 py-1 border-black/15 dark:border-white/15">
        <h1 className="text-2xl sm:text-4xl py-2 sm:py-4 font-bold text-center">
          About Me
        </h1>
        <article className="sm:p-4 p-2 text-wrap tracking-wider flex flex-col text-lg sm:text-xl text-gray-800 dark:text-gray-200 italic">
          <p>
            I am a <strong>Full Stack Developer</strong> with a passion for
            building scalable and efficient web applications. My expertise lies
            in both frontend and backend development, allowing me to create
            seamless user experiences and robust systems.
          </p>
          <br />
          <p>
            I enjoy working with the latest technologies and am always eager to
            learn new skills. I believe in the power of collaboration and strive
            to contribute positively to any team I am part of.
          </p>
        </article>
      </div>
    </div>
  );
};

export default AboutComponent;
