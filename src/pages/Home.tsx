import Hero from '../components/Hero'
import InstitutionalStory from '../components/InstitutionalStory'
import WhyFintelect from '../components/WhyFintelect'
import InvestmentPhilosophy from '../components/InvestmentPhilosophy'
import GlobalInvesting from '../components/GlobalInvesting'
import NRIWealth from '../components/NRIWealth'
import Services from '../components/Services'
import FeeStructure from '../components/FeeStructure'
import Credentials from '../components/Credentials'
import FounderQuote from '../components/FounderQuote'
import Process from '../components/Process'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main>
      <Hero />
      <InstitutionalStory />
      <WhyFintelect />
      <InvestmentPhilosophy />
      <Services />
      <Process />
      <GlobalInvesting />
      <NRIWealth />
      <FeeStructure />
      <Credentials />
      <FounderQuote />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home
