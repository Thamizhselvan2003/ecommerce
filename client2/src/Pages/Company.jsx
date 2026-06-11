import React from 'react'
import './CSS/Company.css'

const Company = () => {
  return (
    <div className='company-page'>
      <div className="company-hero">
        <h1>SnapBuy Inc.</h1>
        <p>Leading the next generation of digital retail and consumer experiences.</p>
      </div>

      <div className="company-content">
        <div className="company-section">
          <h2>Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="time-badge">2024</div>
              <div className="time-content">
                <h4>Founded SnapBuy</h4>
                <p>Launched our first online storefront with a mission to simplify fashion discovery and retail delivery.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="time-badge">2025</div>
              <div className="time-content">
                <h4>Global Expansion</h4>
                <p>Expanded operations to 10+ countries, serving over 500,000 active shoppers monthly.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="time-badge">2026</div>
              <div className="time-content">
                <h4>AI Styling Engine</h4>
                <p>Introduced personalized neural recommendation algorithms to help customers find outfits matching their vibes.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="company-team">
          <h2>Leadership Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="avatar">TS</div>
              <h4>Thamizhselvan M</h4>
              <p className="role">Co-Founder & CEO</p>
              <p className="bio">Passionate about connecting design elements and retail platforms to build high-scale startups.</p>
            </div>
            <div className="team-member">
              <div className="avatar">AK</div>
              <h4>Adarsh Kumar</h4>
              <p className="role">Chief Product Officer</p>
              <p className="bio">Ex-retail architect with 10+ years driving product designs across global brands.</p>
            </div>
            <div className="team-member">
              <div className="avatar">SD</div>
              <h4>Sanjana Devi</h4>
              <p className="role">Head of Creative Design</p>
              <p className="bio">Award-winning UX visual designer specializing in glassmorphic layouts and dark-mode styling.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Company
