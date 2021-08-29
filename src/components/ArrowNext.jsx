import React from 'react'
import { css, StyleSheet } from 'aphrodite'


export function ArrowNext({ handelNav }) {
    return (
        <div className={`box has-text-centered
                      ${css(styles.cursorRight)}`} onClick={() => handelNav('right')}>
            <div className="mt-2 pt-0">
                <ion-icon name="arrow-forward-outline" />
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
        position: 'absolute',
        right: '23%',
        display: 'block',
    },

})
