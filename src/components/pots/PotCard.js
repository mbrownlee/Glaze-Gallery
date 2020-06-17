import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const potCard = (props) => {
 
  return (
   
    <div>
      <Card>
        <CardImg src="./placeholder.jpg" alt="pitcher" />
        <CardBody>
          <CardTitle>Pot Title</CardTitle>
          <CardSubtitle>Artist Name</CardSubtitle>

          {/* <Link to={`/pots/${props.pot.id}`}> */}
            <Button href={`/pots/${props.pot.id}`}>Pot Details</Button>{" "}
            {/* </Link> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default potCard;
