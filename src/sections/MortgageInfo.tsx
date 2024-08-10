// import MortgageInfoCard from '../components/MortgageInfoCard'
// import { mortagecards } from '../constants'


// const MortgageInfo = () => {
//   return (
//     <div className="flex sm:flex-row gap-8 flex-col place-items-center px-16">
//     {mortagecards.map((info)=>(
        
//         <MortgageInfoCard
//             heading={info.heading}
//             subtext = {info.subtext}
//         />
//     ))}
//     </div>
//   )
// }

// export default MortgageInfo

import MortgageInfoCard from '../components/MortgageInfoCard'
import { mortagecards } from '../constants'

const MortgageInfo = () => {
  return (
    <div className="flex flex-col gap-8 px-16 my-10">
      <div className="flex flex-wrap justify-center gap-8">
        {mortagecards.slice(0, 3).map((info) => (
          <MortgageInfoCard
            key={info.heading} // Add a key prop
            heading={info.heading}
            subtext={info.subtext}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {mortagecards.slice(3).map((info) => (
          <MortgageInfoCard
            key={info.heading} // Add a key prop
            heading={info.heading}
            subtext={info.subtext}
          />
        ))}
      </div>
    </div>
  )
}

export default MortgageInfo
