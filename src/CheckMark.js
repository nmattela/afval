import { useSpring, animated } from 'react-spring'
import './App.css'

export default function CheckMark() {

    const style = useSpring({
        from: {
            opacity: 1,
            // top: '50%',
            // height: '0%'
        },
        to: {
            opacity: 0,
            // top: '0%',
            // height: '100%'
        }
    })

    return (
        <animated.img className='checkMark' src="/checkmark.png" style={style} />
    )
}