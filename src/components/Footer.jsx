import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import { footerText } from '../data'


export function Footer() {
    return (

        <footer className="footer">
            <div className="container is-max-desktop">
                <div className="columns">
                    {footerText.map((elem, index) => (
                        <div key={index} className="column is-2  mx-4 ">
                            <p className="is-size-5 mb-2">{elem.title}</p>
                            <div className={`is-size-7 ${css(styles.pointer)}`}>
                                <p className={css(styles.hover)}>{elem.text.text1}</p>
                                <p className={css(styles.hover)}>{elem.text.text3}</p>
                                <p className={css(styles.hover)}>{elem.text.text2}</p>
                                <p className={css(styles.hover)}>{elem.text.text4}</p>
                                <p className={css(styles.hover)}>{elem.text.text5}</p>
                                <p className={css(styles.hover)}>{elem.text.text6}</p>
                            </div>
                        </div>
                    ))}
                    <div className="column">
                        <div className={`column is-flex ${css(styles.pointer)}`}>
                            <img className={css(styles.cover)}
                                src="https://yastatic.net/market-export/_/i/desktop/footer/sovetnik-icon.svg"
                                alt="pic of cart" />
                            <p className=" ml-5 has-text-weight-semibold">
                                Советник находит нужные вам тавары по более выгодгой цене.
                                <a className={`has-text-weight-normal  ${css(styles.hover)}`} href="/#"> Подробное</a>
                            </p>
                        </div>
                        <div className={`column is-size-7 ${css([styles.pointer, styles.hover])}`}>
                            283 420 232 предложения от 26 425 магазинов.
                            Обновлено 09.08.2021 в 07:54 по московскому времени.
                        </div>
                        <div className="columns ml-1 is-size-3 ">
                            <div className={`column is-narrow ${css(styles.iconHover)}`}>
                                <ion-icon name="logo-facebook" />
                            </div>
                            <div className={`column is-narrow ${css(styles.iconHover)}`}>
                                <ion-icon name="logo-instagram" />
                            </div>
                            <div className={`column is-narrow ${css(styles.iconHover)}`}>
                                <ion-icon name="logo-vk" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const styles = StyleSheet.create({
    pointer: {
        cursor: 'pointer',
    },
    hover:
        {
            ':hover': {
                color: '#e8322e',
            },
        },
    cover: {
        width: '50px',
        height: '50px',
        objectFit: 'cover',
    },
    iconHover: {
        opacity: 0.4,

        ':hover': {
            opacity: 1,
        },
        cursor: 'pointer',
    },
})
