"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Logo from "../assets/Logo.png";

// import box from "../assets/Images/Box.png";
// import wait from "../assets/Images/wait.png";
// import logo from "../assets/Images/logo.png";
// import bg from "../assets/Images/bg.png";
import axios from "axios";
import Bio from "../component/Bio";
import Community from "../component/Community";
import Store from "../component/Store";
import Link from "next/link";
function page({ params }) {
  const [coms, setComs] = useState([]);
  const [bio, setBio] = useState();
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState(true)

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://back.grovyo.xyz/api/getprositedetails/${params.id}`
      );
      if (res.data.success) {
        setBio(res.data.data.userDetails);
        setComs(res.data.data.communitywithDps);
        setProduct(res.data.data.productsWithDps);
      } else if (!res.data.success && res.data.message === "User Not Found") {
        setUser(false)
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
          <div className="container w-full" >
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
    )
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-[#000000] to-[#2f2f2f] flex flex-col items-center justify-center">
      {/* header */}
      <div className=" justify-center items-center w-[100%] flex ">
        <div className="  w-full flex justify-between items-center px-2 ">
          <div className={`h-[55px] bg-black top-3 absolute flex text-[#fff] items-center justify-center rounded-3xl ring-2 ring-white`}>
            <div className="h-[55px] w-[55px] ring-2 ring-[#fff] rounded-3xl">
              <img
                src={`${bio?.dp}`}
                alt="dp"
                className="rounded-3xl h-[55px] w-[55px] "
              />
            </div>
            <div className="px-2 pr-4">
              <div className="text-[18px] font-bold"> {bio?.fullname}</div>
              <div className=" text-[12px]">@{bio?.username}</div>
            </div>
          </div>
          {/* <div>
          <div className="bg-white px-4 py-2 font-semibold rounded-full">
            Download 
          </div>
        </div> */}
        </div>
      </div>
      {/* main */}

      <div className="h-[95%] bg-red-400 w-[98%] rounded-2xl no-scrollbar overflow-auto">
        <div className="bg-white text-black overflow-auto no-scrollbar w-full h-full">
          {/* Header */}
          <div>
            {bio?.temp?.length > 0 ? (
              <div
                data-aos="fade-down-right"
                className="w-full bg-green-700"
                dangerouslySetInnerHTML={{ __html: bio?.temp }}
              ></div>
            ) : (
              <div
                data-aos-delay="50"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                data-aos="fade-up"
                className="flex pn:max-md:flex-col-reverse items-center py-4 w-[100%] h-[60%]"
              >
                <div className="flex  flex-col md:w-[50%] h-[100%] justify-center items-center">
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
                </div>
              </div>
            )}

            {/* About section */}
            <div
              data-aos-delay="50"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos="fade-up"
            >
              <Bio bio={bio} />
            </div>

            {/* Store section 2 */}
            <div
              data-aos-delay="50"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos="fade-up"
            >
              {coms.length > 0 ? <Community coms={coms} /> : null}
            </div>

            <div className=" flex justify-center py-6 items-center px-4">
              <div className=" w-[100%] h-[1px] rounded-full bg-slate-700"></div>
            </div>

            {/* Store section */}
            {product.length > 0 ? (
              <div
                data-aos-delay="50"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                data-aos="fade-up"
              >
                <Store product={product} />
              </div>
            ) : (
              <div className="flex flex-col bg-white py-2 w-[100%] h-[70%] justify-evenly items-center space-y-2">
                <div className="flex flex-col pn:max-md:bg-slate-100 mx-8 rounded-2xl justify-center items-center">
                  <div className="flex justify-center items-center h-[60%] w-[60%] py-10">
                    <Image
                      src={Logo}
                      className="md:h-[60%] h-90%] w-90%] md:w-[60%] object-contain"
                    />
                  </div>
                  <div className=" text-black md:text-[24px] text-[18px] font-semibold">
                    No Products Yet
                  </div>
                  <div className=" text-black text-[14px] font-medium ">
                    Once you add Products, they will appear here!
                  </div>
                  <div className=" w-[240px] my-2 h-[40px] flex justify-center items-center bg-black text-white rounded-2xl hover:scale-105 hover:bg-[#3e3e3e] duration-100 text-[14px] ">
                    Add Product
                  </div>
                </div>
              </div>
            )}

            <div
              data-aos-delay="50"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos="fade-up"
              className="py-2 items-center justify-between px-2 w-[100%] mt-4 border-t-2 border-[#f9f9f9]  flex flex-row"
            >
              <div
                data-aos="fade-down-right"
                className="flex flex-row items-center"
              >
                <Image src={Logo} className="h-[35px] w-[35px]" />
                <div className="text-black text-[18px] font-bold font-sans">
                  Grovyo
                </div>
              </div>
              <div className="text-black text-[12px] font-sans">
                Copyright © 2023 Grovyo Templates | All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
