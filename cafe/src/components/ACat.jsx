function ACat(props) {
    return (
      <section className="catItem">
        <a href="#"> {/* Wrap the content in an anchor tag if necessary */}
          <div id="aboutCat">
            <div className="catImg">
              <img 
                  src={"http://localhost:3001/" + props.img_name} 
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
  