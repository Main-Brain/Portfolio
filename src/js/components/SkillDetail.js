import React from 'react';

const SkillDetail = (props) => {
  const { skillContent, image, setDetail } = props;

  const close = () => {
    setDetail(null);
  };

  const block = (e) => {
    e.stopPropagation();
  };

  return (
    <div onClick={close} className="skill-back">
      <div onClick={block} className="skill-info">
        <div className="area-left">
          <img src={image} />
        </div>
        <div className="area-right">
          <h1 className="title">{skillContent.title}</h1>
          <ul className="content">
            {skillContent.content.map((content, key) => (
              <li>
                •
                {content}
              </li>
            ))}
          </ul>
        </div>
        <p className="close" onClick={close} />
      </div>
    </div>
  );
};

export default SkillDetail;
