import "./App.css";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavouritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
