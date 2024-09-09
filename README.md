

# Lyrics Finder

## Introduction

In this tutorial, we'll create a Lyrics Finder web application using React. This project is perfect for those looking to practice integrating APIs, managing state, and displaying dynamic content.

## Project Overview

The Lyrics Finder allows users to search for song lyrics by entering the song title and artist name. It fetches the lyrics from a public API and displays them on the screen. Users can quickly find and read the lyrics of their favorite songs.

## Features

- **Search Functionality**: Users can search for lyrics by song title and artist name.
- **API Integration**: Fetches lyrics from a public lyrics API.
- **Dynamic Content**: Displays lyrics dynamically based on user input.
- **User-Friendly Interface**: Clean and easy-to-use interface for searching and viewing lyrics.

## Technologies Used

- **React**: For building the user interface and managing component states.
- **CSS**: For styling the application.
- **JavaScript**: For handling API requests and app logic.

## Project Structure

The project is organized as follows:

```
├── public
├── src
│   ├── components
│   │   ├── LyricsFinder.jsx
│   │   ├── SearchForm.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

### Key Components

- **LyricsFinder.jsx**: Manages the search logic and displays the fetched lyrics.
- **SearchForm.jsx**: Provides a form for users to input song title and artist name.
- **App.jsx**: Renders the main layout and the `LyricsFinder` component.


## Installation and Usage

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/abhishekgurjar-in/lyrics-finder.git
cd lyrics-finder
npm install
npm start
```

This will start the development server, and the application will be running at `http://localhost:3000`.

## Live Demo


