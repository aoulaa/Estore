import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import { Layout } from '../components/Layout'
import { BodyBox } from '../components/BodyBox'

export function HomePage() {
    return (
        <div className={css(styles.scroll)}>
            <Layout className="container is-fullhd">
                <BodyBox />
            </Layout>
        </div>
    )
}


const styles = StyleSheet.create({
    // scroll: {
    //     '@media (min-width: 1215px)': {
    //         // overflowX: 'scroll',
    //         // whiteSpace: 'nowrap'
    //         // float: 'left',
    //
    //     },
    // },
    // scroll: {
    //     minWidth: '1200px',
    // },
})
