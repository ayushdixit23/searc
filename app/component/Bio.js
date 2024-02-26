import React from "react";
import { BsWhatsapp, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { FaSnapchatSquare } from "react-icons/fa";

const Bio = ({ bio }) => {
  const isLoading = !bio;

  return (
    <>
      <div className="flex flex-col justify-center items-center my-4 sm:mt-10 select-none">
        <div className="text-2xl font-semibold mb-4">About</div>
        <div
          className={`bg-[#f9f9f9] flex flex-col  space-y-3   sm:w-[80%] w-[97%] rounded-2xl md:rounded-[35px] pn:max-sm:p-5 sm:p-10 ${
            isLoading ? "animate-pulse" : ""
          }`}
        >
          <div className="text-xl font-semibold">Bio</div>
          {isLoading ? (
            // Render loading animation when data is loading
            <>
              <div className="h-5 bg-slate-200 w-28 rounded-lg animate-pulse"></div>
              <div className="h-5 bg-slate-200 w-32 rounded-lg animate-pulse"></div>
              <div className="h-5 bg-slate-200 w-60 rounded-lg animate-pulse"></div>
              <div className="h-5 bg-slate-200 w-48 rounded-lg animate-pulse"></div>
              <div className="h-5 bg-slate-200 w-20 rounded-lg animate-pulse"></div>
              <div className="flex w-full text-black items-center flex-wrap">
                <div className="flex justify-between h-8 w-32 m-2 items-center space-x-2 bg-slate-200 animate-pulse rounded-lg">
                  {" "}
                </div>
                <div className="flex justify-between h-8 w-32 m-2 items-center space-x-2 bg-slate-200 animate-pulse rounded-lg">
                  {" "}
                </div>
                <div className="flex justify-between h-8 w-32 m-2 items-center space-x-2 bg-slate-200 animate-pulse rounded-lg">
                  {" "}
                </div>
                <div className="flex justify-between h-8 w-32 m-2 items-center space-x-2 bg-slate-200 animate-pulse rounded-lg">
                  {" "}
                </div>
                <div className="flex justify-between h-8 w-32 m-2 items-center space-x-2 bg-slate-200 animate-pulse rounded-lg">
                  {" "}
                </div>
              </div>
            </>
          ) : (
            // Render bio data when it's available
            <>
              <div
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos="fade-up"
              >
                {bio?.bio}
              </div>
              <div className="flex flex-col justify-center space-y-2">
                <div>Contact Information:</div>
                <div>Email : {bio?.email}</div>
                <div>Phone : +{bio?.phone}</div>
                <div>Links:</div>
                <div className="flex w-full text-black items-center flex-wrap">
                  <div className="flex w-full text-black items-center flex-wrap">
                    <div className="flex justify-between py-2 px-5 m-2 items-center space-x-2 bg-white rounded-lg">
                      <BsYoutube className="text-red-600" />

                      <div className="text-sm font-medium">Youtube</div>
                    </div>
                    <div className="flex justify-between py-2 px-5 m-2 items-center space-x-2 bg-white rounded-lg">
                      <BsInstagram className="text-red-600" />

                      <div className="text-sm font-medium">Instagram</div>
                    </div>

                    <div className="flex justify-between py-2 px-5 m-2 items-center space-x-2 bg-white rounded-lg">
                      <BsWhatsapp className="text-green-600" />

                      <div className="text-sm font-medium">Whatsapp</div>
                    </div>

                    <div className="flex justify-between py-2 px-5 m-2 items-center space-x-2 bg-white rounded-lg">
                      <BsLinkedin className="text-blue-600 text-sm font-medium" />

                      <div className="text-sm font-medium">Linkedin</div>
                    </div>
                    <div className="flex justify-between py-2 px-5 m-2 items-center space-x-2 bg-white rounded-lg">
                      <FaSnapchatSquare className=" text-[#FFFF00]" />

                      <div className="text-sm font-medium">Snapchat</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:hidden space-y-2">
                  {/* <div className="vs:text-xl font-bold">
                    Achievements/Awards:
                  </div>
                  <div>Best Travel Blog Award (2021)</div>
                  <div>Published articles in National Geographic Traveler</div> */}
                  <div>
                    <span className="font-semibold">Joined On</span> : March
                    2023
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Bio;
