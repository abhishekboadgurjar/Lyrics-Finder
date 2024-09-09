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