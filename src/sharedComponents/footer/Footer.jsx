import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <section className="bg-[#020043]">
      <div className="h-[442px] flex justify-between items-center px-36">
        {/* 1st card  */}
        <div className="">
          <img src="https://i.ibb.co/D4MmrDJ/logo-light.png" alt="" />
          <p className="text-[#CCCCD1] py-5">
            123 Main Street Anytown, USA <br /> Postal Code: 12345{" "}
          </p>
          <p className="text-[#CCCCD1]">
            Support: support@oyolloo.com <br /> (Available : 10:00am to 07:00pm)
          </p>
        </div>
        {/* 2nd card  */}
        <div className="">
          <p className="text-[#CCCCD1] py-1">Home</p>
          <p className="text-[#CCCCD1] py-1">About Us</p>
          <p className="text-[#CCCCD1] py-1">Success Page</p>
          <p className="text-[#CCCCD1] py-1">Terms And Condition</p>
        </div>
        {/* 3rd card  */}
        <div className="">
          <p className="text-[#CCCCD1] py-1">Services</p>
          <p className="text-[#CCCCD1] py-1">Scheduling</p>
          <p className="text-[#CCCCD1] py-1">Contact Us</p>
          <p className="text-[#CCCCD1] py-1">Patient Portal</p>
        </div>
        {/* 4th card  */}
        <div className="">
          <p className="text-[#CCCCD1] text-[14px] leading-[42px]">Follow Us</p>
          <div className=" flex w-[186px] gap-3 text-2xl ">
            <span className="text-[#CCCCD1]">
              <FaFacebook />
            </span>
            <span className="text-[#CCCCD1]">
              <FaInstagram />
            </span>
            <span className="text-[#CCCCD1]">
              {" "}
              <TiSocialLinkedinCircular />
            </span>
            <span className="text-[#CCCCD1]">
              <FaYoutube />
            </span>
          </div>
          <p className="text-[#CCCCD1] text-[14px] leading-[17px] pt-8">
            @docplus 2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
