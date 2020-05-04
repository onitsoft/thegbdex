import React from 'react';
import styles from './About.scss';
import { I18n, Trans } from 'react-i18next';

const About = () => (
  <I18n ns="translations">
    {t => (
      <div id="about" className={styles.about}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="title">ABOUT</h2>
            </div>

            <div className="col-xs-12">
              <div className="col-xs-12 co-sm-12 col-md-6 col-lg-6" style={{ paddingLeft: 5, paddingRight: 5 }}>
                <p>
                  Our mission – Founded in 2018 by Andrew Kerr, The GB DEX has already helped many clients enter into the complicated and
                  daunting world of crypto. We noticed a demand for additional support, guidance and even new problems both new and not so
                  new investors were facing.
                </p>
              </div>
              <div className="col-xs-12 co-sm-12 col-md-6 col-lg-6" style={{ paddingRight: 5, paddingLeft: 5 }}>
                <p>
                  This is why we have made it our misson to provide the best customer service and exchange the UK deserves and needed. With
                  our non-custodial solution we never hold your assets, YOU as the customer are in complete control.
                </p>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="col-xs-12 co-sm-12 col-md-6 col-lg-6" style={{ paddingLeft: 5, paddingRight: 5 }}>
                <p>
                  All fiat operations on theGBdex are performed via it's strong partnership with &nbsp;
                  <a href="https://n.exchange/?ref=gbdex" target="_blank" rel="noopener noreferrer">
                    n.exchange
                  </a>
                  , one of the most seasoned and prominent exchanges in the UK, founded in 2016 and in operation half of a decade since
                  then.
                </p>
              </div>
              <div className="col-xs-12 co-sm-12 col-md-6 col-lg-6" style={{ paddingRight: 5, paddingLeft: 5 }}>
                <p>
                  For that reason, all related support, KYC and AML/CFT compliance is handled exclusively by{' '}
                  <a href="https://n.exchange/?ref=gbdex" target="_blank" rel="noopener noreferrer">
                    n.exchange
                  </a>{' '}
                  according to the highest standards of compliance, fraud prevention, data-protection and information security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </I18n>
);

export default About;
