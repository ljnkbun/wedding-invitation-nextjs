import { useRef, useEffect, useState } from 'react';
import './Content.css';
import WeddingCeremonySection from './Ceremony';
import InvitationSection from './InvitationSection';
import AlbumSection from './AlbumSection';
import GiftSection from './GiftSection';

export default function WeddingInvitation({ isOpen }: { isOpen: boolean }) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const sectionsRef = useRef<HTMLDivElement>(null);

    const [previewIndex, setPreviewIndex] = useState<number | null>(null);
    const images = [
        "https://d1kiuhmnc3a29.cloudfront.net/uploads/15d541d9-831d-49c5-9c11-3bc9f421e1d7.jpg",
        "https://d1kiuhmnc3a29.cloudfront.net/uploads/9b36d166-0fce-4a92-90c2-e0307284ceff.jpg",
        "https://d1kiuhmnc3a29.cloudfront.net/uploads/7303a48d-0dd9-4358-8ad1-d9969b8ae75e.jpg",
        "https://d1kiuhmnc3a29.cloudfront.net/uploads/bbc734ce-d1c2-4c5b-8f84-196272e8b371.jpg"
    ];

    const closePreview = () => setPreviewIndex(null);
    const showPrev = () =>
        setPreviewIndex((i) => (i! > 0 ? i! - 1 : i));
    const showNext = () =>
        setPreviewIndex((i) => (i! < images.length - 1 ? i! + 1 : i));


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
        <div className="wedding-bg">

            <div ref={sectionsRef} className="content">
                {/* Section 1: Invitation */}
                <section className="section reveal">
                    <InvitationSection />
                </section>

                {/* Section 2: Album */}
                <section className="section reveal">
                    <AlbumSection images={images}
                        onPreview={(i) => setPreviewIndex(i)} />
                </section>

                {/* Section 3: Ceremony */}
                <section className="section reveal wedding-info-section">
                    <div className="floating-hearts">
                        <span className="heart"></span>
                        <span className="heart"></span>
                        <span className="heart"></span>
                        <span className="heart"></span>
                        <span className="heart"></span>
                    </div>
                    <WeddingCeremonySection />
                </section>

                {/* Section 3: Gift Box */}
                <GiftSection />

            </div>


            {/* Preview Album */}
            {previewIndex !== null && (
                <div className="preview-backdrop" onClick={closePreview}>
                    <div
                        className="preview-box"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="preview-close" onClick={closePreview}>×</button>

                        <img
                            src={images[previewIndex]}
                            alt="Preview"
                            className="preview-image"
                        />

                        <button
                            className="preview-nav left"
                            onClick={showPrev}
                            disabled={previewIndex === 0}
                        >
                            ‹
                        </button>

                        <button
                            className="preview-nav right"
                            onClick={showNext}
                            disabled={previewIndex === images.length - 1}
                        >
                            ›
                        </button>
                    </div>
                </div>
            )}


            <div className="decor-circle decor-1" />
            <div className="decor-circle decor-2" />
            <div className="decor-circle decor-3" />

        </div>
    );
}