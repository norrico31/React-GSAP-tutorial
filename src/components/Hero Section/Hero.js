import React, { useRef, useEffect } from 'react'
import './style.scss'
import { TweenLite, TimelineLite, Power3 } from 'gsap/all';

// Assets
import arrow from './img/arrow.svg';
import imgBoy from './img/img1.jpg';
import imgGirl from './img/img2.jpg';

const Hero = () => {
    let app = useRef(null);
    let images = useRef(null);
    let content = useRef(null);

    let tl = new TimelineLite({ delay: .5 });

    useEffect(() => {
        // Remove Initial flash
        TweenLite.to(app, 0, { css: { visibility: 'visible' }});

        // Content vars 
        const headLineFirst = content.children[0].children[0];
        const headLineSecond = headLineFirst.nextSibling;
        const headLineThird = headLineSecond.nextSibling;
        const contentP = content.children[1];
        const contentButton = content.children[2];

        // Content animation
        tl.staggerFrom([headLineFirst.children, headLineSecond.children, headLineThird.children], 1, { y: 44, ease: Power3.easeOut, delay: .8 }, .15, 'Start')
        .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
        .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6)

        // Images vars
        const girlImage = images.firstElementChild;
        const boyImage = images.lastElementChild;
        
        // Images animation
        tl.from(girlImage, 1.2, { y: 1280, ease: Power3.easeOut }, 'Start')
        .from(girlImage.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, .2)
        .from(boyImage, 1.2, { x: -1500, ease: Power3.easeOut }, .2)
        .from(boyImage.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, .2)
    }, [tl])

    return (
        <>
            <div className="hero" ref={el => app = el}>
                <div className="container">
                    <div className="hero-inner">
                        <div className="hero-content">
                            <div className="hero-content-inner" ref={el => content = el}>
                                <h1>
                                    <div className="hero-content-line">
                                        <div className="hero-content-line-inner">I will help you cultivate your</div>
                                    </div>
                                    <div className="hero-content-line">
                                        <div className="hero-content-line-inner">memories through an</div>
                                    </div>
                                    <div className="hero-content-line">
                                        <div className="hero-content-line-inner">unforgettable Photograph.</div>
                                    </div>
                                </h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error impedit dignissimos officiis explicabo quis qui quod libero suscipit dolores quidem?</p>
                                <div className="btn-row">
                                    <button className="explore-button">explore
                                        <div className="arrow-icon">
                                            <img src={arrow} alt="arrow-right"/>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="hero-images">
                            <div className="hero-images-inner" ref={el => images = el}>
                                <div className="hero-image girl">
                                    <img src={imgGirl} alt="girl"/>
                                </div>
                                <div className="hero-image boy">
                                    <img src={imgBoy} alt="girl"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
