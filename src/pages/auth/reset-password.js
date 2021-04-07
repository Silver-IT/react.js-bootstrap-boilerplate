import React from 'react';
import {
    Button,
    Card,
    Form
} from 'react-bootstrap';
import { withRouter } from 'react-router';

function ResetPasswordPage({ history }) {
    return (
        <div className='bg-primary d-flex justify-content-center align-items-center'>
            <Card style={{ width: 'fit-content' }}>
                <Card.Header as='h5'>Reset Password</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group controlId='resetPasswordFormPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Password' />
                        </Form.Group>

                        <Form.Group controlId='resetPasswordFormConfirmPassword'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type='password' placeholder='Confirm Password' />
                        </Form.Group>

                        <Button className='float-right' variant='primary' type='submit'>
                            Reset Password
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default withRouter(ResetPasswordPage);
