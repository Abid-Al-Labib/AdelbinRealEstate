import { constructioninfo } from '../constants'
import ConstructionCard from '../components/ConstructionCard'


const ConstructionInfo = () => {
  return (
    <div className="grid gap-10 grid-cols-1 xl:grid-cols-2 md:grid-cols-2 justify-items-start px-16">
        {constructioninfo.map((info)=>(
            <ConstructionCard
                iconURL={info.iconurl}
                alttag = {info.alt}
                heading={info.heading}
                subtext = {info.subtext}
            />
        ))}
    </div>
  )
}

export default ConstructionInfo