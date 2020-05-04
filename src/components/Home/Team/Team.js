import React from 'react';
import styles from './Team.scss';

const Team = () => (
  <div id="team" className={styles.team}>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h2 className="title">TEAM</h2>
        </div>
        <div className={`col-xs-12 col-md-4 col-lg-4 ${styles['team-member']}`}>
          <div className={styles['team-card']}>
            <img src="/img/team/andrew.png" alt="Andrew Kerr" />
            <span className={styles['team-card-name']}>Andrew Kerr</span>
            <span className={styles['team-card-role']}>CEO</span>
          </div>
        </div>
        <div className={`col-xs-12 col-md-4 col-lg-4 ${styles['team-member']}`}>
          <div className={styles['team-card']}>
            <img src="/img/team/xander.png" alt="Xander Campbell" />
            <span className={styles['team-card-name']}>Xander Campbell</span>
            <span className={styles['team-card-role']}>Business Marketing</span>
          </div>
        </div>
        <div className={`col-xs-12 col-md-4 col-lg-4 ${styles['team-member']}`}>
          <div className={styles['team-card']}>
            <img src="/img/team/natasha.png" alt="Natasha Lappin" />
            <span className={styles['team-card-name']}>Natasha Lappin</span>
            <span className={styles['team-card-role']}>Business Development</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <h2 className="title">ADVISORS</h2>
        </div>
        <div className={`col-xs-12 col-md-4 col-lg-4 ${styles['team-member']}`}>
          <div className={styles['team-card']}>
            <img src="/img/team/oleg.jpg" alt="Andrew Kerr" />
            <span className={styles['team-card-name']}>Oleg Belousov</span>
            <span className={styles['team-card-role']}>Founder, n.exchange</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Team;
