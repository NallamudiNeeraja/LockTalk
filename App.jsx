import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Secret from "./assets/Secret";
import Sucess from "./Sucess";

function App() {
    return (

        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Secret />}></Route>
                    <Route path="/Sucess" element={<Sucess />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
