import { useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import profile from "./assets/profile.svg";
import client_image from "./assets/jesica.png";
import Mask1 from "./assets/Mask1.svg";
import img1 from "./assets/pet1.png";
import img2 from "./assets/pet2.png";
import img3 from "./assets/pet3.png";
import img4 from "./assets/pet4.png";
import img5 from "./assets/pet5.png";
import img6 from "./assets/pet6.png";
import last from "./assets/last.png";
import { UploadButton } from "react-uploader";
import { Uploader } from "uploader";
import paw from "./assets/paw.svg";

import home from "../NearbyPet/assets/Icon.png";
import hearticon from "../NearbyPet/assets/heart.png";
import image1 from "../NearbyPet/assets/div.dt-sc-team-thumb.png";
import image2 from "../NearbyPet/assets/team-thumb2.png";
import image3 from "../NearbyPet/assets/sitter3.jpg.png";
import pawimage from "../NearbyPet/assets/footprint-shape_svgrepo.com.png";
import useChangePassword from "../../http/ChangePassword";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

import Logoutmodal from "../modals/Logoutmodal";
import { useNavigate } from "react-router-dom";
import ReactModal from "react-modal";

const data = [
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
  {
    img: img4,
  },
  {
    img: img5,
  },
  {
    img: img6,
  },
];

const data2 = [
  {
    image: image1,
    title: "Stephen King",
    img2: home,
    country: "Cambridge ,UK",
    age: "2+ Yrs",
    bread: "Bulldog",
    heart: hearticon,
  },
  {
    image: image2,
    title: "Stephen King",
    img2: home,
    country: "Cambridge ,UK",
    age: "2+ Yrs",
    bread: "Bulldog",
    heart: hearticon,
  },
  {
    image: image3,
    title: "Stephen King",
    img2: home,
    country: "Cambridge ,UK",
    age: "2+ Yrs",
    bread: "Bulldog",
    heart: hearticon,
  },
];

const ProfileSection = () => {
  const [verticalActive, setVerticalActive] = useState("tab1");

  const handleVerticalClick = (value: string) => {
    if (value === verticalActive) {
      return;
    }
    setVerticalActive(value);
  };

  const uploader = Uploader({
    apiKey: "free",
  });

  const options = { multi: true };

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { mutate: changePassword } = useChangePassword();
  const [isVisiblePass, setVisiblePass] = useState<boolean>(false);
  const [isnewPass, setNewPass] = useState<boolean>(false);
  const [iscnfrmNewPass, setcnfrmNewPass] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const body = {
      currentPassword,
      newPassword,
      confirmPassword,
    };
    changePassword(body as any);
  };

  const handleLogout = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="flex justify-between py-20">
        <div>
          <TETabs vertical className="w-[20 %] tab-style hover:text-white">
            <TETabsItem
              onClick={() => handleVerticalClick("tab1")}
              active={verticalActive === "tab1"}
            >
              <div className="flex bg-[#FF553E] p-4">
                <img src={profile} alt="profile" className="mr-2" />
                <p className="text-[20px] text-white">Profile</p>
              </div>
            </TETabsItem>

            <TETabsItem
              onClick={() => handleVerticalClick("tab2")}
              active={verticalActive === "tab2"}
            >
              <div className="flex hover:bg-[#FF553E] hover:text-white text-black p-4">
                <img src={paw} alt="profile" className="mr-2" />
                <p className="text-[20px] ">Pet list</p>
              </div>
            </TETabsItem>

            <TETabsItem
              onClick={() => handleVerticalClick("tab3")}
              active={verticalActive === "tab3"}
            >
              <div className="flex hover:bg-[#FF553E] hover:text-white text-black p-4">
                {/* <img src={setting} alt="profile" className="mr-2" /> */}
                <p className="text-[20px] ">Change Password</p>
              </div>
            </TETabsItem>
          </TETabs>

          <h6 onClick={handleLogout} className="text-[20px] text-red-600">
            Logout
          </h6>
        </div>

        <ReactModal
          className="w-fit"
          overlayClassName="z-10 fixed inset-0 bg-[rgba(0,0,0,0.5)] h-[100dvh] w-[100dvw]"
          onAfterOpen={() => {
            document.body.style.overflow = "hidden";
          }}
          isOpen={isModalOpen}
          onAfterClose={() => {
            document.body.style.overflow = "auto";
          }}
        >
          <Logoutmodal setIsModalOpen={setIsModalOpen} />
        </ReactModal>

        <TETabsContent className="w-[80%]">
          <TETabsPane show={verticalActive === "tab1"} className="">
            <div className="flex justify-normal bg-white shadow-xl rounded-xl p-6 mb-8">
              <div className="w-[20%]">
                <img src={client_image} alt="Client Image" />
              </div>
              <div className="w-[80%]">
                <div>
                  <div className="flex">
                    <h1 className="text-[28px] font-semibold">
                      Jessica Sympson
                    </h1>
                    <img src={Mask1} alt="Edit btn" className="ml-5" />
                  </div>
                  <p className="text-[18px] mt-4">
                    - So be careful, Grumpy Lina
                  </p>
                  <hr className="my-5" />
                </div>
                <div className="w-[50%]">
                  <div className="flex justify-between mb-4">
                    <p className="text-[#8C8E97] text-[20px]">Phone Number</p>
                    <p className="text-[20px]">+44 120 65 564 25</p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <p className="text-[#8C8E97] text-[20px]">City</p>
                    <p className="text-[20px]">New York</p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <p className="text-[#8C8E97] text-[20px]">Email</p>
                    <p className="text-[20px]">jessica003@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" bg-white shadow-xl rounded-xl p-6 mb-8">
              <div className="flex mb-4">
                <h6 className="text-[20px] font-semibold">
                  Freely about yourself
                </h6>
                <img src={Mask1} alt="Edit btn" className="ml-6" />
              </div>
              <p className="text-[#707070] text-[20px]">
                Write a few lines about yourself and your character. Tell us
                about your achievements, priorities and life experience. This
                way your profile will become more interesting and attract more
                attention.
              </p>
            </div>

            <div className=" bg-white shadow-xl rounded-xl p-6 mb-8">
              <div className="flex justify-between">
                <h6 className="text-[20px] font-semibold mb-4">My Pets</h6>
                <h6 className="text-[#FF553E] text-[20px] font-semibold mb-4">
                  All Pets
                </h6>
              </div>
              <div className="flex">
                {data.map((item, index) => (
                  <div key={index} className="m-1">
                    <img src={item.img} alt="Images" />
                  </div>
                ))}
                <UploadButton
                  uploader={uploader}
                  options={options}
                  onComplete={(files) =>
                    alert(files.map((x) => x.fileUrl).join("\n"))
                  }
                >
                  {({ onClick }) => (
                    <img src={last} onClick={onClick} className="m-1" alt="" />
                  )}
                </UploadButton>
              </div>
            </div>

            <div className="flex justify-end w-full">
              <button className="bg-white text-black px-14 rounded-lg mr-2 font-bold text-[16px] py-3 shadow-lg">
                Cancle
              </button>
              <button className="bg-[#FF553E] text-white px-14 rounded-lg py-3 font-bold text-[16px] shadow-lg">
                Save
              </button>
            </div>
          </TETabsPane>

          <TETabsPane show={verticalActive === "tab2"}>
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4  justify-center">
              {data2.map((item, index) => (
                <div key={index} className="p-4 flex justify-center">
                  <div className="relative">
                    <img src={item.image} alt="" />
                    <div className="p-6 shadow-lg bg-white rounded-b-lg">
                      <h1 className="text-[24px] font-semibold">
                        {item.title}
                      </h1>
                      <div className="flex my-2">
                        <img
                          src={item.img2}
                          alt="home"
                          className="w-[15px] h-[16px]"
                        />
                        <p className="text-[16px] text-[#818181] ml-2">
                          {item.country}
                        </p>
                      </div>
                      <div className="flex mt-1">
                        <h6 className="text-[16px] font-bold">Age:</h6>
                        <p className="text-[16px] ml-2">{item.age}</p>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex my-2">
                          <h6 className="text-[16px] font-bold">Breed:</h6>
                          <p className="text-[16px] ml-2">{item.bread}</p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-[#FA441D] rounded-lg opacity-0 hover:opacity-95 transition-opacity flex items-center justify-center">
                      <div className="text-center ">
                        <div className="flex justify-center">
                          <img src={pawimage} alt="paw image" />
                        </div>
                        <a href="/detail">
                          <h1 className="text-white z-10 text-[20px]">
                            View Profile
                          </h1>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TETabsPane>

          <TETabsPane show={verticalActive === "tab3"}>
            <div className="flex-1 flex ">
              <div className="md:flex  w-full  ">
                <div className="lg:w-[50%]  w-full pt-10 md:pt-0">
                  <h1 className="text-[34px] font-bold mb-4">
                    Change Password
                  </h1>

                  <form onSubmit={handleFormSubmit}>
                    <div>
                      <label className="text-[13px]  w-full text-[#666666] mb-1">
                        Old Password
                      </label>
                      <input
                        type={!isVisiblePass ? "password" : "text"}
                        name="password"
                        className=" outline-none w-full bg-transparent
                         mb-4 mt-1 border
                          border-black rounded-full text-black px-4 py-3"
                      />
                      <button
                        type="button"
                        className="absolute  ml-[-40px] mt-[18px]"
                        onClick={() => setVisiblePass(!isVisiblePass)}
                      >
                        {isVisiblePass ? (
                          <IoEyeOutline className="w-[30px] h-[22px]" />
                        ) : (
                          <IoEyeOffOutline className="w-[30px] h-[22px]" />
                        )}
                      </button>
                    </div>
                    <div>
                      <label className="text-[13px]  w-full text-[#666666]">
                        New Password
                      </label>
                      <input
                        type={!isnewPass ? "password" : "text"}
                        name="password"
                        className=" outline-none w-full bg-transparent
                          border  mb-4 mt-1
                          border-black rounded-full text-black px-4 py-3"
                      />
                      <button
                        type="button"
                        className="absolute  ml-[-40px] mt-[18px]"
                        onClick={() => setNewPass(!isnewPass)}
                      >
                        {isnewPass ? (
                          <IoEyeOutline className="w-[30px] h-[22px]" />
                        ) : (
                          <IoEyeOffOutline className="w-[30px] h-[22px]" />
                        )}
                      </button>
                    </div>
                    <div>
                      <label className="text-[13px]  w-full text-[#666666]">
                        Confirm Password
                      </label>
                      <input
                        type={!iscnfrmNewPass ? "password" : "text"}
                        name="password"
                        className=" outline-none w-full bg-transparent
                         border  mb-4 mt-1
                          border-black rounded-full text-black px-4 py-3"
                      />
                      <button
                        type="button"
                        className="absolute ml-[-40px] mt-[18px]"
                        onClick={() => setcnfrmNewPass(!iscnfrmNewPass)}
                      >
                        {iscnfrmNewPass ? (
                          <IoEyeOutline className="w-[30px] h-[22px]" />
                        ) : (
                          <IoEyeOffOutline className="w-[30px] h-[22px]" />
                        )}
                      </button>
                    </div>

                    <div className="flex justify-end w-full mt-8">
                      <button className="bg-white text-black px-14 rounded-lg mr-2 font-bold text-[16px] py-3 shadow-lg">
                        Cancle
                      </button>
                      <button className="bg-[#FF553E] text-white px-10 rounded-lg py-3 font-bold text-[16px] shadow-lg">
                        Change Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </TETabsPane>
        </TETabsContent>
      </div>
    </>
  );
};

export default ProfileSection;
