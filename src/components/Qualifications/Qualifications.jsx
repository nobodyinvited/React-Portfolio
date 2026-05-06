import {
  IconSchool,
  IconBriefcase,
  IconFileDescription,
} from "@tabler/icons-react";

import { profile } from "../../data/profile";
import { navLink, navTitle } from "../../data/navbar";

import Section from "../Section/Section";
import Container from "../Section/components/Container";
import CourseList from "./CourseList";
import SkillsList from "./SkillsList";
import CertificationsList from "./CertificationsList";

export default function Education() {
  return (
    <Section
      id={navLink.qualifications}
      title={navTitle.qualifications}
      subtitle="Applied expertise and key achievements"
    >
      <div className="flex flex-wrap items-end justify-center gap-6">
        <Container
          title="Skills"
          description="More about my knowledge of programming tools and frameworks"
          icon={<IconBriefcase stroke={2} size="40" />}
        >
          {Object.keys(profile.skills).map((category) => (
            <SkillsList key={category} category={category}></SkillsList>
          ))}
        </Container>

        <Container
          title="Education"
          description="More about my university and completed courses, including specialty"
          icon={<IconSchool stroke={2} size="40" />}
        >
          <p className="font-medium">{profile.education.university}</p>
          <span className="">{profile.education.specialty}</span>
          <p className="text-gray-500">
            {profile.education.enrollment} - expected{" "}
            {profile.education.graduation}
          </p>

          <CourseList />
        </Container>

        <Container
          title="Certifications"
          description="More about my language knowledge, certifications and passed exams"
          icon={<IconFileDescription stroke={2} size="40" />}
        >
          <CertificationsList></CertificationsList>
        </Container>
      </div>
    </Section>
  );
}
