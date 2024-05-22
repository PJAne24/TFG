import "./toDo.css";
import { React, useState, useEffect } from "react";
import { useSessionStorage } from "../../admin/useSessionStorage.jsx";
import lapiz from '../../assets/pen.png'

import axios from "axios";
import Header from "../../components/header/header.jsx";

const SERVER_URL = "http://localhost:8080";
const API_ENDPOINT_CREATE = "/Task/crear";
const API_ENDPOINT_DELETE = "/Task/eliminar"; // Actualización de la ruta

const menuPrincipal = () => {
    const [title, setTitle] = useSessionStorage("título","Título personalizado");
    const [subtitulo, setSubtitulo] = useSessionStorage("subtítulo","Subtítulo personalizado");

    const [tasks, setTasks] = useState([]);


    const [formData, setFormData] = useState({
        taskTitle: "",
        taskDescription: "",
        priority: false
    });

    const cambiarTitulo = () => {
        const nuevoTitulo = prompt("Introduce el nuevo título:");
        if (nuevoTitulo !== null) {
            setTitle(nuevoTitulo);
        }
    };

    const cambiarSubtitulo = () => {
        const nuevoSubtitulo = prompt("Introduce el nuevo subtítulo:");
        if (nuevoSubtitulo !== null) {
            setSubtitulo(nuevoSubtitulo);
        }
    };

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

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = async () => {
        const userId = sessionStorage.getItem('userId');
        if (!userId) {
            console.error("User ID is not available in session storage");
            return;
        }
        try {
            const response = await axios.post(`${SERVER_URL}${API_ENDPOINT_CREATE}`, {
                idUser: userId,
                title: formData.taskTitle,
                description: formData.taskDescription,
                priority: formData.priority
            });
            console.log(`Added task with ID: ${response.data.id}`);
            setTasks([...tasks, response.data]);
            setFormData({
                taskTitle: "",
                taskDescription: "",
                priority: false
            });
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };


    const eliminarTarea = async (taskId) => {
        try {
            await axios.delete(`${SERVER_URL}/Task/delete/${taskId}`);
            setTasks(tasks.filter(task => task.id !== taskId));
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    return (
        <>
            <Header />
            <div className="containerToDo">
                <div className="toDo">
                    <div className="modificacion">
                        <h1>{title}</h1>
                        <button onClick={cambiarTitulo}><img src={lapiz} alt="editar-lapiz" /></button>
                    </div>

                    <div className="modificacion">
                        <h3>{subtitulo}</h3>
                        <button onClick={cambiarSubtitulo}><img src={lapiz} alt="editar-lapiz" id="subImg" /></button>
                    </div>
                    <div className="mitades">
                        <div className="tareasDivision">
                            <div className="tareas">
                                <div>
                                    <h2>Crear tareas</h2>
                                    <form onSubmit={handleSubmit}>
                                        <label>
                                            <span>Título de la tarea: </span><br />
                                            <input type="text" name="taskTitle" value={formData.taskTitle} onChange={handleChange} />
                                        </label>
                                        <label>
                                            <span>Descripción de la tarea: </span><br />
                                            <textarea name="taskDescription" value={formData.taskDescription} onChange={handleChange} />
                                        </label>
                                        <label>
                                            <br /><input type="checkbox" name="priority" checked={formData.priority} onChange={handleChange} />
                                            <span id="priority">Prioritaria</span> <br />
                                        </label>
                                        <button type="submit">Agregar tarea</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="pendingTasks">
                            <h2>Tablero de tareas</h2>
                            {tasks.map((task, idTask = task.id) => (
                                <div key={idTask}>
                                    <h3>{task.title}</h3>
                                    <p>{task.description}</p>
                                    <p>{task.priority ? "Prioritario" : "No prioritario"}</p>
                                    <button onClick={() => eliminarTarea(task.id)}>Eliminar tarea</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default menuPrincipal;
