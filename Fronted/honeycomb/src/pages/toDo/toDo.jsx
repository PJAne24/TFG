import "./toDo.css"
import { React, useState, useEffect } from "react";
import axios from "axios"


const SERVER_URL = "http://localhost:4444";
const API_ENDPOINT = "/Task/crear";


const menuPrincipal = () => {

    // Definimos los estados para el título y el subtítulo
    const [title, setTitle] = useState("Título personalizado");
    const [subtitulo, setSubtitulo] = useState("Subtítulo personalizado");
    const [tasks, setTasks] = useState([]);
    const [formData, setFormData] = useState({
        taskTitle: "",
        taskDescription: ""
    });

    // Función para cambiar el título
    const cambiarTitulo = () => {
        const nuevoTitulo = prompt("Introduce el nuevo título:");
        if (nuevoTitulo !== null) {
            setTitle(nuevoTitulo);
        }
    };

    // Función para cambiar el subtítulo
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
            const response = await axios.get("http://localhost:4444/Task/buscar");
            setTasks(response.data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${SERVER_URL}${API_ENDPOINT}`, {
                title: formData.taskTitle,
                description: formData.taskDescription,
                priority: false // Puedes ajustar esto según tu formulario
            });
            setTasks([...tasks, response.data]); // Agregar la nueva tarea a la lista
            setFormData({
                taskTitle: "",
                taskDescription: ""
            });
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };


    return (
        <>
            <div className="dos">
                <h1>Pagina principal</h1>
                <div>
                    <h1>{title}</h1><button onClick={cambiarTitulo}>editar</button>

                    <h2>{subtitulo}</h2><button onClick={cambiarSubtitulo}>editar</button>
                    <div>
                        <h1>Tareas</h1>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Título de la tarea:
                                <input type="text" name="taskTitle" value={formData.taskTitle} onChange={handleChange} />
                            </label>
                            <label>
                                Descripción de la tarea:
                                <textarea name="taskDescription" value={formData.taskDescription} onChange={handleChange} />
                            </label>
                            <button type="submit">Agregar tarea</button>
                        </form>
                    </div>
                    <div>
                        <h2>Tareas pendientes...</h2>
                        {tasks.map(task => (
                            <div key={task._id}>
                                <span>({task.id})</span>
                                <h3>{task.title}</h3>
                                <p>{task.description}</p>
                                <p>{task.priority ? "Prioritario" : "No prioritario"}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )

}

export default menuPrincipal