import { Route, Router, Routes } from "react-router-dom";
import TelaLogin from "./pages/login";

export default function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<TelaLogin />} />
        </Routes>
    );
}