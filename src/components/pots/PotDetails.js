import React, { useState, useEffect } from "react";
import API from "../../modules/fetch";
import ImageSettings from "./ImageUpload"



const PotDetail = (props) => {
  const [pot, setPot] = useState({
    potterId: "",
    preFireImg: "", 
    finishedImg: "", 
    clayId: "",
    techniqueId: "", 
    decoration: "",
    firingEnvironment: "",
    firingSchedule: "",
    glaze: "",
    glazeDetails: "",
    dateFinished: "",
    Private: ""
  });
//   const [productTypesWithLocation, setProductTypesWithLocation] = useState([]);

  useEffect(() => {
    API.getPot(props.match.params.potId).then(
      (APIResult) => {
        console.log(APIResult, "what you want");
        setPot(APIResult);
      }
    );
  }, [props.match.params.potId]);

//   useEffect(() => {
//     ProductTypeManager.getByProduct(props.match.params.productId).then(
//       (APIResult) => {
//         setProductTypesWithLocation(APIResult);
//       }
//     );
//   }, [props.match.params.prodctId]);
//   const handleDelete = () => {
//     ProductManager.delete(props.productId).then(() =>
//       props.history.push("/products")
//     );
//   };

  return (
    <div className="card">
      <div className="card-content">
      
        <h1>My Pot</h1>
       {/* <p>{pot.potterId}</p>  */}
   <p> preFireImg: "", 
    finishedImg: "", 
    clayId: "",
    techniqueId: "", 
    decoration: "",
    firingEnvironment: "",
    firingSchedule: "",
    glaze: "",
    glazeDetails: "",
    dateFinished: "",
    Private: ""</p>
      <ImageSettings />
    
        {/* <div className="edit">
          <button
            type="button"
            onClick={() => props.history.push(`/products/${product.id}/edit`)}
          >
            Edit Product
          </button>
        </div>
        <div className="delete">
          <button type="button" onClick={handleDelete}>
            Delete Product
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default PotDetail;