import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './components/HomePage';
import { SignUpPage } from './components/homePageComponents/sidebarComponents/SignUpPage';

export const RouteSwitch = () => {
    return (
        <BrowserRouter basename='/'>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/signup' element={<SignUpPage />} />
            </Routes>
        </BrowserRouter>
    )
}