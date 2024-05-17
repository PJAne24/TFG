import "./toDo.css";
import { React, useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header/header.jsx";

const SERVER_URL = "http://localhost:8080";
const API_ENDPOINT_CREATE = "/Task/crear";
const API_ENDPOINT_DELETE = "/Task/eliminar"; // Actualización de la ruta

const menuPrincipal = () => {
    const [title, setTitle] = useState("Título personalizado");
    const [subtitulo, setSubtitulo] = useState("Subtítulo personalizado");

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
        try {
            const response = await axios.get(`${SERVER_URL}/Task/buscar`);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${SERVER_URL}${API_ENDPOINT_CREATE}`, {
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
        if (!taskId) {
            console.error("Task ID is undefined");
            return;
        }

        try {
            console.log(`Deleting task with ID: ${taskId}`);
            await axios.delete(`${SERVER_URL}${API_ENDPOINT_DELETE}/${taskId}`);
            setTasks(tasks.filter((task) => task._id !== taskId));
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    return (
        <>
            <Header />
            <div className="containerToDo">
                <div>
                    <div className="modificacion">
                        <h1>{title}</h1>
                        <button onClick={cambiarTitulo}>editar</button>
                    </div>

                    <div className="modificacion">
                        <h3>{subtitulo}</h3>
                        <button onClick={cambiarSubtitulo}>editar</button>
                    </div>
                    <div className="mitades">
                        <div className="tareasDivision">
                            <div className="tareas">
                                <div>
                                    <h2>Crear tareas</h2>
                                    <form onSubmit={handleSubmit}>
                                        <label>
                                            Título de la tarea: <br />
                                            <input type="text" name="taskTitle" value={formData.taskTitle} onChange={handleChange} />
                                        </label>
                                        <label>
                                            Descripción de la tarea: <br />
                                            <textarea name="taskDescription" value={formData.taskDescription} onChange={handleChange} />
                                        </label>
                                        <label>
                                            Prioritaria
                                            <input type="checkbox" name="priority" checked={formData.priority} onChange={handleChange} />
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
