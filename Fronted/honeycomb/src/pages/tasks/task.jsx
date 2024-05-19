import { React, useEffect, useState } from "react";
import axios from "axios";
import Header from '../../components/header/header.jsx'
import './tasks.css'

const task = () => {
    const [tasks, setTasks] = useState([]);
    const SERVER_URL = "http://localhost:8080";

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${SERVER_URL}/Task/buscar`);
            console.log("Fetched tasks:", response.data);
            setTasks(response.data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    return (
        <>
            <Header />
            <div className='contenedorTask'>
                <h2>Tablero de tareas</h2>
                {tasks.map((task, idTask = task.id) => (
                    <div key={idTask}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p>{task.priority ? "Prioritario" : "No prioritario"}</p>
                    </div>
                ))}
            </div>
        </>
    )

}

export default task