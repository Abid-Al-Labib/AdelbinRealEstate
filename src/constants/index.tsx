
import house from "../assets/icons/house.svg"
import tools from "../assets/icons/tools.svg"
import banknotes from "../assets/icons/banknotes.svg"
import facebook from "../assets/icons/facebook.svg"
import instagram from "../assets/icons/instagram.svg"
import brownhouse from "../assets/images/brownHouse.jpg"
import mortgageimg from "../assets/images/mortgageimg.jpg"
import constructionimg from "../assets/images/constructionhouse.jpg"
import gears from "../assets/icons/gears-svgrepo-com.svg"
import paintroller from "../assets/icons/construction-paint-tool-svgrepo-com.svg"
import constructionsaw from "../assets/icons/constructionsaw.svg"
import houseblack from "../assets/icons/houseblack.svg"
import constructionframes from "../assets/images/constructionframes.jpg"
import constructioninside from "../assets/images/carpenter-man-working-roof.jpg"
import constructioncement from "../assets/images/constructionimg.jpg"
import signingdocument from "../assets/icons/signingdocument.svg"
import handshakeapproval from "../assets/icons/handshakeapproval.svg"
import welcomehome from "../assets/icons/welcomehome.svg"
import personhome from "../assets/icons/personhome.svg"
import mortgagekeys from "../assets/images/mortgage-keys.jpg"
import mortgagehighfive from "../assets/images/mortgage-highfive.jpg"
import mortgagesigning from "../assets/images/mortgage-signing.jpg"
import home from "../assets/images/home.jpg"
import sales1 from "../assets/images/sales1.jpeg"
import sales2 from "../assets/images/sales2.jpg"
import sales3 from "../assets/images/sales3.jpg"
import sales4 from "../assets/images/sales4.jpg"
import redhouse from "../assets/images/redHouse.jpg"

export const navLinks = [
    { 
        href: "#home",
        label: "Home",
        to: "/"
    },
    { 
        href: "#sales",
        label: "Real Estate",
        to: "/RealEstates"
    },
    { 
        href: "#construction",
        label: "Construction",
        to: "/Construction"
     },
    { 
        href: "#Mortgage",
        label: "Mortgage",
        to: "/Mortgage"
    },
    { 
        href: "#contact-me", 
        label: "Contact",
        to: "/ContactMe"
    }
];

export const statistics = [
    { value: '11+', label: 'Years' },
    { value: '300+', label: 'Clients' },
    { value: '$58k', label: 'Savings on avg.' },
];


export const services = [
    {
        iconURL: house,
        url: "/RealEstates",
        label: "Real Estate Sales",
        subtext: "Whether you’re buying or selling real estate, with Adelbin, you can be confident you’ll secure the best deals every time. Your confidence is guaranteed through actions, find a partner in Adelbin and help your bottom line."
    },
    {
        iconURL: tools,
        url: "/Construction",
        label: "Construction",
        subtext: "Licensed General Contractor Serving New York City & Nassau County. Delivering exceptional quality and innovative practices to ensure your project stands the test of time, all at the best price." 

    },
    {
        iconURL: banknotes,
        url: "/Mortgage",
        label: "Mortgage",
        subtext: " Secure funding for your real estate ventures quickly and efficiently with personalized mortgage solutions. Start with a no-obligation discussion to explore the best products for your unique situation and make your dream purchase a reality!"
    }
]

export const footerLinks = [

            { name: "info@adelbin.com", link: "mailto:info@adelbin.com" },
            { name: "917-348-8919", link: "tel:9173488919" },

];

export const socialMedia = [
    { src: facebook, alt: "facebook logo", url:"https://www.facebook.com/adelbin.realty/" },
    { src: instagram, alt: "instagram logo", url: "https://www.instagram.com/adelbin.realty/" }
];


