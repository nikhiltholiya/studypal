import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import menuSvg from "../assets/svg/menu.svg";
import logo from "../assets/images/job-boards.png";

const CreateNewJob = () => {
  const [jobTitle, setJobTitle] = useState();
  return (
    <div className="flex h-screen bg-grey-lightest flex-col md:flex-row font-light w-full">
      <div className="bg-orange-darker md:w-64 sm:w-screen border-r-2 border-black">
        <header className="flex md:justify-center justify-between items-center h-24 border-b-2 border-black">
          <div>
            <Link href="/" className="">
              <Image src={logo} width={100} height={100} alt="logo" />
            </Link>
          </div>
          <div className="items-center md:hidden">
            <Image src={menuSvg} width={50} height={50} alt="menu" />
          </div>
        </header>
      </div>
      <div className="bg-transparent flex-grow flex-shrink flex-auto">
        <div className="border-b-2 border-black h-24">
          <div className="flex justify-between flex-grow items-center h-24 mx-9">
            <p className="font-bold text-xl">Post job</p>
            <div></div>
          </div>
          <div className="mx-8">
            <form action="" method="post" className="w-full">
              <div className="md:flex md:items-center mb-6">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Job Title
                </label>
                <div className="md:w-96 ">
                  <input
                    className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    type="text"
                    value={jobTitle}
                    onChange={(e) => {
                      setJobTitle(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                {/* <div className="md:w-1/3"> */}
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Job Title
                </label>
                {/* </div> */}
                <div className="md:w-96">
                  <textarea
                    rows="8"
                    className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    type="text"
                    value={jobTitle}
                    onChange={(e) => {
                      setJobTitle(e.target.value);
                    }}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="text-end mr-8">
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              onClick={() => {}}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewJob;
