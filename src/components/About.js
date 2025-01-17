import React from "react";

function About({ bio, links }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio !== "" ? <p>{bio}</p> : null}
      <img src={links?.image} alt="I made this" />
      {/* Render links */}
      <div>
        {links?.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            {links.github}
          </a>
        )}
        <br />
        {links?.linkedin && (
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            {links.linkedin}
          </a>
        )}
      </div>
    </div>
  );
}

export default About;
