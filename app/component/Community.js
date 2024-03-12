import React, { useEffect, useState } from "react";
import Image from "next/image";
// import wait from "../../assets/Images/wait.png";

function Community(props) {
  const [community, setCommunity] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (props.coms) {
      setCommunity(props.coms);
      setIsLoading(false); // Set loading to false once data is loaded
    }
  }, [props.coms]);
  return (
    <>
      {props?.isCommunity && (
        <div className="select-none">
          <div className="text-[21px] font-semibold text-center mt-[3%]">
            Communities
          </div>
          <div className="my-[2%]">
            <div className="flex pn:max-md:flex-col justify-center md:space-x-7 pn:max-md:space-y-5 pn:max-md:px-[7%] px-6 items-center">
              {isLoading ? (
                // Render loading content while data is being fetched
                <>
                  <div className="flex flex-col items-center max-w-[470px] h-[400px] min-w-[340px] border-[1px] md:max-lg:w-[400px] space-y-3 border-[#D4D2E3] rounded-3xl py-3">
                    <div className="w-[90px] h-[90px] bg-slate-200 animate-pulse rounded-[40px] shadow-md ring-1 ring-white"></div>
                    <div className="text-2xl text-center  bg-slate-200 animate-pulse w-28 rounded-xl h-10 font-semibold my-2"></div>

                    <div className="flex items-center">
                      <div className="flex flex-row justify-start z-0 w-[100%] items-center">
                        <>
                          <div className="h-[35px] w-[35px] rounded-2xl z-30 bg-slate-200 animate-pulse " />
                          <div className="h-[35px] w-[35px] rounded-2xl z-20 -ml-[10px] bg-slate-200 animate-pulse " />
                          <div className="h-[35px] w-[35px] rounded-2xl z-10 -ml-[10px] bg-slate-200 animate-pulse " />
                          <div className="h-[35px] w-[35px] rounded-2xl z-0 -ml-[10px] bg-slate-200 animate-pulse " />
                        </>
                      </div>
                      <div className=" bg-slate-200 animate-pulse w-16 h-4 rounded-md"></div>
                    </div>
                    <div className="w-[85%] -space-y-[0.1px]">
                      <div className="font-medium w-28 bg-slate-200 rounded-lg text-[#3e3e3e]"></div>
                      <div className="text-[16px] text-center pt-2 h-28 bg-slate-200 text-ellipsis overflow-hidden  rounded-2xl  my-[14px]"></div>
                    </div>
                    <button className="text-white rounded-full bg-slate-200 animate-pulse w-[85%] h-[50px]"></button>
                  </div>
                  <div className="flex flex-col items-center max-w-[470px] h-[400px] min-w-[340px] border-[1px] md:max-lg:w-[400px] space-y-3 border-[#D4D2E3] rounded-3xl py-3">
                    <div className="w-[90px] h-[90px] bg-slate-200 animate-pulse rounded-[40px] shadow-md ring-1 ring-white"></div>
                    <div className="text-2xl text-center  bg-slate-200 animate-pulse w-28 rounded-xl h-10 font-semibold my-2"></div>

                    <div className="flex items-center">
                      <div className="flex flex-row justify-start z-0 w-[100%] items-center">
                        <>
                          <div className="h-[35px] w-[35px] rounded-2xl z-30 bg-slate-200 animate-pulse " />
                          <div className="h-[35px] w-[35px] rounded-2xl z-20 -ml-[10px] bg-slate-200 animate-pulse " />
                          <div className="h-[35px] w-[35px] rounded-2xl z-10 -ml-[10px] bg-slate-200 animate-pulse " />
                          <div className="h-[35px] w-[35px] rounded-2xl z-0 -ml-[10px] bg-slate-200 animate-pulse " />
                        </>
                      </div>
                      <div className=" bg-slate-200 animate-pulse w-16 h-4 rounded-md"></div>
                    </div>
                    <div className="w-[85%] -space-y-[0.1px]">
                      <div className="font-medium w-28 bg-slate-200 rounded-lg text-[#3e3e3e]"></div>
                      <div className="text-[16px] text-center pt-2 h-28 bg-slate-200 text-ellipsis overflow-hidden  rounded-2xl  my-[14px]"></div>
                    </div>
                    <button className="text-white rounded-full bg-slate-200 animate-pulse w-[85%] h-[50px]"></button>
                  </div>
                  <div className="flex flex-col items-center max-w-[470px] h-[400px] min-w-[340px] border-[1px] md:max-lg:w-[400px] space-y-3 border-[#D4D2E3] rounded-3xl py-3">
                    <div className="w-[90px] h-[90px] bg-slate-200 animate-pulse rounded-[40px] shadow-md ring-1 ring-white"></div>
                    <div className="text-2xl text-center  bg-slate-200 animate-pulse w-28 rounded-xl h-10 font-semibold my-2"></div>

                    <div className="flex items-center">
                      <div className="flex flex-row justify-start z-0 w-[100%] items-center">
                        <>
                          <div className="h-[35px] w-[35px] rounded-2xl z-30 bg-slate-200 animate-pulse " />
                          <div className="h-[35px] w-[35px] rounded-2xl z-20 -ml-[10px] bg-slate-200 animate-pulse " />
                          <div className="h-[35px] w-[35px] rounded-2xl z-10 -ml-[10px] bg-slate-200 animate-pulse " />
                          <div className="h-[35px] w-[35px] rounded-2xl z-0 -ml-[10px] bg-slate-200 animate-pulse " />
                        </>
                      </div>
                      <div className=" bg-slate-200 animate-pulse w-16 h-4 rounded-md"></div>
                    </div>
                    <div className="w-[85%] -space-y-[0.1px]">
                      <div className="font-medium w-28 bg-slate-200 rounded-lg text-[#3e3e3e]"></div>
                      <div className="text-[16px] text-center pt-2 h-28 bg-slate-200 text-ellipsis overflow-hidden  rounded-2xl  my-[14px]"></div>
                    </div>
                    <button className="text-white rounded-full bg-slate-200 animate-pulse w-[85%] h-[50px]"></button>
                  </div>
                </>
              ) : (
                // Render community data when it's available
                community?.map((d, i) => {
                  return d?.length === 0 ? (
                    // no data
                    <div className="flex flex-col w-[100%] py-4 bg-white h-[70%] justify-evenly items-center">
                      <div className=" text-black text-[21px] font-bold">
                        Community
                      </div>
                      <div className="flex flex-col bg-bgg bg-cover mx-8 rounded-2xl justify-center items-center">
                        <div className="flex justify-center items-center h-[60%] w-[60%] py-10">
                          {/* <Image
                          src={wait}
                          className="md:h-[60%] md:w-[60%] h-[90%] w-[90%] object-contain"
                        /> */}
                        </div>
                        <div className=" text-black md:text-[24px] text-[18px] font-semibold">
                          Create Your Own Community Now
                        </div>

                        <div className=" text-black text-[14px] font-medium ">
                          Once you add Products, they will appear here!
                        </div>
                        <div className=" w-[240px] my-2 h-[40px] flex justify-center items-center bg-black text-white rounded-2xl hover:scale-105 hover:bg-[#3e3e3e] duration-100 text-[14px] ">
                          Create Community
                        </div>
                      </div>
                    </div>
                  ) : (
                    // data
                    <div
                      className="flex flex-col items-center max-w-[470px] h-[400px] min-w-[340px] border-[1px] md:max-lg:w-[400px] space-y-3 hover:shadow-md hover:border-0 duration-75 border-[#f5f5f5] rounded-3xl py-3"
                      key={i}
                    >
                      <div className="w-[90px] h-[90px] bg-[#f9f9f9] rounded-[40px] shadow-md ring-1 ring-white">
                        <img
                          src={d?.dps}
                          alt="img"
                          className="h-[90px] w-[90px] rounded-[40px] ring-1 ring-white shadow-md"
                          width={100}
                        />
                      </div>
                      <div className="text-xl text-center font-semibold">
                        {d?.title}
                      </div>
                      <div className="flex items-center">
                        <div className="flex flex-row justify-start z-0 w-[100%] items-center">
                          {/* {d?.membersdp.map((f, i) => (
                          <img
                            src={f}
                            className={`h-[30px] ${
                              i != 0 ? "-ml-[10px]" : null
                            } w-[30px] rounded-xl z-30 bg-[#f1f1f1] shadow-md`}
                            alt="member"
                          />
                        ))} */}
                          {d?.membersdp?.length >= 4 ? (
                            <>
                              <img
                                src={d?.membersdp[0]}
                                className="h-[30px] w-[30px] rounded-xl z-30 bg-[#f1f1f1] shadow-md"
                                alt="member"
                              />
                              <img
                                src={d?.membersdp[1]}
                                alt="member"
                                className="h-[30px] w-[30px] rounded-xl z-20 -ml-[10px] bg-[#f1f1f1] shadow-md"
                              />
                              <img
                                src={d?.membersdp[2]}
                                alt="member"
                                className="h-[30px] w-[30px] rounded-xl z-10 -ml-[10px] bg-[#f1f1f1] shadow-md"
                              />
                              <img
                                src={d?.membersdp[3]}
                                alt="member"
                                className="h-[30px] w-[30px] rounded-xl z-0 -ml-[10px] bg-[#f1f1f1] shadow-md"
                              />
                            </>
                          ) : (
                            <img
                              src={d?.membersdp[0]}
                              className="h-[30px] w-[30px] rounded-xl z-30 bg-[#f1f1f1] shadow-md"
                              alt="member"
                            />
                          )}
                        </div>
                        <div className="text-[14px] font-medium text-[#3e3e3e]">
                          <span className="px-1">{d?.memberscount}</span>
                          <span>members</span>
                        </div>
                      </div>
                      <div className="w-[85%] -space-y-[0.1px]">
                        <div className="font-medium text-[#3e3e3e]">
                          Description:
                        </div>
                        <div className="text-[16px] text-center pt-2 h-28 bg-[#fafafa] text-ellipsis overflow-hidden  rounded-2xl  my-[14px]">
                          {d?.desc}
                        </div>
                      </div>
                      {/* <button className="text-white rounded-2xl bg-[#1a1a1a] w-[85%] p-[10px]">
                      Visit
                    </button> */}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Community;
