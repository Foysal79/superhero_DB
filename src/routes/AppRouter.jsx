import { BrowserRouter, Route, Routes } from "react-router-dom";
import SuperheroList from "../pages/SuperheroList";
import SuperheroDetails from "../pages/SuperheroDetails";

const AppRouter = () => {
    return (
        <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<SuperheroList />} />
          <Route path="/hero/:id" element={<SuperheroDetails />} />
        </Routes>
      
    </BrowserRouter>
    );
};

export default AppRouter;