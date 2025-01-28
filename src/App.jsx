
 './App.css'
import About from './component/About'
import Contact from './component/Contact'
import Footer from './component/footer'
import Header from './component/Header'
import Hero from './component/Hero'
import Projects from './component/Project'



export default function App() {
  return (
   
    <>
    <Header />
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
    <Footer /></>
   
  )
}
