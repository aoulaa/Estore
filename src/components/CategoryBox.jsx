import React, { useRef } from 'react'
import { css, StyleSheet } from 'aphrodite'
import { cardData, categoryText } from '../data'
import { ArrowPrve } from './ArrowPrve'
import Button from './common/Button'
import { ArrowNext } from './ArrowNext'


export function CategoryBox() {
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
                    <p className="is-size-3">Товары для школы и большого будущего</p>
                </div>
            </div>
            <div className={`column remove-scroll ${css(styles.cour)}`}>
                {categoryText.map((elem, index) => (
                    <div key={index}
                        className={`column px-0 py-1 is-narrow is-4
                         has-text-centered mx-2 has-background-grey-lighter ${css(styles.radius)}`}>
                        <div className="column has-text-weight-semibold">
                            <p>{elem.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={`column remove-scroll ${css(styles.cour)}`} ref={ref}>
                <ArrowPrve handelNav={handelNav} />
                {cardData.map((elem, index) => (
                    <div key={index} className="column is-1 px-1 " style={{ width: 180 }}>
                        <div className="column px-4">
                            <img className={css(styles.cover)} src={elem.img}
                                alt="Placeholder" />
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
        width: '130px',
        height: '130px',
        objectFit: 'cover',
    },
    radius: {
        borderRadius: '2%',
        width: '200px',
    },
})
