import Image from "next/image";
import localFont from "next/font/local";
import Button from "@/components/Button";
import { useState } from "react";
import LabelInput from "@/components/LabelInput";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [skill, setSkill] = useState("");
  const [showEduCation, setShowEduCation] = useState(false);
  const [eduCation, setEduCation] = useState("");
  return (
    <>
      <div className="md:flex md:items-start mb-6">
        <label
          className="block text-gray-500 md:mt-2 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-full-name"
        >
          Education:
        </label>
        <div className="md:w-96 ">
          <input
            className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="text"
            //   value={props.value}
            onChange={(e) => {
              // props.changeValue(e.target.value);
            }}
          />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id fugiat
            excepturi, eius voluptates dolores libero illum? Sapiente
            exercitationem laborum eius.
          </p>
        </div>
      </div>
    </>
  );
}
