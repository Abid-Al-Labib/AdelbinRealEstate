import { mortageSteps } from '../constants'

const MortgageSteps = () => {
  return (
    <section className='bg-blue-50 p-5'>
        <div className='flex flex-col justify-center items-center mt-6'>
            <p className='text-lg font-montserrat text-center'>Finance Your Next Home With Our</p>
            <h2 className='font-bold text-2xl font-montserrat text-center mt-2'>Simple Application & Fast Approval Process</h2>
            <div className='text-center font-montserrat mt-2 sm:w-[780px]'>
                <p>
                    We make financing your home simple and seamless with our user-friendly online platform,
                    enabling you to easily apply and get pre-qualified for a home loan in no time.
                    Our mortgage specialists offer prompt feedback and support,
                    ensuring a smooth and efficient home financing journey.
                </p>
            </div>
            
        </div>
        
        <div className="flex flex-1 sm:flex-row items-center my-6 flex-col">
            {mortageSteps.map((step)=>(
                <div className="flex flex-col my-6 items-center w-64 mx-4 hover:shadow-inner p-2 justify-center">
                    <img src={step.iconURL} width={70} height={70} alt="step icon" />
                    <h2 className="mt-2">{step.step}</h2>
                    <h2 className="mt-2">{step.Heading}</h2>
                    <p className="mt-4 text-center">{step.Description}</p>
                </div>
            ))}
        </div>
    </section>

  )
}

export default MortgageSteps