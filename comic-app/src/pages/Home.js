import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = ({ comics }) => {
  return (
    <Row>
      {comics.map((comic) => (
        <Col key={comic.id} xs={3}>
          <Link to={`/comic/${comic.id}`}>
            <img
              class="home-img"
              src={comic.image.small_url}
              alt={comic.name}
              style={{}}
            />
          </Link>
        </Col>
      ))}
    </Row>
  );
};
