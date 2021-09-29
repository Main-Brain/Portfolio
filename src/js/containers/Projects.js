import React, { useEffect } from 'react';

const Projects = () => {
  const a = 1;

  return (
    <div className="projects">
      <div className="project">
        <h1 className="title">Boshow</h1>
        <div className="period">2019~</div>

        <div className="content">
          <div className="images">
            <div className="list" />
          </div>
          <div className="description">
            <div className="role">
              <p>AngularJS + Flask를 사용한 CMS 개발</p>
              <p>AngularJS 를 사용해 크롬 익스텐션 개발</p>
              <p>Object Detection R&D</p>
              <p>React + Django로 CMS 개발 언어 변경</p>
              <p>React Native를 사용해 video player application 개발</p>
            </div>
          </div>
        </div>
      </div>
      <div className="project">
        <h1 className="title">Boshow</h1>
      </div>
    </div>
  );
};

export default Projects;
