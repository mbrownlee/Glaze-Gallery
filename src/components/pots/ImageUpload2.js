import React, { useState } from "react";
import API from "../../modules/fetch";

const ImageSettings2 = (props) => {
  
  const [loading, setLoading] = useState(false);
  const [pots, setPots] = useState({
    potterId: props.potterId,
    // potId: props.potId,
    preFireImg: props.preFireImg,
  });

  // const addNewPotPic = (evt) => {
    // setLoading(true);
    // const newPot = { ...pots };
  
    // newPot.finishedImg = image;
    // API.addImage(newPot).then(() => props.history.push("/pots"));
  

  const uploadImage = async (evt) => {
    const files = evt.target.files[0];
    const data = new FormData();
    data.append("upload_preset", "GlazeProject");
    data.append("file", files);
    setLoading(true);
    const upload = await fetch("https://api.cloudinary.com/v1_1/michellemb/image/upload", {
      method: "POST",
      body: data,
    })

    const parsed = await upload.json()

    props.setImage2(parsed.secure_url)
     
  };

  const handleFieldChange = (evt) => {
    const stateToChange = { ...pots };
    stateToChange[evt.target.id] = evt.target.value;
    setPots(stateToChange);
  };

  return (
    <>
      <div className="Pics">
        <h3>Glazed, Pre-fired Photo</h3>
        <input
          type="file"
          name="file"
          placeholder="Upload photo"
          onChange={uploadImage}
        />
        {loading && <p>Spinning Pots ... Photo will show after submitting form</p>}
      </div>
      
      
    </>
  );
};

export default ImageSettings2;