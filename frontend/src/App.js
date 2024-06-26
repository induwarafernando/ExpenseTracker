import React, { useState, useMemo } from 'react';
import styled from "styled-components";
import bg from './img/bg.png';
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/navigation";
import Dashboard from "./Components/Dashboard/Dashboard";
import Income from './Components/Incomes/Income';
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext'; // Import the hook from your context file

function App() {
  const [active, setActive] = React.useState(1);
  const globalContext = useGlobalContext(); // Call the hook to get the context value
  
  console.log(globalContext); // Log the context value if needed

  const displayData = ()  => {
    switch(active){
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, [])

  return (
    <AppStyled className="App" bg={bg}>
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive}/>
        <main>
          {displayData()}
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
