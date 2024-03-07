import React from "react";
import styled, {keyframes} from "styled-components";
import { useWindowSize } from "../../utils/useWindowSize";

function Orb() {

  const{width, height} =  useWindowSize()
  
  const moveOrb = keyframes`
    0% {transform: translate(0,0);}
    50% {transform: translate(${width}px,${height}px);}
    100% {transform: translate(0,0);}
  `;

  const OrbStyled = styled.div`
    height: 70vh;
    width: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-top: -37vh;
    margin-left: -37vh;
    background: linear-gradient(180deg, #F56692 0%,  #F2994A 100%);
    filter: blur(200px);
    animation: ${moveOrb} 9s alternate linear infinite;
  `;

  return (
    <div>
        <OrbStyled/>
    </div>
  );
}

export default Orb;