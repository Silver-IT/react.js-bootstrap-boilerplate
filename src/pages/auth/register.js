import React from 'react';
import {
    Button,
    Card,
    Form
} from 'react-bootstrap';
import { withRouter } from 'react-router';

function RegisterPage({ history }) {
    return (
        <div className='bg-primary py-100'>
            <Card className='mx-auto' style={{ width: 'fit-content' }}>
                <Card.Header as='h5'>Login</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group controlId='registerFormEmail'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type='email' placeholder='Enter email' />
                            <Form.Text className='text-muted'>
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId='registerFormPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Password' />
                            <Form.Text className='text-muted'>
                                Type your password. Preferable a secure combination.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId='registerFormConfirmPassword'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type='password' placeholder='Confirm Password' />
                            <Form.Text className='text-muted'>
                                Confirm your password.
                            </Form.Text>
                        </Form.Group>

                        <Form.Row className='justify-content-end'>
                            <Button className='ml-3' variant='primary' type='submit'>
                                Register
                            </Button>
                        </Form.Row>

                        <Form.Row className='flex-direction-column'>
                            <hr className='w-100'></hr>
                            <Form.Text className='text-muted mx-auto'>
                                <span className='cursor-pointer hover-underline' onClick={() => history.push('/auth/login')}>Already registered?</span>
                            </Form.Text>
                        </Form.Row>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default withRouter(RegisterPage);
