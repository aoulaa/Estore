import React from 'react'
import { Form, Formik } from 'formik'
import { css, StyleSheet } from 'aphrodite'
import Input from './common/Input'
import Button from './common/Button'


export function NavSearchForm({ onSubmit }) {
    return (
        <Formik onSubmit={onSubmit} initialValues={{ word: '' }}>
            <Form>
                <div className="columns is-gapless">
                    <div className="column is-mobile ">
                        <Input
                            className={`is-medium is-mobile ${css(styles.borderright)}`}
                            name="word"
                            placeholder="Искать товары"
                        />
                    </div>

                    <div className={`column is-mobile pl-0 ml-0 is-narrow ${css(styles.borderleft)}`}>
                        <Button
                            type="submit"
                            className={`is-success is-medium ${css(styles.borderradius)}`}
                            text="Найти" />
                    </div>
                </div>
            </Form>
        </Formik>
    )
}

const styles = StyleSheet.create({
    borderleft: {
        borderLeftStyle: 'none',
    },
    borderradius: {
        borderTopLeftRadius: '0px',
        borderBottomLeftRadius: '0px',
        boxShadow: 'none',
    },
    borderright: {
        borderRightStyle: 'none',
        width: '100%',
        boxShadow: 'none',
        borderTopRightRadius: '0px',
        borderBottomRightRadius: '0px',
        border: '2px solid #48c774',
        minWidth: '100px',
    },
})
