import findhomeworth from "../assets/images/findworth.jpg"

const HomeWorthSection = () => {
  return (
    <section className="flex flex-col border-t-0 border-8 hover:border-yellow-400 border-red-800 items-center justify-center" >
        <table className='relative'>
        <tr>
            <td colSpan={2}>
            <a href='http://valuemap.corelogic.com/ValueMap.aspx?licenseCode=c0227c7338b3418580502078b09df4c4'>
                <img 
                    className="w-full h-auto" 
                    src={findhomeworth} 
                    alt="Find Home Worth"
                />
            </a>
            </td>
        </tr>
        </table>
    </section>
  )
}

export default HomeWorthSection