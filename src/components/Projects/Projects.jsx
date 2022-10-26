import React from "react";
import projects from "../Projects/projects.css";
import { CiCircleChevLeft } from "react-icons/ci";

const Projects = () => {
  return (
    <>
      <div id="header">
        <p>Watson Lewis-Rodriguez</p>
      </div>
      <div id="menu">
        <div id="menu-items">
          <div class="menu-item">
            <a href="/pigeondao">Pigeon DAO LLC</a>
          </div>

          <div class="menu-item">
            <a href="/homelessapes">Homeless Apes</a>
          </div>
          <div class="menu-item">
            <a href="/undervaluedstocks">Undervalued Stocks</a>
          </div>
          <div class="menu-item">
            <a href="/voxelart">Voxel Art</a>
          </div>
          <div class="menu-item">
            <a href="/">
              <CiCircleChevLeft />
            </a>
          </div>
        </div>

        <div id="menu-background-image"></div>
      </div>
    </>
  );
};

export default Projects;
