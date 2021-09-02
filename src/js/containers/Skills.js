import React, { useEffect, useState } from 'react';

// import htmlImg from '../../images/html5.jpg';
// import cssImg from '../../images/css3.jpg';
// import jsImg from '../../images/javascript.jpg';
// import angularImg from '../../images/angular.jpg';
// import reactImg from '../../images/react.jpg';
//
// import pythonImg from '../../images/python.jpg';
// import javaImg from '../../images/java.jpg';
// import nodeImg from '../../images/nodejs.jpg';

const Skills = (props) =>
// const [status, setStatus] = useState("")
// const [skill, setSkill] = useState(skillList)
//
// const handleChange = e => {
//   let value = e.target.id;
//
//   if (value !== undefined)
//     setStatus(value);
// }
//
// const handleOver = e => {
//   let value = e.target.alt;
//
//   if (value !== undefined) {
//     document.getElementById(value).style.visibility = "visible";
//   }
// }
//
// const handleLeave = e => {
//   let value = e.target.id;
//
//   if (value !== undefined) {
//     document.getElementById(value).style.visibility = "hidden";
//   }
// }
//
// const skillList = (
//   <div className="skill-list">
//     <h2 className="title">Front-end</h2>
//     <ul className="list" onClick={handleChange}>
//       <li>
//         <img src={htmlImg} alt="html" onMouseOver={handleOver} />
//         <div id="html" className="info" onMouseLeave={handleLeave}>Html</div>
//       </li>
//       <li>
//         <img src={cssImg} alt="css" onMouseOver={handleOver} />
//         <div id="css" className="info" onMouseLeave={handleLeave}>Css</div>
//       </li>
//       <li>
//         <img src={jsImg} alt="js" onMouseOver={handleOver} />
//         <div id="js" className="info" onMouseLeave={handleLeave}>JavaScript</div>
//       </li>
//       <li>
//         <img src={angularImg} alt="angular" onMouseOver={handleOver} />
//         <div id="angular" className="info" onMouseLeave={handleLeave}>AngularJS</div>
//       </li>
//       <li>
//         <img src={reactImg} alt="react" onMouseOver={handleOver} />
//         <div id="react" className="info" onMouseLeave={handleLeave}>React</div>
//       </li>
//     </ul>
//
//     <h2 className="title">Back-end</h2>
//     <ul className="list" onClick={handleChange}>
//       <li>
//         <img src={pythonImg} alt="python" onMouseOver={handleOver} />
//         <div id="python" className="info" onMouseLeave={handleLeave}>Python</div>
//       </li>
//       <li>
//         <img src={javaImg} alt="java" onMouseOver={handleOver} />
//         <div id="java" className="info" onMouseLeave={handleLeave}>Java</div>
//       </li>
//       <li>
//         <img src={nodeImg} alt="node" onMouseOver={handleOver} />
//         <div id="node" className="info" onMouseLeave={handleLeave}>NodeJS</div>
//       </li>
//     </ul>
//   </div>
// )
//
// const mappingImg = status => {
//   switch(status) {
//     case "html":
//       return htmlImg;
//     case "css":
//       return cssImg;
//     case "js":
//       return jsImg;
//     case "angular":
//       return angularImg;
//     case "react":
//       return reactImg;
//     case "python":
//       return pythonImg;
//     case "java":
//       return javaImg;
//     case "node":
//       return nodeImg;
//   }
// }
//
// const mappingContent = status => {
//   switch(status) {
//     case "html":
//       return "";
//     case "css":
//       return cssImg;
//     case "js":
//       return jsImg;
//     case "angular":
//       return (
//         <>
//           • AngularJS를 사용한 CMS 개발<br />
//           •
//         </>
//       );
//     case "react":
//       return reactImg;
//     case "python":
//       return (
//         <>
//           • 파이썬 프레임워크인 Flask, Django를 사용한 CMS 개발<br />
//           • YOLO와 같이 tensorflow, pytorch로 구현된 Object Detection, Object Classification 관련된 다양한 오픈소스들을 모델 생성, 테스트 및 분석
//         </>
//       );
//     case "java":
//       return javaImg;
//     case "node":
//       return nodeImg;
//   }
// }
//
// const SkillInfo = status => (
//   <div className="skill-info">
//     <div className="area-left">
//       <img src={mappingImg(status)} alt="python" />
//     </div>
//     <div className="area-right">
//       <h1>{status}</h1>
//       <div className="content">
//         {mappingContent(status)}
//       </div>
//     </div>
//   </div>
// )
//
// useEffect(() => {
//   if((status) === "") {
//     setSkill(skillList);
//   } else {
//     setSkill(SkillInfo(status));
//   }
// }, [status])

  (
    <section className="container">
      <div className="skill">

        {/* {skill} */}

      </div>
    </section>
  );

export default Skills;
