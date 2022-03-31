import Link from "next/link";
import styles from "common/style/Nav.module.css";

export default function Nav(){
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.li}><Link href='/'>Home</Link></li>
                <li className={styles.li}><Link href='/basic/components/Nav'>Basic</Link></li>
                <li className={styles.li}><Link href='/common/components'>Basic</Link></li>
                <li className={styles.li}><Link href='/basic/components'>Board</Link></li>
                <li className={styles.li}><Link href='/basic/components'>Common</Link></li>
            </ul>   
        </nav>
    );
};