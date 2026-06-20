"use client"

import ExperienceItem, { ExperienceItemProps } from "./ExperienceItem";

export default function ExperienceList() {
  const experiences: ExperienceItemProps[] = [
    {
      role: "Software Developer",
      companyName: "Pillar Technology",
      location: "Jakarta",
      workType: "Full-Time",
      startDate: "September 2025",
      endDate: "Now",
      description: (
        <div>
          <p>
            I am a software developer working on ClearPath, a network and GIS
            data visualization and analysis tool designed for mission planning.
            My work involves:
          </p>
          <ul className="list-disc list-inside">
            <li>
              Designing and developing interactive frontends that are responsive
              and optimized for real-time map and network data visualization.
            </li>
            <li>
              Integrating spatial and network data to support informed
              decision-making.
            </li>
            <li>
              Applying industry best practices in software development,
              including clean architecture, testing, and performance
              optimization.
            </li>
            <li>
              Collaborating with cross-functional teams to ensure solutions meet
              operational needs and provide a smooth user experience.
            </li>
          </ul>
        </div>
      ),
    },
    {
      role: "Frontend Developer",
      companyName: "CircularDiagnostics",
      location: "Australia",
      workType: "Remote",
      startDate: "June 2025",
      endDate: "August 2025",
      description: (
        <div>
          <p>
            As a Frontend Developer, I focus on building web applications that
            support a circular economy through survey collection, partner
            management, and landing page development. Over the past two months,
            I have been responsible for implementing user interfaces using
            React.js, React Router DOM, SCSS (CSS preprocessor), and Zustand for
            state management.
            <br />
            <br />
            My role involves ensuring the UI aligns with the provided designs,
            developing secure authentication systems, and delivering a
            responsive, functional experience across different modules. The
            application I contribute to facilitates structured survey collection
            across various branches or companies, enabling detailed mapping and
            analysis of each segment.
            <br />
            <br />I work collaboratively within a cross-functional team of
            three, including specialists in DevOps, UI/UX design, and backend
            development, to deliver a robust and purpose-driven solution.
          </p>
        </div>
      ),
    },
    {
      role: "Frontend Developer",
      companyName: "PT Skyshi Indonesia",
      location: "Australia",
      workType: "Remote",
      startDate: "Jul 2025",
      endDate: "Apr 2025",
      description: (
        <div>
          <p>
            I contributed to PlexaPro, a comprehensive cloud-based ERP
            (Enterprise Resource Planning) solution that empowers businesses to
            manage key functions such as finance, HR, CRM, inventory, and
            operations through a unified platform. As a frontend developer on
            the project, my responsibilities included:
          </p>
          <ul className="list-disc list-inside">
            <li>
              Diagnosing and fixing complex bugs to improve application
              stability and performance across various modules.
            </li>
            <li>
              Designing and implementing new features and UI components to
              enhance user workflows and experience.
            </li>
            <li>
              Managing application state efficiently using Jotai, ensuring
              smooth data flow and UI responsiveness.
            </li>
            <li>
              Collaborating with backend engineers to integrate RESTful APIs
              into the frontend application.
            </li>
            <li>
              Applying Tailwind CSS to deliver responsive, modern, and
              consistent UI across devices.
            </li>
            <li>
              Maintaining code quality, adhering to component-driven development
              best practices with React.
            </li>
          </ul>
        </div>
      ),
    },
    {
      role: "Frontend Developer",
      companyName: "PT Telkom Indonesia",
      location: "Australia",
      workType: "Contract",
      startDate: "Jan 2022",
      endDate: "Mar 2025",
      description: (
        <div>
  <p>
    I worked on Antares, an IoT platform and landing page project, where I led
    frontend development and delivered smooth user experiences. My work involved:
  </p>
  <ul className="list-disc list-inside">
    <li>
      Developing engaging landing pages using Next.js, ReactJS, MUI, CSS, and Tailwind.
    </li>
    <li>
      Creating user-friendly IoT dashboards for Antares Platform and Universitas Negeri Semarang.
    </li>
    <li>
      Implementing Meta Pixel, Meta Analytics, Google Tag Manager, Google Analytics, and Microsoft Clarity to increase engagement.
    </li>
    <li>
      Leading the frontend team and collaborating with design and backend teams using Scrum methodologies (Jira) and Figma.
    </li>
    <li>
      Maintaining and updating Vue.js 2+ projects with OWASP 10 compliance.
    </li>
    <li>
      Optimizing performance using Core Web Vitals (LCP, CLS, INP) analysis.
    </li>
    <li>
      Creating CI/CD pipelines with GitLab CI for automated deployment.
    </li>
    <li>
      Integrating real-time data streams using WebSocket and deploying on Kubernetes.
    </li>
    <li>
      Writing unit tests using Jest and React Testing Library.
    </li>
  </ul>
</div>
      ),
    },
  ];
  return (
    <div className="flex gap-5 flex-col max-h-[500px] overflow-hidden hover:overflow-auto focus-within:overflow-auto overscroll-contain without-scroll-pane">
      {experiences.map((data, index) => (
        <ExperienceItem key={index} {...data} />
      ))}
    </div>
  );
}
