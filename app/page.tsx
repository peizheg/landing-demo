import Header from "./components/header"
import Hero from "./components/hero"
import Carousel from "./components/carousel"
import Features from "./components/features"

const Page = () => {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <Carousel />
      <Features />
    </div>
  )
}

export default Page