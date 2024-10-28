import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import menuSvg from "../assets/svg/menu.svg";
import logo from "../assets/images/job-boards.png";
import LabelInput from "@/components/LabelInput";
import Button from "@/components/Button";

const Profile = () => {
  const [name, setName] = useState();
  const [skill, setSkill] = useState("");
  const [showEduCation, setShowEduCation] = useState(false);
  const [eduCation, setEduCation] = useState("");

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
            <p className="font-bold text-xl">Profile</p>
            <div></div>
          </div>
          <div className="mx-8 mt-11">
            <form action="" onSubmit={() => {}}>
              <LabelInput
                label={"Name: "}
                value={name}
                changeValue={(value) => {
                  setName(value);
                }}
              />
              <LabelInput
                label={"Skill: "}
                value={skill}
                changeValue={(value) => {
                  setSkill(value);
                }}
              />

              <div className="flex items-start">
                <label
                  className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4 mt-1"
                  for="inline-full-name"
                >
                  Education:
                </label>
                {!showEduCation && (
                  <Button
                    title={"Add"}
                    click={() => {
                      setShowEduCation(true);
                    }}
                  />
                )}
                {!!showEduCation && (
                  <div>
                    <div className="flex">
                      <div className="md:w-96 ">
                        <input
                          className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                          type="text"
                          value={eduCation}
                          onChange={(e) => {
                            setEduCation(e.target.value);
                          }}
                        />
                      </div>
                      <div className="ml-3">
                        <Button
                          title={"Remove"}
                          click={() => {
                            setEduCation("");
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center mt-3">
                      <div className="md:w-96 ">
                        <span className="text-2xl mr-3">from</span>
                        <input type="date" name="" id="" />
                        <span className="text-2xl mr-3">to</span>
                        <input type="date" name="" id="" />
                      </div>
                      <div className="ml-3">
                        <Button
                          title={"Add"}
                          click={() => {
                            // setShowEduCation(true);
                          }}
                        />
                      </div>
                    </div>
                    <div className="text-end mt-5 mr-20">
                      <Button
                        title={"Add Another"}
                        click={() => {
                          setShowEduCation(false);
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-3">
                <LabelInput
                  label={"Work Experience: "}
                  value={skill}
                  changeValue={(value) => {
                    setSkill(value);
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
