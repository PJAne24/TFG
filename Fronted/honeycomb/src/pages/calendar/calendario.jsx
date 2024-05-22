import React, { useState, useEffect } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import { useSessionStorage } from '../../admin/useSessionStorage.jsx';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Header from '../../components/header/header.jsx';
import dayjs from 'dayjs';
import abeja from '../../assets/abeja.png';
import axios from 'axios';
import './calendario.css';

const SERVER_URL = "http://localhost:8080";

const Calendario = () => {
    const localizer = dayjsLocalizer(dayjs);
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useSessionStorage("newEvent", "");
    const userId = sessionStorage.getItem('userId');

    // Función para recuperar eventos del usuario
    const fetchUserEvents = async () => {
        const userId = sessionStorage.getItem('userId');
        if (!userId) {
            console.error("User ID is not available in session storage");
            return;
        }
        try {
            console.log(userId)
            // const response = await axios.get(`${SERVER_URL}/Event/user/${userId}`);
            console.log("Fetched events:", response.data);
            setEvents(response.data);
        } catch (error) {
            console.error("Error fetching events:", error);
        }
    };

    // Efecto de montaje y actualización para recuperar eventos del usuario
    useEffect(() => {
        fetchUserEvents();
    }, [userId]); // Agregar userId como dependencia para que el efecto se vuelva a ejecutar cuando cambie

    // Guardar eventos en sessionStorage cada vez que se actualiza la lista de eventos
    useEffect(() => {
        sessionStorage.setItem("events", JSON.stringify(events));
    }, [events]);

    const saveEvent = async (event) => {
        try {
            const response = await axios.post(`${SERVER_URL}/Api/Events`, { ...event, idUser: userId });
            console.log(response.data);
            setNewEvent(event);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSelect = ({ start }) => {
        const selectedDate = dayjs(start).format('YYYY-MM-DD');
        const title = window.prompt(`Nuevo evento - Título (${selectedDate})`);

        if (title) {
            const startTime = promptForTime('Hora de inicio');
            const endTime = promptForTime('Hora de fin');

            if (startTime && endTime) {
                const startDate = `${selectedDate} ${startTime}`;
                const endDate = `${selectedDate} ${endTime}`;

                const newEvent = {
                    start: dayjs(startDate).toDate(),
                    end: dayjs(endDate).toDate(),
                    title: title
                };
                setEvents([...events, newEvent]);
                saveEvent(newEvent);
            }
        }
    };

    const promptForTime = (message) => {
        return window.prompt(`${message} (HH:mm)`);
    };

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
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 500 }}
                        onSelectSlot={handleSelect}
                        selectable
                    />
                </div>
            </div>
        </>
    );
};

export default Calendario;
