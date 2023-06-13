import styles from "./css/MainContent.module.css";
import IconButton from "../components/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import Search from "../components/Search";
import User from "../components/User";
import {Routes, Route} from 'react-router-dom';
import Chart from "../pages/chart/Chart";
import Home from "../pages/home/Home";
import Registration from "../pages/registration/Registration";
import Signup from "../pages/signup/signup";
export default function MainContent() {
  const username = "kien";
  const url =
    "https://www.falstaff-travel.com/wp-content/uploads/2022/03/shutterstock_1253799112.jpg";
  return (
    <>

      <div className={styles.MainContent}>
      <div className={styles.Header}>
        <Search></Search>
        <div>
          <IconButton>
            <FontAwesomeIcon icon={icon({ name: "bell" })} />
          </IconButton>
          <User username={username} src={url}></User>
        </div>
      </div>
      <div className={styles.Body}>
        {/* <Chart/> */}
        <Routes >
          <Route path="/mainpage/home" element={<Home/>}/>
          <Route path="/mainpage/chart"element={<Chart/>}/>
          <Route path="/mainpage/registration" element={<Registration/>}/>
          <Route path="/mainpage/RegistAccount" element={<Signup/>}/>
        </Routes>
      </div>
    </div>
  </>
    
  );
}
