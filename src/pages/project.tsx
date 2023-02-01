import styled from "styled-components";
import Card from "../components/card";
import { Container, slideLeft, slideUp } from "../styles/main.styles";

export const projectResult = [
  {
    id: 1,
    name: "Health Learning Platform",
    description:
      "this web apps is use for health cader to learn about medical and it's same with e-learning",
    techStack: ["React", "Redux-Toolkit", "Tailwind CSS"],
    platform: "Web Apps",
    image: "images/hlp.png",
  },

  {
    id: 2,
    name: "PPID Kementerian Perdagangan RI",
    description:
      "this apps for people who want get information service and also we can send petition letter.",
    techStack: ["React Native", "Redux-Toolkit", "Plain Styling"],
    platform: "Mobile (iOS)",
    image: "images/ppid-kemendag.png",
  },

  {
    id: 3,
    name: "Smart Dashboard",
    description:
      "dashboard for campus to monitoring all device IoT and we can customize the device from dashboard.",
    techStack: [
      "React",
      "NextJS",
      "Redux-Toolkit",
      "Tailwind CSS",
      "Highcharts",
      "Next-Auth",
    ],
    platform: "Web Apps",
    image: "images/dashboard.png",
  },
];

function ProjectPage() {
  return (
    <Container>
      <ProjectWrapper>
        <Heading1>Projects</Heading1>
        <DescriptionText>
          I've been working for 1.5 years making a web apps and mobile apps for
          individual and companies. here is my several project that i made
        </DescriptionText>

        <CardContainer>
          {projectResult.map((data) => {
            return (
              <Card
                id={data.id}
                name={data.name}
                description={data.description}
                techStack={data.techStack}
                image={data.image}
              />
            );
          })}
        </CardContainer>
      </ProjectWrapper>
    </Container>
  );
}

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const DescriptionText = styled.p`
  font-size: ${(props) => props.theme.fontSize.lg};
  text-align: center;
  opacity: 0;
  animation: ${slideUp} 0.7s ease-in-out;
  animation-fill-mode: forwards;
`;

const Heading1 = styled.h1`
  font-size: ${(props) => props.theme.fontSize["5xl"]};
  font-weight: 800;
  margin-bottom: 30px;
  opacity: 0;
  animation: ${slideUp} 0.7s ease-in-out;
  animation-fill-mode: forwards;
  text-align: center;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 30px;
  margin-top: 20px;
  padding: 3px;

  div {
    opacity: 0;
  }

  div:nth-child(1){
    animation: ${slideLeft} 0.7s ease-in-out;
    animation-delay: .7s;
    animation-fill-mode: forwards;
  }

  div:nth-child(2){
    animation: ${slideLeft} 0.7s ease-in-out;
    animation-delay: .9s;
    animation-fill-mode: forwards;
  }

  div:nth-child(3){
    animation: ${slideLeft} 0.7s ease-in-out;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }

  @media only screen and (min-width: 700px) {
    grid-gap: 15px;
    padding: 0 30px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default ProjectPage;
