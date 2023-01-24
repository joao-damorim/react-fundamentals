import { FaFacebook, FaInstagram } from 'react-icons/fa'
import styles from './Footer.module.css';
function Footer() {
    return (
    <footer>
        Rodapé
        <ul className={styles.social_list}>
            <li>
                <FaFacebook />
            </li>
            <li>
                <FaInstagram />
            </li>
        </ul>
    </footer>
    )
}

export default Footer