import SideBarItem from "../components/SidebarItem";
import styles from "./css/SidebarContainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

function SidebarContainer() {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.Feature}>
        <SideBarItem name="Home" src='/mainpage/Home'>
          <FontAwesomeIcon icon={icon({ name: "house" })} />
        </SideBarItem>
        <SideBarItem name="Chart" src='/mainpage/Chart'>
          <FontAwesomeIcon icon={icon({ name: "chart-simple" })} />
        </SideBarItem>
        <SideBarItem name="Registration" src='/mainpage/Registration'>
          <FontAwesomeIcon icon={icon({ name: "registered" })} />
        </SideBarItem>
        <SideBarItem name="Create Account" src='/mainpage/RegistAccount'>
        <FontAwesomeIcon icon={icon({ name: "file-invoice" })} />
        </SideBarItem>
      </div>
      <SideBarItem id={styles.logout} name="Logout" src="/login">
        <FontAwesomeIcon
          icon={icon({ name: "right-from-bracket" })}
          className="iconSidebar"
        />
      </SideBarItem>
    </div>
  );
}
export default SidebarContainer;
