import styles from './css/SidebarItem.module.css';
import {Link} from 'react-router-dom';
function SidebarItem(props) {
    return (
        <div className={styles.SidebarItem} id={props.id}>
            <Link to={props.src} className={styles.Link}><span>{props.children}</span>
<p>{props.name}</p></Link>
        </div>
    );
}

export default SidebarItem;