import "./css/aCat.css";
import React, { useState } from "react";
import EditDialog from "./edit-dialog";
import DeleteDialog from "./delete-dialog";

function ACat(props) {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showACat, setShowACat] = useState(true);
  const [updatedCat, setCatPlan] = useState(props);

  const openEditDialog = () => {
    setShowEditDialog(true);
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
  };

  const openDeleteDialog = () => {
    setShowDeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  const editCatPlan = (updatedCat) => {
    setCatPlan(updatedCat);
  };

  const hideACat = () => {
    setShowACat(false);
  };
  if (!showACat) return null;

  return (
    <section className="catItem">
      {showDeleteDialog && (
        <DeleteDialog
          closeDialog={closeDeleteDialog}
          name={updatedCat.name}
          _id={updatedCat._id}
          hideACat={hideACat}
        />
      )}

      {showEditDialog && (
        <EditDialog
          closeDialog={closeEditDialog}
          editCatPlan={editCatPlan}
          _id={updatedCat._id}
          name={updatedCat.name}
          age={updatedCat.age}
          gender={updatedCat.gender}
          personality={updatedCat.personality}
          favorite_activity={updatedCat.favorite_activity}
          img_name={`https://cafe-backend-6f5d.onrender.com/${updatedCat.img_name}`}
        />
      )}

      <div id="aboutCat">
        <div className="catImg">
          <img
            src={`https://cafe-backend-6f5d.onrender.com/${updatedCat.img_name}`}
            alt={updatedCat.name}
          />
        </div>
        <div>
          <section id="change-buttons">
            <h2>{updatedCat.name}</h2>
            <a href="#" onClick={openEditDialog} id="edit">
              &#9998;
            </a>
            <a href="#" onClick={openDeleteDialog} id="edit">
              &#x2715;
            </a>
          </section>
          <p>
            <strong>Age:</strong> {updatedCat.age}
          </p>
          <p>
            <strong>Gender:</strong> {updatedCat.gender}
          </p>
          <p>
            <strong>Personality:</strong> {updatedCat.personality}
          </p>
          <p>
            <strong>Favorite Activity:</strong> {updatedCat.favorite_activity}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ACat;
