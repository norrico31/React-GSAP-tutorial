import React, { useEffect, useRef } from 'react'
import Img1 from './Img/img.jpg';
import { TimelineLite, Power2, CSSRulePlugin } from 'gsap/all';

const ImageRevealOne = () => {
    let container = useRef(null);
    let img = useRef(null);
    let imageReveal = CSSRulePlugin.getRule('.img-container:after'); 

    const tl = new TimelineLite();

    useEffect(() => {
        // the img is from scale 2 to scale 1 with the delay of -1.5s
        tl.to(container, 0, {css: {visibility: 'visible'}}).to(imageReveal, 1.5, {width: '0%', ease: Power2.easeInOut}).from(img, 1.5, {scale: '2', ease: Power2.easeInOut, delay: -1.5 })
        // eslint-disable-next-line 
    }, [])

    return (
        <>
            <div className="img-container" ref={(el) => { container = el }}>
                <img src={Img1} ref={(el) => { img = el }} alt="fuckyou eslint"/>
            </div>
        </>
    )
}

export default ImageRevealOne
