import { GoArrowUpRight } from "react-icons/go";

const WhoWeAre = () => {
  return (
    <section className="bg-[#E0E2E9] pt-32 pb-32 ">
      <div className="max-w-7xl mx-auto ">
        {/* main part  */}
        <div className="flex gap-[142px] w-full relative">
          <div className="absolute bg-[#343268] w-[395px] h-[210px] rounded-2xl px-10 pt-10 left-[620px] top-[250px]">
            <h2 className="text-xl font-semibold pb-3 text-white">
              Our mission is simple
            </h2>
            <p className=" text-[#babad9]">
              To provide high-quality healthcare services <br /> that are
              accessible, personalized and patient-centered.
            </p>
          </div>
          {/* left part */}
          <div className="w-1/2">
            <button className="px-4 py-2 border border-black text-[#616086] font-medium rounded-3xl">
              Who we are
            </button>
            <h2 className="py-5 text-3xl font-bold leading-10">
              We Help To Get <br /> Soulotions
            </h2>
            <p className="leading-7">
              We are proud to be a trusted healthcare provider in our community,
              and we look forward to serving you and your family with
              excellence, integrity, and compassion. Your health is our
              priority, and we are here for you every step of the way. We
              believe in treating each paatient with dignity, respect,and
              empathy, ensuring that they receive the attention adn care they
              deserve.
            </p>
            <button className="flex gap-2 items-center px-4 py-3 bg-[#FFC637] text-[#201807] rounded-xl mt-9">
              Learn more <GoArrowUpRight></GoArrowUpRight>
            </button>
          </div>
          {/* right part  */}
          <div className="w-1/2">
            <img src="https://i.ibb.co/NmfsKFx/Rectangle-24.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
