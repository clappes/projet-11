import { Routes, Route } from 'react-router-dom';

import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Error from "../../components/Error/Error";
import Accommodation from "../../pages/Accommodation/Accommodation";

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/logement/:id' element={<Accommodation />} />
            <Route path='*' element={<Error />} />
        </Routes>
    )
}

export default Router;