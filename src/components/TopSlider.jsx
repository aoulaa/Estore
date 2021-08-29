import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import { css, StyleSheet } from 'aphrodite'
import { SliderImage } from '../data'


export function TopSlider() {
    const ref = useRef()
    const [style, setStyle] = useState({ display: 'none' })

    const settings = {
        className: 'columns',
        dots: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        swipeToSlide: true,
        speed: 2000,
        pauseOnHover: true,
    }
    const gotoNext = () => {
        ref.current.slickNext()
    }

    const gotoPrev = () => {
        ref.current.slickPrev()
    }

    return (
        <div onMouseEnter={(e) => {
            setStyle({ display: 'block' })
        }}
            onMouseLeave={(e) => {
            setStyle({ display: 'none' })
        }}>
            <div className={`box has-text-centered 
                    ${css(styles.cursorRight)}`} onClick={() => gotoPrev()} style={style}>
                <div className="mt-2 pt-0">
                    <ion-icon name="arrow-back-outline" />
                </div>
            </div>
            <Slider {...settings} ref={ref}>
                {SliderImage.map((elem, index) => (
                    <div key={index} className="column">
                        <img src={elem.img} alt="top pic" />
                    </div>
                ))}
            </Slider>
            <div className={`box has-text-centered
                      ${css(styles.cursorLeft)}`} onClick={() => gotoNext()} style={style}>
                <div className="mt-2 pt-0">
                    <ion-icon name="arrow-forward-outline" />
                </div>
            </div>

        </div>
    )
}


const styles = StyleSheet.create({

    cursorRight: {
        cursor: 'pointer',
        width: '50px',
        height: '50px',
        padding: '0',
        borderRadius: '50%',
        fontSize: '25px',
        top: '222px',
        position: 'absolute',
        left: '2%',
        opacity: 0.5,
    },

    cursorLeft: {
        cursor: 'pointer',
        width: '50px',
        height: '50px',
        padding: '0',
        borderRadius: '50%',
        fontSize: '25px',
        top: '220px',
        position: 'absolute',
        right: '2%',
        opacity: 0.5,

    },
})
