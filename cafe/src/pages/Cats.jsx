import { useState, useEffect } from "react";
import axios from "axios";
import ACat from "../components/ACat";
import "./pagesCSS/Cats.css"

const Cats = () => {
    const [cats, setCats] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await axios.get(
              //"http://localhost:3001/api/cats"
              "https://cafe-backend-6f5d.onrender.com/api/cats"
            );
            setCats(response.data);
        })();
    }, []);

    return (
        <div id="cats" className="columns">
            {cats.map((cat) => (
                <ACat
                    key={cat.name}   
                    name={cat.name}
                    age={cat.age}
                    gender={cat.gender}
                    personality={cat.personality}
                    favorite_activity={cat.favorite_activity}
                    img_name={cat.img_name}   
                />
            ))}
        </div>
    );
};

export default Cats;
