import benefit1 from "../../../assets/images/benefit1.jpg";
import benefit2 from "../../../assets/images/benefit2.jpg";
import aiAnimationPink from "../../../assets/animations/aiAnimationPink.json";
import aiAnimationPurple from "../../../assets/animations/aiAnimationPurple.json";
import aiAnimationTeal from "../../../assets/animations/aiAnimationTeal.json";

//Benefits
const benefitsDb = [
    {
        id: 1,
        title: "AI LANDING PAGE BUILDER",
        subtitle: "Create inseconds, not hours",
        description: "Just describe your business, and watch as AI transforms it into a stunning landing page. No coding required.",
        image: benefit1,
        alt: "AI Landing Page Builder",
        animation: aiAnimationPink,
        
    },
    {
        id: 2,
        title: "SMART TEMPLATES",
        subtitle: "High-converting designs, automatically",
        description: "Our AI analyzes thousands of successful landing pages to create layouts proven to convert. Get industry-specific designs that speak to your audience.",
        image: benefit2,
        alt: "Smart Templates",
        animation: aiAnimationTeal

    },
    {
        id: 3,
        title: "REAL-TIME CUSTOMIZATION",
        subtitle: "Perfect your page instantly",
        description: "Watch changes happen live as you tweak your design.",
        image: benefit1,
        alt: "Real-time Customization",
        animation: aiAnimationPink
    },
    {
        id: 4,
        title: "SEO OPTIMIZATION",
        subtitle: "Rank higher automatically",
        description: "Built-in AI SEO tools optimize your content, meta tags, and structure for maximum visibility. Get found by the right audience without the technical hassle.",
        image: benefit2,
        alt: "SEO Optimization",
        animation: aiAnimationPurple
    },
    {
        id: 5,
        title: "MOBILE PERFECTION",
        subtitle: "Flawless on every device",
        description: "AI automatically adapts your design for all screen sizes. Get pixel-perfect responsive layouts that look amazing on phones, tablets, and desktops.",
        image: benefit1,
        alt: "Mobile Perfection",
        animation: aiAnimationTeal
    },
];

//Social Proof

const socialProofRow1Db = [
    {
        id: 1,
        name: "Sarah Chen",
        title: "Marketing Director, TechStart",
        comment: "inseconds.ai transformed our website so quickly! The AI-generated landing page doubled our conversion rates instantly. Best investment we've made!",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        gradientColors: ["#c4f1be", "#faceae"],
    },
    {
        id: 2,
        name: "Marcus Rodriguez",
        title: "Founder, Digital Solutions Co",
        comment: "As a startup founder, time is precious. This tool helped us launch faster than ever. The AI understood exactly what we needed.",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        gradientColors: ["#f9d423", "#ff4e50"],
    },
    {
        id: 3,
        name: "Emma Thompson",
        title: "E-commerce Entrepreneur",
        comment: "The SEO optimization is incredible. Our organic traffic increased by 150% in just two months after switching to inseconds.ai.",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
        gradientColors: ["#c4f1be", "#faceae"],
    },

    {
        id: 4,
        name: "David Park",
        title: "Small Business Owner",
        comment: "inseconds.ai made creating our landing page effortless. The AI suggestions were spot-on, and we saw results within days.",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
        gradientColors: ["#f9d423", "#ff4e50"]
    },





];

const socialProofRow2Db = [

    {
        id: 5,
        name: "Lisa Wagner",
        title: "Creative Director, ArtStudio",
        comment: "The mobile-responsive designs are flawless. Our bounce rate dropped 40% since launching our new AI-generated landing page.",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
        gradientColors: ["#c4f1be", "#faceae"]
    },
    {
        id: 6,
        name: "James Mitchell",
        title: "Tech Entrepreneur",
        comment: "Remarkable tool! Generated a professional landing page in minutes. The AI customization options are game-changing.",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
        gradientColors: ["#f9d423", "#ff4e50"]
    },
    {
        id: 7,
        name: "Carlos Ramírez",
        title: "Digital Marketing Lead",
        comment: "The conversion optimization features are brilliant. Our lead generation increased by 80% within the first month.",
        image: "https://randomuser.me/api/portraits/women/7.jpg",
        gradientColors: ["#c4f1be", "#faceae"]
    },

    {
        id: 8,
        name: "John Doe",
        title: "CEO, Tech Solutions Inc",
        comment: "We're thrilled with the results. The AI-generated landing page was a game-changer for our business. Highly recommend!",
        image: "https://randomuser.me/api/portraits"
    },

    {
        id: 9,
        name: "Jane Smith",
        title: "Founder, Marketing Co",
        comment: "The AI-generated landing page was a hit with our team. The real-time customization features are incredibly intuitive.",
        image: "https://randomuser.me/api/portraits"
    },

    {
        id: 10,
        name: "Michael Johnson",
        title: "E-commerce Entrepreneur",
        comment: "The AI SEO tools are top-notch. Our website now ranks on the first page of Google for our target keywords.",
        image: "https://randomuser.me/api/portraits "

    },

    {
        id: 11,
        name: "Emily Davis",
        title: "Marketing Manager",
        comment: "The mobile-responsive designs are fantastic. Our bounce rate decreased significantly after switching to inseconds.ai.",
        image: "https://randomuser.me/api/port"
    },

];

export { benefitsDb, socialProofRow1Db, socialProofRow2Db };
export default benefitsDb; 
