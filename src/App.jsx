import React from 'react';

export default function Home() {
  const scrollToForm = () => {
    document.getElementById('interest-form').scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #374151;
          background: linear-gradient(to bottom, #f8fafc, #ffffff);
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .text-navy-900 { color: #1e3a8a; }
        .bg-navy-900 { background-color: #1e3a8a; }
        .bg-navy-800 { background-color: #1e40af; }

        .hero {
          position: relative;
          padding: 5rem 1.5rem 8rem;
          overflow: hidden;
        }


        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80');
          background-size: cover;
          background-position: center;
          opacity: 0.10;
          z-index: 0;
        }

        .hero > .container {
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background-color: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 9999px;
          margin-bottom: 1.5rem;
        }

        .hero-badge span {
          font-size: 0.875rem;
          font-weight: 500;
          color: #dc2626;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          text-align: center;
        }

        .hero-title .red { color: #dc2626; }

        .hero-subtitle {
          font-size: 1.5rem;
          color: #4b5563;
          margin-bottom: 2rem;
          max-width: 48rem;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .cta-button {
          display: inline-block;
          padding: 1.5rem 2rem;
          background-color: #dc2626;
          color: white;
          font-size: 1.125rem;
          font-weight: 500;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
          border: none;
          cursor: pointer;
        }

        .cta-button:hover {
          background-color: #b91c1c;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .hero-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          margin-bottom: 2rem;
        }

        .info-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #4b5563;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .program-section {
          padding: 5rem 1.5rem;
          background: linear-gradient(to bottom right, #1e3a8a, #1e40af);
          position: relative;
          overflow: hidden;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 9999px;
          margin-bottom: 1.5rem;
        }

        .section-badge span {
          font-size: 0.875rem;
          font-weight: 500;
          color: #4b5563;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #1e3a8a;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .program-section .section-title {
          color: white;
        }

        .card {
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 1rem;
          padding: 3rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .quote-box {
          background: linear-gradient(to bottom right, #eff6ff, #fef2f2);
          border-left: 4px solid #dc2626;
          padding: 1.5rem;
          border-radius: 0 0.5rem 0.5rem 0;
          margin-bottom: 2rem;
        }

        .quote-box p {
          color: #4b5563;
          line-height: 1.8;
          font-style: italic;
        }

        .quote-attribution {
          font-size: 0.875rem;
          color: #4b5563;
          margin-top: 1rem;
          font-weight: 500;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .info-card {
          text-align: center;
          padding: 1.5rem;
          background: linear-gradient(to bottom right, #fef2f2, #ffffff);
          border-radius: 0.75rem;
          border: 1px solid #fecaca;
        }

        .info-card h3 {
          font-weight: bold;
          color: #1e3a8a;
          margin: 0.75rem 0 0.5rem;
        }

        .info-card p {
          font-size: 0.875rem;
          color: #4b5563;
        }

        .district-box {
          background: linear-gradient(to right, #1e3a8a, #1e40af);
          color: white;
          padding: 2rem;
          border-radius: 1rem;
        }

        .district-box h3 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #1e3a8a;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .district-box p {
          color: #bfdbfe;
          line-height: 1.8;
        }

        .why-now-section {
          padding: 5rem 1.5rem;
          background-color: white;
        }

        .timeline-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .timeline-icon {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .timeline-content h3 {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1e3a8a;
          margin-bottom: 0.75rem;
        }

        .timeline-content p {
          color: #4b5563;
          font-size: 1.125rem;
          line-height: 1.8;
        }

        .highlight-box {
          background: linear-gradient(to bottom right, #f0fdf4, #eff6ff);
          border: 1px solid #86efac;
          padding: 1.5rem;
          border-radius: 0.75rem;
          margin-top: 1rem;
        }

        .highlight-box p {
          color: #4b5563;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .highlight-box p:last-child {
          font-size: 0.875rem;
          margin-bottom: 0;
        }

        .divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #d1d5db, transparent);
          margin: 2rem 0;
        }

        .benefits-section {
          padding: 5rem 1.5rem;
          background: linear-gradient(to bottom, #f9fafb, white);
        }

        .benefits-subtitle {
          font-size: 1.25rem;
          color: #4b5563;
          max-width: 48rem;
          margin: 0 auto 4rem;
          text-align: center;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .benefit-card {
          background-color: white;
          border-radius: 0.5rem;
          padding: 2rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
        }

        .benefit-card:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .benefit-icon {
          width: 3.5rem;
          height: 3.5rem;
          background: linear-gradient(to bottom right, #dc2626, #b91c1c);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: transform 0.3s;
        }

        .benefit-card:hover .benefit-icon {
          transform: scale(1.1);
        }

        .benefit-card h3 {
          font-size: 1.25rem;
          font-weight: bold;
          color: #1e3a8a;
          margin-bottom: 1rem;
        }

        .benefit-card p {
          color: #4b5563;
          line-height: 1.8;
        }

        .form-section {
          padding: 5rem 1.5rem;
          background: #1e3a8a;
          position: relative;
          overflow: hidden;
        }

        .form-section::before {
          content: '';
          position: absolute;
          bottom: 0;
          right: 25%;
          width: 24rem;
          height: 24rem;
          background-color: rgba(248, 113, 113, 0.3);
          border-radius: 50%;
          filter: blur(80px);
        }

        .form-section .section-title {
          color: white;
        }

        .form-section p {
          color: white;
          text-align: center;
          margin-bottom: 1rem;
        }

        .form-section .benefits-subtitle {
          color: #dbeafe;
        }

        .form-container {
          position: relative;
          z-index: 10;
        }

        .form-card {
          background-color: white;
          border-radius: 1rem;
          padding: 3rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .iframe-container {
          background-color: white;
          border-radius: 0.5rem;
          overflow: hidden;
        }

        iframe {
          width: 100%;
          border: none;
        }

        .footer-note {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1rem;
          background-color: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 0.5rem;
          margin-top: 1.5rem;
        }

        .footer-note p {
          font-size: 0.875rem;
          color: #4b5563;
          text-align: left;
        }

        .icon {
          width: 1rem;
          height: 1rem;
          flex-shrink: 0;
        }

        .icon-large {
          width: 1.75rem;
          height: 1.75rem;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.125rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .card {
            padding: 2rem;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
          }
        }

        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s, transform 0.6s;
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div style={{ textAlign: 'center' }}>
             
              <h1 className="hero-title">
                <span className="red">Spanish Immersion</span>
                <br />
                <span className="text-navy-900">Starting in Kindergarten</span>
              </h1>
              
              <p className="hero-subtitle">
                A school within a school where students stay together, building lasting friendships while becoming bilingual. At no additional cost to families.
              </p>
 <p className="hero-subtitle" >Scroll down to learn more about the program or skip ahead to register your interest and show support for bringing the Spanish immersion program to Norman S. Edelcup/Sunny Isles Beach K-8!</p>
              <div className="hero-buttons">
<button className="cta-button" onClick={scrollToForm}>Show your support!</button>
              </div>
            </div>
          </div>
        </section>

        {/* What is the Program Section */}
        <section className="program-section fade-in">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="section-title">About the Program</h2>
            </div>

            <div className="card">
              <div className="quote-box">
                <p>
                  The Spanish Immersion program uses a “school within a school” model for dual language education. Its goal is to help students become proficient in speaking, reading, and writing in both English and another language. Each grade level includes a dedicated group of students who continue in the program from year to year. Instruction in core subjects follows the same schedule as other elementary schools, with an additional 60 minutes each day devoted to language arts in the second language.
                </p>
                <p className="quote-attribution"><a href="https://bilingual.dadeschools.net/#!/fullWidth/2295" target="_blank">— Miami-Dade County Public Schools</a></p>
              </div>

              <div className="info-grid">
                <div className="info-card">
                  <svg className="icon-large" style={{ margin: '0 auto', color: '#dc2626' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                  </svg>
                  <h3>Starts at Kindergarten</h3>
                  <p>Earlier than our current 2nd grade offering</p>
                </div>
                <div className="info-card" style={{ background: 'linear-gradient(to bottom right, #eff6ff, #ffffff)', borderColor: '#bfdbfe' }}>
                  <svg className="icon-large" style={{ margin: '0 auto', color: '#2563eb' }} fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                  <h3>60 Minutes Daily</h3>
                  <p>Additional Spanish language arts instruction</p>
                </div>
                <div className="info-card" style={{ background: 'linear-gradient(to bottom right, #f0fdf4, #ffffff)', borderColor: '#86efac' }}>
                  <svg className="icon-large" style={{ margin: '0 auto', color: '#16a34a' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
                  </svg>
                  <h3>No Extra Cost</h3>
                  <p>Fully funded by the district</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Now Section */}
        <section className="why-now-section fade-in">
          <div className="container" style={{ maxWidth: '64rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="section-title">The Perfect Time to Restart</h2>
            </div>

            <div className="card">
              <div className="timeline-item">
                <div className="timeline-icon" style={{ backgroundColor: '#fef2f2' }}>
                  <svg className="icon-large" style={{ color: '#dc2626' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                  </svg>
                </div>
                <div className="timeline-content">
                  <h3>Our School's History</h3>
                  <p>
                    Our school offered this Spanish immersion program in the past. However, due to changing demographics that required additional resources for English Language Learners, the program had to be paused. Families loved it, and its absence has been felt by our community.
                  </p>
                </div>
              </div>

              <div className="divider"></div>

              <div className="timeline-item">
                <div className="timeline-icon" style={{ backgroundColor: '#f0fdf4' }}>
                  <svg className="icon-large" style={{ color: '#16a34a' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                  </svg>
                </div>
                <div className="timeline-content">
                  <h3>A New Opportunity</h3>
                  <p>
                    As of the start of the 2025-26 school year, our school is <strong style={{ color: '#dc2626' }}>200 students below capacity</strong>. This creates the perfect opportunity to bring back the Spanish immersion program that our community has been missing.
                  </p>
                  <div className="highlight-box">
                    <p>
                      With available space and strong community support, now is the ideal time to restart this transformative program.
                    </p>
                    <p>
                      Your voice can help make it happen. Show administration that families want and need this program.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section fade-in">
          <div className="container" style={{ maxWidth: '80rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 className="section-title">What Makes this Program Special</h2>
              <p className="benefits-subtitle">
                Students stay together as a cohort throughout elementary school, creating a unique sense of community and belonging.
              </p>
            </div>

            <div className="benefits-grid">

		<div className="benefit-card">
                <div className="benefit-icon">
                  <svg className="icon-large" style={{ color: 'white' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/>
                  </svg>
                </div>
                 <h3>Bilingual Fluency</h3>
                <p>Daily Spanish immersion builds strong reading, writing, and speaking skills. Students gain lifelong language proficiency, confidence, and expanded future opportunities.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg className="icon-large" style={{ color: 'white' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <h3>Close-Knit Community</h3>
                <p>Students stay together as a cohort throughout the grades, which creates lasting friendships, while parents build a network of families invested in the program.</p>
              </div>

              

              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg className="icon-large" style={{ color: 'white' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/>
                  </svg>
                </div>
                <h3>Cultural Connection</h3>
                <p>Students reconnect with their heritage or gain deeper understanding of Hispanic cultures, fostering pride, empathy, and global awareness.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="interest-form" className="form-section fade-in">
          <div className="container form-container" style={{ maxWidth: '64rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <h2 className="section-title">Show Your Support</h2>
            </div>

            <div className="form-card">
              <div className="iframe-container">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdj3mGhFGxjttjZMN6hj0yrP3ZkSB-G_UVHoWdFbFR8hauuQg/viewform?embedded=true"
                  width="100%"
                  height="1886"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Interest Form">
                  Loading…
                </iframe>
              </div>

              <div className="footer-note">
                <svg className="icon" style={{ color: '#dc2626', marginTop: '0.125rem' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <p>
                  <strong>Your voice matters!</strong> Every response helps demonstrate community demand and builds the case for restarting this beloved program. Together, we can bring back bilingual education to our school.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}