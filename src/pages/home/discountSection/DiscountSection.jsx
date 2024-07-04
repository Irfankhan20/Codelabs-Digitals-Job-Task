import { GoArrowUpRight } from "react-icons/go";

const DiscountSection = () => {
  return (
    <section className="bg-[#E0E2E9] pb-32">
      <div className="max-w-7xl mx-auto relative rounded-[32px]">
        <img
          className="w-full  rounded-[32px]"
          src="https://i.ibb.co/6v056WN/Rectangle-32.png"
          alt=""
        />
        <div className=" rounded-[32px]  bg-gradient-to-r from-[#020043] to-[150%] bg-opacity-50 absolute inset-0 pointer-events-none pl-32 flex justify-between ">
          <div>
            <h2 className="text-white leading-[60px] text-[40px] font-semibold pt-32">
              Get Your <br /> First Appointment <br /> at 50% Off!
            </h2>
            <div className="flex gap-5">
              <button className="flex gap-2 items-center px-4 py-3 bg-[#FFC637] text-[#201807] rounded-xl mt-9">
                Appointment <GoArrowUpRight></GoArrowUpRight>
              </button>
              <button className="flex gap-2 items-center px-4 py-3 border border-white text-white rounded-xl mt-9">
                Learn More <GoArrowUpRight></GoArrowUpRight>
              </button>
            </div>
          </div>
          <div className="w-[124px] h-[33px] mr-20 mt-[70px]">
            <img src="https://i.ibb.co/D4MmrDJ/logo-light.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
