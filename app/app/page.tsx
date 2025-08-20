

import Header from '@/components/header'
import Hero from '@/components/hero'
import KeyToSuccess from '@/components/key-to-success'
import Services from '@/components/services'
import Pricing from '@/components/pricing'
import Examples from '@/components/examples'
import Reviews from '@/components/reviews'
import Advantages from '@/components/advantages'
import Comparison from '@/components/comparison'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <KeyToSuccess />
      <Services />
      <Pricing />
      <Examples />
      <Reviews />
      <Advantages />
      <Comparison />
      <Contact />
      <Footer />
    </main>
  )
}
