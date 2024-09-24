import { Link } from "react-router-dom";
import "../../style/Header/Header.css";

function Header () {
    return (
        <>
            <div className="header-left">oi</div>
            <nav className="header-right">
                <ul className="header-links-container">
                    <li className="header-link"><Link to="/">RCA</Link></li>
                    <li className="header-link"><Link to="/">Adicionais</Link></li>
                    <li className="header-link"><Link to="/relatorios">Relatórios</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Header;