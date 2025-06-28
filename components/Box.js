import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Box() {
    const boxRef = useRef(null);

    useGSAP({
        ref: boxRef,
        x: 100,
        rotation: 360,
        duration: 2,
        scrollTrigger: {
            trigger: boxRef.current,
            markers: false,
            scrub: true,
        },
    });

    return (
        <>
        <div className="boxcolor gradient-green" ref={boxRef}></div>
        </>
    );  
}
export default Box;