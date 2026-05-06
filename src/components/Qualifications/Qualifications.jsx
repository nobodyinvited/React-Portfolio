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
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Container
            title="Skills"
            description="Programming tools and frameworks"
            icon={<IconBriefcase stroke={2} size={40} />}
          >
            <div className="flex flex-col gap-3">
              {Object.keys(profile.skills).map((category) => (
                <SkillsList key={category} category={category} />
              ))}
            </div>
          </Container>

          <Container
            title="Education"
            description="University and specialization"
            icon={<IconSchool stroke={2} size={40} />}
          >
            <div className="flex flex-col">
              <p className="font-medium text-black dark:text-white">{profile.education.university}</p>
              <p className="text-gray-600 dark:text-white">{profile.education.specialty}</p>
              <p className="text-gray-500 dark:text-white text-sm">
                {profile.education.enrollment} – expected{" "}
                {profile.education.graduation}
              </p>
            </div>
            <div className="pt-4">
              <CourseList />
            </div>
          </Container>
        </div>

        <Container
          title="Certifications"
          description="Languages, certificates and exams"
          icon={<IconFileDescription stroke={2} size={40} />}
        >
          <CertificationsList />
        </Container>
      </div>
    </Section>
  );
}
