import React from "react"
import Card from "react-bootstrap/Card"
import GaroKech from './Garo_Kech.png'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
      
        <Card.Img variant="top" src={GaroKech} />
        {/* Source: https://github.com/garokech */}
        <Card.Body>
            <Card.Title>Garo Kechkarian</Card.Title>
            <Card.Text>
            I am a student learning code and working to better my knowledge.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard