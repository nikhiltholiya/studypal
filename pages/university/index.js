import Image from "next/image";
import Link from "next/link";
import React from "react";
import menuSvg from "../assets/svg/menu.svg";
import logo from "../assets/images/job-boards.png";
import { useRouter } from "next/navigation";

const item = [
  {
    jobName: "XXXX XXX",
    details:
      "1 - The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan luv.",
  },
  {
    jobName: "XXXX XXX XXXX",
    details:
      "2 - The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan luv.",
  },
  {
    jobName: "XXXX XXX xxxx xxx",
    details: `3 - The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan luv.The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan luv. The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan luv. 
     The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan luv. 
     The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan luv.
     The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan luv.
     The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan luv.
     The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan luv.`,
  },
  {
    jobName:
      "XXXX XXX XXXX XXX XXXX XXX XXXX XXX XXXX XXX XXX XXXX XXX XXXX XXX XXXX XXX XXXX XXXX XXX XXXX XXX XXXX XXX XXXX XXX XXXX XXX XXX XXXX XXX XXXX XXX XXXX XXX XXXX",
    details:
      "4 - The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan luv.",
  },
];

const CourseManagement = () => {
  const router = useRouter();
  return (
    <>
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
              <div>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                  onClick={() => {
                    router.push("/university/upload");
                  }}
                >
                  Add
                </button>
              </div>
            </div>
            <div className="mx-8">
              {!!item && item.length > 0 ? (
                item.map((item, index) => (
                  <div
                    className="border-b-2 flex justify-between items-center"
                    key={index}
                  >
                    <div className="">
                      <p
                        className="text-lg ml-7 whitespace-nowrap text-ellipsis overflow-hidden w-28 md:w-48 lg:w-80"
                       
                      >
                        {item.jobName}
                      </p>
                    </div>
                    <div>
                      <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded m-3"
                        onClick={() => {
                          router.push("/university/555");
                        }}
                      >
                        View
                      </button>
                      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded m-3">
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center font-bold text-xl">
                  currently no job available
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseManagement;
