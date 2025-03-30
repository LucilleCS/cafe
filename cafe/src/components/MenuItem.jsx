
import "./css/menItem.css"
const MenuItem = (props) => {
    return (
        <section className="menuItem">
            <img src={props.image} alt={props.name} />
            <section className="paragraph">
                <h4>{props.name}</h4>
                <p>{props.description}</p>
            </section>
            <p className="price">...{props.price}</p>
        </section>
    );
};

export default MenuItem; // Ensure it's exported as default
