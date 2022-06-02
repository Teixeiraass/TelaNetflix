import React from "react";
import './Header.css';

export default ({black}) => {
  return(
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/"><img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="Netflix" /></a>
      </div>
      <div className="header--user">
        <a href="/"><img src="https://ih0.redbubble.net/image.618363037.0853/flat,1000x1000,075,f.u2.jpg" alt="Usuario" /></a>
      </div>
    </header>
  );
}
