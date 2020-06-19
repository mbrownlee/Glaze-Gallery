import React from "react";
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

const potCard = (props) => {
  return (
    <div>
     <Row>
     <Col sm="4">
      <Card>
     
        <CardImg className="donePot" src={props.pot.finishedImg} />
        <CardBody>
          <CardTitle>{props.pot.name}</CardTitle>
          <CardSubtitle>Artist Name</CardSubtitle>
          <Button href={`/pots/${props.pot.id}`}>Pot Details</Button>{" "}
        </CardBody>
      </Card>
      </Col>
      </Row>
    </div>
  );
};

export default potCard;
