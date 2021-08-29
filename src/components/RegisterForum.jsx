import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import { Form, Formik } from 'formik'
import Input from './common/Input'
import Button from './common/Button'


const image = 'https://www.linkpicture.com/q/pexels-mockupeditorcom-205316.jpg'


export function RegisterForum() {
    return (
        <div className={css(styles.body)}>
            <div className="columns pt-6 is-centered">
                <div className={`box column mt-4 is-half ${css(styles.width)}`}>
                    <div className="column is-size-5 has-text-weight-semibold px-5 has-text-centered">
                        Войдите с Яндекс ID, чтобы ваши товары
                        и настройки сохранялись на всех устройствах,
                        с которых вы заходите на Маркет.
                    </div>
                    <div className="has-text-grey ml-5">
                        Введите ваш ID
                    </div>
                    <div className="columns is-centered">
                        <Formik initialValues={{ word: '' }}>
                            <Form>
                                <div className="column is-mobile  is-tablet">
                                    <Input
                                        className={`is-medium is-mobile ${css(styles.borderradius)}`}
                                        name="word"
                                        placeholder="Телефон"
                                    />
                                </div>
                                <div className="column ">
                                    <Button
                                        type="submit"
                                        className="is-success  is-fullwidth "
                                        text="Войти" />
                                </div>
                                <div className="column pt-1 pb-6 is-mobile ">
                                    <Button
                                        type="submit"
                                        className="is-fullwidth "
                                        text="Создать ID" />
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 'auto',

    },
    borderradius: {
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        borderRadius: '0',
        boxShadow: 'none',
    },
    width: {
        width: '340px',
        marginBottom: '200px',
    },

})
