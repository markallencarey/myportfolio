import Home from './Components/Home'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Contact from './Components/Contact'
// import ReactPageScroller from 'react-page-scroller'

function App() {
  return (
    <div className="App">
      {/* <ReactPageScroller> */}
        <Home />
        <Projects />
        <Resume />
        <Contact />
      {/* </ReactPageScroller> */}
    </div>
  );
}

export default App;
