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
          <div className="w-[220px] h-[312px] bg-[#FBFBFB] border border-red-600 rounded-2xl pl-5">
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
          <div className="w-[220px] h-[190px] bg-[#FBFBFB] border border-red-600 rounded-2xl pl-5">
            <h2 className="text-4xl font-bold pt-5 ">500+</h2>
            <p className="py-2 ">Board-certified doctors</p>
            <img
              className="flex justify-end"
              src="https://i.ibb.co/KGqJw62/Screenshot-2024-07-03-200216.png"
              alt=""
            />
          </div>
          <div className="w-[220px] h-[162px] bg-[#FBFBFB] border border-red-600 rounded-2xl"></div>
          <div className="w-[220px] h-[190px] bg-[#FBFBFB] border border-red-600 rounded-2xl"></div>
          <div className="w-[220px] h-[312px] bg-[#FBFBFB] border border-red-600 rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
