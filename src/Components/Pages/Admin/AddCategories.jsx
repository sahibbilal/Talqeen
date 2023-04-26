import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function AddCategories() {
    let data = useForm();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const categoriesSub = async (data) => {
        const token = localStorage.getItem('token');
        const formData = {
            name: data.name,
            category_id: 13,
        };
        console.log(formData);
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };

        await axios.post(`${process.env.REACT_APP_BASE_URL}admin/video/category `, formData, { headers })
            .then(response => {
                console.log('Data saved successfully:', response.data);
            })
            .catch(error => {
                console.error('Failed to save data:', error);
            });
    }

    return (
        <React.Fragment>
            <Button onClick={handleShow} variant='warning' style={{ color: "white" }}>
                Add Categories video
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton style={{ margin: "20px", color: "#082465" }}>
                    <Modal.Title>Categories</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={data.handleSubmit(categoriesSub)}>
                        <Form.Group className="mb-3" id="name">
                            <Form.Select aria-label="Default select example" {...data.register("name", { required: true })}>
                                <option>Categories</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                            </Form.Select>
                        </Form.Group>

                        <Modal.Footer style={{ margin: "20px" }}>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="warning" type="submit">
                                Save
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default AddCategories
