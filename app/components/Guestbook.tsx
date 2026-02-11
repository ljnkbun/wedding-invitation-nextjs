'use client';

import { useEffect, useRef, useState } from 'react';
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

    // RSVP
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [rsvpName, setRsvpName] = useState('');
    const [attendance, setAttendance] =
        useState<'yes' | 'no' | 'maybe' | ''>('');
    const [submitting, setSubmitting] = useState(false);
    const [loadingMessages, setLoadingMessages] = useState(true);

    useEffect(() => {
        const el = document.querySelector('.guestbook-list');
        el?.scrollTo({ top: 0, behavior: 'smooth' });
    }, [messages]);


    const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!;

    // GET messages
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                setLoadingMessages(true);

                const res = await fetch(SCRIPT_URL);
                const data: Message[] = await res.json();

                setMessages(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoadingMessages(false);
            }
        };

        fetchMessages();
    }, []);

    // POST message
    const submit = async () => {
        if (!name.trim() || !message.trim()) return;

        const payload = { type: 'guestbook', name, message };

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

    // POST RSVP (sheet2)
    const submitRSVP = async () => {
        if (!rsvpName.trim() || !attendance) return;

        try {
            setSubmitting(true);

            await fetch(SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify({
                    type: 'rsvp',
                    name: rsvpName,
                    attendance,
                }),
            });

            dialogRef.current?.close();
            setRsvpName('');
            setAttendance('');
        } finally {
            setSubmitting(false);
        }
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
                {loadingMessages ? (
                    <div className="loading-wrapper">
                        <img
                            src="/images/logo-hy.png"
                            alt="loading"
                            className="loading-image"
                        />
                    </div>
                ) : (
                    messages.map((m, i) => (
                        <div className="guestbook-card" key={i}>
                            <div className="guestbook-card-head">
                                <span className="name">{m.name}</span>
                                <span className="time">{m.time}</span>
                            </div>
                            <div className="message">{m.message}</div>
                        </div>
                    ))
                )}
            </div>

            {/* RSVP trigger */}
            <div className="rsvp-section">
                <button
                    type="button"
                    onClick={() => dialogRef.current?.showModal()}
                    className="rsvp-btn"
                >
                    <span>XÁC NHẬN THAM DỰ</span>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>




            {/* DIALOG RSVP */}
            <dialog ref={dialogRef} className="rsvp-dialog"
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        dialogRef.current?.close();
                    }
                }}>
                <button
                    className="close"
                    onClick={() => dialogRef.current?.close()}
                >
                    ✕
                </button>

                <h2>Xác nhận tham dự</h2>
                <p>Vui lòng cho chúng tôi biết bạn có đến không</p>

                <label>Tên của bạn</label>
                <input
                    value={rsvpName}
                    onChange={e => setRsvpName(e.target.value)}
                    placeholder="Nhập tên của bạn"
                />

                <label>Bạn có đến không?</label>

                <div className="options">
                    <button
                        className={attendance === 'yes' ? 'active' : ''}
                        onClick={() => setAttendance('yes')}
                    >
                        ✔ Tôi sẽ đến
                    </button>

                    <button
                        className={attendance === 'no' ? 'active' : ''}
                        onClick={() => setAttendance('no')}
                    >
                        ✕ Rất tiếc, tôi không thể đến
                    </button>

                    <button
                        className={attendance === 'maybe' ? 'active' : ''}
                        onClick={() => setAttendance('maybe')}
                    >
                        ? Chưa chắc chắn
                    </button>
                </div>

                <button
                    className="submit"
                    disabled={!rsvpName || !attendance || submitting}
                    onClick={submitRSVP}
                >
                    {submitting ? (
                        <span className="loading">
                            <span className="spinner" />
                            Đang gửi...
                        </span>
                    ) : (
                        'Gửi xác nhận'
                    )}
                </button>
            </dialog>

        </div>
    );
}
