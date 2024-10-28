import Image from "next/image";
import Link from "next/link";
import React from "react";
import menuSvg from "../assets/svg/menu.svg";
import logo from "../assets/images/job-boards.png";

const item = [];

const Upload = () => {
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
            <p className="font-bold text-xl">Course Management</p>
            <div></div>
          </div>
          <div className="mx-11 mt-14 text-center flex justify-center">
            <div className="max-w-2xl w-3/4">
              <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                <span className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <span className="font-medium text-gray-600">
                    Drop File Here to Upload
                    <span className="text-blue-600 underline">browse</span>
                  </span>
                </span>
                <input
                  type="file"
                  name="file_upload"
                  className="hidden"
                  accept="application/pdf"
                />
              </label>
              <div className="mt-20">
                <label
                  className="text-sm bg-stone-200 hover:bg-stone-300 p-3 rounded"
                  htmlFor="fileUpload"
                >
                  <input
                    type="file"
                    className="hidden"
                    id="fileUpload"
                    accept="application/pdf"
                  />
                  Upload File
                </label>
              </div>
            </div>
            {/* <div>
              <label for="file-upload" className="custom-file-upload">
                Custom Upload
              </label>
              <input id="file-upload" type="file" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
