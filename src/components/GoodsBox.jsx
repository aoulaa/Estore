import React, { useRef } from 'react'
import { css, StyleSheet } from 'aphrodite'
import { cardData } from '../data'
import Button from './common/Button'
import { ArrowNext } from './ArrowNext'
import { ArrowPrve } from './ArrowPrve'


export function GoodsBox() {
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
                    <p className="is-size-3">На основе просмотров</p>
                </div>
                <div className="column pt-5 is-narrow">
                    <a href="/#" className="">смотреть все</a>
                </div>
            </div>
            <div className={`column remove-scroll ${css(styles.cour)}`} ref={ref}>
                <ArrowPrve handelNav={handelNav} />
                {cardData.map((elem, index) => (
                    <div key={index} className="column is-1 px-1 " style={{ width: 180 }}>
                        <div className="column px-4">
                            <img className={css(styles.cover)} src={elem.img}
                                alt="Placeholder " />
                            <p className="has-text-weight-semibold mb-2">{elem.price} $</p>
                            <p>{elem.name}</p>
                        </div>
                        <div className="column">
                            <Button text="в корзину" className="is-fullwidth is-success" />
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
        width: '140px',
        height: '140px',
        objectFit: 'cover',
    },
})
