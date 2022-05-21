import React from "react";
import { Typography } from "../../Theme/styles";
import { ImageSection, Overlay, Info } from "./styleSlider";

const ImageSlider = (props) => {
  return (
    <ImageSection>
      <Overlay></Overlay>
      <img src={`https://image.tmdb.org/t/p/original${props.back}`} />
      <Info>
        <Typography color={"white"} as="h1" weight={700} size={40} height={60}>
          {props.title}
        </Typography>
        <ul>
          <li>
            <Typography
              color={"white"}
              as="p"
              weight={500}
              size={16}
              height={24}
            >
              Language: <span>{props.lang}</span>
            </Typography>
          </li>
          <li>
            <Typography
              color={"white"}
              as="p"
              weight={500}
              size={16}
              height={24}
            >
              Date: <span>{props.date}</span>
            </Typography>
          </li>
          <li>
            <Typography
              color={"white"}
              as="p"
              weight={500}
              size={16}
              height={24}
            >
              Ratins:
              <span>{props.vote}</span>
            </Typography>
          </li>
        </ul>
      </Info>
    </ImageSection>
  );
};

export default ImageSlider;
