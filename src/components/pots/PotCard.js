import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
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

  }, [])
 
  return (
    <div>
     <Row>
     <Col sm="4">
      <Card>
     
        <CardImg className="donePot" src={props.pot.finishedImg} />
        <CardBody>
          <CardTitle><h3>{props.pot.name}</h3></CardTitle>
          <CardSubtitle>{artistName}</CardSubtitle>
          <Button href={`/pots/${props.pot.id}`}>Pot Details</Button>{" "}
        </CardBody>
      </Card>
      </Col>
      </Row>
    </div>
  );
};

export default PotCard;
