import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './components/HomePage';
import { Logo } from './components/headerComponents/Logo';

export const RouteSwitch = () => {
    return (
        <BrowserRouter basename='/'>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/' element={<Logo />} />
            </Routes>
        </BrowserRouter>
    )
}