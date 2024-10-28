import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import menuSvg from "../assets/svg/menu.svg";
import logo from "../assets/images/job-boards.png";
import TranscriptModal from "@/components/TranscriptModal";

const index = () => {
  const [showTranscript, setShowTranscript] = useState(false);

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
        <div className="text-center">
          <ul>
            <li className="mt-3">
              <Link href="/student">
                <span className="text-[18px]">Dashboard</span>
              </Link>
            </li>
            <li className="mt-3">
              <Link href="/student/profile">
                <span className="text-[18px]">Profile</span>
              </Link>
            </li>
            <li className="mt-3">
              <Link href="/student/jobMarketPlace">
                <span className="text-[18px]">Job Market</span>
              </Link>
            </li>
            <li className="mt-3">
              <Link href="/student/jobStatus">
                <span className="text-[18px]">Job Status</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-transparent flex-grow flex-shrink flex-auto">
        <div className="border-b-2 border-black h-24">
          <div className="flex justify-between flex-grow items-center h-24 mx-9">
            <p className="font-bold text-xl">Dashboard</p>
            <div></div>
          </div>
          <div className="mx-8 mt-8">
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              onClick={() => {
                setShowTranscript(true);
              }}
            >
              Request Transcript
            </button>
          </div>
          <TranscriptModal
            open={showTranscript}
            onClose={() => {
              setShowTranscript(false);
            }}
            // title={title}
            // details={details}
          />
        </div>
      </div>
    </div>
  );
};

export default index;
