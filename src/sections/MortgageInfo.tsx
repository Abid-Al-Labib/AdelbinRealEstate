import MortgageInfoCard from '../components/MortgageInfoCard'
import MortgageInfoCardCreditRepair from '../components/MortgageInfoCardCreditRepair'
import MortgageInfoCardCustomizedLoan from '../components/MortgageInfoCardCustomizedLoan'
import MortgageInfoCardFirstTimeHome from '../components/MortgageInfoCardFirstTimeHome'
import MortgageInfoCardNoIncome from '../components/MortgageInfoCardNoIncome'
import MortgageInfoCardRefinancing from '../components/MortgageInfoCardRefinancing'
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
      <div className="flex flex-wrap justify-center gap-8">
        <MortgageInfoCardRefinancing/>
        <MortgageInfoCardCustomizedLoan/>
        <MortgageInfoCardCreditRepair/>  
        <MortgageInfoCardFirstTimeHome/>
        <MortgageInfoCardNoIncome/>
      </div>

    </div>
  )
}

export default MortgageInfo
