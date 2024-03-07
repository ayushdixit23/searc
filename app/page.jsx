"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "./assets/Logo.png";
import Search from "./assets/Search.png";
import axios from "axios";
import Link from "next/link";
import aesjs from "aes-js";
import { MdOutlineClose } from "react-icons/md"
import { RxHamburgerMenu } from "react-icons/rx"

function page() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [recentSearch, setRecentSearch] = useState([])
  const [open, setOpen] = useState(false)

  const getKey = () => {
    try {
      return JSON.parse(process.env.NEXT_PUBLIC_KEY);
    } catch (e) {
      console.log("Error parsing key:", e);
    }
  };

  const key = getKey();

  const encryptaes = (data) => {
    try {
      const textBytes = aesjs.utils.utf8.toBytes(data);
      const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
      const encryptedBytes = aesCtr.encrypt(textBytes);
      const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
      return encryptedHex;
    } catch (e) {
      console.log(e);
    }
  };

  const handleSearch = async (t) => {
    if (!t) {
      setData([])
    }
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

  const handSave = (id) => {
    const getids = localStorage.getItem("ids");
    let setids;
    if (getids) {
      const parseIds = JSON.parse(getids);
      if (parseIds.includes(encryptaes(id))) {
        const filterArr = parseIds.filter((d) => d !== encryptaes(id));
        const newArr = [encryptaes(id), ...filterArr];
        localStorage.setItem("ids", JSON.stringify(newArr));
        return;
      }
      if (parseIds.length <= 5) {
        setids = [encryptaes(id), ...parseIds];
      } else {
        parseIds.pop();
        setids = [encryptaes(id), ...parseIds];
      }
    } else {
      setids = [encryptaes(id)];
    }
    localStorage.setItem("ids", JSON.stringify(setids));
  };

  const changeOrder = (id) => {
    const getids = localStorage.getItem("ids");
    if (getids) {
      const parseIds = JSON.parse(getids);
      const filterArr = parseIds.filter((d) => d !== encryptaes(id));
      const newArr = [encryptaes(id), ...filterArr];
      localStorage.setItem("ids", JSON.stringify(newArr));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (window !== undefined) {
        const getids = localStorage.getItem("ids");
        if (getids) {
          const parseIds = JSON.parse(getids) || [];
          if (parseIds.length > 0) {
            try {
              const res = await axios.post(`https://back.grovyo.xyz/api/recentSearch`, parseIds);
              setRecentSearch(res.data.users);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          }
        }
      }
    };
    fetchData();
  }, []);

  // const handSave = (id) => {
  //   const getids = localStorage.getItem("ids")
  //   let setids
  //   if (getids) {
  //     const parseIds = JSON.parse(getids)
  //     if (parseIds.includes(id)) {
  //       const filterArr = parseIds.filter((d) => d !== id);
  //       console.log(filterArr)
  //       const newArr = [id, ...filterArr];
  //       localStorage.setItem("ids", JSON.stringify(newArr))
  //       return;
  //     }
  //     if (parseIds.length <= 5) {
  //       setids = [id, ...parseIds]
  //     } else {
  //       parseIds.pop()
  //       setids = [id, ...parseIds]
  //     }
  //   } else {
  //     setids = [id]
  //   }
  //   localStorage.setItem("ids", JSON.stringify(setids))
  // }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (window !== undefined) {
  //       const getids = localStorage.getItem("ids");
  //       if (getids) {
  //         const parseIds = JSON.parse(getids) || "";
  //         console.log(parseIds);

  //         if (parseIds) {
  //           try {
  //             const res = await axios.post("http://localhost:7190/api/recentSearch", parseIds);
  //             setRecentSearch(res.data.users);
  //           } catch (error) {
  //             console.error("Error fetching data:", error);
  //           }
  //         }
  //       }
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const changeOrder = (id) => {
  //   const getids = localStorage.getItem("ids");
  //   if (getids) {
  //     const parseIds = JSON.parse(getids) || "";
  //     const filterArr = parseIds.filter((d) => d !== id);
  //     console.log(filterArr)
  //     const newArr = [id, ...filterArr];
  //     localStorage.setItem("ids", JSON.stringify(newArr))
  //   }
  // }

  return (
    <>
      <div className={`absolute left-0 w-full bg-white z-50 duration-700 h-screen ${open ? "top-0" : "-top-[1000px]"}`}>
        <div className="flex justify-center h-full w-full items-center">
          <div className="flex flex-col pn:max-sm:text-lg sm:flex-row justify-center flex-wrap items-center w-full gap-8 font-semibold">
            <Link className="min-w-[110px] hover:underline text-center" href={'/about'}>About</Link>
            <Link className="min-w-[110px] hover:underline text-center" href={'/cancellation'}>Cancellation Policy</Link>
            <Link className="min-w-[110px] hover:underline text-center" href={'/contact'}>Contact</Link>
            <Link className="min-w-[110px] hover:underline text-center" href={'/deleterequest'}>Deleterequest</Link>
            <Link className="min-w-[110px] hover:underline text-center" href={'/privacy'}>Privacy Policy</Link>
            <Link className="min-w-[110px] hover:underline text-center" href={'/requestdata'}>Request Data</Link>
            <Link className="min-w-[110px] hover:underline text-center" href={'/return'}>Return Policy</Link>
            <Link className="min-w-[110px] hover:underline text-center" href={'/shipping'}>Shipping Policy</Link>
            <Link className="min-w-[110px] hover:underline text-center" href={'/terms'}>Terms & Conditions</Link>
          </div>
        </div>
      </div>

      <div className="pp:h-screen  min-h-screen w-screen bg-gradient-to-r from-[#000000] to-[#2f2f2f]">

        <div className="h-[90px] justify-center items-center w-[100%] flex ">
          <div className="h-[50px] w-full flex justify-between items-center px-2 ">
            <div className="h-[55px] flex text-[#fff] items-center justify-center rounded-3xl ">
              <div className="h-[55px] w-[55px]  rounded-3xl">
                <Image src={Logo} className="rounded-3xl" />
              </div>
              {/* <div className="px-2 pr-4">
              <div className="text-[18px] font-bold"> Grovyo</div>
              <div className="text-[12px]"> @Grovyo</div>
            </div> */}
            </div>
            <div className="flex justify-center items-center px-5 gap-2 sm:gap-4">
              <a target="_blank" href="https://play.google.com/store/apps/details?id=com.grovyomain&hl=en_IN&gl=US" className="bg-white px-4 py-2 font-semibold rounded-full">
                Download
              </a>
              <div className="text-2xl z-50 font-semibold text-white">
                {open ? <MdOutlineClose className="text-black" onClick={() => setOpen(false)} /> : <RxHamburgerMenu onClick={() => setOpen(true)} />
                }
              </div>
            </div>
          </div>
        </div>
        {/* main */}
        <div className="h-[80%] w-full flex flex-col justify-center items-center">
          <div className={`w-[49%] flex-col sm:max-md:w-[70%] pn:max-sm:w-[90%] ${recentSearch.length > 0 ? "md:mt-32 pn:max-pp:mt-10" : "md:mb-36   pn:max-pp:mt-14"}  flex items-center justify-center`}>
            <div className={`lg:text-[37px] md:text-[32px] duration-75 sm:text-[27px] vs:text-[22px] pn:text-[17px] select-none text-center font-bold text-white`}>
              Discover The Perfect Prosites With An Effortless Search And
              Selection
            </div>
            <div className="w-full flex relative flex-col mt-2 justify-center items-center">
              <div className="flex w-[80%] pn:max-sm:w-[100%] mt-2 h-[50px] rounded-full justify-center bg-white ">
                <div className="w-[50px] h-[50px] flex justify-center items-center">
                  <Image src={Search} className="w-[25px] " />
                </div>
                <input
                  value={text}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full rounded-r-full outline-none  font-semibold "
                  placeholder="Search Prosite "
                />
              </div>
              {data.length > 0 &&
                <div className="absolute top-[65px] transition duration-1000 w-full left-0 flex justify-center items-center">
                  <div className={`flex left-0 w-[80%] flex-col z-30 pn:max-sm:w-[100%] overflow-y-scroll no-scrollbar mt-2
                 ${data.length === 1 && "h-[70px]"} h-[235px] bg-white rounded-2xl `} >
                    {
                      data.map((d, i, arr) => (
                        <Link
                          key={i}
                          onClick={() => handSave(d?.p._id)}
                          href={`/${d?.p._id}`}
                          className={`flex items-center ${i != arr.length - 1 ? "border-b-2 border-[#0000001e]" : null
                            } bg-white gap-2 p-3`}
                        >
                          <img
                            className="h-[50px] w-[50px] rounded-2xl bg-slate-50"
                            src={d?.dps}
                            alt="image"
                          />
                          <div className="flex flex-col">
                            <div className="font-semibold ">{d?.p.fullname}</div>
                            <div className="text-[12px]">{d?.p.username}</div>
                          </div>
                        </Link>
                      ))
                    }
                  </div>
                </div>}

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
          {recentSearch.length > 0 && <div className=" md:w-[49%] max-w-full mt-10 flex flex-col text-white flex-wrap ">
            <div className="font-semibold select-none p-2">Resent Search:</div>
            <div className="mt-1 md:flex grid grid-cols-2 pp:grid-cols-3 items-center gap-5 md:flex-wrap md:gap-4 md:justify-center md:items-center">
              {recentSearch.map((d, i) => (
                // <div
                //   key={d?.id}
                //   href={`/${d?.id}`}
                //   onClick={() => changeOrder(d?.id)}
                //   className={`flex flex-col items-center w-[150px] justify-center bg-[#121212] ring-1 rounded-2xl p-3`}
                // >
                //   <img
                //     className="h-[50px] w-[50px] rounded-2xl bg-slate-50"
                //     src={d?.dp}
                //     alt="image"
                //   />

                //   <div className="font-semibold mt-1 text-sm">{d?.fullname}</div>
                //   <div className="text-[12px]">{d?.username}</div>
                // </div>
                <Link
                  key={d?.id}
                  href={`/${d?.id}`}
                  onClick={() => changeOrder(d?.id)}
                  className={`flex flex-col items-center w-[150px] justify-center bg-[#121212] ring-1 rounded-2xl p-3`}
                >
                  <img
                    className="h-[50px] w-[50px] rounded-2xl bg-slate-50"
                    src={d?.dp}
                    alt="image"
                  />

                  <div className="font-semibold mt-1 text-sm">{d?.fullname}</div>
                  <div className="text-[12px]">{d?.username}</div>
                </Link>
              ))}

            </div>
          </div>}
        </div>
      </div >

    </>
  );
}

export default page;
