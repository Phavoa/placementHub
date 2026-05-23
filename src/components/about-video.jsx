import React, { useState } from "react";

function AboutVideo() {
  const [videoExpanded, setVideoExpanded] = useState(false);

  const handleVideoClick = () => {
    setVideoExpanded(!videoExpanded);
  };

  return (
    <section className="video-section flex justify-center">
      <div className="container m-auto">
        <div className="video-container">
          {/* Video Card */}
          <div
            className={`video-card ${videoExpanded ? "expanded" : ""}`}
            onClick={handleVideoClick}
          >
            {/* Background Video */}
            <div className="video-background">
              <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/7a8H39VIqJY?autoplay=1&mute=1&loop=1&playlist=7a8H39VIqJY&controls=${videoExpanded ? 1 : 0}&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3`}
                title="Simple Responsive Login Page using HTML & CSS"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="video-iframe"
              ></iframe>
            </div>

            {/* Video Overlay */}
            <div className="video-overlay-content">
              <div className="video-header">
                <h3 className="video-title">Featured Tutorial</h3>
                {!videoExpanded && (
                  <div className="play-button-overlay">
                    <div className="play-icon"></div>
                  </div>
                )}
              </div>
              <div className="video-content">
                <div className="video-avatar"></div>
                <div className="video-info">
                  <h4>Responsive Login Page</h4>
                  <p>Click to play with audio</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="content-section">
            <div className="expert-item">
              <div className="expert-icon">
                <div className="expert-icon-inner"></div>
              </div>
              <div className="expert-text">
                <h4>Expert Guidance</h4>
                <p>Professional mentorship</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="content-text text-lg leading-relaxed text-gray-700">
                Placement Hub is a recruitment agency with an internal
                internship academy dedicated to bridging the gap between talent
                and opportunity in today’s competitive job market. We understand
                that while many individuals possess the passion and willingness
                to work, they may not yet have the in-demand skills employers
                require. At the same time, organizations are constantly seeking
                competent, job-ready professionals who can deliver value from
                day one. This is where Placement Hub stands out. We go beyond
                the traditional role of recruitment by not only sourcing and
                placing candidates but also intentionally developing them to
                meet industry standards. Our approach is centered on creating a
                seamless connection between employers and highly capable
                candidates, ensuring long-term success for both parties.
              </p>
              <p className="content-text text-lg leading-relaxed text-gray-700">
                Placement Hub is committed to excellence, integrity, and impact.
                We partner with organizations across various industries to
                understand their workforce needs and deliver candidates who are
                not only qualified but also aligned with their business goals
                and culture. For job seekers, we provide more than just
                employment opportunities; we offer a pathway to growth,
                self-development, and long-term career success. Our dual
                approach to recruitment and internship enables us to
                consistently deliver value, ensuring businesses gain access to
                skilled talent while candidates are empowered to unlock their
                full potential.
              </p>
              <p className="content-text text-lg leading-relaxed text-gray-700">
                At the core of our operations is our internal internship
                academy, a strategic initiative that equips prospective
                candidates with the practical knowledge, technical expertise,
                and professional competencies needed to thrive in the workplace.
                Through our Career Acceleration Program, individuals who may not
                initially meet job requirements can receive structured
                internship tailored to current market demands. This program
                focuses on hands-on learning, real-world applications, and
                industry-relevant skills that enhance employability and boost
                confidence. We believe that talent can be nurtured, and with the
                right guidance and exposure, individuals can evolve into
                top-performing professionals.
              </p>
              <p className="content-text text-lg leading-relaxed text-gray-700">
                As the world of work continues to evolve, Placement Hub remains
                dedicated to staying ahead by continuously adapting our
                internship programs and recruitment strategies to meet emerging
                trends and industry demands. We are driven by a vision to shape
                the future of work by raising a generation of skilled,
                competent, and confident professionals who are ready to make
                meaningful contributions in any organization. At Placement Hub,
                we are not just filling vacancies; we are building careers,
                transforming lives, and strengthening businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutVideo;
