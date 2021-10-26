import React, { useState } from "react";
import Position from "./Position";

const Experience = () => {

  return (
    <div className="tokyo_tm_about">
    <div className="tokyo_tm_title">
      <div className="title_flex">
        <div className="left">
      <h3>Experience</h3>
        </div>
      </div>
    </div>
      <Position jobTitle="Lead Frontend Engineer" stardDate="Jan 2020" companyName="Digital Kitchen">
        <p>
          Developed a flexible platform to allow customers to gather and analyze information about counterparties
        </p>
        <ul>
          <li>Implemented a task estimation methodology that allowed to evaluate upcoming sprint performance with an accuracy of >95%</li>
          <li>Developed various tools for simultaneous data modification</li>
          <li>Organized unit and e2e testing in the project</li>
          <li>Worked close with UX designer to organize UX researches and user testing</li>
          <li>Managed subordinates, participated in scrum activities, consulted colleagues, evaluated risks</li>
          <li>Implemented CI/CD for the frontend part of the application based on GitLab CI</li>
          <li>Developed and implemented a UI library with Unit tests and documentation based on Storybook</li>
          <li>Designed frontend architecture</li>
          <li>Led and influenced software engineering best practices within teams for the full software development life cycle, including documentation, design, coding standards, code reviews, building, testing, deployment, etc.</li>
          <li>Mentored junior developers, helped them to improve their skills</li>
          <li>Led a team of 6 members</li>
        </ul>
      </Position>
      <br />
      <Position jobTitle="Senior Frontend Engineer" stardDate="Dec 2018" endDate="Dec 2019" companyName="Diginavis">
        <p>
          Developed a high-loaded management system for unmanned vehicles
        </p>
        <ul>
          <li>Designed and developed a scalable, real-time ReactJS application</li>
          <li>Improved performance from 10 to 60 FPS for the most loaded parts of the app</li>
          <li>Implemented CI/CD for the frontend part of the application</li>
          <li>Developed and Implemented multi-domain OAuth-based authentication</li>
          <li>Developed and Implemented a JS library for the visualization of on-map data</li>
          <li>Coordinated the teamwork of 3 developers</li>
        </ul>
      </Position>
      <br />
      <Position jobTitle="Software Engineer & Senior Software Engineer" stardDate="Nov 2018" endDate="Dec 2019" companyName="I-Teco">
        <p>
        Developed and successfully delivered SPA (part of a complex enterprise solution) for letting clients book deposit boxes online for one of the biggest banks in Russia
        </p>
        <ul>
          <li>Developed and implemented a module for remote printing</li>
          <li>Created around 20 new components for the internal UI library </li>
          <li>Achieved 90+% in test coverage on the Backend side</li>
          <li>Implemented integration with other banking modules and flows</li>
          <li>Made several major CI/CD improvements which allowed to reduce deployment time from 40 to 23 minutes</li>
          <li>Interviewed 30 candidates and mentored 4 junior engineers</li>
        </ul>
      </Position>
      <br />
      <Position jobTitle="Web developer & Lead Web Developer" stardDate="Sep 2012" endDate="Feb 2016" companyName="Freelance & Web Studios (SEMark, Constanta plus)">
        <ul>
          <li>Developed various company projects as a full‐stack JavaScript/PHP & Python developer</li>
          <li>Led the development of Web and Mobile applications</li>
          <li>Developed and delivered a solution to allow local governments to handle incoming citizens’ applications</li>
          <li>Delivered innovative technical solutions to improve business outcomes</li>
          <li>Implemented integration with third-party APIs</li>
        </ul>
      </Position>
    </div>
  );
};

export default Experience;
