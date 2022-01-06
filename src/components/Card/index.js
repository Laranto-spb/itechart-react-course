const Card = ({title}) => {

  return (
    <>
      <div className="col s6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{title}</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem exercitationem id, a voluptate reiciendis dolores sint cum dicta deleniti libero earum harum repellat delectus quos minus facilis, amet, voluptatum aspernatur?</p>
          </div>
          <div className="card-action">
            <a href="#">This is a link</a>
            <a href="#">This is a link</a>
          </div>
        </div>  
      </div>
    </>
  );
}

export default Card;