export const reviews = [
    { 
        feedback: "Adel is the most responsive and sincere real estate agent I have met. He is always patient with my queries.",
        customerName: "Abid Al Labib"
    },
    {
        feedback:"Amazing experience! Adel helped me find the perfect home at a great price. The process was smooth and stress-free. Best part was when he said he was my biggest fan",
        customerName: "Lionel Messi"
    },
    {
        feedback: "Highly recommend! Adel's expertise and dedication made selling my property easy and profitable. Exceptional service all around.",
        customerName: "Cristiano Ronaldo"
    },
    {
        feedback: "Fantastic service! I found my dream home quickly and at an incredible deal. Adel's team is knowledgeable and supportive.",
        customerName: "Kylian Mbappe"
    },
    {
        feedback: "The best real estate experience I've ever had. Adel handled everything efficiently, ensuring I got the best value for my sale.",
        customerName: "Mohammed and family"
    },
    {
        feedback: "Top-notch construction services! Adel completed my project on time and within budget. The quality and attention to detail were impressive.",
        customerName: "Mr. Nobody"
    }
]

export const heroImages = [
    brownhouse,constructionimg,mortgageimg,home
]

export const constructionHeroImages = [
    constructionframes,constructioncement,constructioninside
]

export const mortgageHeroImages = [
    mortgageimg,mortgagekeys,mortgagehighfive,mortgagesigning
]

export const realEstateHeroImages = [
    redhouse, sales1, sales2, sales3, sales4
]


export const constructioninfo = [
    {
        iconurl: houseblack,
        alt:"house-home renovation",
        heading: "Home Renovation",
        subtext: "Please fill out this part with relevant information. This is a dummy text only for the purpose of building the card component"
    },
    {
        iconurl: gears,
        alt: "gears-remodeling services",
        heading: "Remodeling Services",
        subtext: "Please fill out this part with relevant information. This is a dummy text only for the purpose of building the card component"
    },
    {
        iconurl: paintroller,
        alt: "paint-roller-repainting services",
        heading: "Repainting Services",
        subtext: "Please fill out this part with relevant information. This is a dummy text only for the purpose of building the card component"
    },
    {
        iconurl: constructionsaw,
        alt: "construction man with saw - New Construction",
        heading: "New Construction",
        subtext: "Please fill out this part with relevant information. This is a dummy text only for the purpose of building the card component"
    }
]

export const mortageSteps = [
    {
        step: "STEP 1",
        Heading: "CONTACT AND APPLY",
        iconURL: signingdocument,
        Description: "Let's get started! Jump into the home financing process with our easy online application."
    },
    {
        step: "STEP 2",
        Heading: "GET APPROVED",
        iconURL: handshakeapproval,
        Description: "Our team receives your home loan application, reviews it, and works to get you approved in no time."
    },
    {
        step: "STEP 3",
        Heading: "CLOSING DAY",
        iconURL: personhome,
        Description: "The big day is here! We'll go through all the details and close on your new home or refinance."
    },
    {
        step: "STEP 4",
        Heading: "WELCOME HOME",
        iconURL: welcomehome,
        Description: "Welcome to your happy place! It's time to make amazing memories in your beautiful new home."
    }
]


export const mortagecards = [
    {
        heading:"Refinancing Options",
        subtext:"This is a dummy text! Replace the text with something that is relevant. This is a dummy text! Replace the text with something that is relevant."
    },
    {
        heading:"Credit Repair Assistance",
        subtext:"This is a dummy text! Replace the text with something that is relevant. This is a dummy text! Replace the text with something that is relevant."
    },
    {
        heading:"Customized Loan Package",
        subtext:"This is a dummy text! Replace the text with something that is relevant. This is a dummy text! Replace the text with something that is relevant."
    },
    {
        heading:"First-Time Homebuyer Programs",
        subtext:"This is a dummy text! Replace the text with something that is relevant. This is a dummy text! Replace the text with something that is relevant."
    },
    {
        heading:"No Income Verification Loans",
        subtext:"This is a dummy text! Replace the text with something that is relevant. This is a dummy text! Replace the text with something that is relevant."
    },
    
]

export const disclaimer = "Fair Housing- Adelbin via its affiliates encourages and supports an affirmative advertising and marketing program in which there are no barriers to obtaining housing because of race, color, religion, sex, handicap, familial status, or national origin. All residential real estate information on the website from which this page is linked is subject to the Federal Fair Housing Act Title VIII of the Civil Rights Act of 1968, as amended, which makes it illegal to advertise “any preference, limitation, or discrimination because of race, color, religion, sex, handicap, familial states, or national origin, or intention to make any such preference, limitation or discrimination.” Your state or local jurisdiction may impose additional requirements. We are committed to the letter and spirit of the United States policy for the achievement of equal housing opportunity."