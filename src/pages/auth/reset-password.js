import React from 'react';
import {
    Button,
    Card,
    Form
} from 'react-bootstrap';
import { withRouter } from 'react-router';

function ResetPasswordPage({ history }) {
    return (
        <div className='bg-primary py-100'>
            <Card className='mx-auto' style={{ width: 'fit-content' }}>
                <Card.Header as='h5'>Reset Password</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group controlId='resetPasswordFormPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Password' />
                            <Form.Text className='text-muted'>
                                Type your password. Preferable a secure combination.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId='resetPasswordFormConfirmPassword'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type='password' placeholder='Confirm Password' />
                            <Form.Text className='text-muted'>
                                Confirm your password.
                            </Form.Text>
                        </Form.Group>

                        <Form.Row className='justify-content-end'>
                            <Button variant='primary' onClick={() => history.push('/auth/login')}>
                                Reset Password
                            </Button>
                        </Form.Row>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default withRouter(ResetPasswordPage);
