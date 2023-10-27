import './App.css'
import Movies from './components/Movies'
import MyFooter from './components/MyFooter'
import MyNavBar from './components/MyNavBar'
function App() {
  return (
    <div className="bg-primary">
      <header>
        <MyNavBar />
      </header>
      <main>
        <Movies saga={'harry potter'} />
        <Movies saga={'star wars'} />
        <Movies saga={'lord of rings'} />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  )
}

export default App
