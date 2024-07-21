
import house from "../assets/icons/house.svg"
import tools from "../assets/icons/tools.svg"
import banknotes from "../assets/icons/banknotes.svg"
import facebook from "../assets/icons/facebook.svg"
import instagram from "../assets/icons/instagram.svg"

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#sales", label: "Sales" },
    { href: "#construction", label: "Construction" },
    { href: "#loan", label: "Loan" },
    { href: "#contact-me", label: "Contact" }
];

export const statistics = [
    { value: '11+', label: 'Years' },
    { value: '300+', label: 'Clients' },
    { value: '$58k', label: 'Savings on avg.' },
];


export const services = [
    {
        iconURL: house,
        label: "Real Estate Sales",
        subtext: "Get the best deals with the best prices"
    },
    {
        iconURL: tools,
        label: "Construction",
        subtext: "Build your dreams into reality"
    },
    {
        iconURL: banknotes,
        label: "Lending",
        subtext: "something to something to something"
    }
]

export const footerLinks = [
    {
        title: "Services",
        links: [
            { name: "Real Estate Sales", link: "/" },
            { name: "Construction", link: "/" },
            { name: "Lending", link: "/" },
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