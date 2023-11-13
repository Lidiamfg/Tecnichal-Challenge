import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Home from "./pages/Home";
import PhoneDetails from "./pages/PhoneDetails";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";

import Spinner from "react-bootstrap/Spinner";

function App() {
  const [phoneList, setPhoneList] = useState([]);
  const [fetchingPhones, setFetchingPhones] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    getPhoneList();
  }, []);

  const getPhoneList = async () => {
    try {
      console.log("hi");
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/phones`
      );
      const parsed = await response.json();
      console.log(parsed);
      setTimeout(() => {
        setPhoneList(parsed);
        setFetchingPhones(false);
      }, 1000);
    } catch (error) {
      navigate("/error");
    }
  };

  if (fetchingPhones) {
    return (
      <div className="m-2 border border-white border-1 rounded-2 text-center bg-white p-2">
        <Spinner animation="border" variant="info" />
      </div>
    );
  }

  return (
    <div className="bg-secondary">
      <MyNavbar phoneList={phoneList} />
      <div
        id="page"
        className="m-2 border border-white border-1 rounded-2 text-center bg-white p-2"
      >
        {
          <Routes>
            <Route className="" path="/" element={<Home />} />
            <Route
              path="/phone-details/:phoneId"
              element={<PhoneDetails phoneList={phoneList} />}
            />
            <Route path="/error" element={<Error />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        }
      </div>
    </div>
  );
}

export default App;
