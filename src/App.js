import logo from './logo.svg';
import './App.css';
import Bin from './Bin';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import Trash from './Trash';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import CheckMark from './CheckMark';

function App() {

  const [bins, setBins] = useState([
    {name: 'restafval'},
    {name: 'pmd'},
    {name: 'gft'},
    {name: 'papier'}
  ])

  const trashChoices = [
    {name: "appel", type: "gft"},
    {name: "blik", type: "pmd"},
    {name: "fles", type: "pmd"},
    {name: "papier", type: "papier"}
  ]

  const [trashes, setTrashes] = useState([...Array(10)].map(_ => {
    const choiceIndex = Math.round(Math.random() * (trashChoices.length - 1))
    const choice = trashChoices[choiceIndex]
    return {
      id: uuidv4(),
      image: `/trashes/${choice.name}.png`,
      type: choice.type,
      visible: true
    }
  }))

  const trashDroppedCorrectly = (trashObject) => {
    setTrashes(trashes => trashes.map(trash => trash.id === trashObject.id ? {...trash, visible: false} : trash))
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <div className='trashes'>
          {trashes.map(trash => <Trash style={{display: trash.visible ? 'inherit' : 'none' }} key={trash.id} trashObject={trash} />)}
        </div>
        <div className='bins'>
          {bins.map((bin, i) => <Bin key={i} binObject={bin} trashDroppedCorrectly={trashDroppedCorrectly} />)}
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
