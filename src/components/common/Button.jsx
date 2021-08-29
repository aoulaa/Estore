import { css } from 'aphrodite'
import React from 'react'
import cn from 'classnames'

export default function Button({ text, onClick, loading, style, className, icon, type = 'button', ...rest }) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={cn('button', className, { 'is-loading': loading })}
            {...rest}>

            {icon ? <span className={text ? css(style.icon) : ''}><ion-icon name={icon} /></span> : null }
            {text}
        </button>
    )
}

// const style = StyleSheet.create({
//     icon: {
//         marginRight: '0.2rem',
//     },
// })
