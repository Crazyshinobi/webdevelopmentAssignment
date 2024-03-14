import "./Home.css";

const Home = () => {
  return (
    <div className="home_container">
      {/* Hero  */}
      <div className="hero_section">
        <div className="frame">
          <div className="heading">
            <h2 className="gray_heading">Lessons and insights</h2>
            <h2 className="green_heading">from 8 years</h2>
            <p>
              Where to grow your business as a photographer: site or social
              media?
            </p>
          </div>
          <button>Register</button>
        </div>
        <div className="illustration">
          <img src="./Illustration.png" alt="" />
        </div>
      </div>
      {/* Client  */}
      <div className="client">
        <div className="clients">
          <h3>Our Clients</h3>
          <p className="description">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="client_logos">
          <img src="./Clients Logos.png" alt="" />
        </div>
      </div>
      {/* Community  */}
      <div className="community">
        <div className="community_sub">
          <h3>Manage your entire community in a single system</h3>
          <p>Who is Nextcent suitable for?</p>
        </div>
        <div className="features">
          {/* Membership Organisations  */}
          <div className="membership_organisations feature_sub">
            <div className="member">
              <div className="member_img">
                <img src="./membership.png" alt="" />
              </div>
              <div className="member_heading">
                <h3>Membership Organisations</h3>
              </div>
            </div>
            <div  className="member_desc">
              <p>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
          {/* National Associations  */}
          <div className="national_associtaions feature_sub">
            <div className="member">
              <div className="member_img">
                <img src="./national.png" alt="" />
              </div>
              <div className="member_heading">
                <h3>National Associations</h3>
              </div>
            </div>
            <div  className="member_desc">
              <p>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
          {/* Clubs And groups  */}
          <div className="clubs_and_groups feature_sub">
            <div className="member">
              <div className="member_img">
                <img src="./Icon.png" alt="" />
              </div>
              <div className="member_heading_last">
                <h3>Clubs And Groups</h3>
              </div>
            </div>
            <div className="member_desc">
              <p>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
