import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './components/HomePage';
import { SignUpPage } from './components/homePageComponents/sidebarComponents/SignUpPage';
import { MessagesPage } from './components/Messages';

export const RouteSwitch = () => {
    return (
        <BrowserRouter basename='/'>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/messages' element={<MessagesPage />} />
            </Routes>
        </BrowserRouter>
    )
}