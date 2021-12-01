import { useState } from 'react'
import './NewEventForm.css'

export default function NewEventForm({ addEvent }) {

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('Eskisehir')

    const resetForm = () => {

        setTitle('')
        setDate('')
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        const event = {
            title: title,
            date: date,
            location: location,
            id: Math.floor(Math.random() * 10000)

        }
        addEvent(event);
        resetForm();
        console.log(event)

    }

    return (
        <form onSubmit={handleSubmit} className="new-event-form">
            <label>
                <span>Etkinlik Adı:</span >
                <input required
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    value={title}>
                </input>
            </label>
            <label>
                <span>Etkinlik Tarihi:</span >
                <input
                    required
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                    value={date}>
                </input>
            </label>
            <label>
                <select onChange={(e) => setLocation(e.target.value)}>
                    <option value="Eskisehir">Eskisehir </option>
                    <option value="Konya">Konya </option>
                    <option value="Bursa">Bursa </option>
                </select>
            </label>
            <button>Ekle</button>
        </form>
    )
}
