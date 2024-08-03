const HomeWorthSection = () => {
  return (
    <section className="flex flex-col items-center justify-center" >
        <div className="flex flex-row flex-1 justify-center">
            <h1 className="px-5 mt-5 mb-3 text-crimson font-palanquin text-4xl max-sm:text-[64px] max-sm:leading-[72px] font-bold">
                See What Your Home Is Worth
            </h1>
        </div>
        
        
        <div className="flex flex-row justify-center items-center">
            <div className="w-[990px] h-[1200px]"> 
                <iframe scrolling='no' src='http://valuemap.corelogic.com/ValueMap.aspx?licenseCode=c0227c7338b3418580502078b09df4c4' width={990} height={1200} frameBorder='0'></iframe>
            </div>
        </div>

    </section>
  )
}

export default HomeWorthSection