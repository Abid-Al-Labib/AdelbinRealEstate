
import house from "../assets/icons/house.svg"
import tools from "../assets/icons/tools.svg"
import banknotes from "../assets/icons/banknotes.svg"
import facebook from "../assets/icons/facebook.svg"
import instagram from "../assets/icons/instagram.svg"

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
        subtext: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    },
    {
        iconURL: tools,
        url: "/Construction",
        label: "Construction",
        subtext: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
    },
    {
        iconURL: banknotes,
        url: "/Mortgage",
        label: "Mortgage",
        subtext: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
    }
]

export const footerLinks = [
    {
        title: "Services",
        links: [
            { name: "Real Estate", link: "/RealEstates" },
            { name: "Construction", link: "/Construction" },
            { name: "Mortgage", link: "/Mortgage" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "adelbin@gmail.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: instagram, alt: "instagram logo" }
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