import React, { useState } from "react";

const News = () => {
  return (
    <>
      <div className="tokyo_tm_news">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <h3>Skills & Technologies</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

      </div>
      
      <ul>
          <li><strong>Languages: </strong>TypeScript, JavaScript, Java, Golang</li>
          <li><strong>Frameworks & libs: </strong>ReactJS, Svelte, Effector, Recoil, Redux, Apollo GraphQL, TreeJS, OSM, ExpressJS, Spring, WebRTC</li>
          <li><strong>Testing tools: </strong>Jest, Enzyme, React-testing-library, Cucumber, Cypress, Junit, TestNG, Selenium, Phantom</li>
        </ul>
    </>
  );
};

export default News;
