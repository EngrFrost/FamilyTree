import React from 'react';
import Slider from 'react-slick';
import { Button, Card } from 'react-bootstrap';
import { AiFillDelete, AiFillEye } from 'react-icons/ai';

function SliderList({ settings, familytree, deleteItemHandler, handleShow }) {
  return (
    <div className='container'>
      <Slider {...settings}>
        {familytree.map((data) => {
          return (
            <div key={data.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  variant='top'
                  src={data.img}
                  style={{ height: '250px' }}
                />
                <Card.Body>
                  <Card.Title className='text-center'>{data.role}</Card.Title>
                  <Card.Title className='text-center'>{data.name}</Card.Title>

                  <div className='d-flex justify-content-between mt-5'>
                    <Button
                      className='mx-1'
                      style={{ fontSize: '12px' }}
                      variant='primary'
                      onClick={() => deleteItemHandler(data.id)}
                    >
                      <AiFillDelete
                        fontSize={16}
                        className='me-2'
                      />
                      Delete
                    </Button>
                    <Button
                      className='mx-1'
                      style={{ fontSize: '12px' }}
                      variant='primary'
                      onClick={() => handleShow(data.id)}
                    >
                      <AiFillEye
                        fontSize={16}
                        className='me-2'
                        color='white'
                      />
                      Show . . .
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default SliderList;
