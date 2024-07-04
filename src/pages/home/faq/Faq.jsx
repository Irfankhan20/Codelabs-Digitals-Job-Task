import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {
  return (
    <section className="bg-[#E0E2E9] pb-32">
      <div className="max-w-7xl mx-auto ">
        <button className="px-6 py-2 border border-black text-[#616086] font-medium rounded-3xl">
          Faq
        </button>
        <h2 className="text-4xl leading-[54px] font-bold py-8">
          Frequntly Asked Question
        </h2>
        <div className="">
          {/* 1st question box  */}
          <div className=" h-[138px] rounded-lg ">
            <div className="pl-8 pt-2 bg-[#FFFFF5] h-[60px]">
              <h2 className="text-xl leading-[24px] font-semibold ">
                What are your office hours?
              </h2>
            </div>
            <div className="border-b-2"></div>
            <div>
              <p className="text-[14px] leading-[24px] text-[#8D8CAA] bg-[#FFFFFF] pl-8 pt-2 pb-2">
                Our office hours vary by location, but typically we are open
                Monday through Friday from 8:00 AM to 5:00 PM. Some locations
                may offer extended <br /> hours or weekend appointments. Please
                contact your nearest clinic for specific hours.
              </p>
            </div>
          </div>
          {/* 2nd question box  */}
          <div className="h-[60px] bg-[#FFFFF5] pl-8 pt-2 flex justify-between rounded-lg">
            <h2 className="text-xl leading-[24px] font-semibold">
              How can I schedule an appointment?
            </h2>
            <span className="pr-8 text-xl pt-2">
              <IoIosArrowDown />
            </span>
          </div>
          {/* 3rd question box  */}
          <div className="h-[60px] bg-[#FFFFF5] pl-8 pt-2 flex justify-between rounded-lg mt-3">
            <h2 className="text-xl leading-[24px] font-semibold">
              How can I schedule an appointment?
            </h2>
            <span className="pr-8 text-xl pt-2">
              <IoIosArrowDown />
            </span>
          </div>
          {/* 4th question box  */}
          <div className="h-[60px] bg-[#FFFFF5] pl-8 pt-2 flex justify-between rounded-lg mt-3">
            <h2 className="text-xl leading-[24px] font-semibold">
              How can I schedule an appointment?
            </h2>
            <span className="pr-8 text-xl pt-2">
              <IoIosArrowDown />
            </span>
          </div>
          {/* 5th question box  */}
          <div className="h-[60px] bg-[#FFFFF5] pl-8 pt-2 flex justify-between rounded-lg mt-3">
            <h2 className="text-xl leading-[24px] font-semibold">
              How can I schedule an appointment?
            </h2>
            <span className="pr-8 text-xl pt-2">
              <IoIosArrowDown />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
