// import React from 'react';
// import logo from './logo.svg';
//https://www.youtube.com/watch?v=TiSGujM22OI&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=1
import "./App.css";
import PersonC from "./components/PersonClass";
import Greet from "./components/Greet";
import { Person } from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import { Button } from "./components/Button";
import MyInput from "./components/MyInput";
import { Container } from "./components/Container";
import LoggedIn from "./components/state/LoggedIn";
import User1 from "./components/state/User";
import Counter from "./components/state/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Box from "./components/context/Box";
import { User } from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import Example from "./components/UseEffectExample";
import CounterClass from "./components/class/CounterClass";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import List from "./components/generics/List";
function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];
  return (
    <div className="App">
      <Example />
      <Greet name="Fatih" messageCount={10} isLoggedIn={false} />
      <PersonC pname="Fatih" psurname="Uysal" />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      {/* <Heading>Placeholder text</Heading> */}
      <Oscar>
        <Heading>Leonardo Dicaprio</Heading>
        <Greet name="Vishwas" isLoggedIn={true} />
      </Oscar>

      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />

      <MyInput value="" handleChange={(event) => console.log(event)} />
      <Container style={{ border: "1px solid black", padding: "1rem" }} />
      <LoggedIn />
      <User1 />
      <Counter />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider>

      <CounterClass message="CounterClassMessage" />

      <Private isLoggedIn={true} component={Profile} />

      {/* <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 3, 4, 5, 6]} onClick={(item) => console.log(item)} /> */}

      <List
        items={[
          { id: 1, first: "Bruce", last: "Wayne" },
          { id: 3, first: "Clark", last: "Kent" },
          { id: 2, first: "Princess", last: "Diana" },
        ]}
        onClick={(item) => console.log(item)}
      />
      <div>test1</div>
    </div>
  );
}

export default App;
