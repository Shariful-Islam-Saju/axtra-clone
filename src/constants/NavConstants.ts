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
          { link: "seo", name: "SEO" },
          { link: "content-marketing", name: "Content Marketing" },
          { link: "social-media", name: "Social Media" },
        ],
      },
      {
        titleToggle: "Agency-Dark",
        items: [
          { link: "digital-marketing", name: "Digital Marketing" },
          { link: "seo", name: "SEO" },
          { link: "content-marketing", name: "Content Marketing" },
          { link: "social-media", name: "Social Media" },
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
          { link: "case-studies", name: "Case Studies" },
          { link: "testimonials", name: "Testimonials" },
          { link: "clients", name: "Clients" },
        ],
      },
      {
        titleToggle: "Team",
        items: [
          { link: "team", name: "Team" },
          { link: "team-details", name: "Team Details" },
          { link: "careers", name: "Careers" },
          { link: "culture", name: "Culture" },
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
          { link: "consulting", name: "Consulting" },
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
          { link: "team-details", name: "Team Details" },
          { link: "leadership", name: "Leadership" },
          { link: "staff", name: "Staff" },
          { link: "advisors", name: "Advisors" },
        ],
      },
    ],
  },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];

export default navLinks;
