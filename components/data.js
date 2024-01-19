import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Largest networks of smart screens",
  desc: "We partner with the largest location intelligence platforms to accurately track the performance of each of our campaigns via mobile device IDs. Allowing advertisers .",
  image: benefitOneImg,
  bullets: [
    {
      title: "Geo-Targeted Advertising",
      desc: "businesses to target specific geographic areas with their advertisements, ensuring maximum relevance to the local audience.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Real-Time Content Updates ",
      desc: "Advertisers can update their content in real-time, allowing for immediate changes to promotions, discounts, or events. This flexibility ensures that campaigns stay relevant and timely.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "High-Resolution LED Displays",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
