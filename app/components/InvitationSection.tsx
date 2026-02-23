import './InvitationSection.css';
import { groomImages, brideImages } from '../configs/images-config';

// components/sections/InvitationSection.tsx
export default function InvitationSection() {
    return (
        <header className="hero-real">
            

            {/* Leaf top left */}
            <div className="leaf leaf-1  float-slow">
                <img src="/images/la2.png" alt="" />
            </div>

            {/* Leaf bottom right */}
            <div className="leaf leaf-2 float-slow delay-2">
                <img src="/images/la1.png" alt="" />
            </div>

            {/* Title */}
            <div className="hero-title  fade-up">
                <h1>
                    THE STORY <span>of</span> LOVE
                </h1>
            </div>

            {/* Main photos */}
            <div className="hero-photos">
                {/* Groom */}
                <div className="person groom zoom-in delay-1">
                    <div className="photo-frame rotate-left">
                        <img src={groomImages} />
                    </div>
                    <div className="person-text left">
                        <div className="label">Chú rể</div>
                        <div className="name">Minh Hưng</div>
                    </div>
                </div>

                {/* Bride */}
                <div className="person bride  zoom-in delay-2">
                    <div className="photo-frame rotate-right">
                        <img src={brideImages} />
                    </div>
                    <div className="person-text right">
                        <div className="label">Cô dâu</div>
                        <div className="name">Hải Linh</div>
                    </div>
                </div>
            </div>
        </header>

    );
}
