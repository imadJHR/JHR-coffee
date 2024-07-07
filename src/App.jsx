import Banner from "./components/banner/Banner"
import Coffeecard from "./components/coffeecard/Coffeecard"
import Footer from "./components/Footer/Footer"
import Hero from "./components/hero/Hero"
import WhereToBuy from "./components/WheretoBuy/WhereToBuy"




const App = () => {
  return (
    <div className="overflox-x-hidden">
      <Hero/>
      <Coffeecard/>
      <WhereToBuy/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default App