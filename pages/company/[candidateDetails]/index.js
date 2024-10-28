import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
// import menuSvg from "../assets/svg/menu.svg";
import menuSvg from "../../assets/svg/menu.svg";
import verified from "../../assets/svg/verified.svg";
import logo from "../../assets/images/job-boards.png";

const item = ["1", "2", "3"];
const Education = [
  "XXX XXXX XXXXXXX XXXX X X XXXX",
  "XXX XXXX = XXXX X X XXXX",
  "XXX XXX ==X XXXXX XXXX",
];

const CandidateDetails = () => {
  const params = useParams();
  console.log("params ---", params);
  //   <h4>details: {params?.candidateDetails}</h4>
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
              <p className="font-bold text-2xl">Job MarketPlace</p>
              <div>
                <button
                  className="bg-green-400 hover:bg-green-800 text-white font-bold py-2 px-4 rounded mr-3"
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  Accept
                </button>
                <button
                  className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  Reject
                </button>
              </div>
            </div>
            <div className="mx-8">
              <p className="font-bold text-lg">
                Job Title: XXXX XXX XXX XXXX{" "}
              </p>
              <div className=" text-lg flex items-center">
                <p className="font-bold">Name: </p>
                <span className="underline p-3">XXX XXX XXXX XXXX XXXX</span>
              </div>
              <div className="text-lg flex items-center">
                <p className="font-bold">Skill:</p>
                {!!item &&
                  item.map((item, index) => {
                    return (
                      <div key={index} className="bg-[#dbdbdb] py-1 px-3 mx-1 ">
                        <p>{item}</p>
                      </div>
                    );
                  })}
                <Image src={verified} width={50} height={50} alt="menu" />
              </div>
              <div className="text-lg flex">
                <p className="font-bold">Education:</p>
                <div className="underline">
                  {!!Education &&
                    Education.map((item, index) => {
                      return (
                        <div key={index} className="py-1 px-3 mx-1 ">
                          <p>{item}</p>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="text-lg flex">
                <p className="font-bold">Work Experience:</p>
                <div className="underline">
                  {!!Education &&
                    Education.map((item, index) => {
                      return (
                        <div key={index} className="py-1 px-3 mx-1 ">
                          <p>{item}</p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidateDetails;
