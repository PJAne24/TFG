import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Header from '../../components/header/header.jsx'
import dayjs from 'dayjs'
import abeja from '../../assets/abeja.png'
import './calendario.css'



const calendario = () => {
    const localizer = dayjsLocalizer(dayjs)
    return (
        <>
            <Header />
            <div className='contenedorCalendar'>
                <div className='title'>
                    <h1>-------- Calendario --------</h1> 
                    <span>Aquí puedes anotar tus eventos y mirar fechas importantes...</span>
                    <img src={abeja} alt="abeja" id="abeja" />
                </div>
                <div className='calendar'>
                    <Calendar
                        localizer={localizer}
                        style={{ height: 500 }}
                    />
                </div>
            </div>
        </>
    )

}

export default calendario