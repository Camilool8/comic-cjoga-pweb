import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = ({ comics }) => {
  return (
    <Row>
      {comics.map((comic) => (
        <Col key={comic.id} xl={2} lg={3} md={4} sm={6} xs={12}>
          <Link to={`/comic/${comic.id}`}>
            <img
              class="home-img"
              src={comic.image.small_url}
              alt={comic.name}
              style={{}}
            />
            <p
              style={{
                "text-align": "center",
                "font-size": "15px",
                "font-weight": "bold",
                color: "black",
              }}
            >
              {comic.volume.name} ({comic.cover_date})
            </p>
          </Link>
        </Col>
      ))}
    </Row>
  );
};
