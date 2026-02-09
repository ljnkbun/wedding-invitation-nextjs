import './InvitationSection.css';
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
                        <img src="https://d1kiuhmnc3a29.cloudfront.net/uploads/c23522cb-416d-4057-a7f2-efb404a603b4.jpg" />
                    </div>
                    <div className="person-text left">
                        <div className="label">Chú rể</div>
                        <div className="name">Minh Hưng</div>
                    </div>
                </div>

                {/* Bride */}
                <div className="person bride  zoom-in delay-2">
                    <div className="photo-frame rotate-right">
                        <img src="https://d1kiuhmnc3a29.cloudfront.net/uploads/aad57b50-3fb4-41d6-9e89-e4ac116708a3.jpg" />
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
