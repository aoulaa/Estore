import React, { useRef } from 'react'
import { css, StyleSheet } from 'aphrodite'
import { ArrowPrve } from './ArrowPrve'
import { smallBoxes } from '../data'

import { ArrowNext } from './ArrowNext'


export function GoodsSmallBox() {
    const ref = useRef()
    const handelNav = (direction) => {
        if (direction === 'left') {
        // eslint-disable-next-line no-unused-expressions
            ref ? (ref.current.scrollLeft -= 700) : null
        } else {
        // eslint-disable-next-line no-unused-expressions
            ref ? (ref.current.scrollLeft += 700) : null
        }
    }
    return (
        <div className="column">
            <div className="column is-flex">
                <div className="column px-0">
                    <p className="is-size-3">Интересное от Xiaomi</p>
                </div>
                <div className="column pt-5 is-narrow">
                    <a href="/#" className="">смотреть все</a>
                </div>
            </div>
            <div className={`column remove-scroll ${css(styles.cour)}`} ref={ref}>
                <ArrowPrve handelNav={handelNav} />
                {smallBoxes.map((elem, index) => (
                    <div key={index} className={`column is-3 has-text-centered mx-2 box ${css(styles.radius)}`}>
                        <div className="column">
                            <img className={css(styles.cover)} src={elem.img}
                                alt="Placeholder" />
                            <p>{elem.text}</p>
                        </div>
                    </div>
                ))}
                <ArrowNext handelNav={handelNav} />
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    cour: {
        display: 'flex',
        scrollBehavior: 'smooth',
        alignItems: 'center',
        overflowX: 'scroll',
        cursor: 'pointer',
    },

    size: {
        fontSize: '30px',
    },

    cover: {
        width: '130px',
        height: '130px',
        objectFit: 'cover',
    },
    radius: {
        borderRadius: '20%',
        width: '200px',
    },
})
