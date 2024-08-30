import './App.css'
import Contact from './components/Contact'
import data from './components/data'
function App() {
  const contacts = data.map((contact)=>{
    return (
      <Contact
        key={contact.id}
        {...contact}
      />
    )
  })
  return (
    <section className='contacts'>
      {contacts}
    </section>
  )
}

export default App
