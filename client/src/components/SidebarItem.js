import styles from './css/SidebarItem.module.css';
import {Link} from 'react-router-dom';
function SidebarItem(props) {
    return (
        <div className={styles.SidebarItem} id={props.id}>
            <span>{props.children}</span>
            <Link to={props.src} className={styles.Link}>{props.name}</Link>
        </div>
    );
}

export default SidebarItem;