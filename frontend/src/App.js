import React, { useState,useMemo } from 'react'
import styled from "styled-components";
import bg from './img/bg.png'
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/navigation";

function App() {
  const [active, setActive] = React.useState(1)

  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])
  return (
    <AppStyled className="App" bg={bg}>
      {orbMemo}
      <MainLayout>
      <Navigation active={active} setActive={setActive}/>
      <main>

      <h1>App</h1>
      </main>
      </MainLayout>
    </AppStyled>  
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(255, 252, 246, 0.8);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0px;
    }


  }
`;

export default App;
