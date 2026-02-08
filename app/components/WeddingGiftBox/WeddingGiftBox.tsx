

import { useRef } from 'react';

export default function WeddingGiftBox() {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const openDialog = () => {
        dialogRef.current?.showModal();
    };

    const closeDialog = () => {
        dialogRef.current?.close();
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '20px' }}>
            <style>{`
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
                @keyframes envelopeBounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes modalFadeIn {
                    from { opacity: 0; transform: scale(0.95) translateY(20px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                
                .coin-1 { animation: float1 4s ease-in-out infinite; }
                .coin-2 { animation: float2 4.5s ease-in-out infinite 0.5s; }
                .coin-3 { animation: float3 4.2s ease-in-out infinite 1s; }
                .coin-4 { animation: float4 4.8s ease-in-out infinite 1.5s; }
                .coin-5 { animation: float5 4.3s ease-in-out infinite 2s; }
                .sparkle-1 { animation: sparkle 2s ease-in-out infinite; }
                .sparkle-2 { animation: sparkle2 2.5s ease-in-out infinite 0.5s; }
                .sparkle-3 { animation: sparkle3 3s ease-in-out infinite 1s; }
                .hint-text { animation: hintPulse 2s ease-in-out infinite; }
                .envelope-wrapper:hover { animation: envelopeBounce 0.6s ease-in-out; }
                .gift-button:hover .envelope-front { transform: scale(1.02); box-shadow: rgba(0, 0, 0, 0.4) 0px 6px 24px; }
                .gift-button:active .envelope-front { transform: scale(0.98); }
                .modal-box-animated { animation: modalFadeIn 0.3s ease-out; }
                .qr-container { transition: transform 0.3s ease, box-shadow 0.3s ease; }
                .qr-container:hover { transform: scale(1.05); box-shadow: 0 8px 24px rgba(78, 100, 57, 0.2); }
                
                dialog { 
                    padding: 0;
                    border: none;
                    border-radius: 0.5rem;
                    max-width: 32rem;
                    background: transparent;
                }
                dialog::backdrop {
                    background: rgba(0, 0, 0, 0.5);
                }
            `}</style>
            
            <div 
                className="flex flex-col items-center justify-center py-8 relative z-10 pb-10 md:pb-14"
                style={{ backgroundColor: 'rgb(255, 255, 255)', borderRadius: '20px', maxWidth: '900px', margin: '0 auto', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            >
                <h2 
                    className="mb-4 text-2xl"
                    style={{ 
                        color: 'rgb(78, 100, 57)',
                        fontFamily: 'Georgia, "Times New Roman", serif',
                        fontWeight: 400
                    }}
                >
                    Hộp Mừng Cưới
                </h2>
                
                <button 
                    type="button" 
                    aria-label="Mở hộp mừng cưới" 
                    onClick={openDialog}
                    className="gift-button group relative cursor-pointer outline-none border-none bg-transparent"
                    style={{ width: '200px', height: '256px' }}
                >
                    <div className="envelope-wrapper relative w-full h-full flex items-center justify-center">
                        {/* Coin 1 */}
                        <div 
                            className="coin-1 rounded-full absolute"
                            style={{
                                width: '30.8px',
                                height: '30.8px',
                                background: 'rgb(251, 191, 36)',
                                border: '2px solid rgb(245, 158, 11)',
                                boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 3px',
                                top: '5%',
                                right: '5%'
                            }}
                        >
                            <div 
                                className="absolute rounded-full"
                                style={{
                                    inset: '2px',
                                    border: '2px solid rgb(253, 224, 71)',
                                    borderRadius: '50%'
                                }}
                            />
                            <div 
                                className="absolute top-1/2 left-1/2"
                                style={{
                                    width: '8.624px',
                                    height: '8.624px',
                                    backgroundColor: 'transparent',
                                    border: '2px solid rgb(217, 119, 6)',
                                    boxShadow: 'rgba(0, 0, 0, 0.2) 1px 1px 2px inset',
                                    transform: 'translate(-50%, -50%)'
                                }}
                            />
                        </div>

                        {/* Coin 2 */}
                        <div 
                            className="coin-2 rounded-full absolute"
                            style={{
                                width: '25.2px',
                                height: '25.2px',
                                background: 'rgb(251, 191, 36)',
                                border: '2px solid rgb(245, 158, 11)',
                                boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 3px',
                                top: '20%',
                                left: '0%'
                            }}
                        >
                            <div 
                                className="absolute rounded-full"
                                style={{
                                    inset: '2px',
                                    border: '2px solid rgb(253, 224, 71)',
                                    borderRadius: '50%'
                                }}
                            />
                            <div 
                                className="absolute top-1/2 left-1/2"
                                style={{
                                    width: '7.056px',
                                    height: '7.056px',
                                    backgroundColor: 'transparent',
                                    border: '2px solid rgb(217, 119, 6)',
                                    boxShadow: 'rgba(0, 0, 0, 0.2) 1px 1px 2px inset',
                                    transform: 'translate(-50%, -50%)'
                                }}
                            />
                        </div>

                        {/* Coin 3 */}
                        <div 
                            className="coin-3 rounded-full absolute"
                            style={{
                                width: '28px',
                                height: '28px',
                                background: 'rgb(251, 191, 36)',
                                border: '2px solid rgb(245, 158, 11)',
                                boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 3px',
                                bottom: '20%',
                                right: '0%'
                            }}
                        >
                            <div 
                                className="absolute rounded-full"
                                style={{
                                    inset: '2px',
                                    border: '2px solid rgb(253, 224, 71)',
                                    borderRadius: '50%'
                                }}
                            />
                            <div 
                                className="absolute top-1/2 left-1/2"
                                style={{
                                    width: '7.84px',
                                    height: '7.84px',
                                    backgroundColor: 'transparent',
                                    border: '2px solid rgb(217, 119, 6)',
                                    boxShadow: 'rgba(0, 0, 0, 0.2) 1px 1px 2px inset',
                                    transform: 'translate(-50%, -50%)'
                                }}
                            />
                        </div>

                        {/* Coin 4 */}
                        <div 
                            className="coin-4 rounded-full absolute"
                            style={{
                                width: '22.4px',
                                height: '22.4px',
                                background: 'rgb(251, 191, 36)',
                                border: '2px solid rgb(245, 158, 11)',
                                boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 3px',
                                bottom: '8%',
                                left: '8%'
                            }}
                        >
                            <div 
                                className="absolute rounded-full"
                                style={{
                                    inset: '2px',
                                    border: '2px solid rgb(253, 224, 71)',
                                    borderRadius: '50%'
                                }}
                            />
                            <div 
                                className="absolute top-1/2 left-1/2"
                                style={{
                                    width: '6.272px',
                                    height: '6.272px',
                                    backgroundColor: 'transparent',
                                    border: '2px solid rgb(217, 119, 6)',
                                    boxShadow: 'rgba(0, 0, 0, 0.2) 1px 1px 2px inset',
                                    transform: 'translate(-50%, -50%)'
                                }}
                            />
                        </div>

                        {/* Coin 5 */}
                        <div 
                            className="coin-5 rounded-full absolute"
                            style={{
                                width: '21px',
                                height: '21px',
                                background: 'rgb(251, 191, 36)',
                                border: '2px solid rgb(245, 158, 11)',
                                boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 3px',
                                top: '45%',
                                right: '-5%'
                            }}
                        >
                            <div 
                                className="absolute rounded-full"
                                style={{
                                    inset: '2px',
                                    border: '2px solid rgb(253, 224, 71)',
                                    borderRadius: '50%'
                                }}
                            />
                            <div 
                                className="absolute top-1/2 left-1/2"
                                style={{
                                    width: '5.88px',
                                    height: '5.88px',
                                    backgroundColor: 'transparent',
                                    border: '2px solid rgb(217, 119, 6)',
                                    boxShadow: 'rgba(0, 0, 0, 0.2) 1px 1px 2px inset',
                                    transform: 'translate(-50%, -50%)'
                                }}
                            />
                        </div>

                        {/* Sparkles */}
                        <span 
                            className="sparkle-1 absolute"
                            style={{
                                top: '8%',
                                left: '20%',
                                fontSize: '14px',
                                color: 'white'
                            }}
                        >
                            ✦
                        </span>
                        <span 
                            className="sparkle-2 absolute"
                            style={{
                                bottom: '35%',
                                right: '8%',
                                fontSize: '11.2px',
                                color: 'white'
                            }}
                        >
                            ✦
                        </span>
                        <span 
                            className="sparkle-3 absolute"
                            style={{
                                top: '40%',
                                left: '3%',
                                fontSize: '8.4px',
                                color: 'white'
                            }}
                        >
                            ✦
                        </span>

                        {/* Envelope Body with 3D Shadow Effect */}
                        <div 
                            className="envelope-body relative"
                            style={{
                                width: '140px',
                                height: '196px'
                            }}
                        >
                            {/* Bottom shadow layer */}
                            <div 
                                className="absolute"
                                style={{
                                    left: '2px',
                                    right: '-2px',
                                    bottom: '-3px',
                                    height: '196px',
                                    backgroundColor: 'rgb(92, 22, 18)',
                                    borderRadius: '0.5rem'
                                }}
                            />
                            
                            {/* Right shadow layer */}
                            <div 
                                className="absolute"
                                style={{
                                    top: '2px',
                                    bottom: '-2px',
                                    right: '-3px',
                                    width: '140px',
                                    backgroundColor: 'rgb(107, 29, 24)',
                                    borderRadius: '0.5rem'
                                }}
                            />

                            {/* Front envelope */}
                            <div 
                                className="envelope-front absolute overflow-hidden"
                                style={{
                                    inset: 0,
                                    borderRadius: '0.5rem',
                                    backgroundColor: 'rgb(185, 28, 28)',
                                    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 4px 20px',
                                    transition: 'transform 0.3s, box-shadow 0.3s'
                                }}
                            >
                                {/* Pattern overlay */}
                                <div 
                                    className="absolute"
                                    style={{
                                        inset: 0,
                                        opacity: 0.2,
                                        backgroundImage: 'repeating-radial-gradient(circle at 0px 0px, transparent 0px, transparent 11.2px, rgb(127, 29, 29) 11.2px, rgb(127, 29, 29) 11.9px)',
                                        backgroundSize: '21px 21px',
                                        backgroundPosition: '10.5px 10.5px'
                                    }}
                                />

                                {/* Top gold border */}
                                <div 
                                    className="absolute"
                                    style={{
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '4px',
                                        backgroundColor: 'rgb(251, 191, 36)'
                                    }}
                                />

                                {/* Center golden circle with 囍 */}
                                <div 
                                    className="absolute flex items-center justify-center"
                                    style={{
                                        left: '50%',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '63px',
                                        height: '63px',
                                        background: 'radial-gradient(circle, rgb(251, 191, 36) 0%, rgb(217, 119, 6) 100%)',
                                        border: '3px solid rgb(254, 243, 199)',
                                        borderRadius: '50%',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                                    }}
                                >
                                    <span 
                                        style={{
                                            fontSize: '30.8px',
                                            color: 'rgb(185, 28, 28)',
                                            lineHeight: 1,
                                            textShadow: 'rgba(0, 0, 0, 0.2) 1px 1px 2px',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        囍
                                    </span>
                                </div>

                                {/* Corner decorations */}
                                <svg 
                                    className="absolute"
                                    style={{ top: '8px', left: '8px' }}
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#fbbf24"
                                    strokeWidth="2"
                                >
                                    <path d="M2 2 L2 16 L6 16 L6 6 L16 6 L16 2 Z" opacity="0.85" strokeLinecap="square" strokeLinejoin="miter" />
                                    <path d="M6 10 L10 10 L10 6" opacity="0.85" strokeLinecap="square" />
                                </svg>

                                <svg 
                                    className="absolute"
                                    style={{ top: '8px', right: '8px', transform: 'rotate(90deg)' }}
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#fbbf24"
                                    strokeWidth="2"
                                >
                                    <path d="M2 2 L2 16 L6 16 L6 6 L16 6 L16 2 Z" opacity="0.85" strokeLinecap="square" strokeLinejoin="miter" />
                                    <path d="M6 10 L10 10 L10 6" opacity="0.85" strokeLinecap="square" />
                                </svg>

                                <svg 
                                    className="absolute"
                                    style={{ bottom: '8px', left: '8px', transform: 'rotate(-90deg)' }}
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#fbbf24"
                                    strokeWidth="2"
                                >
                                    <path d="M2 2 L2 16 L6 16 L6 6 L16 6 L16 2 Z" opacity="0.85" strokeLinecap="square" strokeLinejoin="miter" />
                                    <path d="M6 10 L10 10 L10 6" opacity="0.85" strokeLinecap="square" />
                                </svg>

                                <svg 
                                    className="absolute"
                                    style={{ bottom: '8px', right: '8px', transform: 'rotate(180deg)' }}
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#fbbf24"
                                    strokeWidth="2"
                                >
                                    <path d="M2 2 L2 16 L6 16 L6 6 L16 6 L16 2 Z" opacity="0.85" strokeLinecap="square" strokeLinejoin="miter" />
                                    <path d="M6 10 L10 10 L10 6" opacity="0.85" strokeLinecap="square" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <p 
                        className="hint-text absolute"
                        style={{ 
                            color: 'rgb(78, 100, 57)',
                            bottom: '-8px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            fontSize: '0.75rem',
                            whiteSpace: 'nowrap',
                            fontWeight: 500
                        }}
                    >
                        Nhấn để mở
                    </p>
                </button>

                {/* Dialog/Modal */}
                <dialog ref={dialogRef}>
                    <div 
                        className="modal-box-animated"
                        style={{ 
                            backgroundColor: 'rgb(255, 255, 255)',
                            maxWidth: '32rem',
                            padding: 0,
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            borderRadius: '0.5rem'
                        }}
                    >
                        {/* Header */}
                        <div 
                            className="relative text-center"
                            style={{ 
                                backgroundColor: 'rgb(78, 100, 57)',
                                padding: '1.5rem 1.5rem 1rem'
                            }}
                        >
                            <button 
                                type="button"
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
                                    justifyContent: 'center',
                                    transition: 'all 0.2s'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                                    e.currentTarget.style.color = 'white';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                    e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
                                }}
                            >
                                <svg 
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <h2 
                                style={{
                                    fontSize: '1.5rem',
                                    color: 'white',
                                    textShadow: 'rgba(0, 0, 0, 0.2) 1px 1px 2px',
                                    fontFamily: 'Georgia, "Times New Roman", serif',
                                    margin: 0
                                }}
                            >
                                Hộp Mừng Cưới
                            </h2>
                        </div>

                        {/* Content */}
                        <div style={{ padding: '1.5rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                {/* Groom QR */}
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '160px' }}>
                                    <h3 
                                        style={{ 
                                            marginBottom: '0.5rem',
                                            fontSize: '0.75rem',
                                            fontWeight: 500,
                                            textAlign: 'center',
                                            color: 'rgb(78, 100, 57)'
                                        }}
                                    >
                                        Chú Rể - Văn Toàn
                                    </h3>
                                    <div 
                                        className="qr-container"
                                        style={{ 
                                            width: '144px',
                                            height: '144px',
                                            backgroundColor: 'white',
                                            borderRadius: '0.75rem',
                                            padding: '0.5rem',
                                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: '2px solid rgba(78, 100, 57, 0.125)'
                                        }}
                                    >
                                        <img 
                                            alt="QR Code - Chú Rể"
                                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                            src="https://qr.sepay.vn/img?bank=VCB&acc=888888888&template=qronly"
                                        />
                                    </div>
                                    <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                                        <p style={{ fontSize: '0.625rem', color: 'rgb(78, 100, 57)', margin: '2px 0' }}>Vietcombank</p>
                                        <p style={{ fontSize: '0.625rem', color: 'rgb(78, 100, 57)', margin: '2px 0', fontFamily: 'monospace' }}>888888888</p>
                                        <p style={{ fontSize: '0.625rem', color: 'rgb(78, 100, 57)', margin: '2px 0', fontWeight: 600 }}>Nguyen Van Toan</p>
                                    </div>
                                </div>

                                {/* Bride QR */}
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '160px' }}>
                                    <h3 
                                        style={{ 
                                            marginBottom: '0.5rem',
                                            fontSize: '0.75rem',
                                            fontWeight: 500,
                                            textAlign: 'center',
                                            color: 'rgb(78, 100, 57)'
                                        }}
                                    >
                                        Cô Dâu - Linh
                                    </h3>
                                    <div 
                                        className="qr-container"
                                        style={{ 
                                            width: '144px',
                                            height: '144px',
                                            backgroundColor: 'white',
                                            borderRadius: '0.75rem',
                                            padding: '0.5rem',
                                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: '2px solid rgba(78, 100, 57, 0.125)'
                                        }}
                                    >
                                        <img 
                                            alt="QR Code - Cô Dâu"
                                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                            src="https://qr.sepay.vn/img?bank=BIDV&acc=99999999999&template=qronly"
                                        />
                                    </div>
                                    <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                                        <p style={{ fontSize: '0.625rem', color: 'rgb(78, 100, 57)', margin: '2px 0' }}>BIDV</p>
                                        <p style={{ fontSize: '0.625rem', color: 'rgb(78, 100, 57)', margin: '2px 0', fontFamily: 'monospace' }}>99999999999</p>
                                        <p style={{ fontSize: '0.625rem', color: 'rgb(78, 100, 57)', margin: '2px 0', fontWeight: 600 }}>Linh</p>
                                    </div>
                                </div>
                            </div>

                            <p 
                                style={{ 
                                    textAlign: 'center',
                                    fontSize: '0.875rem',
                                    marginTop: '1rem',
                                    opacity: 0.7,
                                    color: 'rgb(78, 100, 57)',
                                    fontFamily: 'Georgia, "Times New Roman", serif'
                                }}
                            >
                                Cảm ơn bạn đã đồng hành cùng chúng mình trong ngày trọng đại!
                            </p>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
}