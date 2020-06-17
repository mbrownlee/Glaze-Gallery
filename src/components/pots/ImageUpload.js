import React, { useState } from "react";
import API from "../../modules/fetch";

const ImageSettings = (props) => {
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [pots, setPots] = useState({
        potterId: props.potterId,
        potId: props.potId,
        url: "",
      });
    
      const addNewPotPic = (evt) => {
       
          setLoading(true);
          const newPot = { ...pots };
          newPot.finishedImg = image;
          API.addImage(newPot).then(() =>
            props.history.push("/pots")
          );
        }

    const uploadImage = async (evt) => {
        const files = evt.target.files[0]
        const data = new FormData()
        data.append("upload_preset", "GlazeProject")
        data.append("file", files)
        setLoading(true)
        await fetch("https://api.cloudinary.com/v1_1/michellemb/image/upload", 
        {
            method: "POST",
            body: data
        })
        .then(results => setImage(results.data.secure_url))
        .then(setLoading(false))
        // (results.json(file))
        // setImage(file.secure_url)
       
    }
        
    const handleFieldChange = (evt) => {
        const stateToChange = { ...pots };
        stateToChange[evt.target.id] = evt.target.value;
        setPots(stateToChange);
      };

    return (
        <>
          <div className="Pics">
            <h1>Add Photo</h1>
            <input
              type="file"
              name="file"
              placeholder="Upload photo"
              onChange={uploadImage}
            />
            {loading && <p>Spinning Pots ...</p>}
          </div>
          <div className="pot-pic">
            <input
              onChange={handleFieldChange}
              type="text"
              id="title"
              placeholder="Descriptive Title (e.g. dark blue mug)"
            />
          </div>
          <section>
            <div className="photo-save-btn">
              <button
                type="button"
                className="right"
                disabled={""}
                onClick={addNewPotPic}
              > Add Pot
              </button>
            </div>
          </section>
        </>
      );
    }
    
    




export default ImageSettings