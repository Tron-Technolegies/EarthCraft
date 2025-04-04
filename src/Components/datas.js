
import talkwithdesigner from "./assets/meet_designer.jpg";
import book_earthcraft from "./assets/book_earthcraft.jpg";
import design_finalization from "./assets/design_finalization.jpg";
import cost_planning from "./assets/cost_planning.jpg";
import make_it_happen from "./assets/project_completion.jpg";

import interenationalconventioncenter1 from "./assets/international_convention_center.jpg";
import interenationalconventioncenter2 from "./assets/international_convention_center_second_img.jpg";
import zaitoon1 from "./assets/zaitoon.jpg";
import zaitoon2 from "./assets/zaitoon_second.jpg";
import zaitoon3 from "./assets/zaitoon_third.jpg";
import dayahospital1 from "./assets/daya_hospital.jpg";
import dayahospital2 from "./assets/dayahospital2.jpg";
import dayahospital3 from "./assets/dayahospital3.jpg";
import dayahospital4 from "./assets/dayahospital4.jpg";
import premier_healths1 from "./assets/premier_healths.jpg";
import premier_healths2 from "./assets/premier_healths2.jpg";
import premier_healths3 from "./assets/premier_healths3.jpg";
import premier_healths4 from "./assets/premier_healths4.jpg";
import premier_healths5 from "./assets/premier_healths5.jpg";
import trinity7d1 from "./assets/trinity7d.jpg";
import trinity7d2 from "./assets/trinity7d2.jpg";
import trinity7d3 from "./assets/trinity7d3.jpg";
import trinity7d4 from "./assets/trinity7d4.jpg";
import swarga1 from "./assets/swarga.jpg";
import swarga2 from "./assets/swarga2.jpg";
import swarga3 from "./assets/swarga3.jpg";

export const newClientData = {
  steps: [
    { number: 1, title: "Talk with Designer", image: talkwithdesigner },
    { number: 2, title: "Book Earthcraft", image: book_earthcraft },
    { number: 3, title: "Design finalization", image: design_finalization },
    { number: 4, title: "Cost planning", image: cost_planning },
    { number: 5, title: "Make It Happen", image: make_it_happen },
  ],
  stepsDetail: [
    {
      id: 1,
      title: "Meet your designer",
      image: talkwithdesigner,
      steps: [
        {
          heading: "It all begins with a form",
          description:
            "Let's get acquainted. The more we learn about you, the better we can design your home.",
          button: "FILL YOUR FORM",
        },
        {
          heading: "Get free consultation",
          description:
            "Talk to your designer and get personalised designs and quote for your dream home.",
          button: "BOOK A CONSULTATION",
        },
      ],
    },
    {
      id: 2,
      title: "Book Earthcraft",
      image: book_earthcraft,
      steps: [
        {
          heading: "Choose your package",
          description:
            "Select from our range of design packages that best suits your needs and budget.",
          button: "VIEW PACKAGES",
        },
      ],
    },
    {
      id: 3,
      title: "Design finalization",
      image: design_finalization,
      steps: [
        {
          heading: "Approve your designs",
          description:
            "Review and finalize the designs created specifically for your space and requirements.",
          button: "LEARN MORE",
        },
      ],
    },
    {
      id: 4,
      title: "Cost planning",
      image: cost_planning,
      steps: [
        {
          heading: "Budget optimization",
          description:
            "We'll help you plan your budget and find the best solutions that match your financial goals.",
          button: "PLAN YOUR BUDGET",
        },
      ],
    },
    {
      id: 5,
      title: "Make It Happen",
      image: make_it_happen,
      steps: [
        {
          heading: "Watch your home transform",
          description:
            "Sit back and relax as we handle everything from execution to the final installation.",
          button: "GET STARTED",
        },
      ],
    },
  ],
};

export const projectsData = {
  title: "Turning Spaces into Stories – Designed for Life, Built with Heart",
  featuredSection: {
    title: "Upcoming Projects",
    description: "Explore our newest villas and interiors, designed to bring beauty, comfort, and style to life.",
    buttonText: "SEE ALL PROJECTS",
    url: "https://caletal.com/d2b-projects/"
  },
  projects: [
    {
      id: 1,
      images: [
        interenationalconventioncenter1,
        interenationalconventioncenter2,
      ],
      location: "Kannur, Kerala",
      title: "International Convention Center",
      url: "https://caletal.com/d2b-project/convention-centre/",
    },
    {
      id: 2,
      images: [zaitoon1, zaitoon2, zaitoon3],
      location: "Thrissur, Kerala",
      title: "Zaitoon Restaurant",
      url: "https://caletal.com/d2b-project/zaitoon-restuarant-ongoing/",
    },
    {
      id: 3,
      images: [dayahospital1, dayahospital2, dayahospital3, dayahospital4],
      location: "Thrissur, Kerala",
      title: "Daya Hospital",
      url: "https://caletal.com/d2b-project/daya-hospital/",
    },
    {
      id: 4,
      images: [
        premier_healths1,
        premier_healths2,
        premier_healths3,
        premier_healths4,
        premier_healths5,
      ],
      location: "Thrissur, Kerala",
      title: "Premier Lab",
      url: "https://caletal.com/d2b-project/premier-lab-ongoing/",
    },
    {
      id: 5,
      images: [trinity7d1, trinity7d2, trinity7d3, trinity7d4],
      location: "Thrissur, Kerala",
      title: "Trinity 7D",
      url: "https://caletal.com/d2b-project/trinity-7d-apartment-ongoing/",
    },
    {
      id: 6,
      images: [swarga1, swarga2, swarga3],
      location: "Thrissur, Kerala",
      title: "Swarga",
      url: "https://caletal.com/d2b-project/thomsons-resort/",
    },
  ],
};