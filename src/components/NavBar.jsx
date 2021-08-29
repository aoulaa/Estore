import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import { useHistory } from 'react-router-dom'
import Button from './common/Button'

import { NavSearchForm } from './NavSearchForm'
import { CategoryData } from '../data'

export function NavBar() {
    const histroy = useHistory()
    function handleEnter() {
        histroy.push('register')
    }

    return (
        <div className="has-background-white pb-2 is-mobile  px-6 is-tablet ">
            <div
                className={`pt-4 mb-0 pb-0 columns is-flex  ${css(styles.spaceBtw)}`}>

                {/* logo and katalog */}
                <div className="column pt-4 is-1">
                    <a href="/#" className="is-size-3">
                        lOGO
                    </a>
                </div>
                <div className="column pt-4 pl-6 ">
                    <Button
                        text="Каталог"
                        style={styles}
                        className="is-success is-size-5"
                        icon="reorder-three-outline" />
                </div>

                {/* form */}
                <div className="column is-5 pt-4" style={{ minwidth: '400px' }}>
                    <NavSearchForm />
                </div>

                <div className={`column is-flex ${css(styles.small)}`}>
                    <div className={` ml-2 mr-5 ${css(styles.smallGapFirstIcon)}`}>
                        <div className={css(styles.hover)}>
                            <div className={css(styles.cubeIcon)}>
                                <ion-icon name="cube-outline" />
                            </div>
                            <div className="has-text-weight-light
                             is-hidden-tablet-only
                              is-hidden-desktop-only is-hidden-mobile">
                                Закази
                            </div>
                        </div>
                    </div>
                    <div className={`mr-5 ${css(styles.smallGap)}`}>
                        <div className={css(styles.hover)}>
                            <div className={css(styles.heartIcon)}>
                                <ion-icon name="heart-outline" />
                            </div>
                            <div className="has-text-weight-light
                             is-hidden-tablet-only
                              is-hidden-desktop-only is-hidden-mobile">
                                Избранное
                            </div>
                        </div>
                    </div>
                    <div className={`mr-5 ${css(styles.smallGap)}`}>
                        <div className={css(styles.hover)}>
                            <div className={css(styles.cartIcon)}>
                                <ion-icon name="cart-outline" />
                            </div>
                            <div className="has-text-weight-light is-hidden-tablet-only
                           is-hidden-desktop-only is-hidden-mobile">
                                Корзина
                            </div>
                        </div>
                    </div>
                </div>

                {/* button */}
                <div className="column is-mobile is-tablet pt-4">
                    <Button text="Войти" onClick={handleEnter} className="is-medium" />
                </div>
                {/* </div> */}
            </div>

            <div className="columns pt-1 is-flex ">
                <div className="column pt-0 is-2">
                    <a href="/#" className={css([styles.hover, styles.nostyle])}>
                        <div className="is-flex">
                            <ion-icon name="location-outline" />
                            <div className="pl-1 mt-1">Bukhara</div>
                        </div>
                    </a>
                </div>
                <div className="column pt-1 ml-6 pl-5 is-7">
                    <div className="columns is-flex">
                        {CategoryData.map((elem, index) => (
                            <div key={index} className="column is-narrow">
                                <div className={css(styles.hover)}>
                                    {elem.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>

    )
}


const styles = StyleSheet.create({
    icon: {
        marginRight: '0.2rem',
        fontSize: '30px',
        marginTop: '0.3rem',
    },
    cubeIcon: {
        fontSize: '25px',
        paddingLeft: '11px',
        lineHeight: '0',
    },
    heartIcon: {
        fontSize: '25px',
        paddingLeft: '24px',
        lineHeight: '0',
    },
    cartIcon: {
        fontSize: '25px',
        paddingLeft: '12px',
        lineHeight: '0',
    },
    hover:
        {
            ':hover': {
                color: '#e8322e',
            },
            cursor: 'pointer',
        },
    spaceBtw: {
        justifyContent: 'space-between',
    },

    small: {
        '@media (max-width: 1215px)': {
            paddingTop: '23px',
        },
    },
    smallGap: {
        '@media (max-width: 1215px)': {
            marginRight: '5px',
        },
    },

    smallGapFirstIcon: {
        '@media (max-width: 1215px)': {
            marginRight: '0px',
        },
    },
})
