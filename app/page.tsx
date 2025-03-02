import Header from "./components/header"
import Hero from "./components/hero"
import Carousel from "./components/carousel"
import Features from "./components/features"
import FAQ from "./components/faq"

const Page = () => {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <Carousel />
      <Features />
      <FAQ />
    </div>
  )
}

export default Page