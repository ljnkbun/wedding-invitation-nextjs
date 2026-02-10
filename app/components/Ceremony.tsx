import './Ceremony.css';

export default function WeddingCeremonySection() {
    return (
        <div>
            <div className="wedding-card">

                <p className="announce">
                    TRÂN TRỌNG BÁO TIN<br />
                    LỄ THÀNH HÔN CỦA CON CHÚNG TÔI
                </p>

                <h1 className="bride-groom">
                    Lưu Minh Hưng
                </h1>
                <div className="role">TRƯỞNG NAM</div>

                <div className="and">&amp;</div>

                <h1 className="bride-groom">
                    Trần Hải Linh
                </h1>
                <div className="role">ÚT NỮ</div>

                <div className="divider"></div>

                <p className="title">
                    LỄ THÀNH HÔN ĐƯỢC CỬ HÀNH TẠI TƯ GIA
                </p>

                <div className="time">09:00</div>

                <div className="date">
                    <span>THỨ BẢY</span>
                    <span className="dot">|</span>
                    <strong>07</strong>
                    <span className="dot">|</span>
                    <span>THÁNG 02</span>
                </div>

                <div className="year">2026</div>
                <div className="lunar">(TỨC NGÀY 20/12 ẤT TỴ)</div>

                <div className="divider"></div>

                <p className="title">
                    TIỆC CƯỚI DIỄN RA VÀO LÚC
                </p>

                <div className="time">18:00</div>

                <div className="date">
                    <span>THỨ BẢY</span>
                    <span className="dot">|</span>
                    <strong>07</strong>
                    <span className="dot">|</span>
                    <span>THÁNG 02</span>
                </div>

                <div className="year">2026</div>
                <div className="lunar">(TỨC NGÀY 20/12 ẤT TỴ)</div>
            </div>

            <div className="wedding-location-section">
                <div className="location-wrapper">

                    <h3 className="location-title">
                        TIỆC CƯỚI SẼ TỔ CHỨC TẠI
                    </h3>

                    <div className="location-address reveal-location">
                        <strong>
                            📍 Nhà hàng Tiệc cưới Xanh Palace, 10 P. Phạm Ngọc Thạch, Kim Liên, Đống Đa, Hà Nội, Việt Nam
                        </strong>
                    </div>

                    <div className="location-divider"></div>

                    <h4 className="map-title">
                        BẢN ĐỒ
                    </h4>

                    <div className="map-frame">
                        <iframe
                            src="https://www.google.com/maps?q=21.008136284598667, 105.83378015382542&output=embed"
                            loading="lazy"
                            allowFullScreen>
                        </iframe>


                    </div>

                </div>
            </div>
        </div>

    );
}
