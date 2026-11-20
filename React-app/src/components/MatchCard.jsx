
function MatchCard({ team1, team2, date, venue, onBook }) {
    return (
        <div className="match-card">
            <h2>{team1} vs {team2}</h2>

            <p><strong>Date:</strong> {date}</p>

            <p><strong>Venue:</strong> {venue}</p>

            <button onClick={onBook}>
                Book Tickets
            </button>
        </div>
    );
}

export default MatchCard;
