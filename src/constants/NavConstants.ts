const navLinks: {
  title: string;
  link: string;
  navDropDown?: {
    titleToggle: string;
    items: {
      link: string;
      name: string;
    }[];
  }[];
}[] = [
  {
    title: "Home",
    link: "/digital-marketing",
    navDropDown: [
      {
        titleToggle: "Agency",
        items: [
          { link: "digital-marketing", name: "Digital Marketing" },
          { link: "digital-marketing", name: "Digital Marketing" },
          { link: "digital-marketing", name: "Digital Marketing" },
          { link: "digital-marketing", name: "Digital Marketing" },
        ],
      },
      {
        titleToggle: "Agency-Dark",
        items: [
          { link: "digital-marketing", name: "Digital Marketing" },
          { link: "digital-marketing", name: "Digital Marketing" },
          { link: "digital-marketing", name: "Digital Marketing" },
          { link: "digital-marketing", name: "Digital Marketing" },
        ],
      },
    ],
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Pages",
    link: "/pages",
    navDropDown: [
      {
        titleToggle: "Portfolio",
        items: [
          { link: "portfolio", name: "Portfolio" },
          { link: "portfolio", name: "Portfolio" },
          { link: "portfolio", name: "Portfolio" },
          { link: "portfolio", name: "Portfolio" },
        ],
      },
      {
        titleToggle: "Team",
        items: [
          { link: "team", name: "Team" },
          { link: "team", name: "Team" },
          { link: "team", name: "Team" },
          { link: "team", name: "Team" },
        ],
      },
    ],
  },
  {
    title: "Services",
    link: "/services",
    navDropDown: [
      {
        titleToggle: "Services",
        items: [
          { link: "servicesv2", name: "Services V2" },
          { link: "servicesv3", name: "Services V3" },
          { link: "servicesv4", name: "Services V4" },
        ],
      },
    ],
  },

  {
    title: "Team",
    link: "/team",
    navDropDown: [
      {
        titleToggle: "Team",
        items: [
          { link: "team", name: "Team Details" },
          { link: "team", name: "Team Details" },
          { link: "team", name: "Team Details" },
          { link: "team", name: "Team Details" },
        ],
      },
    ],
  },
  { title: "Contact", link: "/contact" },
];

export default navLinks;
