import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaPinterest,
  FaSnapchat,
  FaYoutube,
  FaBars,
  FaUser,
  FaSearch,
  FaHeart,
  FaTag,
  FaShoppingBag,
} from "react-icons/fa";

export default function PrivacyPolicy() {
  return (
    <div className="fixed text-gray-500">
      <div className="w-full max-w-[1300px] m-auto flex justify-between items-center pt-2">
        <div className="flex gap-4">
          <FaFacebook size={20} />
          <FaInstagram size={20} />
          <FaTiktok size={20} />
          <FaPinterest size={20} />
          <FaSnapchat size={20} />
          <FaYoutube size={20} />
        </div>
        <div className="flex gap-3">
          <p>💗Work with us</p>
          <p>💋Evry Club Rewards</p>
        </div>
      </div>
      <div className="text-gray-500 work-sans-400 ">
        <div className="w-full max-w-[1300px] m-auto flex justify-between items-center p-4 ">
          <FaBars size={20} />
          <img src="logo_white.png" className="w-[11%] ml-30" />
          <div className="flex items-center gap-4 text-[20px]">
            <FaUser size={20} />
            <FaSearch size={20} />
            <FaHeart size={20} />
            <FaTag size={20} />
            <FaShoppingBag size={20} />
          </div>
        </div>
      </div>
      <div>
        <img src="EVRYJEWELS.webp" className="w-full" />
      </div>
      <div>
        <img src="shopnow.webp" className="w-full" />
      </div>
      <div className="w-full  m-auto p-4">
        <div className="flex justify-between items-center gap-5">
          <div>
            <img src="IMG_0186.webp" className="w-full" />
          </div>
          <div>
            <img src="EvryJewels-159_2.webp" className="w-full" />
          </div>
          <div>
            <img src="5I8A7648.webp" className="w-full" />
          </div>
          <div>
            <img src="VONG-TAY.webp" className="w-full" />
          </div>
        </div>
      </div>
      <span className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-brightness-100"></span>
      <div className="fixed bottom-15 w-210 h-65 bg-[#c2c6cb] work-sans-400 left-1/2 -translate-x-1/2 flex justify-center items-center border-2 border-white rounded-md text-black">
        <div className="px-15">
          <h1 className="text-[25px]">Privacy Policy</h1>
          <p>
            This website uses cookies to personalize content and ads, provide
            social media features, and analyze our traffic. By clicking Accept,
            you agree to the use of cookies. For more information, please visit
            our{" "}
            <a href="https://evryjewels.com/policies/privacy-policy" className="text-blue-500">
              Privacy Policy
            </a>
          </p>
          <button
          onClick={() => {
            window.open('https://www.instagram.com/linkshim/?u=https%3A%2F%2Fevryjewels.com%2F%3Fref%3DDOHUNG%26fbclid%3DPAZXh0bgNhZW0CMTEAAabuF2RPMVwg4fwJW6BmUUxLr9PCNhatcO82FlFXSvRF9GW987gBLunqMOY_aem_P1ypI-tilujeB4-ua0TRmA&e=AT0vXlQlTAnbp1IYVcMoo8jauSGdrtvHed7dQuRqm924v6qD-Kws3olxLCW6CaL_he2xu2Xa780XgU5yLmOocdCY-AQNA5RKtD9tV3xQrUQQ12Fs_b1CVrSZ8Rfq')
          }}
           className="bg-blue-500 px-3 py-2 rounded-md mt-5 text-white">Accept</button>
        </div>
      </div>
    </div>
  );
}
