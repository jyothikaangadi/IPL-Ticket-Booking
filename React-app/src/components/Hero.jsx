
function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-content">

                <p className="hero-label">
                    INDIAN PREMIER LEAGUE
                </p>

                <h1>Welcome to IPL 2026!</h1>

                <p className="hero-description">
                    Experience the excitement of cricket.
                    Explore upcoming matches, support your favourite
                    teams and book your IPL tickets online.
                </p>

                <div className="hero-buttons">
                    <a href="#matches" className="hero-btn primary-btn">
                        View Schedule
                    </a>

                    <a href="#book" className="hero-btn secondary-btn">
                        Book Tickets
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Hero;
