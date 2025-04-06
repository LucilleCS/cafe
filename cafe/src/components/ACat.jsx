function ACat(props) {
    return (
      <section className="catItem">
        <a href="#"> {}
          <div id="aboutCat">
            <div className="catImg">
              <img 
                  src={"https://cafe-backend-6f5d.onrender.com/" + props.img_name} 
                  alt={props.name} 
              />
            </div>
            <div>
              <h2>{props.name}</h2>
              <p><strong>Age:</strong> {props.age}</p>
              <p><strong>Gender:</strong> {props.gender}</p>
              <p><strong>Personality:</strong> {props.personality}</p>
              <p><strong>Favorite Activity:</strong> {props.favorite_activity}</p>
            </div>
          </div>
        </a>
      </section>
    );
  }
  
  export default ACat;
  