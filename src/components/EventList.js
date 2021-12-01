import styles from './EventList.module.css'


const EventList = ({ events, handleClick }) => {
  return (
    <div>
      {events.map((item, index) => (
        <div className={styles.card} key={item.id}>
          <h2>{index} - {item.title}</h2>
          <p>{item.location} / {item.date}</p>
          <button onClick={() => handleClick(item.id)}>delete event</button>
        </div>
      ))}
    </div>
  );
}

export default EventList;


