
const FindHomeSection = () => {
    return (
      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-row flex-1 w-[990px] justify-center">
            <h1 className="px-5 mt-5 mb-3 text-crimson font-palanquin text-4xl max-sm:text-[64px] max-sm:leading-[72px] font-bold">
                Find Your Deals
            </h1>
        </div>
        
        <iframe src="//maps.lirealtor.com/?id=0e32c039-5f27-43cd-96f5-a7375baed5e8" scrolling="no" width="100%"></iframe>
        <iframe src="//maps.lirealtor.com/Properties.aspx?id=0e32c039-5f27-43cd-96f5-a7375baed5e8" scrolling="no" width="100%"></iframe>
        <iframe src="//maps.lirealtor.com/Properties.aspx?id=0e32c039-5f27-43cd-96f5-a7375baed5e8&mode=openhouses" scrolling="no" width="100%"></iframe>
        <iframe src="//maps.lirealtor.com/Properties.aspx?id=0e32c039-5f27-43cd-96f5-a7375baed5e8&mode=solds" scrolling="no" width="100%"></iframe>
      </section>
    )
  }
  
  export default FindHomeSection