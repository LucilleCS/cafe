import React, { useState } from "react";

const EditDialog = (props) => {
  const { _id, name, age, gender, personality, favorite_activity, img_name } =
    props;

  const [inputs, setInputs] = useState({
    _id: _id,
    name: name,
    age: age,
    gender: gender,
    personality: personality,
    favorite_activity: favorite_activity,
    img_name: img_name,
  });

  const [result, setResult] = useState("");

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

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    const response = await fetch(
      `https://cafe-backend-6f5d.onrender.com/api/cats/${props._id}`,
      {
        method: "PUT",
        body: formData,
      }
    );
    if (response.status === 200) {
      setResult("Cat details edited successfully");
      event.target.reset();
      props.closeDialog();
      props.editCatPlan(await response.json());
    } else {
      setResult("Error editing your cat details");
    }
  };

  return (
    <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <form id={`edit-cat-form-${_id}`} onSubmit={onSubmit}>
            <p>
              <label htmlFor="name">Cat Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={inputs.name}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="age">Age:</label>
              <input
                type="text"
                id="age"
                name="age"
                value={inputs.age}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="gender">Gender:</label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={inputs.gender}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="personality">Personality:</label>
              <input
                type="text"
                id="personality"
                name="personality"
                value={inputs.personality}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="favorite_activity">Favorite Activity:</label>
              <input
                type="text"
                id="favorite_activity"
                name="activity"
                value={inputs.favorite_activity}
                onChange={handleChange}
                required
              />
            </p>

            <section className="columns">
              <div>
                <p id="img-prev-section">
                  {inputs.img_name && (
                    <img
                      id="img-prev"
                      src={inputs.img_name}
                      alt="Cat preview"
                    />
                  )}
                </p>
              </div>
              <p id="img-upload">
                <label htmlFor="img_name">Upload Image:</label>
                <input
                  type="file"
                  id="img_name"
                  name="img_name"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </p>
            </section>

            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditDialog;
