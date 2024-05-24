import React, { useState } from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = 'https://formspree.io/f/xyyranzg'; 
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    })
    .then(response => {
      if (response.ok) {
        alert('Сообщение успешно отправлено!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Ошибка при отправке данных');
      }
    })
    .catch(error => {
      console.error(error);
      alert('Произошла ошибка при отправке данных');
    });
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Байланыс</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Атыңыз
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Атыңыз"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Электронды почта
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Электронды почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Хабарлама
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Хабарлама"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Жіберу" />
      </form>
    </section>
  );
}

export default Contact;