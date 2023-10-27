import './App.css'
import Movies from './components/Movies'
import MyFooter from './components/MyFooter'
import MyNavBar from './components/MyNavBar'
import ProfilePage from './components/ProfilePage'
import SettingPage from './components/SettingsPage'
import TopItem from './components/TopItem'
function App() {
  return (
    <div className="bg-primary">
      <header>
        <MyNavBar />
        {/* <TopItem /> */}
      </header>
      <main>
        {/* <Movies saga={'harry potter'} />
        <Movies saga={'star wars'} />
        <Movies saga={'lord of rings'} /> */}
        {/* <SettingPage /> */}
        <ProfilePage />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  )
}

export default App
