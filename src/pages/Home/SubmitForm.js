import React from 'react';
import { Form, Button } from 'react-bootstrap';

function SubmitForm({
  userData,
  setUserData,
  onSubmit,
  register,
  handleSubmit,
  errors,
  updateCheck,
  updateSubmit,
  Controller,
  control,
}) {
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group
        className='mb-3'
        controlId='role'
      >
        <Form.Label>
          Role{' '}
          {errors.role ? (
            <span style={{ color: '#ff5c5c' }}>{errors.role.message}</span>
          ) : (
            ''
          )}
        </Form.Label>
        <Form.Control
          type='text'
          placeholder='Family Role'
          {...register('role', {
            required: '(Required)',
            value: userData.role,
            onChange: (event) => {
              setUserData((prevState) => {
                return {
                  ...prevState,
                  role: event.target.value,
                };
              });
            },
          })}
        />
      </Form.Group>
      <Form.Group
        className='mb-3'
        controlId='role'
      >
        <Form.Label>
          Name{' '}
          {errors.name ? (
            <span style={{ color: '#ff5c5c' }}>{errors.name.message}</span>
          ) : (
            ''
          )}
        </Form.Label>
        <Form.Control
          type='text'
          placeholder='Name'
          {...register('name', {
            required: '(Required)',
            value: userData.name,
            onChange: (event) => {
              setUserData((prevState) => {
                return {
                  ...prevState,
                  name: event.target.value,
                };
              });
            },
          })}
        />
      </Form.Group>
      <Form.Group
        className='mb-3'
        controlId='role'
      >
        <Form.Label>
          Details{' '}
          {errors.details ? (
            <span style={{ color: '#ff5c5c' }}>{errors.details.message}</span>
          ) : (
            ''
          )}
        </Form.Label>
        <Form.Control
          as='textarea'
          rows='5'
          placeholder='Details'
          {...register('details', {
            required: '(Required)',
            value: userData.details,
            onChange: (event) => {
              setUserData((prevState) => {
                return {
                  ...prevState,
                  details: event.target.value,
                };
              });
            },
          })}
        />
      </Form.Group>
      <Form.Group
        className='mb-3'
        controlId='role'
      >
        <Form.Label>
          Age{' '}
          {errors.age ? (
            <span style={{ color: '#ff5c5c' }}>{errors.age.message}</span>
          ) : (
            ''
          )}
        </Form.Label>
        <Form.Control
          type='text'
          placeholder='Age'
          {...register('age', {
            required: '(Required)',
            value: userData.age,
            onChange: (event) => {
              setUserData((prevState) => {
                return {
                  ...prevState,
                  age: event.target.value,
                };
              });
            },
          })}
        />
      </Form.Group>
      <Form.Group
        className='mb-5'
        style={{ width: '150px' }}
      >
        <Form.Label>
          Sex{' '}
          {errors.sex ? (
            <span style={{ color: '#ff5c5c' }}>{errors.sex.message}</span>
          ) : (
            ''
          )}
        </Form.Label>
        <Form.Select
          placeholder='Enter Subject Here'
          {...register('sex', {
            required: '(Required)',
            value: userData.sex,
            onChange: (event) => {
              setUserData((prevState) => {
                return {
                  ...prevState,
                  sex: event.target.value,
                };
              });
            },
          })}
          value={userData.sex}
        >
          <option
            value=''
            hidden
          >
            Select Gender
          </option>
          <option value='male'>Male</option>
          <option value='sex'>Female</option>
        </Form.Select>
      </Form.Group>

      <div className='d-flex'>
        <Button
          variant='primary'
          type='submit'
          className='mx-1'
        >
          Submit
        </Button>
        {updateCheck && (
          <Button
            variant='primary'
            className='mx-1'
            onClick={updateSubmit}
          >
            Update
          </Button>
        )}
      </div>
    </Form>
  );
}

export default SubmitForm;
