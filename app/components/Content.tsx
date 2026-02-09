import { useRef, useEffect, useState } from 'react';

export default function WeddingInvitation({ isOpen }: { isOpen: boolean }) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const sectionsRef = useRef<HTMLDivElement>(null);

    const openDialog = () => {
        dialogRef.current?.showModal();
    };

    const closeDialog = () => {
        dialogRef.current?.close();
    };

    useEffect(() => {
        if (!isOpen) return;

        const revealOnScroll = () => {
            const reveals = sectionsRef.current?.querySelectorAll('.reveal');
            if (!reveals) return;

            reveals.forEach((element) => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const revealPoint = 150;

                if (elementTop < windowHeight - revealPoint) {
                    element.classList.add('active');
                }
            });
        };

        setTimeout(revealOnScroll, 100);
        window.addEventListener('scroll', revealOnScroll);

        return () => {
            window.removeEventListener('scroll', revealOnScroll);
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', padding: '20px' }}>
            <style>{`
                @keyframes contentFadeIn {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes float1 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    25% { transform: translate(10px, -15px) rotate(5deg); }
                    50% { transform: translate(-5px, -25px) rotate(-3deg); }
                    75% { transform: translate(8px, -18px) rotate(4deg); }
                }
                @keyframes float2 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    33% { transform: translate(-12px, -20px) rotate(-6deg); }
                    66% { transform: translate(6px, -28px) rotate(4deg); }
                }
                @keyframes float3 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    40% { transform: translate(15px, -22px) rotate(7deg); }
                    80% { transform: translate(-8px, -30px) rotate(-5deg); }
                }
                @keyframes float4 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    30% { transform: translate(-10px, -18px) rotate(-4deg); }
                    70% { transform: translate(12px, -24px) rotate(6deg); }
                }
                @keyframes float5 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    25% { transform: translate(8px, -16px) rotate(3deg); }
                    50% { transform: translate(-15px, -26px) rotate(-7deg); }
                    75% { transform: translate(10px, -20px) rotate(5deg); }
                }
                @keyframes sparkle {
                    0%, 100% { opacity: 0.3; transform: scale(0.8) rotate(0deg); }
                    50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
                }
                @keyframes sparkle2 {
                    0%, 100% { opacity: 0.4; transform: scale(0.9) rotate(0deg); }
                    50% { opacity: 1; transform: scale(1.1) rotate(-180deg); }
                }
                @keyframes sparkle3 {
                    0%, 100% { opacity: 0.5; transform: scale(0.7) rotate(0deg); }
                    50% { opacity: 1; transform: scale(1.3) rotate(180deg); }
                }
                @keyframes hintPulse {
                    0%, 100% { opacity: 0.7; transform: translateX(-50%) scale(1); }
                    50% { opacity: 1; transform: translateX(-50%) scale(1.05); }
                }
                @keyframes modalFadeIn {
                    from { opacity: 0; transform: scale(0.95) translateY(20px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                
                .content { width: 100%; animation: contentFadeIn 0.8s ease-out; padding: 2rem 1rem; }
                .section {
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(10px);
                    border-radius: 20px;
                    padding: 2.5rem 2rem;
                    margin: 2rem auto;
                    max-width: 800px;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
                    border: 1px solid rgba(143, 188, 143, 0.2);
                    position: relative;
                    overflow: hidden;
                }
                .section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, rgb(143, 188, 143), rgb(78, 100, 57), rgb(143, 188, 143));
                }
                .sectionTitle {
                    font-family: Georgia, 'Times New Roman', serif;
                    font-size: 2rem;
                    color: rgb(78, 100, 57);
                    margin-bottom: 1.5rem;
                    text-align: center;
                    font-weight: 500;
                }
                .sectionContent {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: rgb(78, 100, 57);
                    text-align: center;
                }
                .eventDetails { display: grid; gap: 1.5rem; margin-top: 1rem; }
                .eventItem {
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(143, 188, 143, 0.1) 100%);
                    padding: 1.5rem;
                    border-radius: 12px;
                    border-left: 4px solid rgb(143, 188, 143);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .eventItem:hover { transform: translateX(4px); box-shadow: 0 4px 16px rgba(78, 100, 57, 0.15); }
                .eventLabel {
                    font-family: Georgia, 'Times New Roman', serif;
                    font-size: 1.2rem;
                    color: rgb(78, 100, 57);
                    margin-bottom: 0.5rem;
                    font-weight: 600;
                }
                .eventValue { color: rgb(78, 100, 57); opacity: 0.85; line-height: 1.6; }
                .footer {
                    text-align: center;
                    padding: 3rem 2rem 2rem;
                    color: rgb(78, 100, 57);
                    font-size: 0.95rem;
                    max-width: 800px;
                    margin: 0 auto;
                }
                .footerDivider {
                    width: 100px;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgb(143, 188, 143), transparent);
                    margin: 0 auto 2rem;
                }
                .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
                .reveal.active { opacity: 1; transform: translateY(0); }
                .reveal:nth-child(1) { transition-delay: 0.1s; }
                .reveal:nth-child(2) { transition-delay: 0.2s; }
                .reveal:nth-child(3) { transition-delay: 0.3s; }
                
                .coin-1 { animation: float1 4s ease-in-out infinite; }
                .coin-2 { animation: float2 4.5s ease-in-out infinite 0.5s; }
                .coin-3 { animation: float3 4.2s ease-in-out infinite 1s; }
                .coin-4 { animation: float4 4.8s ease-in-out infinite 1.5s; }
                .coin-5 { animation: float5 4.3s ease-in-out infinite 2s; }
                .sparkle-1 { animation: sparkle 2s ease-in-out infinite; }
                .sparkle-2 { animation: sparkle2 2.5s ease-in-out infinite 0.5s; }
                .sparkle-3 { animation: sparkle3 3s ease-in-out infinite 1s; }
                .hint-text { animation: hintPulse 2s ease-in-out infinite; }
                .gift-button:hover .envelope-front { transform: scale(1.02); box-shadow: rgba(0, 0, 0, 0.4) 0px 6px 24px; }
                .gift-button:active .envelope-front { transform: scale(0.98); }
                .modal-box-animated { animation: modalFadeIn 0.3s ease-out; }
                .qr-container { transition: transform 0.3s ease, box-shadow 0.3s ease; }
                .qr-container:hover { transform: scale(1.05); box-shadow: 0 8px 24px rgba(78, 100, 57, 0.2); }
                
                dialog { padding: 0; border: none; border-radius: 0.5rem; max-width: 32rem; background: transparent; }
                dialog::backdrop { background: rgba(0, 0, 0, 0.5); }
            `}</style>

            <div ref={sectionsRef} className="content">
                {/* Section 1: Invitation */}
                <section className="section reveal">
                    <h2 className="sectionTitle">Lời Ngỏ</h2>
                    <div className="sectionContent">
                        <p>Trân trọng kính mời</p>
                        <p style={{ marginTop: '1rem' }}>
                            Sự hiện diện của quý khách là niềm vinh hạnh cho gia đình chúng tôi.<br />
                            Rất mong được đón tiếp!
                        </p>
                    </div>
                </section>

                {/* Section 2: Wedding Info */}
                <section className="section reveal">
                    <h2 className="sectionTitle">Thông Tin Tiệc Cưới</h2>
                    <div className="eventDetails">
                        <div className="eventItem">
                            <div className="eventLabel">Thời gian</div>
                            <div className="eventValue">17:00 - Thứ Sáu, 7 tháng 2, 2026</div>
                        </div>
                        <div className="eventItem">
                            <div className="eventLabel">Địa điểm</div>
                            <div className="eventValue">
                                Trung Tâm Tiệc Cưới Thanh Diệp<br />
                                123 Đường Lê Lợi, Quận 1, TP.HCM
                            </div>
                        </div>
                        <div className="eventItem">
                            <div className="eventLabel">Liên hệ</div>
                            <div className="eventValue">
                                Chú rể: 0123 456 789<br />
                                Cô dâu: 0987 654 321
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Gift Box */}
                <section className="section reveal">
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
                </section>

                {/* Footer */}
                <div className="footer">
                    <div className="footerDivider"></div>
                    <p>Trân trọng cảm ơn</p>
                    <p style={{ marginTop: '0.5rem', fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '1.2rem' }}>
                        Hưng & Linh
                    </p>
                    <p style={{ marginTop: '1.5rem', opacity: 0.6, fontSize: '0.85rem' }}>
                        Được tạo bởi LjnkBun
                    </p>
                </div>
            </div>

            {/* Modal */}
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
        </div>
    );
}