import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import useLocationFeature from '../hooks/useLocationFeature';
import useForm from '../hooks/useForm';
import { saveUserAPI } from '../api/featchUserVisitApi';

const UserInfoForm = () => {
  const [formData, handleChange] = useForm({ name: '', age: '', gender: '' });

  const loading = useSelector(state=>state.userVisitInfo?.loading)

  const dispatch = useDispatch();
  const {location,error} = useLocationFeature();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveUserAPI({...formData,location}));
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row>
        <Col>
          <Form className="userInfo" onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className='mb-2'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{ width: '30vw' }}
                required
              />
            </Form.Group>

            <Form.Group controlId="formAge" className='mb-2'>
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter the age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                style={{ width: '30vw' }}
                required
              />
            </Form.Group>

            <Form.Group controlId="formGender" className='mb-3'>
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                style={{ width: '30vw' }}
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Control>
            </Form.Group>

             {error && <p>{error}</p>}

            <Button variant="primary" disabled={loading} type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserInfoForm;
