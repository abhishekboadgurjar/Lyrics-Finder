import axios from "axios";
import  { useState } from "react";

const LyricsFinder = () => {
  const [track, setTrack] = useState("");
  const [artist, setArtist] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const searchLyrics = () => {
    if (track.trim() === "") {
      setError("Track name is required");
      return;
    }
    setError("");
    axios
      .get(`https://api.lyrics.ovh/v1/${artist}/${track}`)
      .then((res) => {
        setResult(res.data.lyrics);
      })
      .catch((err) => {
        setError("Lyrics not found. Please check the track and artist name.");
        setResult("");
      });
  };

  return (
    <div className="lyrics-container">
      <div className="input-container">
        <div className="track-input-box">
          <input
            type="text"
            value={track}
            onChange={(e) => setTrack(e.target.value)}
            placeholder="Enter Track Name"
          />
        </div>
        <div className="input-search">
          <div className="artist-input-box">
            <input
              type="text"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              placeholder="Enter Artist Name (optional)"
            />
          </div>
          <button onClick={searchLyrics} className="search-btn">
            Search
          </button>
        </div>
      </div>
      <div className="output-container">
        {error && <p className="error-message">{error}</p>}
        <p>{result}</p>
      </div>
    </div>
  );
};

export default LyricsFinder;
