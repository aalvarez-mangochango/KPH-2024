import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home } from "../pages/Home"

export function MyRoutes()
{
    return(<Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
        </Routes>
    </Router>)
}