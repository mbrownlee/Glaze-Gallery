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
        <CardImg className="donePot" src={props.pot.finishedImg} />
        <CardBody>
          <CardTitle>{props.pot.name}</CardTitle>
          <CardSubtitle>Artist Name</CardSubtitle>
          <Button href={`/pots/${props.pot.id}`}>Pot Details</Button>{" "}
        </CardBody>
      </Card>
    </div>
  );
};

export default potCard;
