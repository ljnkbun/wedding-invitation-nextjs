import { useState } from "react";

// components/sections/AlbumSection.tsx
interface Props {
    images: string[];
    onPreview: (index: number) => void;
}

export default function AlbumSection({ images, onPreview }: Props) {

    return (
        <div className="album-section">
            <h2 className="album-title">ALBUM ẢNH CƯỚI</h2>

            <div className="album-wrapper">
                <div className="album-grid">
                    {images.map((src, i) => (
                        <div
                            className="album-item"
                            key={i}
                            onClick={() => onPreview(i)}
                        >
                            <img src={src} alt={`Ảnh cưới ${i + 1}`} />

                            {i === 3 && (
                                <div className="album-overlay">
                                    <span>+6</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
