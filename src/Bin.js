import './App.css';
import { useDrop } from 'react-dnd'

export default function Bin({ binObject, trashDroppedCorrectly }) {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: binObject.name,
        drop: (trashObject) => trashDroppedCorrectly(trashObject),
        collect: (monitor) => ({
            isOver: !!monitor.isOver({shallow: false}),
        })
    }))

    return (
        <div ref={drop} className="bin">
            <img src={`/bins/${binObject.name}.png`} className="bin"/>
        </div>
    )
    
}