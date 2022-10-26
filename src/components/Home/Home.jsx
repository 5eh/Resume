import React from "react";
import home from "../Home/home.css";
import { SocialIcon } from "react-social-icons";

const Home = () => {
  return (
    <>
      <div id="header">
        <p>Watson Lewis-Rodriguez</p>
      </div>
      <div id="menu">
        <div id="menu-items">
          <div class="menu-item">
            <a href="/projects">PROJECTS</a>
          </div>
          <div class="menu-item">
            <a href="/photography">PHOTOGRAPHY</a>
          </div>
          <div class="menu-item">
            <a href="/events">EVENTS & BLOG</a>
          </div>
          <div class="menu-item">
            <a href="/contact">CONTACT</a>
          </div>
          <div id="media">
            <div id="media-items">
              <div class="media-item">
                <SocialIcon
                  url="https://www.linkedin.com/in/watsonlr/"
                  bgColor="#ffffff"
                />
              </div>
              <div class="media-item">
                <SocialIcon url="https://github.com/5eh" bgColor="#ffffff" />
              </div>
              <div class="media-item">
                <SocialIcon
                  url="https://opensea.io/0x813176BB868b69642f7c6a2D3fD2bE93c384bF1e?tab=created"
                  bgColor="#ffffff"
                />
              </div>
              <div class="media-item">
                <SocialIcon
                  url="https://www.instagram.com/watsonlr/"
                  bgColor="#ffffff"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="menu-background-image"></div>
      </div>
    </>
  );
};

export default Home;
