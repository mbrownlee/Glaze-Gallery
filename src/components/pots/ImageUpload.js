import React, { useState } from "react";


const ImageSettings = (props) => {
  
  const [loading, setLoading] = useState(false);
  const [pots, setPots] = useState({
    potterId: props.potterId,
    // potId: props.potId,
    finishedImg: props.finishedImg,
  });

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

    props.setImage(parsed.secure_url)
     
  };

  const handleFieldChange = (evt) => {
    const stateToChange = { ...pots };
    stateToChange[evt.target.id] = evt.target.value;
    setPots(stateToChange);
  };

  return (
    <>
      <div className="Pics">
        <h3>Add Finished Pot Photo</h3>
        <input
          type="file"
          name="file"
          placeholder="Upload photo"
          onChange={uploadImage}
        />
        {loading && <p>... Photo will show after submitting form</p>}
      </div>
      
      
    </>
  );
};

export default ImageSettings;
