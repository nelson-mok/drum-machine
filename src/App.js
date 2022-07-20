import React from 'react';
import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const buttons = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Heater-6',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Dsc_Oh',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: 'Kick_n_Hat',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'RP4_KICK_1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Cev_H2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

  return (
    <div>
      <br />
      <br />
      <h1 id='display'>Press Key to Play Sound </h1>
      {buttons.map(element=><Pad button = {element}/>)}
    </div>
  );
}

function Pad ({button}){

  React.useEffect(()=>{
    document.addEventListener('keydown',handleKeyPress);
    return () => {
      document.removeEventListener('keydown',handleKeyPress);
    }
  },[])

  const handleKeyPress = (e) => {
    if (e.keyCode === button.keyCode){
      playSound();
    }
  }

  const playSound = () => {
    const sound = document.getElementById(button.keyTrigger);
    sound.currentTime = 0;
    sound.play();
    document.getElementById('display').innerHTML = button.id;
  }

  return(
    <Button className="drum-pad" id={button.id} onClick={playSound}>
      <audio className="clip" id={button.keyTrigger} src={button.url}/>
      {button.keyTrigger}
    </Button>
  )
}

export default App;
