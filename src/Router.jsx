import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BaseContextWrapper from './components/common/BaseContext'
import { HomePage } from './pages/HomePage'
import { RegisterForum } from './components/RegisterForum'

export default function App() {
    return (
        <BrowserRouter>
            <BaseContextWrapper>
                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/register" component={RegisterForum} exact />
                </Switch>
            </BaseContextWrapper>
        </BrowserRouter>
    )
}
