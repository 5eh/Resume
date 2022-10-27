import React from "react";
import photography from "../Photography/photography.css";
import Photos from "../Photography/photographsdb.json";
import { Flex } from "@chakra-ui/react";

export default function PictureArray() {
  return (
    <>
      <div id="container">
        <div className="flexgrid">
          {Photos.map((index) => {
            return (
              <>
                <div className="container border">
                  <div className="titleFlex">
                    <p className="photo-title">{index.title}</p>
                    <p className="photo-price">ETH {index.price}</p>
                  </div>
                  <a href={index.link} target="_blank">
                    <img
                      src={index.image}
                      alt={index.alt}
                      className="photo-image"
                    />
                  </a>

                  <p className="photo-description">
                    <strong>Photo ID:</strong>{" "}
                    <span className="photo-id">{index.id}</span>
                  </p>
                  <p className="photo-description">{index.description}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
