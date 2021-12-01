import './App.css'
import { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'
import NewEventForm from './components/NewEventForm'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    } )
    setShowModal(false)
  }


  const handleClick = (id) => {
    setEvents(prevEvents => {
      return prevEvents.filter(event => id !== event.id)
    })
  }

  const subtitle = "Bütün Etkinlikler"

  return (
    <div className="App">
      <Title title="Etkinlik Sayfasına Hoşgeldiniz" subtitle={subtitle} />
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Etkinlikleri Gizle</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Etkinlikleri Göster</button>
        </div>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick} />}

      { showModal && <Modal isSalesModal={true}>
        <NewEventForm addEvent={addEvent} />
      </Modal>}
        <br/>
      <div>
        <button onClick={() => {setShowModal(true)}}>Yeni bir etkinlik oluştur</button>
      </div>
    </div>
  );
}

export default App;