import React from "react";
// import {
//   BsTwitter,
//   BsYoutube,
//   BsFillEnvelopeFill,
//   BsGithub,
// } from "react-icons/bs";
// import SocialBlock from "./SocialBlock";

function Footer() {
  return (
    <footer className="w-full ">
      {/* <section className="px-2 py-8 max-w-5xl mx-auto ">
        <div className="flex justify-center items-center w-full">
          <a href="https://twitter.com/@ChibuikeNnaji10">
            <BsTwitter className="text-xl mx-3" />
          </a>
          <a href="https://youtube.com/c/Androidpill">
            <BsYoutube className="text-xl mx-3" />
          </a>
          <a href="https://github.com/Max1583">
            <BsGithub className="text-xl mx-3" />
          </a>
          <a href="mailto:chibuikennaji306@gmail.com">
            <BsFillEnvelopeFill className="text-xl mx-3" />
          </a>
        </div>
        <div className="text-center text-sm mt-5">
          2022 Nnaji Chibuike. All rights reserved
        </div>
      </section> */}
      {/* <section className="max-w-6xl p-2  mx-auto text-zinc-50 mb-3">
        <div className="max-w-md mx-auto  flex flex-wrap">
          <SocialBlock type="facebook" />
          <SocialBlock type="youtube" />
        </div>
      </section>{" "} */}
      <div className="text-center text-sm border-t border-t-zinc-700 py-5">
        2022 Androidpill. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
