export const profile = {
  name: "Serhii Yatsunenko",
  occupation: "Frontend Web Developer",
  hashtags: ["#developer", "#student", "#readytowork"],
  slogan: "Trying to build software, impress others, and make a tasty coffee.",
  description:
    "I'm Serhii, " +
    getAge("2007-06-15") +
    " years old, a student of Kharkiv National University of Economics studying Computer Science. Frontend developer with a great urge to keep my code clean and get smooth UI. Currently diving deep into React, Next.js, and other modern web technologies. My main task is to provide each user with interactive and catchy websites and applications, ensuring well-maintained, stable, and scalable code.",
  achievements: {
    experience: {
      value: "1+",
      label: "Years of experience",
    },
    completedProjects: {
      value: "3+",
      label: "Projects completed",
    },
    technologies: {
      value: "5+",
      label: "Technologies learned",
    },
  },
  skills: ["html", "css", "java", "javascript", "c#", "sql", "react"],
  education: {
    university: "Kharkiv National University of Economics",
    enrollment: 2024,
    graduation: 2024 + 4,
    specialty: "Computer Science",
  },
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
