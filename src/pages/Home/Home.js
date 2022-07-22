import React, { Fragment, useEffect, useState } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';

import SubmitForm from './SubmitForm';
import SliderList from './SliderList';
import ModalPop from './ModalPop';
import { useForm, Controller } from 'react-hook-form';
function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  // Useform
  const {
    register,
    handleSubmit,
    // reset,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    mode: 'all',
    reValidateMode: 'onBlur',
  });
  // statit images
  const [familytree, setFamilytree] = useState([
    {
      id: '1',
      role: 'father',
      name: 'Peter Parker',
      details:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ',
      age: '42',
      sex: 'male',
      img: '/img2.jpg',
    },
    {
      id: '2',
      role: 'Mother',
      details:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ',
      age: '42',
      sex: 'male',
      name: 'Imelda Nekoma',
      img: '/img.jpg',
    },
    {
      id: '3',
      role: 'son',
      details:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ',
      age: '12',
      sex: 'male',
      name: 'Steve Jobs',
      img: '/img2.jpg',
    },
  ]);
  const [userData, setUserData] = useState({
    role: '',
    details: '',
    age: '',
    sex: '',
    name: '',
    id: '',
  });
  const [showfamilyMember, setShowFamilyMember] = useState();
  const [show, setShow] = useState(false);
  const [updateCheck, setUpdateCheck] = useState(false);
  const [addFam, setAddFam] = useState(false);
  // modal show and close
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    console.log(id);
    const showfamily = familytree.filter((filterID) => filterID.id === id);
    setShowFamilyMember(showfamily[0]);
    setShow(true);
  };
  const onSubmit = () => {
    const params = {
      id: Math.random().toString(),
      role: userData.role,
      details: userData.details,
      age: userData.age,
      sex: userData.sex,
      name: userData.name,
      img: userData.sex === 'male' ? '/img2.jpg' : '/img.jpg',
    };
    console.log(params);
    setFamilytree((data) => {
      const updatedData = [...data];
      updatedData.unshift(params);
      return updatedData;
    });
    setValue('id', '');
    setValue('role', '');
    setValue('name', '');
    setValue('details', '');
    setValue('age', '');
    setValue('sex', '');
    setAddFam(false);
  };

  const deleteItemHandler = (ID) => {
    console.log(ID);
    setFamilytree((data) => {
      const updateID = data.filter((goal) => goal.id !== ID);
      return updateID;
    });
  };
  const UpdateHandler = (id, role, name, sex, age, details) => {
    setUserData((prev) => {
      return {
        ...prev,
        id: id,
        role: role,
        details: details,
        age: age,
        sex: sex,
        name: name,
      };
    });
    setValue('id', id);
    setValue('role', role);
    setValue('name', name);
    setValue('details', details);
    setValue('age', age);
    setValue('sex', sex);
    setUpdateCheck(true);
    handleClose();
  };
  const updateSubmit = (e) => {
    console.log(userData);

    const params = {
      id: showfamilyMember.id,
      role: userData.role,
      details: userData.details,
      age: userData.age,
      sex: userData.sex,
      name: userData.name,
      img: userData.sex === 'male' ? '/img2.jpg' : '/img.jpg',
    };
    console.log(params);
    setFamilytree((data) => {
      const updateID = data.filter((goal) => goal.id !== showfamilyMember.id);
      const updatedData = [...updateID];
      updatedData.unshift(params);
      return updatedData;
    });
    setUpdateCheck(false);
    setAddFam(false);
  };
  useEffect(() => {
    console.log(familytree);
  }, [familytree]);
  return (
    <Fragment>
      <ModalPop
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        showfamilyMember={showfamilyMember}
        UpdateHandler={UpdateHandler}
      />
      <Navbar
        bg='dark'
        variant='dark'
      >
        <Container>
          <Navbar.Brand href='#home'>Your Family Tree</Navbar.Brand>
        </Container>
      </Navbar>
      {!addFam && (
        <div className='container mt-5'>
          <Button onClick={() => setAddFam(true)}>Add Family Member</Button>
        </div>
      )}
      {addFam && (
        <div className='container shadow-lg p-3 mt-5'>
          <SubmitForm
            userData={userData}
            setUserData={setUserData}
            onSubmit={onSubmit}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            updateCheck={updateCheck}
            updateSubmit={updateSubmit}
            UpdateHandler={UpdateHandler}
            Controller={Controller}
            control={control}
          />
        </div>
      )}

      <div className='container mt-5'>
        <SliderList
          settings={settings}
          familytree={familytree}
          deleteItemHandler={deleteItemHandler}
          handleShow={handleShow}
        />
      </div>
    </Fragment>
  );
}

export default Home;
