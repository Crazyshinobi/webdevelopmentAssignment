import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <h2>Lorem ipsum dolor sit amet consectetuer</h2>
        <button>
          <span className="footer_btn_name">Get a Demo</span>
          <span className="white_right">
            <img src="./white_right.png" alt="" />
          </span>
        </button>
      </div>
      <div className="footer_details">
        <div className="company_info">
          <div className="copyright">
            <p className="landify">Copyright © 2020 Landify UI Kit.</p>
            <p className="all_rights">All rights reserved</p>
          </div>
          <div className="social_links">
            <div className="social_icons">
              <img src="/insta.png" alt="" />
            </div>
            <div className="social_icons">
              <img src="/circle.png" alt="" />
            </div>
            <div className="social_icons">
              <img src="/twitter.png" alt="" />
            </div>
            <div className="social_icons">
              <img src="/youtube.png" alt="" />
            </div>
          </div>
        </div>
        <div className="links_container">
          <div className="company">
            <div className="company_heading">
              <h4>Company</h4>
            </div>
            <div className="company_list">
              <p>About us</p>
              <p>Blog</p>
              <p>Contact us</p>
              <p>Pricing</p>
              <p>Testimonials</p>
            </div>
          </div>
          <div className="company">
            <div className="company_heading">
              <h4>Support</h4>
            </div>
            <div className="company_list">
              <p>Help center</p>
              <p>Terms of Service</p>
              <p>Legal</p>
              <p>Privacy Policy</p>
              <p>Status</p>
            </div>
          </div>
          <div className="status">
            <div className="status_heading">
              <h4>Stay up to date</h4>
            </div>
            <div className="email_input">
              <input type="text" placeholder="Your email address" />
              <div className="send_arrow">
                <img src="/send.png" alt="" />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
