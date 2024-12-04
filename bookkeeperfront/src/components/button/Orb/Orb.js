import React from "react";
import styled, { keyframes } from "styled-components";

function Orb() {
  // define the animation
  const moveOrb = keyframes`
    0%{
    transform: translate(0,0);
    }
    50%{
    // 这里是一个是placeholder，实际坐标由viewport决定
    transform: translate(400px,500px);
    }
    100%{
    transform: translate(0,0);
    }`;
  const OrbStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -37vh;
    margin-top: -37vh;
    filter: blur(100px);
    background: linear-gradient(180deg, #f56692 0%, #f2994a 100%);
    animation: ${moveOrb} 15s alternate linear infinite;
  `;
  return <OrbStyled></OrbStyled>;
}

export default Orb;
