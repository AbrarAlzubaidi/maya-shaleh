import Header from './components/Header'
import Slider from './components/Slider'
import Palet from './components/Palet'
import Cards from './components/Cards'
import Footer from './components/Footer'
import data from "./data"
import './assets/css/App.css'

function App() {
  let cards_data = data.map(item=>{
    return(
      <Cards
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Palet/>
      <h1 id='features'>Included Features</h1>
      <section className='card-section'>
        {cards_data}
      </section>
      <Footer/>
    </div>
  )
}

export default App
