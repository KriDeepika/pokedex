import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/deep.jpg";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi, I am Deepanshu Kumar</h1>
      <h2 className="profile-text">The creator of this awesome website.</h2>
      <h4 className="profile-text">
        You are welcome to explore a captivating Pokémon platform<br />that enables you to effortlessly compare different species and <br /> curate your very own list of favorites.
      </h4>
      <div className="profile-links">
        <a href="https://github.com/deepkumar05" target='_blank' rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/deep_ds_14/" target='_blank' rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/krdeepanshu/" target='_blank' rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/Deepans07930899" target='_blank' rel="noreferrer">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
