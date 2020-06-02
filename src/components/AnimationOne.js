import React, {useRef, useEffect, useState} from 'react'
import { TweenMax, Power3 } from 'gsap';

const AnimationOne = () => {
    let container = useRef(null);

    let circle = useRef(null);
    let circleRed = useRef(null);
    let circleBlue = useRef(null);

    const [state, setState] = useState(false);

    useEffect(() => {
        TweenMax.to(container, 0, { css: { visibility: 'visible' }})
        // TweenMax.from(circle, 1, { opacity: 0, x: 80, ease: Power3.easeInOut });
        // TweenMax.from(circleRed, 1, { opacity: 0, x: 120, ease: Power3.easeInOut, delay: .2 });
        // TweenMax.from(circleBlue, 1, { opacity: 0, x: 160, ease: Power3.easeInOut, delay: .4 });
        TweenMax.staggerFrom([circle, circleRed, circleBlue], .8, { opacity: 0, x: 160, ease: Power3.easeInOut }, .2)
    }, [])

    const handleExpand = () => {
        TweenMax.to(circleRed, .8, { width: 200, height: 200, ease: Power3.easeInOut });
        setState(true);
    }
    const handleShrink = () => {
        TweenMax.to(circleRed, .8, { width: 75, height: 75, ease: Power3.easeInOut })
        setState(false);
    }

    return (
        <div className="circle-container" ref={(el) => {container = el}}>
            <div className="circle" ref={(el) => {circle = el}} ></div>
            <div className="circle red" ref={(el) => {circleRed = el}} onClick={state !== true ? handleExpand : handleShrink}></div>
            <div className="circle blue" ref={(el) => {circleBlue = el}} ></div>
        </div>
    )
}

export default AnimationOne
