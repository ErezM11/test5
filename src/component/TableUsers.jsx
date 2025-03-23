import React from "react";
import { Col, Container, Row } from "reactstrap";

export default function TableUsers() {
  const flexContainerStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    alignItems: "stretch",
    alignContent: "stretch",
  };
  return (
    <Container style={{ border: "1px solid black" }}>
      <Row className="gap-1">
        <Col
          style={{
            backgroundColor: "#f0f0f0",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <div>Teammates</div>
        </Col>
        <Col
          style={{
            backgroundColor: "#f0f0f0",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <div>Assigned conversations</div>
        </Col>
        <Col
          style={{
            backgroundColor: "#f0f0f0",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <div>Closed conversations</div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          style={{
            padding: "20px",
            height: "50px",
            backgroundColor: "#FFEBFC",
          }}
        >
          <div style={flexContainerStyle}>
            <div>
              &#128100; <i>"reut9812"</i>
            </div>
            <div>29</div>
            <div>30</div>
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          style={{
            backgroundColor: "#f0f0f0",
            padding: "20px",
            height: "50px",
          }}
        >
          <div style={flexContainerStyle}>
            <div>
              &#128100; <i>"shlomi1122"</i>
            </div>
            <div>34</div>
            <div>30</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
