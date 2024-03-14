import CommunityCard from "../components/CommunityCard";
import "./Body.css";

const Body = () => {
  const communityData = [
    {
      imgPath: "./community_1.png",
      content: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      imgPath: "./community_2.png",
      content:
        "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      imgPath: "./community_3.png",
      content: "Revamping the Membership Model with Triathlon Australia",
    },
  ];

  return (
    <div className="body">
      {/* Unlock  */}
      <div className="unlock">
        <div className="unlock_img">
          <img src="./unlock.png" alt="" />
        </div>
        <div className="unlock_right">
          <div className="unlock_text">
            <div className="unlock_heading">
              <h3>The unseen of spending three years at Pixelgrade</h3>
            </div>
            <div className="unlock_desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </p>
            </div>
          </div>

          <button>Learn More</button>
        </div>
      </div>
      {/* Achievements  */}
      <div className="achievement">
        {/* achievements  */}
        <div className="achievements">
          <div className="achievement_heading">
            <h2>
              Helping a local <span>business reinvent itself</span>
            </h2>
          </div>
          <div className="achievement_desc">
            <p>We reached here with our hard work and dedication</p>
          </div>
        </div>
        {/* counts  */}
        <div className="counts">
          {/* Members  */}
          <div class="grid_item">
            <div className="icon">
              <img src="./member.png" alt="" />
            </div>
            <div className="details">
              <div className="numbers">2,245,341</div>
              <div className="label">Members</div>
            </div>
          </div>

          {/* Clubs  */}
          <div class="grid_item">
            <div className="icon">
              <img src="./Group.png" alt="" />
            </div>
            <div className="details">
              <div className="numbers">46,328</div>
              <div className="label">Clubs</div>
            </div>
          </div>

          {/* Events  */}
          <div class="grid_item">
            <div className="icon">
              <img src="./event.png" alt="" />
            </div>
            <div className="details">
              <div className="numbers"> 828,867</div>
              <div className="label">Event Bookings</div>
            </div>
          </div>

          {/* Payment  */}
          <div class="grid_item">
            <div className="icon">
              <img src="./payment.png" alt="" />
            </div>
            <div className="details">
              <div className="numbers">1,926,436</div>
              <div className="label">Payments</div>
            </div>
          </div>
        </div>
      </div>
      {/* Calender  */}
      <div className="calender">
        <div className="calender_container">
          <div className="calender_img">
            <img src="./pana.png" alt="" />
          </div>
          <div className="calender_desc">
            <div className="calender_heading">
              <h3>How to design your site footer like we did</h3>
              <p>
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
                scelerisque elit erat a magna. Donec quis erat at libero
                ultrices mollis. In hac habitasse platea dictumst. Vivamus
                vehicula leo dui, at porta nisi facilisis finibus. In euismod
                augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                in nisi eget nulla commodo faucibus efficitur quis massa.
                Praesent felis est, finibus et nisi ac, hendrerit venenatis
                libero. Donec consectetur faucibus ipsum id gravida.
              </p>
            </div>
            <button>Learn More</button>
          </div>
        </div>
      </div>
      {/* Customer  */}
      <div className="customer">
        <div className="customer_img">
          <img src="./image 9.png" alt="" />
        </div>
        <div className="customer_container">
          <div className="customer_content">
            <div className="customer_para">
              <p>
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
            </div>
            <div className="customer_details">
              <span className="customer_name">Tim Smith</span>
              <span className="customer_association">
                British Dragon Boat Racing Association
              </span>
            </div>
          </div>
          <div className="customer_meet">
            <div className="customer_logo">
              <img src="./Frame 10.png" alt="" />
            </div>
            <div className="customer_meet_all">
              <p>Meet all customers </p>
              <img src="./green_right.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Community Updates  */}
      <div className="community_updates">
        {/* Community Title  */}
        <div className="community_title">
          <h3>Caring is the new marketing</h3>
          <p>
            The Nextcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </p>
        </div>
        {/* Community Card  */}
        <div className="community_card_container">
          {communityData.map((community) => {
            return (
              <CommunityCard
                imgPath={community.imgPath}
                content={community.content}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
