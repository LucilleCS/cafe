import React, { useState } from "react";

const DeleteDialog = (props) => {
  const deleteCatPlan = async () => {
    const response = await fetch(
      `https://cafe-backend-6f5d.onrender.com/api/cats/${props._id}`,
      {
        method: "DELETE",
      }
    );

    if (response.status === 200) {
      setResult("Cat details deleted successfully");
      props.hideACat();
      props.closeDialog();
    } else {
      console.log("error deleting cat, ", response);
      setResult(response.message);
    }
  };
  const [result, setResult] = useState("");
  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete {props.name} ?</h3>
            <section>
              <button onClick={deleteCatPlan}>Yes</button>
              <button onClick={props.closeDialog}>No</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
