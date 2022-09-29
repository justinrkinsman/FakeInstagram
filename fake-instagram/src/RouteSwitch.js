import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './components/HomePage';

export const RouteSwitch = () => {
    return (
        <BrowserRouter basename='/'>
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}