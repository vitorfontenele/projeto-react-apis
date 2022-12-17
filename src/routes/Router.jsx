import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";

const Router = () => {
    return (
        <BrowserRouter basename="/pokeapp">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pokedex" element={<PokedexPage />} />
                <Route path="/details/:name" element={<DetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;