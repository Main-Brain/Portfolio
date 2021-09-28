import React, { useEffect } from 'react';

import github from '../../images/github.jpg';

const Contcat = () => {
  const a = 1;

  return (
    <div className="concat">
      <p className="email">
        EMAIL:
        <br />
        <span className="my-email">rlswnsehd@gmail.com</span>
      </p>
      <img src={github} alt="" />
    </div>
  );
};

export default Contcat;
