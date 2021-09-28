import React, { useEffect, useState } from 'react';

import SkillDetaili from '@/components/SkillDetail';

import skillContents from '@/content/skills';

// frontend image
import htmlImg from '../../images/html5.jpg';
import cssImg from '../../images/css3.jpg';
import jsImg from '../../images/javascript.jpg';
import angularImg from '../../images/angular.jpg';
import reactImg from '../../images/react.jpg';

// backend image
import pythonImg from '../../images/python.jpg';
import javaImg from '../../images/java.jpg';
import nodeImg from '../../images/nodejs.jpg';

const Skills = () => {
  const [detail, setDetail] = useState(null);
  const [front, setFront] = useState([]);
  const [back, setBack] = useState([]);
  const images = {
    html: htmlImg,
    css: cssImg,
    js: jsImg,
    angular: angularImg,
    react: reactImg,
    python: pythonImg,
    java: javaImg,
    node: nodeImg,
  };

  useEffect(() => {
    setFront(Object.entries(skillContents.front));
    setBack(Object.entries(skillContents.back));
  }, []);

  const handleClick = (e) => {
    const { id } = e.target;
    let skillContent;
    console.log(front);

    for (const type in skillContents) {
      skillContents[type][id] !== undefined ? skillContent = skillContents[type][id] : null;
    }

    if (skillContent.content !== undefined) {
      setDetail(<SkillDetaili
        skillContent={skillContent}
        image={images[id]}
        setDetail={setDetail}
      />);
    }
  };

  const handleOver = (e) => {
    const value = e.target.alt;

    if (value !== undefined) {
      document.getElementById(value).style.visibility = 'visible';
    }
  };

  const handleLeave = (e) => {
    const value = e.target.id;

    if (value !== undefined) {
      document.getElementById(value).style.visibility = 'hidden';
    }
  };

  return (
    <div className="skill">
      <div className="skill-list">
        <h2 className="title">Front-end</h2>
        <ul className="list" onClick={handleClick}>
          {front.map((value, key) => (
            <li key={key}>
              <img src={images[value[0]]} alt={value[0]} onMouseOver={handleOver} />
              <div id={value[0]} className={value[1].content === undefined ? 'info' : 'info detail'} onMouseLeave={handleLeave}>{value[1].title}</div>
            </li>
          ))}
        </ul>

        <h2 className="title">Back-end</h2>
        <ul className="list" onClick={handleClick}>
          {back.map((value, key) => (
            <li key={key}>
              <img src={images[value[0]]} alt={value[0]} onMouseOver={handleOver} />
              <div id={value[0]} className={value[1].content === undefined ? 'info' : 'info detail'} onMouseLeave={handleLeave}>{value[1].title}</div>
            </li>
          ))}
        </ul>
      </div>

      {detail}

    </div>
  );
};

export default Skills;
