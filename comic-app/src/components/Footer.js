import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "	#ffc510",
        color: "#4c69f6",
        maxHeight: "108px",
        flexDirection: "column",
        display: "flex",
        justifyContent: "Space-between",
        width: "100%",
        padding: "30px",
        marginTop: "55px",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-7">
            <h2>Comic App™</h2>
            <h5>- by Camilo Joga</h5>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
