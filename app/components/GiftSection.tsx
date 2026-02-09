// components/sections/GiftSection.tsx
import { useRef } from 'react';

export default function GiftSection() {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const openDialog = () => {
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = '15px'; // bù scrollbar
        requestAnimationFrame(() => {
            dialogRef.current?.showModal();
        });
    };

    const closeDialog = () => {
        dialogRef.current?.close();
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    };

    return (
        <>
            <section className="section reveal  gift-section">
                <div className="gift-wrapper">
                    {/* ===== GIFT BOX ===== */}
                    <div className="gift-box-area">
                        <div style={{ maxWidth: '420px', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ width: '100%', textAlign: 'center' }}>
                                <h2 className="sectionTitle" style={{ marginBottom: '2rem' }}>Hộp Mừng Cưới</h2>

                                <button
                                    type="button"
                                    onClick={openDialog}
                                    className="gift-button"
                                    style={{
                                        width: '200px',
                                        height: '256px',
                                        cursor: 'pointer',
                                        outline: 'none',
                                        border: 'none',
                                        background: 'transparent',
                                        position: 'relative',
                                        margin: '0 auto',
                                        display: 'block'
                                    }}
                                >
                                    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {/* All 5 coins */}
                                        {[
                                            { class: 'coin-1', size: 30.8, top: '5%', right: '5%', left: null, bottom: null },
                                            { class: 'coin-2', size: 25.2, top: '20%', left: '0%', right: null, bottom: null },
                                            { class: 'coin-3', size: 28, bottom: '20%', right: '0%', top: null, left: null },
                                            { class: 'coin-4', size: 22.4, bottom: '8%', left: '8%', top: null, right: null },
                                            { class: 'coin-5', size: 21, top: '45%', right: '-5%', left: null, bottom: null }
                                        ].map((coin, i) => (
                                            <div
                                                key={i}
                                                className={coin.class}
                                                style={{
                                                    position: 'absolute',
                                                    width: `${coin.size}px`,
                                                    height: `${coin.size}px`,
                                                    background: 'rgb(251, 191, 36)',
                                                    border: '2px solid rgb(245, 158, 11)',
                                                    borderRadius: '50%',
                                                    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 3px',
                                                    top: coin.top || undefined,
                                                    right: coin.right || undefined,
                                                    bottom: coin.bottom || undefined,
                                                    left: coin.left || undefined
                                                }}
                                            >
                                                <div style={{ position: 'absolute', inset: '2px', border: '2px solid rgb(253, 224, 71)', borderRadius: '50%' }} />
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    width: `${coin.size * 0.28}px`,
                                                    height: `${coin.size * 0.28}px`,
                                                    backgroundColor: 'transparent',
                                                    border: '2px solid rgb(217, 119, 6)',
                                                    boxShadow: 'rgba(0, 0, 0, 0.2) 1px 1px 2px inset'
                                                }} />
                                            </div>
                                        ))}

                                        {/* Sparkles */}
                                        <span className="sparkle-1" style={{ position: 'absolute', top: '8%', left: '20%', fontSize: '14px', color: 'white' }}>✦</span>
                                        <span className="sparkle-2" style={{ position: 'absolute', bottom: '35%', right: '8%', fontSize: '11.2px', color: 'white' }}>✦</span>
                                        <span className="sparkle-3" style={{ position: 'absolute', top: '40%', left: '3%', fontSize: '8.4px', color: 'white' }}>✦</span>

                                        {/* Envelope */}
                                        <div style={{ position: 'relative', width: '140px', height: '196px' }}>
                                            <div style={{ position: 'absolute', left: '2px', right: '-2px', bottom: '-3px', height: '196px', backgroundColor: 'rgb(92, 22, 18)', borderRadius: '0.5rem' }} />
                                            <div style={{ position: 'absolute', top: '2px', bottom: '-2px', right: '-3px', width: '140px', backgroundColor: 'rgb(107, 29, 24)', borderRadius: '0.5rem' }} />

                                            <div className="envelope-front" style={{
                                                position: 'absolute',
                                                inset: 0,
                                                borderRadius: '0.5rem',
                                                backgroundColor: 'rgb(185, 28, 28)',
                                                boxShadow: 'rgba(0, 0, 0, 0.3) 0px 4px 20px',
                                                overflow: 'hidden',
                                                transition: 'transform 0.3s, box-shadow 0.3s'
                                            }}>
                                                <div style={{
                                                    position: 'absolute',
                                                    inset: 0,
                                                    opacity: 0.2,
                                                    backgroundImage: 'repeating-radial-gradient(circle at 0px 0px, transparent 0px, transparent 11.2px, rgb(127, 29, 29) 11.2px, rgb(127, 29, 29) 11.9px)',
                                                    backgroundSize: '21px 21px',
                                                    backgroundPosition: '10.5px 10.5px'
                                                }} />
                                                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', backgroundColor: 'rgb(251, 191, 36)' }} />

                                                <div style={{
                                                    position: 'absolute',
                                                    left: '50%',
                                                    top: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    width: '63px',
                                                    height: '63px',
                                                    background: 'radial-gradient(circle, rgb(251, 191, 36) 0%, rgb(217, 119, 6) 100%)',
                                                    border: '3px solid rgb(254, 243, 199)',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                                                }}>
                                                    <span style={{ fontSize: '30.8px', color: 'rgb(185, 28, 28)', lineHeight: 1, textShadow: 'rgba(0, 0, 0, 0.2) 1px 1px 2px', fontWeight: 'bold' }}>囍</span>
                                                </div>

                                                {/* Corner SVGs */}
                                                {[
                                                    { transform: 'rotate(0deg)', top: '8px', left: '8px' },
                                                    { transform: 'rotate(90deg)', top: '8px', right: '8px' },
                                                    { transform: 'rotate(-90deg)', bottom: '8px', left: '8px' },
                                                    { transform: 'rotate(180deg)', bottom: '8px', right: '8px' }
                                                ].map((corner, i) => (
                                                    <svg key={i} style={{ position: 'absolute', ...corner }} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2">
                                                        <path d="M2 2 L2 16 L6 16 L6 6 L16 6 L16 2 Z" opacity="0.85" strokeLinecap="square" strokeLinejoin="miter" />
                                                        <path d="M6 10 L10 10 L10 6" opacity="0.85" strokeLinecap="square" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="hint-text" style={{
                                        position: 'absolute',
                                        color: 'rgb(78, 100, 57)',
                                        bottom: '-8px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        fontSize: '0.75rem',
                                        whiteSpace: 'nowrap',
                                        fontWeight: 500
                                    }}>
                                        Nhấn để mở
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <footer className="wedding-footer">
                    <p className="footer-text">
                        Sự hiện diện của quý khách là niềm vinh hạnh của gia đình chúng tôi!
                    </p>
                </footer>

            </section>

            {/* Modal QR*/}
            <dialog ref={dialogRef}>
                <div className="modal-box-animated" style={{
                    backgroundColor: 'rgb(255, 255, 255)',
                    maxWidth: '32rem',
                    padding: 0,
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    borderRadius: '0.5rem'
                }}>
                    <div style={{ backgroundColor: 'rgb(78, 100, 57)', padding: '1.5rem 1.5rem 1rem', position: 'relative', textAlign: 'center' }}>
                        <button
                            onClick={closeDialog}
                            style={{
                                position: 'absolute',
                                right: '12px',
                                top: '12px',
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                border: 'none',
                                background: 'rgba(255,255,255,0.1)',
                                color: 'rgba(255,255,255,0.8)',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <h2 style={{ fontSize: '1.5rem', color: 'white', margin: 0, fontFamily: 'Georgia, "Times New Roman", serif' }}>
                            Hộp Mừng Cưới
                        </h2>
                    </div>

                    <div style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {[
                            { title: 'Chú Rể - Văn Toàn', bank: 'Vietcombank', acc: '888888888', name: 'Nguyen Van Toan', url: 'VCB' },
                            { title: 'Cô Dâu - Linh', bank: 'BIDV', acc: '99999999999', name: 'Linh', url: 'BIDV' }
                        ].map((qr, i) => (
                            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '160px' }}>
                                <h3 style={{ marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: 500, textAlign: 'center', color: 'rgb(78, 100, 57)' }}>
                                    {qr.title}
                                </h3>
                                <div className="qr-container" style={{
                                    width: '144px',
                                    height: '144px',
                                    backgroundColor: 'white',
                                    borderRadius: '0.75rem',
                                    padding: '0.5rem',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                    border: '2px solid rgba(78, 100, 57, 0.125)'
                                }}>
                                    <img
                                        alt={`QR Code - ${qr.title}`}
                                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                        src={`https://qr.sepay.vn/img?bank=${qr.url}&acc=${qr.acc}&template=qronly`}
                                    />
                                </div>
                                <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                                    <p style={{ fontSize: '0.625rem', color: 'rgb(78, 100, 57)', margin: '2px 0' }}>{qr.bank}</p>
                                    <p style={{ fontSize: '0.625rem', color: 'rgb(78, 100, 57)', margin: '2px 0', fontFamily: 'monospace' }}>{qr.acc}</p>
                                    <p style={{ fontSize: '0.625rem', color: 'rgb(78, 100, 57)', margin: '2px 0', fontWeight: 600 }}>{qr.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p style={{
                        textAlign: 'center',
                        fontSize: '0.875rem',
                        margin: '0 1.5rem 1.5rem',
                        opacity: 0.7,
                        color: 'rgb(78, 100, 57)',
                        fontFamily: 'Georgia, "Times New Roman", serif'
                    }}>
                        Cảm ơn bạn đã đồng hành cùng chúng mình trong ngày trọng đại!
                    </p>
                </div>
            </dialog>
        </>

    );
}
