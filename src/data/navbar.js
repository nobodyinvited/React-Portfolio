export const navbar = [
  { title: "Home", link: "#" },
  { title: "About Me", link: "#about" },
  { title: "Education", link: "#education" },
  { title: "Projects", link: "#projects" },
  { title: "Skills", link: "#skills" },
  { title: "Contacts", link: "#contacts" },
];

export const navLink = Object.fromEntries(
  navbar.map((item) => [item.link, item.link]),
);

export const navTitle = Object.fromEntries(
  navbar.map((item) => [
    item.title.split(" ").join("_").toLowerCase(),
    item.title,
  ]),
);
