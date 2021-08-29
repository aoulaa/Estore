import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import { NavBar } from './NavBar'
import { Footer } from './Footer'


export function Layout({ children }) {
    return (
        <div className={css(styles.scroll)}>
            <div className={css(styles.width)}>
                <NavBar />
                <div className={css(styles.width)}>{children}</div>
                <Footer />
            </div>
        </div>

    )
}


const styles = StyleSheet.create({
    width: {
        minWidth: '1200px',

    },
    scroll: {
        '@media (max-width: 1215px)': {
            minwidth: '500px',
            top: 0,
            bottom: 0,
            left: 0,
            overflowX: 'scroll',
        },
    },
})
