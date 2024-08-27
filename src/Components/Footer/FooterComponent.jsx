import React from "react";
import "./FooterComponent.css";
import { IoMdPaperPlane } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <>
      <section className=" bg-[#000D39]">
        <div className="container">
          {/* ========== Subscribe section start ============ */}
          <div className="w-[608px] m-auto pt-[56px] pb-[65px]">
            <h3 className="font text-center font-semibold text-white text-[35px]">
              Subscribe For Newsletter
            </h3>
            <p className="font text-center text-white pt-[10px] pb-[32px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex justify-center">
              <input
                className="w-[608px] py-4 pl-[30px]"
                type="email"
                placeholder="Enter your email"
              />
              <button className="text-white py-[10px] px-5 bg-[#E12127] font-black rounded-[3px]">
                <IoMdPaperPlane />
              </button>
            </div>
          </div>
          {/* ========== Subscribe section end ============ */}

          <div className="w-full h-[1px] bg-white"></div>

          {/* ========== Social media section start ============ */}
          <div className="mt-[50px] flex justify-between">
            <div className="w-[270px]">
              <div className="flex gap-[5px]">
                <img src="./img/Logo1.png" alt="logo" />
                <h5 className="font font-bold text-[40px] text-white">
                  News<span className="text-[#E12127]">Pro</span>
                </h5>
              </div>
              <p className="font leading-7 text-[17px] font-normal text-white pt-[42px] pb-[33px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
              <div className="flex gap-[10px]">
                <div className="bg-[#686b7a] rounded-full text-white p-2 hover:text-[#000D39] hover:bg-white">
                  <Link to="">
                    <FaFacebookF />
                  </Link>
                </div>
                <div className="bg-[#686b7a] rounded-full text-white p-2 hover:text-[#000D39] hover:bg-white">
                  <Link to="">
                    <FaTwitter />
                  </Link>
                </div>
                <div className="bg-[#686b7a] rounded-full text-white p-2 hover:text-[#000D39] hover:bg-white">
                  <Link to="">
                    <FaInstagram />
                  </Link>
                </div>
                <div className="bg-[#686b7a] rounded-full text-white p-2 hover:text-[#000D39] hover:bg-white">
                  <Link to="">
                    <BsYoutube />
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font font-semibold text-[25px] text-white">
                Useful Link
              </h5>
              <div className="font font-normal text-[17px] leading-[35px] text-white pt-[27px]">
                <p className="hover:text-[#E12127]">Contact Us</p>
                <p className="hover:text-[#E12127]">About Us </p>
                <p className="hover:text-[#E12127]">Fox Around the World</p>
                <p className="hover:text-[#E12127]">Advertise With Us</p>
                <p className="hover:text-[#E12127]">Ad Choices</p>
                <p className="hover:text-[#E12127]">Media Relations</p>
                <p className="hover:text-[#E12127]">Compliance</p>
              </div>
            </div>
            <div>
              <h5 className="font font-semibold text-[25px] text-white">
                Top Categories
              </h5>
              <div className="font font-normal text-[17px] leading-[35px] text-white pt-[27px]">
                <p className="hover:text-[#E12127]">Fashion</p>
                <p className="hover:text-[#E12127]">Technology</p>
                <p className="hover:text-[#E12127]">Lifestyle</p>
                <p className="hover:text-[#E12127]">Travel</p>
                <p className="hover:text-[#E12127]">Travel</p>
                <p className="hover:text-[#E12127]">World</p>
                <p className="hover:text-[#E12127]">Health</p>
              </div>
            </div>
            <div>
              <h5 className="font font-semibold text-[25px] text-white">
                Latest News
              </h5>
              <div className="flex gap-[10px] pt-[41px] pb-[30px]">
                <div className="bg-slate-400 w-[100px] h-[100px] rounded-[3px]"></div>
                <div>
                  <h6 className="font font-semibold text-[15px] leading-[20px] text-[#FF005C] underline">
                    Lifestyle
                  </h6>
                  <div className="flex gap-[6px] text-white mt-1 mb-[6px]">
                    <div>
                      <FaRegClock />
                    </div>
                    <div>
                      <p className="font text-[13px] font-medium">
                        July 02, 2021
                      </p>
                    </div>
                  </div>
                  <p className="w-[177px] font font-semibold text-[17px] leading-6 text-white">
                    Brings big changes in people's lives.
                  </p>
                </div>
              </div>
              <div className="flex gap-[10px] pb-[30px]">
                <div className="bg-slate-400 w-[100px] h-[100px] rounded-[3px]"></div>
                <div>
                  <h6 className="font font-semibold text-[15px] leading-[20px] text-[#FF005C] underline">
                    Fashion
                  </h6>
                  <div className="flex gap-[6px] text-white mt-1 mb-[6px]">
                    <div>
                      <FaRegClock />
                    </div>
                    <div>
                      <p className="font text-[13px] font-medium">
                        July 02, 2021
                      </p>
                    </div>
                  </div>
                  <p className="w-[177px] font font-semibold text-[17px] leading-6 text-white">
                    Brings big changes in people's lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ========== Social media section start ============ */}
        </div>
      </section>
    </>
  );
};

export default FooterComponent;
