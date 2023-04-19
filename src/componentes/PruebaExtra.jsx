import React, { useEffect, useRef, useState } from 'react';
import css from '../css/Chat.module.css';

const EXAMPLES = [{"text": "Hola, como estas?", "label": "Intro"}, {"text": "Como te llamas?", "label": "Intro"}, {"text": "Cuál es tu experiencia laboral como desarrollador web?", "label": "Intro"}, {"text": "Podrías contarme sobre algún proyecto en el que hayas trabajado recientemente?", "label": "Mis proyectos"}, {"text": "En qué lenguajes de programación estás especializado?", "label": "Habilidades"}, {"text": "Qué herramientas utilizas para desarrollar aplicaciones web?", "label": "Habilidades"}, {"text": "Tienes alguna certificación relacionada con el desarrollo web?", "label": "Intro"}, {"text": "Cómo te mantienes actualizado en cuanto a las últimas tecnologías y tendencias en desarrollo web?", "label": "Intro"}, {"text": "Puedes proporcionar ejemplos de proyectos de código abierto en los que hayas trabajado?", "label": "Mis proyectos"}, {"text": "Cómo puedo ponerme en contacto contigo para discutir un proyecto o contratar tus servicios?", "label": "Contacto"}, {"text": "Cómo puedo ponerme en contacto contigo?", "label": "Contacto"}, {"text": "Cuál es tu formación académica en desarrollo web?", "label": "Intro"}, {"text": "Has trabajado en algún proyecto en equipo? ¿Podrías contarme más sobre esa experiencia?", "label": "Mis proyectos"}, {"text": "Cuáles son tus habilidades principales como desarrollador web full stack?", "label": "Habilidades"}, {"text": "Has trabajado con alguna tecnología de programación en particular que sea tu especialidad?", "label": "Habilidades"}, {"text": "Cuál es tu enfoque en cuanto al diseño web?", "label": "Mis proyectos"}, {"text": "Qué tipo de proyectos te interesan más?", "label": "Desafios y extras"}, {"text": "Qué tipo de proyectos te gustaría trabajar en el futuro?", "label": "Desafios y extras"}, {"text": "Qué herramientas de control de versiones utilizas?", "label": "Contacto"}, {"text": "Podrías explicar un concepto de programación complejo en términos simples?", "label": "Contacto"}, {"text": "Cuál ha sido el proyecto más desafiante en el que has trabajado y cómo lo superaste?", "label": "Mis proyectos"}, {"text": "En qué te gustaría centrarte en el futuro en términos de tecnologías o habilidades?", "label": "Desafios y extras"}, {"text": "Ofreces servicios de mantenimiento y actualización de sitios web?", "label": "Contacto"}, {"text": "Qué tan importante es la calidad del código en tus proyectos?", "label": "Contacto"}, {"text": "Tienes experiencia en desarrollo de aplicaciones móviles?", "label": "Contacto"}, {"text": "Cual es tu espectativa salarial?", "label": "Contacto"}, {"text": "Cuanto cobras por tus servicios", "label": "Contacto"}]
  
const API_KEY = '5eKyvh6gkM27NJaP2wDF1WR4NrbR5HvvneQZVJx4';

const ANSWERS = {
  default: (
    <p>En realidad soy una IA entrenada por Rodrigo Rojas para contestar algunas cosas, asi que volveme a pregtara</p>
  ),
  intro: (
    <p>Soy Rodrigo Rojas, soy full stack developer y tengo que agregar un monton de informacion</p>
  )
}

function ChatBot() {
  const [question, setQuestion] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState([
  {
    id: "1",
    type: "bot",
    text: "Hola soy un bot"
  },
  {
    id: "",
    type: "user",
    text: "Hola soy un usuario"
  },
  {
    id: "1",
    type: "bot",
    text: "Hola soy un bot"
  }
]);
    const chatContainerRef = useRef(null);

    const handleSubmit = async (event) => {
    event.preventDefault();
    
    if(loading) return;
    setLoading(true)
    setMessages((messages) => messages.concat({id: String(Date.now()), type: "user", text: question}))
    setQuestion('')
    try {
     const {classifications} = await fetch('https://api.cohere.ai/v1/classify', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'large',
          inputs: [question],
          examples: EXAMPLES
        })
      }).then((res) => res.json());

      const key = classifications[0] 

      setMessages((messages) => 
      messages.concat({
        id: String(Date.now()), 
        type: "bot", 
        text: ANSWERS[classifications[0]] || ANSWERS['default']}))
      setLoading(false)
      console.log(classifications)

    } catch (error) {
      console.log(error);
    }
  };

        // Esta función se encarga de hacer scroll hacia abajo en el chat cada vez que se actualiza el estado de los mensajes
        useEffect(() => {
          if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
          }
        }, [messages]);

  return (
    <main>
      <h1>Chat Bot</h1>
      <div className={css.container} >
        <div className={css.chat} ref={chatContainerRef}>
          {messages.map((message) => (
            <div className={message.type === "bot" ? css.botMessage : css.userMessage} key={message.id}>
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input 
            className={css.input} 
            type='text' 
            placeholder='Escribe un mensaje...' 
            value={question} 
            onChange={(e) => setQuestion(e.target.value)}
            name='question'
             />
            
          <button disabled={loading} className={css.button} type='submit'>Enviar</button>
        </form>
      </div>
    </main>
  );
}

export default ChatBot;

