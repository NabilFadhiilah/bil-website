import './App.css'
import { Header } from './components/layout/header'
import { MainLayout } from './components/layout/mainLayout'
import { ScrollToTopButton } from './components/atoms/scrollToTopButton'


function App() {
  return (
    <div className="m-auto ">
      <Header/>
      <MainLayout/>
      <ScrollToTopButton />
    </div>
  )
}

export default App
