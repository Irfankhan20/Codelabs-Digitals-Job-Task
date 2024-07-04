const DiscountSection = () => {
  return (
    <section className="bg-[#E0E2E9] pb-32">
      <div className="max-w-7xl mx-auto relative rounded-[32px]">
        <img
          className="w-full  rounded-[32px]"
          src="https://i.ibb.co/6v056WN/Rectangle-32.png"
          alt=""
        />
        <div className=" rounded-[32px]  bg-gradient-to-r from-[#020043] bg-opacity-50 absolute inset-0 pointer-events-none">
          <h2 className="text-white leading-[60px] text-[40px] ">
            Get Your <br /> First Appointment <br /> at 50% Off!
          </h2>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
