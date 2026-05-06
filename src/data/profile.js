import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconSend,
  IconBrandDiscord,
  IconClockHour9,
  } from "@tabler/icons-react";

export const profile = {
  name: "Serhii Yatsunenko",
  occupation: "Frontend Web Developer",

  hashtags: ["developer", "student", "readytowork"],

  slogan: "Trying to build software, impress others, and make a tasty coffee.",

  description:
    "Frontend developer with an big urge to keep my code clean and get smooth UI. Currently diving deep into React, Node.js, and other modern web technologies. My main task is to provide each user with interactive and catchy websites and applications, ensuring well-maintained, stable, and scalable code.",

  achievements: [
    { value: "1+", label: "Years of experience" },
    { value: "3+", label: "Projects completed" },
    { value: "5+", label: "Technologies learned" },
  ],

  skills: {
    frontend: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "React",
      "Bootstrap",
    ],
    backend: ["SQL", "Java", "Node.js"],
    tools: ["VS Code", "Intellij IDEA", "Git", "GitHub", "Figma"],
  },

  education: {
    university: "Kharkiv National University of Economics",
    enrollment: 2024,
    graduation: 2028,
    specialty: "Computer Science",
    courses: [
      "Algorithms and Data Structure",
      "Databases",
      "Object-Oriented Programming",
      "Computer Networks",
      "Operating Systems",
      "English for IT",
    ],
  },

  links: [
    {
      type: "GitHub",
      url: "https://github.com/nobodyinvited",
      Icon: IconBrandGithub,
    },
    {
      type: "LinkedIn",
      url: "https://linkedin.com/in/syatsunenko",
      Icon: IconBrandLinkedin,
    },
    {
      type: "Telegram",
      url: "https://t.me/wxsmrzx",
      Icon: IconSend,
    },
    {
      type: "Discord",
      url: "https://discordapp.com/users/639496728160239666",
      Icon: IconBrandDiscord,
    },
    {
      type: "Wakatime",
      url: "https://wakatime.com/@nobodyinvited",
      Icon: IconClockHour9,
    },
  ],

  certifications: [
    {
      id: 1,
      language: "english",
      type: "Certificate of Achievement",
      issuer: "Tandem",
      date: "2024-08-12",
      level: "B1",
      url: "#",
    },
    {
      id: 2,
      language: "english",
      type: "Certificate of Participation",
      issuer: "ENGin",
      date: "2025-05-12",
      level: "B1+",
      url: "#",
    },
    {
      id: 3,
      language: "english",
      type: "Certificate of Participation",
      issuer: "Uspace English School",
      date: "2024-05-27",
      level: "A2",
      url: "#",
    },
    {
      id: 4,
      language: "english",
      type: "Certificate of Participation",
      issuer: "Uspace English School",
      date: "2025-03-17",
      level: "B1",
      url: "#",
    },
    {
      id: 5,
      language: "english",
      type: "Certificate of Participation",
      issuer: "Uspace English School",
      date: "2025-10-24",
      level: "B1+",
      url: "#",
    },
  ],
};

export function getAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();

  const hasHadBirthdayThisYear =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() &&
      today.getDate() >= birth.getDate());
  if (!hasHadBirthdayThisYear) age--;

  return age;
}
