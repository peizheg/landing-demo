import Header from "./components/header"
import Hero from "./components/hero"
import Carousel from "./components/carousel"
import Features from "./components/features"
import FAQ from "./components/faq"
import Footer from "./components/footer"

const Page = () => {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <Carousel />
      <Features />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Page