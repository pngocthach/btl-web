import styles from './css/SidebarItem.module.css';
function SidebarItem(props) {
    return (
        <div className={styles.SidebarItem + " " + props.id} >
            <span>{props.children}</span>
            <button >{props.name}</button>
        </div>
    );
}

export default SidebarItem;