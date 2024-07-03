import { FaStar } from "react-icons/fa";

const OurServices = () => {
  return (
    <section className="bg-[#E0E2E9] ">
      <div className=" pt-7 pb-7 max-w-7xl mx-auto">
        {/* card part  */}
        <div className="flex justify-between items-end relative pt-10">
          <h2 className="text-[#020043] text-5xl font-semibold text-center absolute bottom-56 left-[430px]">
            Comprehensive Care <br /> for Every Patient
          </h2>
          {/* 1st card  */}
          <div className="w-[220px] h-[312px] bg-[#FBFBFB] rounded-2xl pl-5">
            <h2 className="text-4xl font-bold pt-5">90%</h2>
            <p className="py-2">
              Patient satisfaction <br /> rate, reflecting our commitment.
            </p>
            <img
              className="mx-auto pt-2"
              src="https://i.ibb.co/RHZcwDV/Screenshot-2024-07-03-160523.png"
              alt=""
            />
          </div>

          {/* 2nd card */}
          <div className="w-[220px] h-[190px] bg-[#FFFFF5] rounded-2xl pl-5 relative">
            <h2 className="text-4xl font-bold pt-5 ">500+</h2>
            <p className="pt-2">
              Board-certified <br /> doctors
            </p>
            <img
              className="pl-28 absolute bottom-5"
              src="https://i.ibb.co/KGqJw62/Screenshot-2024-07-03-200216.png"
              alt=""
            />
          </div>

          {/* 3rd card */}
          <div className="w-[220px] h-[162px] bg-[#FBFBFB] rounded-2xl pl-5">
            <h2 className="text-4xl font-bold pt-5 flex gap-2">
              4.8{" "}
              <span className=" text-[#FFE03D]">
                <FaStar />
              </span>
            </h2>
            <p className="pt-2">Over 20,000 Patient</p>
            <img
              className="pt-3 "
              src="https://i.ibb.co/w01W0n1/Screenshot-2024-07-03-202009.png"
              alt=""
            />
          </div>

          {/* 4th card */}
          <div className="w-[220px] h-[190px] bg-[#FFFFF5] rounded-2xl relative pl-5">
            <h2 className="text-4xl font-bold pt-5">$5000</h2>
            <p className="pt-2">Money spend for poor patient</p>
            <img
              className="pl-[70px] absolute bottom-7 "
              src="https://i.ibb.co/rv9cXLy/Screenshot-2024-07-03-202649.png"
              alt=""
            />
          </div>

          {/* 5th card */}
          <div className="w-[220px] h-[312px] bg-[#FBFBFB] rounded-2xl pl-5">
            <h2 className="text-4xl font-bold pt-5">50+</h2>
            <p className="pt-2">Free lession video for patient</p>
            <img
              className=" pl-5 pt-10"
              src="https://i.ibb.co/0r8dwVH/Screenshot-2024-07-03-203201.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
