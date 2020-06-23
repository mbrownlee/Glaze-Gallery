import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from "reactstrap";
import API from "../../modules/fetch";



const PotCard = (props) => {
  const [artistName, setArtistName] = useState("")
  
  useEffect(() => {
    API.getArtistName(props.pot.potterId).then((result) => {
     setArtistName(result.artistName) 
    })

  }, [props.pot.potterId])
 
  return (
    <div className="potCards">
    
     {/* <Col sm="4"> */}
      <Card className="potCard">
     
        <CardImg className="donePot" src={props.pot.finishedImg} />
        <CardBody>
          <CardTitle><h3>{props.pot.name}</h3></CardTitle>
          <CardSubtitle>{artistName}</CardSubtitle>
          <Button href={`/pots/${props.pot.id}`}>Pot Details</Button>{" "}
        </CardBody>
      </Card>
      {/* </Col> */}
     
    </div>
  );
};

export default PotCard;
