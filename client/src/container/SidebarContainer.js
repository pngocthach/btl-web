import SideBarItem from "../component/SidebarItem";
import styles from './css/SidebarContainer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function SidebarContainer() {
    return (
        <div className={styles.Sidebar} >
            <div className={styles.Feature}>
                <SideBarItem name="Home"><FontAwesomeIcon icon={icon({name: 'house'}) } /></SideBarItem>
                <SideBarItem name="Chart"><FontAwesomeIcon icon={icon({name: 'chart-simple'})} /></SideBarItem>
                <SideBarItem name="Registration"><FontAwesomeIcon icon={icon({name: 'registered'})} /></SideBarItem>
            </div>
            <SideBarItem id={styles.logout} name="Logout"><FontAwesomeIcon icon={icon({name: 'right-from-bracket'})} className='iconSidebar' /></SideBarItem>
        </div>
    );
}
export default SidebarContainer;