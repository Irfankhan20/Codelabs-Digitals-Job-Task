import { FaStar, FaCircle } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="bg-[#E0E2E9] pt-32 pb-32">
      <div className="max-w-7xl mx-auto ">
        <button className="px-4 py-2 border border-black text-[#616086] font-medium rounded-3xl">
          Testimonial
        </button>
        <h2 className=" text-4xl font-bold py-6">What they say about us</h2>

        {/* card container */}
        <div className="flex justify-between">
          {/* 1st card  */}
          <div className="bg-[#FFFFF5] w-[400px] h-[241px] px-5 py-4">
            <h2 className="text-xl font-bold leading-28.5px">
              Expertise and Compassion <br /> Combined
            </h2>
            <p className="text-[#4D4C7B] text-[12px] leading-[18px] py-4">
              I can not thank enough for their exceptional care. The doctors and
              staff showed incredible expertise and compassion throughout my
              treatment journey. I felt truly cared for every step of the way.
            </p>
            <div className="flex gap-2">
              <img
                src="https://i.ibb.co/2M85Zkg/Screenshot-2024-07-04-021049.png"
                alt=""
              />
              <div>
                <h2>
                  <span className="font-semibold">Sarah D,</span> IT
                  Professional
                </h2>
                <div className="text-[#FFE03D] flex gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>

          {/* 2nd card  */}
          <div className="bg-[#FFFFF5] w-[400px] h-[241px] px-5 py-4">
            <h2 className="text-xl font-bold leading-28.5px">
              Life-Saving Care, Life-Changing <br /> Experience
            </h2>
            <p className="text-[#4D4C7B] text-[12px] leading-[18px] py-4">
              My experience at [Healthcare Provider Name] was life-changing. The
              prompt and accurate diagnosis, coupled with the advanced
              treatments they provided, saved my life.
            </p>
            <div className="flex gap-2">
              <img
                src="https://i.ibb.co/2M85Zkg/Screenshot-2024-07-04-021049.png"
                alt=""
              />
              <div>
                <h2>
                  <span className="font-semibold">Michael R,</span> Business
                  Executive
                </h2>
                <div className="text-[#FFE03D] flex gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>

          {/* 3rd card  */}
          <div className="bg-[#FFFFF5] w-[400px] h-[241px] px-5 py-4">
            <h2 className="text-xl font-bold leading-28.5px">
              A Partner in Health and <br /> Wellness
            </h2>
            <p className="text-[#4D4C7B] text-[12px] leading-[18px] py-4">
              As a busy professional, I appreciate the convenience and quality
              of care I receive at [Healthcare Provider Name]. From telemedicine
              consultations to routine check-ups, they have become my trusted
              partner in health and.
            </p>
            <div className="flex gap-2">
              <img
                src="https://i.ibb.co/2M85Zkg/Screenshot-2024-07-04-021049.png"
                alt=""
              />
              <div>
                <h2>
                  <span className="font-semibold">David S,</span> Lawyer
                </h2>
                <div className="text-[#FFE03D] flex gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-1 justify-center pt-3">
          <span className="text-[#FFFFF5]">
            <FaCircle />
          </span>
          <span className="text-[#FFC637]">
            <FaCircle />
          </span>
          <span className="text-[#FFFFF5]">
            <FaCircle />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
