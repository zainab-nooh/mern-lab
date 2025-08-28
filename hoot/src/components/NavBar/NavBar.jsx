import styles from './NavBar.module.scss';
import { logOut } from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        logOut();
        setUser(null);
    }

    return (
        <div className={styles.nav}>
            <div>{user.name}</div>
            <div className={styles.email}>{user.email}</div>
            <button className={styles.button} onClick={handleLogOut}>LOG OUT</button>
        </div>

    );
}
