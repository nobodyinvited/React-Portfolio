import { profile } from "../../data/profile";
import Button from "../Header/Button";
import Container from "../Section/components/Container";
import Section from "../Section/Section";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="What I’ve been building lately"
    >
      <div className="flex flex-row flex-wrap justify-center gap-6">
        <Container
          title="Coming Soon"
          description="I'm currently working on a few exciting projects. Stay tuned for case studies and code walkthroughs!"
        >
          <div className="py-2">
            <Button linkTo={profile.links?.find(p => p.type === "GitHub")?.url || "#"}>Follow My Progress</Button>
          </div>
        </Container>
      </div>
    </Section>
  );
}
