export const navbar = [
  { title: "Home", link: "#" },
  { title: "About Me", link: "#about" },
  { title: "Qualifications", link: "#qualifications" },
  { title: "Projects", link: "#projects" },

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
