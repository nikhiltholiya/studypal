import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import menuSvg from "../assets/svg/menu.svg";
import logo from "../assets/images/job-boards.png";
import TranscriptModal from "@/components/TranscriptModal";
import LabelInput from "@/components/LabelInput";
import verified from "../assets/svg/verified.svg";
import Button from "@/components/Button";

const skill = ["tab", "tab", "Tab"];

const JobTitle = () => {
  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");
  const [showVerfyModal, setShowVerfyModal] = useState(false);

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
        <div className="text-center"></div>
      </div>
      <div className="bg-transparent flex-grow flex-shrink flex-auto">
        <div className="border-b-2 border-black h-24">
          <div className="flex justify-between flex-grow items-center h-24 mx-9">
            <p className="font-bold text-xl">Job Title</p>
            <div>
              <Button
                title={"Submit"}
                click={() => {
                  setShowVerfyModal(true);
                }}
              />
            </div>
          </div>
          <div className="mx-8 mt-8">
            <div className="">
              <p className="font-bold">Job Description</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci aspernatur numquam optio ullam doloribus obcaecati
                atque reprehenderit illum dolorum culpa.
              </p>
            </div>
            <div className="mt-3">
              <LabelInput
                label={"Name: "}
                value={name}
                changeValue={(value) => {
                  setName(value);
                }}
              />
              <div className="text-lg flex items-center">
                <p className="font-bold">Skill:</p>
                {!!skill &&
                  skill.map((item, index) => {
                    return (
                      <div key={index} className="bg-[#dbdbdb] py-1 px-3 mx-1 ">
                        <p>{item}</p>
                      </div>
                    );
                  })}
                {/* <div className="ml-3"> */}
                <Button
                  title={"Verfy"}
                  click={() => {
                    setShowVerfyModal(true);
                  }}
                />
                {/* </div> */}
                <Image src={verified} width={50} height={50} alt="menu" />
              </div>
              <div className="md:flex md:items-start mb-6">
                <label
                  className="block text-gray-500 md:mt-2 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Education:
                </label>

                <div className="md:w-96 ">
                  <div className="flex ">
                    <input
                      className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                      type="text"
                      //   value={props.value}
                      onChange={(e) => {
                        // props.changeValue(e.target.value);
                      }}
                    />
                    <div className="ml-3">
                      <Button
                        title={"Verfy"}
                        click={() => {
                          setShowVerfyModal(true);
                        }}
                      />
                    </div>
                  </div>
                  <p>from 01/01/2001 to 02/02/2002</p>
                </div>
              </div>
            </div>

            <div>
              <LabelInput
                label={"Work Experience: "}
                value={experience}
                changeValue={(value) => {
                  setExperience(value);
                }}
              />
            </div>

            <TranscriptModal
              open={showVerfyModal}
              onClose={() => {
                setShowVerfyModal(false);
              }}
              // title={title}
              // details={details}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobTitle;
