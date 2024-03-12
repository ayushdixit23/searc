"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";

function page({ params }) {
  const [bio, setBio] = useState("");
  const [user, setUser] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        ` https://back.grovyo.xyz/api/getprositedetails/${params.id}`
      );
      console.log(res.data);
      setBio(res.data.data.userDetails);

      console.log(bio);
      if (res.data.success) {
      } else {
        setUser(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [params.id]);

  if (!user) {
    return (
      <>
        <section className="relative z-10 flex select-none flex-col justify-center w-full  items-center bg-black h-screen py-[120px]">
          <div className="container w-full">
            <div className="w-full flex">
              <div className="w-full px-4">
                <div className="w-full text-center">
                  <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
                    404
                  </h2>
                  <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
                    Oops! That page can't be found
                  </h4>
                  <p className="mb-8 text-lg text-white">
                    The page you are looking for it maybe deleted
                  </p>
                  <a
                    href="/"
                    className="inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-blue-400 hover:text-primary"
                  >
                    Go To Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-[#000000] to-[#2f2f2f] flex flex-col items-center justify-center">
      <div className="h-[100%] w-[100%] no-scrollbar overflow-auto">
        <div className="bg-white text-black overflow-auto no-scrollbar w-full h-full">
          {/* Header */}
          <div>
            {bio?.temp?.length > 0 ? (
              <>
                <div
                  className="w-full h-[80vh] pn:max-sm:hidden bg-green-700"
                  dangerouslySetInnerHTML={{ __html: bio?.temp }}
                ></div>
                <div
                  className="w-full h-[80vh] sm:hidden bg-green-700"
                  dangerouslySetInnerHTML={{ __html: bio?.temp1 }}
                ></div>
              </>
            ) : (
              <div className="flex pn:max-md:flex-col-reverse items-center py-4 w-[100%] h-[60%]">
                {/* <div className="flex  flex-col md:w-[50%] h-[100%] justify-center items-center">
                  <div className="flex flex-col w-[60%] h-[60%] justify-center items-center">
                    <div className="md:text-[25px] text-center text-black font-bold my-2">
                      "Unleash your passion to personalize your space and show
                      the world the extraordinary things you're capable of “
                    </div>
                    <div className="text-[16px] text-center text-black font-medium">
                      Prosite : fully customizable layouts for an enhanced
                      personalization experience
                    </div>
                    <div className="bg-[#0075FF] text-white font-sans mt-6 font-medium text-[16px] w-[160px] flex justify-center items-center  py-2 rounded-lg">
                      Edit now
                    </div>
                  </div>
                </div>
                <div className="h-[60%] md:w-[50%] flex justify-center items-center ">
                  {" "}
                  <Image
                    src={Logo}
                    className="h-[60%] w-[60%] object-contain"
                  />
                </div> */}
                <div className="flex bg-white flex-col items-center w-[100%] h-[80vh]">
                  <div className="h-[100%] w-[100%] flex justify-center flex-col overflow-hidden items-center ">
                    <div className="h-[100%] w-[100%] bg-bggg bg-cover mt-[0%] bg-center"></div>
                    <div className="h-[100px] w-[100px] flex flex-col justify-center items-center -mt-6">
                      {/* <img
                        src={${bio?.dp}}
                        alt="dp"
                        className="rounded-3xl h-[55px] ring-2 ring-white w-[55px] "
                      /> */}
                      <div className="h-[100px] flex justify-center items-center flex-col w-[150px]">
                        <div className="text-[18px] font-bold">
                          {bio?.fullname}
                        </div>
                        <div className=" text-[12px] font-medium">
                          @{bio?.username}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:w-[100%] h-[50%] justify-center items-center">
                    <div className="flex flex-col w-[80%] h-[60%] justify-center items-center">
                      <div className="md:text-[50.5px] text-center text-black font-bold my-2">
                        "Unleash your passion to
                        <a className="text-rose-400"> personalize </a> your
                        space and show the world the extraordinary things you're
                        capable of “
                      </div>
                      <div className="bg-[#0075FF] text-white font-sans mt-6 font-medium text-[16px] w-[160px] flex justify-center items-center  py-2 rounded-lg">
                        Edit now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
