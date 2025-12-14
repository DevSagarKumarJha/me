import React from "react";

import { InfoIcon } from "lucide-react";


const AboutComponent: React.FC = () => {
  return (
    
      <div className=" shadow-md flex flex-col px-2 py-1 ">
        <div className="flex items-center justify-start gap-2 my-6">
          <InfoIcon className="w-10 h-10 text-black dark:text-white" />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">About Me</h2>
          </div>
        </div>
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
    
  );
};

export default AboutComponent;
