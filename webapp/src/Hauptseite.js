import React from "react";
import "./Hauptseite.css"
import TitleBarHauptseite from './components/TitleBarHauptseite';
import MenuIcon from "./components/MenuIcon"

import styled from 'styled-components';

const Header = styled.div` // 1
  height: 100px;
  width: 100%;
  background: #fff;
  display: flex; // 2
  justify-content: center; 
`;

const Container = styled.div`
  background: #fff;
  display: flex;
  justify-content: center; // 1
  flex-flow: column wrap; // 2
  width: 100%;
  height: 100%;
  flex-flow: row wrap;
`;
const List = styled.div`
  display: flex;
  justify-content: center; // 3
  flex-flow: row wrap; // 4
  flex-flow: column wrap;
`;

const Card = styled.div`
  margin: 20px;
  background: rgb(132, 91, 162);
  height: 320px;
  width: 320px;
  border-radius: 20px;
  box-shadow: 2px 2px 5px 5px rgb(210, 210, 210);
  display: flex;
  flex-flow: column; // 5 
  justify-content: center;
  align-items: center;
`;

function App() {
    return (
        <Container>
            <MenuIcon items={['Menu Item 1', 'Menu Item 2', 'Menu Item 3']} />
            <TitleBarHauptseite/>
            <Header> 
                <p>Suchfeld</p>
            </Header>
            <List>
                {[0, 1, 2, 3, 5, 6, 7, 8, 9].map(item => <Card>{item}</Card>)}
            </List>
        </Container>
    );
}

export default App;

