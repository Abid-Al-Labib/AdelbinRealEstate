const FindHomeSection = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-row w-full max-w-[990px] justify-center">
        <h1 className="px-5 mt-5 mb-3 text-crimson font-palanquin text-4xl sm:text-[64px] sm:leading-[72px] font-bold">
          Find Your Deals
        </h1>
      </div>

      <div className="w-full flex justify-center items-center">
        <iframe
          src="//maps.lirealtor.com/?id=0e32c039-5f27-43cd-96f5-a7375baed5e8"
          scrolling="no"
          className="w-full h-[2000px] max-w-[990px]"
          frameBorder="0"
        ></iframe>
      </div>

      <div className="w-full flex justify-center mt-4 items-center">
        <iframe
          src="//maps.lirealtor.com/Properties.aspx?id=0e32c039-5f27-43cd-96f5-a7375baed5e8&mode=solds"
          scrolling="yes"
          className="w-full h-[1500px] max-w-[990px]"
          frameBorder="0"
        ></iframe>
      </div>
    </section>
  );
};

export default FindHomeSection;
