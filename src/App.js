import './App.css';
import Header from './Components/Header';
import Timer from './Components/Timer';
import Select from './Components/Select';
import Form from './Components/Form';
import SideNav from './Components/SideNav';
import Car from './Components/Car';
import { useState } from 'react';
import { PersonProvider } from './Components/PersonContext';
import { UserProvider } from './Components/UserContext';
import A from './Components/A';
import B from './Components/B';
import { SubjectProvider } from './Components/SubjectContext';
function App() {
  const [likes, setLikes] = useState(0);
  function HandleLikes(){
          setLikes(likes+5);
      }
const [name, setName] = useState("Sahil");
  function ChangeName(){
    setName(2);
  }
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  return (
    <>
    <PersonProvider value={'Shahroo Khan Sahil'}>
      <A/>
    </PersonProvider>
    <UserProvider value={'sahil@18'}>
      <B/>
    </UserProvider>

    <SubjectProvider value={'Java'}>
      <A/>
    </SubjectProvider>    
  </>
    // <div className="App">      
    //   <Header title = "This Is Header" name ="Sahil khan" />
    //  <Form/>
    //     <SideNav/>
    //     <Car/>
    //     <Select/>
    //     <button onClick={HandleLikes}>Like {likes}</button>
    //     <br/>
    //     <button onClick={ChangeName}>My Name Is : {name}</button>       
    //   <Timer/>      
    // </div>
  );
}

export default App;
