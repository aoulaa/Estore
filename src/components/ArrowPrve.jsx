import React from 'react'
import { css, StyleSheet } from 'aphrodite'

export function ArrowPrve({ handelNav }) {
    return (
        <div className={`box has-text-centered  
                    ${css(styles.cursorLeft)}`} onClick={() => handelNav('left')}>
            <div className="mt-2 pt-0">
                <ion-icon name="arrow-back-outline" />
            </div>
        </div>
    )
}


const styles = StyleSheet.create({

    cursorLeft: {
        cursor: 'pointer',
        width: '50px',
        height: '50px',
        padding: '0',
        borderRadius: '50%',
        fontSize: '25px',
        position: 'absolute',
        left: '2%',
        display: 'block',
    },

})
