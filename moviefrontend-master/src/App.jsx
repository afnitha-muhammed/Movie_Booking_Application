import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminMovie from "./pages/AdminMovie";
import AdminTheatre from "./pages/AdminTheatre";
import AdminSchedule from "./pages/AdminSchedule";
import MovieDetails from "./pages/MovieDetails";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import SeatSelection from "./pages/SeatSelection";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path={"/adminmovie"} element={<AdminMovie />} />
        <Route path={"/theatre"} element={<AdminTheatre />} />
        <Route path={"/sheduleshow"} element={<AdminSchedule />} />
        <Route path="/moviedetails" element={<MovieDetails />} />
        <Route path="/seatselection" element={<SeatSelection />} />
      </Routes>
    </>
  );
}

export default App;