Check out the live demo of the Lyrics Finder [here](https://lyrics-finder-in.netlify.app/).
## Screenshots

![Screenshot 2024-09-09 222202](https://github.com/user-attachments/assets/02f49de4-38df-4b59-8394-2027c29631a4)

## Conclusion

The Lyrics Finder project is an excellent way to practice integrating APIs and handling dynamic content in React. It provides a practical example of building a useful application with a clean and interactive user interface.

## Credits

- **Inspiration**: The project is inspired by the need for quick access to song lyrics while listening to music.

### Author

**Abhishek Gurjar** is a web developer passionate about building interactive and engaging web applications. You can follow his work on [GitHub](https://github.com/abhishekgurjar-in).

## Introduction

In this tutorial, we'll create a Lyrics Finder web application using React. This project is perfect for those looking to practice integrating APIs, managing state, and displaying dynamic content.

## Project Overview

The Lyrics Finder allows users to search for song lyrics by entering the song title and artist name. It fetches the lyrics from a public API and displays them on the screen. Users can quickly find and read the lyrics of their favorite songs.

## Features

- **Search Functionality**: Users can search for lyrics by song title and artist name.
- **API Integration**: Fetches lyrics from a public lyrics API.
- **Dynamic Content**: Displays lyrics dynamically based on user input.
- **User-Friendly Interface**: Clean and easy-to-use interface for searching and viewing lyrics.

## Technologies Used

- **React**: For building the user interface and managing component states.
- **CSS**: For styling the application.
- **JavaScript**: For handling API requests and app logic.

## Project Structure

The project is organized as follows:

```
├── public
├── src
│   ├── components
│   │   ├── LyricsFinder.jsx
│   │   ├── SearchForm.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

### Key Components

- **LyricsFinder.jsx**: Manages the search logic and displays the fetched lyrics.
- **SearchForm.jsx**: Provides a form for users to input song title and artist name.
- **App.jsx**: Renders the main layout and the `LyricsFinder` component.

## Code Explanation

### LyricsFinder Component

The `LyricsFinder` component handles the API integration and manages the search results.

```javascript
import { useState } from "react";
import SearchForm from "./SearchForm";

const LyricsFinder = () => {
  const [lyrics, setLyrics] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchLyrics = async (song, artist) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
      if (!response.ok) {
        throw new Error("Lyrics not found");
      }
      const data = await response.json();
      setLyrics(data.lyrics);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lyrics-finder">
      <SearchForm onSearch={fetchLyrics} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {lyrics && <pre className="lyrics">{lyrics}</pre>}
    </div>
  );
};

export default LyricsFinder;
```

This component manages the state for lyrics, loading, and error messages. It fetches lyrics from the API and displays them.

### SearchForm Component

The `SearchForm` component provides a form for users to input the song title and artist name.

```javascript
import { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(song, artist);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Song Title"
        value={song}
        onChange={(e) => setSong(e.target.value)}
      />
      <input
        type="text"
        placeholder="Artist Name"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
```

This component takes user input for the song title and artist and triggers the search function.

### App Component

The `App` component manages the layout and renders the `LyricsFinder` component.

```javascript
import LyricsFinder from './components/LyricsFinder'
import "./App.css"
const App = () => {
  return (
    <div className='app'>
      <div className="heading">
        <h1>Lyrics Finder</h1>
      </div>
      <LyricsFinder/>
      <div className="footer">
        <p>Made with ❤️ by Abhishek Gurjar</p>
      </div>
    </div>
  )
}

export default App
```

This component provides a header and renders the `LyricsFinder` component in the center.

## CSS Styling

The CSS styles the application to ensure a clean and user-friendly interface.

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.app {
  width: 100%;
  height: 100vh;
  background-image: url(./assets/images/bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.heading {
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
  background-color: #eab229;
  color: black;
  border: 2px solid white;
  border-radius: 20px;
  text-align: center;
}

.heading h1 {
  font-size: 18px;
}

.lyrics-container {
  margin-top: 10px;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.input-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.track-input-box {
  margin: 7px;
  width: 500px;
  height: 30px;
  background-color: #363636;
  border: 1.5px solid white;
  border-radius: 7px;
  overflow: hidden;
}

.track-input-box input {
  width: 480px;
  height: 30px;
  background-color: #363636;
  color: white;
  margin-left: 10px;
  outline: none;
  border: none;
}

.input-search {
  display: flex;
  align-items: center;
  justify-content: center;
}

.artist-input-box {
  margin: 7px;
  width: 400px;
  height: 30px;
  background-color: #363636;
  border: 1.5px solid white;
  border-radius: 7px;
  overflow: hidden;
}

.artist-input-box input {
  width: 380px;
  height: 30px;
  margin-left: 10px;
  background-color: #363636;
  color: white;
  border: none;
  outline: none;
}

.search-btn {
  width: 100px;
  padding: 6px;
  border-radius: 7px;
  border: 1.5px solid white;
  background-color: #0e74ad;
  color: white;
  font-size: 16px;
}

.search-btn:hover {
  background-color: #15557a;
}

.output-container {
  background-color: black;
  width: 600px;
  height: 300px;
  border: 1.5px solid white;
  border-radius: 7px;
  overflow-y: scroll;
  margin-block: 40px;
}

.output-container::-webkit-scrollbar {
  display: none;
}

.output-container p {
  margin: 30px;
  text-align: center;
  font-size: 16px;
}

.footer {
  font-size: 14px;
  color: white;
}

```

The styling ensures a clean layout with user-friendly visuals and responsive design.

## Installation and Usage

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/abhishekgurjar-in/lyrics-finder.git
cd lyrics-finder
npm install
npm start
```

This will start the development server, and the application will be running at `http://localhost:3000`.

## Live Demo

Check out the live demo of the Lyrics Finder [here](https://lyrics-finder-in.netlify.app/).

## Conclusion

The Lyrics Finder project is an excellent way to practice integrating APIs and handling dynamic content in React. It provides a practical example of building a useful application with a clean and interactive user interface.

## Credits

- **Inspiration**: The project is inspired by the need for quick access to song lyrics while listening to music.

### Author

**Abhishek Gurjar** is a web developer passionate about building interactive and engaging web applications. You can follow his work on [GitHub](https://github.com/abhishekgurjar-in).
