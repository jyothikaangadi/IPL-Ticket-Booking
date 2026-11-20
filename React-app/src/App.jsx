
import { useState } from "react";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import MatchCard from "./components/MatchCard.jsx";

import "./App.css";

function App() {

    // State: stores the selected match
    const [selectedMatch, setSelectedMatch] = useState("");

    // Match data
    const matches = [
        {
            id: 1,
            team1: "CSK",
            team2: "MI",
            date: "March 1, 2026",
            venue: "Chennai"
        },
        {
            id: 2,
            team1: "RCB",
            team2: "DC",
            date: "March 5, 2026",
            venue: "Bengaluru"
        },
        {
            id: 3,
            team1: "MI",
            team2: "KKR",
            date: "March 10, 2026",
            venue: "Mumbai"
        }
    ];

    return (
        <>
            {/* Navigation */}
            <Navbar />

            {/* Welcome section */}
            <Hero />

            {/* Match schedule */}
            <section className="app" id="matches">

                <h1>IPL 2026 Match Schedule</h1>

                <p className="subtitle">
                    Select your favourite match and book tickets!
                </p>

                <div className="matches-container">

                    {matches.map((match) => (
                        <MatchCard
                            key={match.id}
                            team1={match.team1}
                            team2={match.team2}
                            date={match.date}
                            venue={match.venue}
                            onBook={() =>
                                setSelectedMatch(
                                    match.team1 + " vs " + match.team2
                                )
                            }
                        />
                    ))}

                </div>

                {selectedMatch && (
                    <h3 className="selected-match">
                        Selected Match: {selectedMatch}
                    </h3>
                )}

            </section>
        </>
    );
}

export default App;
