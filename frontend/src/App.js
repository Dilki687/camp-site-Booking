import "./App.css";
// import Navigation from "./component/Navigation";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homescreen from "./screen/Homescreen";
import Bookingscreen from "./screen/Bookingscreen";
import Registerscreen from "./screen/Registerscreen";
import Loginscreen from "./screen/Loginscreen";
import Profilescreen from "./screen/Profilescreen";
import Landingscreen from "./screen/Landingscreen";
import Adminscreen from "./screen/Adminscreen";
import MainPage from "./screen/MainPage";
import ReservationDetails from "./screen/ReservationDetails";
import UpdateBookingScreen from "./screen/UpdateBookingScreen";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Routes where Navbar should be displayed */}
          <Route
            path="/home"
            element={
              <div className="user-content-container">
                <Navbar />
                <Homescreen />
                <Footer/>
              </div>
            }
          />
          <Route
            path="/book/:camplocationid/:fromdate/:todate/:bookingid?"
            element={
              <div className="user-content-container">
                <Navbar />
                <Bookingscreen />
                <Footer/>
              </div>
            }
          />
          <Route
            path="/register"
            element={
              <div className="user-content-container">
                <Navbar />
                <Registerscreen />
                <Footer/>
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div className="user-content-container">
                <Navbar />
                <Loginscreen />
                <Footer/>
              </div>
            }
          />
          <Route
            path="/profile"
            element={
              <div className="user-content-container">
                <Navbar />
                <Profilescreen />
                <Footer/>
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div className="user-content-container">
                <Navbar />
                <Landingscreen />
              </div>
            }
          />

          <Route
            path="/mainpage"
            element={
              <div className="user-content-container">
                <Navbar />
                <MainPage />
                <Footer/>
              </div>
            }
          />

          <Route
            path="/update-reservation"
            element={
              <div className="user-content-container">
                <Navbar />
                <UpdateBookingScreen />
                <Footer/>
              </div>
            }
          />

          <Route
            path="/reservation-details"
            element={
              <div className="user-content-container">
                <Navbar />
                <ReservationDetails />
                <Footer/>
              </div>
            }
          />

          {/* Admin route where only Navigation should be displayed */}
          <Route
            path="/admin"
            element={
              <div className="content-container">
                {/* <Navigation /> */}
                <Adminscreen />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
