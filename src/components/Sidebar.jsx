import { Link } from "react-router"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo p-20">ZARA</div>

            <ul className="menu">
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>

        </div>
    )
}

export default Sidebar