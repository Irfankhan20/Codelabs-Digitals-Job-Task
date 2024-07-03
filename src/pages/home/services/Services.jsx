import { GoArrowUpRight } from "react-icons/go";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Services = () => {
  return (
    <section className="bg-[#E0E2E9]">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pl-[70px] py-10">
          {/* 1st card */}
          <div className="rounded-3xl w-[524px] h-[394px] ">
            <button className="px-4 py-2 border border-black text-[#616086] font-medium rounded-3xl">
              Service
            </button>
            <h2 className="py-5 text-3xl font-bold leading-10">
              empowering Health, <br /> Enriching Lives
            </h2>
            <p>
              We are committed to providing high-quality, compassionate care to
              every patient we serve. Whatever your healthcare needs may be, you
              can trust us to be your partner in health and wellness.
            </p>
            <button className="flex gap-2 items-center px-4 py-3 bg-[#FFC637] text-[#201807] rounded-xl mt-9">
              Appointment <GoArrowUpRight></GoArrowUpRight>
            </button>
          </div>

          {/* 2nd card */}
          <div className=" w-[524px] h-[394px] relative">
            <img
              className="rounded-3xl"
              src="https://i.ibb.co/HYzWnz7/Rectangle-27-2.png"
              alt=""
            />
            <div className="absolute top-[230px] rounded-3xl ml-5 bg-[#020043] bg-opacity-60 text-white w-[321px] h-[144px] pl-5 pt-5">
              <h2 className="text-xl font-semibold">Advanced Technology</h2>
              <div className=" flex mt-2">
                <p className="text-[12px] leading-[18px] w-[219px] text-[#aab9c8]">
                  Our surgeons are trained in the latest <br /> robotic surgical
                  techniques, which <br /> allow for greater precision
                </p>
                <span className=" text-[#FFC637] bg-white rounded-full text-[48px] mt-3">
                  <BsArrowUpRightCircleFill />
                </span>
              </div>
            </div>
          </div>

          {/* 3rd card  */}
          <div className=" w-[524px] h-[394px] relative">
            <img
              className="rounded-3xl"
              src="https://i.ibb.co/vC5fnwH/Rectangle-27-1.png"
              alt=""
            />
            <div className="absolute top-[230px] rounded-3xl ml-5 bg-[#020043] bg-opacity-60 text-white w-[321px] h-[144px] pl-5 pt-5">
              <h2 className="text-xl font-semibold">Online Doctor Meet</h2>
              <div className=" flex mt-2">
                <p className="text-[12px] leading-[18px] w-[219px] text-[#aab9c8]">
                  Our surgeons are trained in the latest <br /> robotic surgical
                  techniques, which <br /> allow for greater precision
                </p>
                <span className=" text-[#FFC637] bg-white rounded-full text-[48px] mt-3">
                  <BsArrowUpRightCircleFill />
                </span>
              </div>
            </div>
          </div>

          {/* 4th card */}
          <div className="relative w-[524px] h-[394px]">
            <img
              className="rounded-3xl"
              src="https://i.ibb.co/8Dc6VmT/Rectangle-27.png"
              alt=""
            />
            <div className="absolute top-[230px] rounded-3xl ml-5 bg-[#020043] bg-opacity-60 text-white w-[321px] h-[144px] pl-5 pt-5">
              <h2 className="text-xl font-semibold">Consultancy your health</h2>
              <div className=" flex mt-2">
                <p className="text-[12px] leading-[18px] w-[219px] text-[#aab9c8]">
                  Our surgeons are trained in the latest <br /> robotic surgical
                  techniques, which <br /> allow for greater precision
                </p>
                <span className=" text-[#FFC637] bg-white rounded-full text-[48px] mt-3">
                  <BsArrowUpRightCircleFill />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
