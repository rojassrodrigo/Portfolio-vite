import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import css from "../css/Contact.module.css";
import ContactMailIcon from "@mui/icons-material/ContactMail";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateForm = () => {
    let errors = {};

    if (!name) {
      errors.name = "El nombre es obligatorio.";
    } else if (name.length > 20) {
      errors.name = "El nombre debe tener como máximo 20 caracteres.";
    }

    if (!email) {
      errors.email = "El correo electrónico es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "El correo electrónico es inválido.";
    }

    if (!message) {
      errors.message = "El mensaje es obligatorio.";
    } else if (message.length > 300) {
      errors.message = "El mensaje debe tener como máximo 300 caracteres.";
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      try {
        // Aquí podrías hacer algo con los valores de "name", "email" y "message"
        console.log(name, email, message);
        toast.success("El formulario se envió correctamente.");
        setName("");
        setEmail("");
        setMessage("");
      } catch (error) {
        toast.error(`Ha habido un error al enviar el formulario: ${error.message}`);
      }
    } else {
      Object.keys(errors).forEach((key) => {
        toast.error(errors[key]);
      });
    }
  };

  return (
    <section id="contact">
      <ToastContainer position="top-right" autoClose={5000} />
      <div className={css.container}>
        <div className={css.cardTitle}>
          <ContactMailIcon />
          <h1>Contacto</h1>
        </div>  
        <p className={css.text}>
        Si tienes alguna consulta no dudes en contactarme!
        </p>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input type="text" value={name} onChange={(event) => setName(event.target.value.slice(0, 20))} />
          </label>
          <label>
            Correo electrónico:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            Mensaje:
            <textarea value={message} onChange={(event) => setMessage(event.target.value.slice(0, 300))} />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}
