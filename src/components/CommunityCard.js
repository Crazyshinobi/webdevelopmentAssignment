const CommunityCard = ({imgPath , content}) => {
  return (
    <div className="community_card">
      <div className="community_img">
        <img src={imgPath} alt="" />
      </div>
      <div className="community_content">
        <p>{content}</p>
        <div>
          <p>Readmore</p>
          <span>
            <img src="./green_right.png" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
