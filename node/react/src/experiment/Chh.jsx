import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

const Chh = () => {
  const [products, setProducts] = useState([]);
  const [searchitems, setSearchitems] = useState('');

  useEffect(() => {
  fetch('https://dummyjson.com/products?limit=100')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchitems.toLowerCase())
  );

  return (
    
    <Container className="my-4  ">
      <h2 className="text-center mb-4">Product List</h2>

      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search products..."
          value={searchitems}
          onChange={(e) => setSearchitems(e.target.value)}
        />
      </Form>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {filteredProducts.map(product => (
          <Col key={product.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={product.thumbnail}
                alt={product.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
   
  );
};

export default Chh;
