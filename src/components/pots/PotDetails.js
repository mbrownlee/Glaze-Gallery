import React, { useState, useEffect } from "react";
import API from "../../modules/fetch";




const PotDetail = (props) => {
  const [pot, setPot] = useState({
    potterId: "",
    name: "",
    preFireImg: "", 
    finishedImg: "", 
    clayId: "",
    techniqueId: "", 
    decoration: "",
    firingEnvironment: "",
    firingSchedule: "",
    glaze1Id: "",
    glaze2Id: "",
    glaze3Id: "",
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
        <h3>Pot Name: {pot.name}</h3>
        <p>Artist: {pot.potterId}</p>  
        <p>Clay: {pot.clayId}</p>  
        <p>Technique: {pot.techniqueId}</p> 
        <p>Decorative enhancements: {pot.decoration}</p> 
        <p>Firing Environment: {pot.firingEnvironmentId}</p> 
        <p>Firing Schedule: {pot.firingSchedule}</p> 
        <p>Technique: {pot.techniqueId}</p> 
        <p>Primary Glaze: {pot.glaze1Id}</p>  
        <p>Second Glaze: {pot.glaze2Id}</p>  
        <p>Third Glaze: {pot.glaze3Id}</p>  
        <p>Glaze Details: {pot.glazeDetails}</p>  
        <p>Date Completed: {pot.dateFinished}</p>  
        <p>Glazed Pot before firing: <img className="donePot" src={pot.preFireImg}/></p>  
        <p>Completed Pot: <img className="donePot" src={pot.finishedImg}/></p>  
        
        {/* <p>Keep details private or share with community?: {pot.Private}</p>   */}
   
      
    
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