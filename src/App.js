
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSport, setSelectedSport] = useState('soccer')

  
  useEffect(() => {
    const fetchMatches = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/matches.json');
        if(!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if(data.events){
          const filteredMatches = data.events.filter(match => 
            match.strSport.toLowerCase() === selectedSport.toLowerCase()
          );
          setMatches(filteredMatches);
        } else{
          setMatches([]);
        }

      } catch (error) {
        setError(error.message);
      } finally{
        setLoading(false);
      }
    };
    fetchMatches();
  }, [selectedSport]);

  const handleSportChange = (event) => {
    setSelectedSport(event.target.value);
  };

  if (loading) {
    return <div className="container">Loading upcoming {selectedSport} matches...</div>;
  }

  if(error) {
    return (
      <div className='container'>
        Error: {error}
      </div>
    )
  }


  return (
    <div className='container'>
      <div className='sport-selector'>
        <label htmlFor='sport-select'>Select Sport: </label>
        <select
          id='sport-select'
          value={selectedSport}
          onChange={handleSportChange}
        >
          <option value="soccer">Soccer</option>
          <option value="basketball">Basketball</option>
        </select>
      </div>

      <h1>Upcoming {selectedSport.charAt(0).toUpperCase() + selectedSport.slice(1)} Matches</h1>
      {matches.length > 0 ? (
        <div className='matches-list'>
          {matches.map((match) => (
            <div key={match.idEvent} className='match-card'>
              <div className='teams'>
                <span className='team-name'>{match.strHomeTeam}</span>
                <span className='vs'> vs</span>
                <span className='team-name'>{match.strAwayTeam}</span>
              </div>
              <div className='date-time'>
                <p>Date: {match.dateEvent}</p>
                <p>Time: {match.strTime}</p>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <p>No Upcoming {selectedSport} matches found. We will update you as news come</p>
      )}
    </div>
  );
};

export default App;
