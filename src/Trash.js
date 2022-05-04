import { useDrag } from 'react-dnd'
import './App.css';

export default function Trash({ trashObject, style }) {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: trashObject.type,
        item: trashObject,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return (
        <div style={{...style, opacity: isDragging ? 0.2 : 1}} ref={drag} className='trashContainer'>
            <img className='trash' src={trashObject.image} />
        </div>
    )
}