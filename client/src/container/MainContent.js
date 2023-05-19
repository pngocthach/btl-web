import styles from "./css/MainContent.module.css";
import IconButton from "../components/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import Search from "../components/Search";
import User from "../components/User";

export default function MainContent() {
  const username = "kien";
  const url =
    "https://www.falstaff-travel.com/wp-content/uploads/2022/03/shutterstock_1253799112.jpg";
  return (
    <div className={styles.MainContent}>
      <div className={styles.Header}>
        <Search></Search>
        <div>
          <IconButton>
            <FontAwesomeIcon icon={icon({ name: "bell" })} />
          </IconButton>
          {/* <IconButton></IconButton> */}
          <User username={username} src={url}></User>
        </div>
      </div>
    </div>
  );
}
