"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "./assets/Logo.png";
import Search from "./assets/Search.png";
import axios from "axios";
import Link from "next/link";

function page() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = async (t) => {
    setText(t);

    try {
      if (t) {
        const res = await axios.post(
          `https://back.grovyo.xyz/api/searchpros?query=${t}`
        );
        if (res?.data?.data?.success) {
          const pros = res?.data?.data?.pros;
          const dp = res?.data?.data?.dps;
          const merge = pros?.map((p, i) => ({ p, dps: dp[i] }));
          setData(merge);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-[#000000] to-[#2f2f2f]">

      <div className="h-[90px] justify-center items-center w-[100%] flex ">
        <div className="h-[50px] w-full flex justify-between items-center px-2 ">
          <div className="h-[55px] flex text-[#fff] items-center justify-center rounded-3xl ring-2 ring-white">
            <div className="h-[55px] w-[55px] ring-2 ring-[#fff] rounded-3xl">
              <Image src={Logo} className="rounded-3xl" />
            </div>
            <div className="px-2 pr-4">
              <div className="text-[18px] font-bold"> Grovyo</div>
              <div className="text-[12px]"> @Grovyo</div>
            </div>
          </div>
          <div>
            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.grovyomain&hl=en_IN&gl=US" className="bg-white px-4 py-2 font-semibold rounded-full">
              Download
            </a>
          </div>
        </div>
      </div>
      {/* main */}
      <div className="h-[80%] w-full flex flex-col justify-center items-center">
        <div className="w-[49%] flex-col sm:max-md:w-[70%] pn:max-sm:w-[90%] flex items-center justify-center mb-36">
          <div className="lg:text-[37px] md:text-[32px] duration-75 sm:text-[27px] vs:text-[22px] pn:text-[17px] select-none text-center font-bold text-white">
            Discover The Perfect Prosites With An Effortless Search And
            Selection
          </div>
          <div className="flex w-[80%] pn:max-sm:w-[100%] mt-2 h-[50px] rounded-full justify-center bg-white">
            <div className="w-[50px] h-[50px] flex justify-center items-center">
              <Image src={Search} className="w-[25px] " />
            </div>
            <input
              value={text}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full rounded-r-full outline-none font-semibold "
              placeholder="Search Prosite "
            />
          </div>
        </div>
        {/* Tag */}
        {/* <div className="mt-4 w-[49%] flex text-white items-center">
          <div className="font-semibold  select-none">Top Search:</div>
          <div className="ring-2 p-2 flex text-[14px] m-2 ring-white rounded-full">
            <div className="select-none">Best Community</div>
            <Image src={Arrow} className="w-[20px]" />
          </div>
          <div className="ring-2 p-2 flex text-[14px] m-2 ring-white rounded-full">
            <div className="select-none">Best Community</div>
            <Image src={Arrow} className="w-[20px]" />
          </div>
          <div className="ring-2 p-2 flex text-[14px] m-2 ring-white rounded-full">
            <div className="select-none">Best Community</div>
            <Image src={Arrow} className="w-[20px]" />
          </div>
          <div className="ring-2 p-2 flex text-[14px] m-2 ring-white rounded-full">
            <div className="select-none">Best Community</div>
            <Image src={Arrow} className="w-[20px]" />
          </div>
        </div> */}
        {/* Resent */}
        <div className=" w-[49%] flex flex-col text-white justify-center">
          <div className="font-semibold select-none">Resent Search:</div>
          <div className="mt-1 flex space-x-2 overflow-hidden justify-center">
            {data.map((d, i) => (
              <Link
                key={i}
                href={`/${d?.p._id}`}
                className="flex flex-col items-center justify-center bg-[#121212] ring-1 rounded-2xl p-3"
              >
                <img
                  className="h-[50px] w-[50px] rounded-2xl bg-slate-50"
                  src={d?.dps}
                />

                <div className="font-semibold mt-1 ">{d?.p.fullname}</div>
                <div className="text-[12px]">{d?.p.username}</div>
              </Link>
            ))}
            {/* <div className="flex flex-col items-center justify-center bg-[#121212] ring-1 rounded-2xl p-3">
              <div className="h-[50px] w-[50px] rounded-2xl bg-slate-50"></div>
              <div className="font-semibold mt-1 ">User Name</div>
              <div className="text-[12px]">@User_Name</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#121212] ring-1 rounded-2xl p-3">
              <div className="h-[50px] w-[50px] rounded-2xl bg-slate-50"></div>
              <div className="font-semibold mt-1 ">User Name</div>
              <div className="text-[12px]">@User_Name</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#121212] ring-1 rounded-2xl p-3">
              <div className="h-[50px] w-[50px] rounded-2xl bg-slate-50"></div>
              <div className="font-semibold mt-1 ">User Name</div>
              <div className="text-[12px]">@User_Name</div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
