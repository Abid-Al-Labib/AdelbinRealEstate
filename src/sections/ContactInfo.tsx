import facebookwhite from "../assets/icons/facebookwhite.svg"
import mailwhite from "../assets/icons/mailwhite.svg"
import instagramwhite from "../assets/icons/instagramwhite.svg"
import phonewhite from "../assets/icons/phonewhite.svg"


const ContactInfo = () => {
  return (
    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 justify-items-start px-16">
        <div >
            <div className="flex flex-row">
                <div
                    className='flex justify-center items-center w-12 h-12 bg-crimson rounded-full'
                >
                    <a className="hover:marker" href="tel:9173488919">
                        <img src={phonewhite} alt="phone logo" width={28} height={28}/>
                    </a>
                </div>
                <a className="text-lg px-4 flex items-center hover:marker font-bold" href="tel:9173488919">+1 (917) 348-8919</a>
            </div>
        </div>
        <div>
            <div className="flex flex-row">
                <div
                    className='flex justify-center items-center w-12 h-12 bg-crimson rounded-full'
                >
                    <a className="hover:marker" href="mailto:info@adelbin.com">
                        <img src={mailwhite} alt="mail logo" width={28} height={28}/>
                    </a>
                </div>
                <a className="text-lg px-4 flex items-center hover:marker font-bold" href="mailto:info@adelbin.com">info@adelbin.com</a>
            </div>
        </div>
        <div>
            <div className="flex flex-row">
                <div
                    className='flex justify-center items-center w-12 h-12 bg-crimson rounded-full'
                >
                <a className="hover:marker" href="https://www.facebook.com/adelbin.realty/" target="_blank">
                    <img src={facebookwhite} alt="facebooklogo" width={30} height={30}/>
                </a>
              </div>
              <a className="text-lg px-4 flex items-center hover:marker font-bold" href="https://www.facebook.com/adelbin.realty/" target="_blank">Adelbin & Co. Realty</a>
            </div>
        </div>
        <div >
            <div className="flex flex-row">
                <div
                    className='flex justify-center items-center w-12 h-12 bg-crimson rounded-full'
                >
                <a className="hover:marker" href="https://www.instagram.com/adelbin.realty/" target="_blank">
                    <img src={instagramwhite} alt="instagram logo" width={30} height={30}/>
                </a>
                </div>
                <a className="text-lg px-4 flex items-center hover:marker font-bold" href="https://www.instagram.com/adelbin.realty/" target="_blank">adelbin.realty</a>
            </div>
        </div>
    </div>
  )
}

export default ContactInfo