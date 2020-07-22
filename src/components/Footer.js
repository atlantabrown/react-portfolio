import React from 'react'; 
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-inbetween p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Atlanta Brown 
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={8}>
                        This site was made by Atlanta Brown 
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer; 