import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/esm/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { Link } from "react-router-dom";

const PhoneDetails = ({ phoneList }) => {
  const [phoneDetails, setPhoneDetails] = useState(null);
  const [fetchingDetails, setFetchingDetails] = useState(true);

  const { phoneId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPhoneDetails();
  }, [phoneId]);

  const getPhoneDetails = async () => {
    setFetchingDetails(true);

    const phoneToRender = phoneList.find((eachPhone) => {
      return eachPhone.id === Number(phoneId);
    });
    setTimeout(() => {
      if (!phoneToRender) {
        navigate("/not-found");
        return;
      }
      setPhoneDetails(phoneToRender);
      setFetchingDetails(false);
    }, 500);
  };

  if (fetchingDetails) {
    return (
      <div className="vh-100 p-3">
        <Spinner animation="border" variant="info" />
      </div>
    );
  }

  const {
    name,
    manufacturer,
    description,
    color,
    price,
    screen,
    processor,
    ram,
    imageFileName,
  } = phoneDetails;

  return (
    <Card style={{ width: "18rem" }} className="m-auto">
      <Card.Img variant="top" src={`/assets/images/${imageFileName}`} />
      <Card.Body className="text-center">
        <Card.Title className="d-flex justify-content-center">
          {name} by {manufacturer}
        </Card.Title>
        <Card.Text className="d-flex align-items-center">
          {description}
        </Card.Text>
      </Card.Body>

      <ListGroup className="list-group-flush text-center">
        <ListGroupItem>Color: {color}</ListGroupItem>
        <ListGroupItem>{screen}</ListGroupItem>
        <ListGroupItem>
          Processor: {processor}. Ram: {ram}
        </ListGroupItem>
        <ListGroupItem>Starting from: {price}€</ListGroupItem>
      </ListGroup>

      <Card.Body className="text-center">
        <Link to="/">Go Back</Link>
      </Card.Body>
    </Card>
  );
};

export default PhoneDetails;
