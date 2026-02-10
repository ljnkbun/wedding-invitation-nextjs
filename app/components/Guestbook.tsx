'use client';

import { useEffect, useState } from 'react';
import './Guestbook.css';

type Message = {
  name: string;
  message: string;
  time: string;
};

export default function GuestbookSection() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!;

  // GET messages
  useEffect(() => {
    fetch(SCRIPT_URL)
      .then(res => res.json())
      .then((data: Message[]) => setMessages(data))
      .catch(console.error);
  }, []);

  // POST message
  const submit = async () => {
    if (!name.trim() || !message.trim()) return;

    const payload = { name, message };

    // optimistic UI
    setMessages(prev => [
      {
        ...payload,
        time: new Date().toLocaleString('vi-VN'),
      },
      ...prev,
    ]);

    setName('');
    setMessage('');

    await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(payload),
      });
      
  };

  return (
    <div className="guestbook-wrap">
      <h2 className="guestbook-title">SỔ LƯU BÚT</h2>

      {/* FORM */}
      <div className="guestbook-form">
        <input
          placeholder="Nhập tên của bạn*"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Nhập lời chúc của bạn*"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="guestbook-actions">
          <button className="btn-generate">✨ Tạo lời chúc</button>
          <button className="btn-submit" onClick={submit}>
            GỬI LỜI CHÚC
          </button>
        </div>
      </div>

      {/* LIST */}
      <div className="guestbook-list">
        {messages.map((m, i) => (
          <div className="guestbook-card" key={i}>
            <div className="guestbook-card-head">
              <span className="name">{m.name}</span>
              <span className="time">{m.time}</span>
            </div>
            <div className="message">{m.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
