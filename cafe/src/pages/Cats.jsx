import { useState, useEffect } from "react";
import axios from "axios";
import ACat from "../components/ACat";
import "./pagesCSS/Cats.css";
import AddDialog from "../components/add-dialog";

const Cats = () => {
  const [cats, setCats] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        //"http://localhost:3001/api/cats"
        "https://cafe-backend-6f5d.onrender.com/api/cats"
      );
      setCats(response.data);
    })();
  }, []);

  const addCat = (cat) => {
    setCats((cats) => [...cats, cat]);
  };

  const openAddDialog = () => {
    setShowAddDialog(true);
  };

  const closeAddDialog = () => {
    setShowAddDialog(false);
  };

  return (
    <div id="cats" className="columns">
      <section id="catButton">
        <button id="add-cat" onClick={openAddDialog}>
          +
        </button>

        {showAddDialog ? (
          <AddDialog closeDialog={closeAddDialog} addCat={addCat} />
        ) : (
          ""
        )}
      </section>

      {cats.map((cat) => (
        <ACat
          key={cat.name}
          _id={cat._id}
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

  <h1>HELLO</h1>;
};

export default Cats;
