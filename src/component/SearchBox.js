import React from 'react'
import { Row, Col } from 'react-bootstrap'

const SearchBox = () => {
  return (
    <div>
      <Row className='search-box'>
        <Col lg={10}>
            <input type='text' placeholder='검색' />
        </Col>
        <Col lg={2}>
            <button>search</button>
        </Col>
      </Row>
    </div>
  );
}

export default SearchBox