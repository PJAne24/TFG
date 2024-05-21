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
        const userId = sessionStorage.getItem('userId');
        if (!userId) {
            console.error("User ID is not available in session storage");
            return;
        }

        try {
            const response = await axios.get(`${SERVER_URL}/Task/user/${userId}`);
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
                <h1>-------- Resumen de Tareas --------</h1>
                <div className="task">
                    {tasks.map((task, idTask = task.id) => (
                        <div key={idTask} className="backTask">
                            <label className="container">
                                <input type="checkbox" />
                                <svg viewBox="0 0 64 64" height="2em" width="2em">
                                    <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
                                </svg>
                            </label>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <span className={task.priority ? "prioritario" : ""}>
                                {task.priority ? "Prioritario" : "No prioritario"}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}

export default task