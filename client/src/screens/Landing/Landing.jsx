import React from 'react';
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      landing screen
      <Link to='/play'>
        play
      </Link>
    </div>
  );
};

export default Landing;