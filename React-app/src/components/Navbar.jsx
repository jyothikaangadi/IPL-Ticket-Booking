
function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <span className="logo-icon">🏏</span>
                <span>IPL 2026</span>
            </div>

            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#matches">Matches</a></li>
                <li><a href="#book">Book Tickets</a></li>
                <li><a href="#mybooking">My Booking</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
