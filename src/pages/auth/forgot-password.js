import React from 'react';
import {
    Button,
    Card,
    Form
} from 'react-bootstrap';
import { withRouter } from 'react-router';

function ForgotPasswordPage({ history }) {
    return (
        <div className='bg-primary py-100'>
            <Card className='mx-auto' style={{ width: 'fit-content' }}>
                <Card.Header as='h5'>Forgot Password?</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group controlId='formBasicEmail'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type='email' placeholder='Enter email' />
                            <Form.Text className='text-muted'>
                                We'll send link to your email.
                            </Form.Text>
                        </Form.Group>
                        
                        <Form.Row className='justify-content-between'>
                            <Button variant='secondary' onClick={() => history.goBack()}>
                                Go back to Login
                            </Button>

                            <Button className='ml-3' variant='primary'>
                                Submit
                            </Button>
                        </Form.Row>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default withRouter(ForgotPasswordPage);
