import React from 'react';

import github from '../../images/github.jpg';

const Contact = () => (
  <div className="contact">
    <p className="email">
      EMAIL: &nbsp;
      <span className="my-email">rlswnsehd@gmail.com</span>
    </p>
    <a href="https://github.com/Main-Brain?tab=repositories">
      <img src={github} alt="" />
    </a>
  </div>
);

export default Contact;
