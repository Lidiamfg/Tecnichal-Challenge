import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";

function App() {
  const [phoneList, setPhoneList] = useState([]);
  const [fetchingPhones, setFetchingPhones] = useState(true);

  const navigate = useNavigate();

  const getPhoneList = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/phones`
      );
      setTimeout(() => {
        console.log(response);
        setPhoneList(response.json());
        setFetchingPhones(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  /* if (fetchingPhones) {
    return (
      <div className="Spinner">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } */

  useEffect(() => {
    getPhoneList();
  }, []);

  return (
    <div>
      <MyNavbar phoneList={phoneList} />
      <div>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/phone-details/:phoneId"
            element={<PhoneDetails phoneList={phoneList} />}
          />
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
