import React, { useState } from 'react'
import styled from "styled-components";
import bg from './img/bg.png'
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/navigation";

function App() {
  const [active, setActive] = React.useState(1)
  return (
    <AppStyled className="App" bg={bg}>
      <Orb />
      <MainLayout>
      <Navigation active={active} setActive={setActive}/>
      </MainLayout>
    </AppStyled>  
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
`;

export default App;
