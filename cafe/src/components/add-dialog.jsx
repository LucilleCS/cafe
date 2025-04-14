import "./css/dialog.css";
import React, { useState } from "react";

const AddDialog = (props) => {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("sending ");

    const formData = new FormData(event.target);

    const response = await fetch(
      "https://cafe-backend-6f5d.onrender.com/api/cats/",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.status === 200) {
      setResult("Cat Successfully Added");
      event.target.reset(); //reset your form fields
      props.addCat(await response.json());
      props.closeDialog();
    } else {
      console.log("Error adding cat", response);
      setResult(response.message);
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div id="add-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>

          <form id="add-cat-form" onSubmit={onSubmit}>
            <p>
              <label htmlFor="name ">Cat Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
                required
              />
            </p>

            <p>
              <label htmlFor="age">Cat Age</label>
              <input
                type="text"
                id="age"
                name="age"
                value={inputs.age || ""}
                onChange={handleChange}
                required
              />
            </p>

            <p>
              <label htmlFor="gender">Cat Gender</label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={inputs.gender || ""}
                onChange={handleChange}
                required
              />
            </p>

            <p>
              <label htmlFor="personality">Cats personality</label>
              <input
                type="text"
                id="personality"
                name="personality"
                value={inputs.personality || ""}
                onChange={handleChange}
                required
              />
            </p>

            <p>
              <label htmlFor="activity">Cats activity</label>
              <input
                type="text"
                id="activity"
                name="activity"
                value={inputs.activity || ""}
                onChange={handleChange}
                required
              />
            </p>

            <section className="columns">
              <p id="img-prev-section">
                {inputs.img && (
                  <img
                    id="img-prev"
                    src={URL.createObjectURL(inputs.img)}
                    alt="Preview"
                  />
                )}
              </p>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </p>
            </section>

            <p>
              <button type="submit">Submit</button>
            </p>
            <p> {result} </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDialog;
