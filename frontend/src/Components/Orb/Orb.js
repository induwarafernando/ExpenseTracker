import React from "react";
import styled from "styled-components";

function Orb() {

  const OrbStyled = styled.div`
    height: 70vh;
    width: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-top: -37vh;
    margin-left: -37vh;
    background: linear-gradient(180deg, #F56692 0%,  #F2994A 100%);
    filter: blur(100px);
  `;
  return (
    <div>
      <h1>Orb</h1>
    </div>
  );
}

export default Orb;