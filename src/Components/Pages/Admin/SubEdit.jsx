import axios from 'axios';
import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function SubEdit(props) {
    const token = localStorage.getItem('token')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [id, setId] = useState(props.id)
    const [name, setName] = useState(props.name);
    const updateData = async (e) => {
        e.preventDefault();
        const formData = {
            name: name,
        };
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };

        await axios.put(`${process.env.REACT_APP_BASE_URL}admin/video/subcategory/${id}`, formData, { headers });
    }
    return (
        <React.Fragment>
            <Button class="btn btn-warning ms-2" style={{ color: "#082465 !important", background: "none", border: 'none', padding: "0" }} onClick={handleShow}>
                <i class="fas fa-pen"></i>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update the Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* form */}
                    <Form onSubmit={updateData}>
                        <Form.Group className="mb-3">
                            <Form.Label>Video Name</Form.Label>
                            <Form.Control id="name" type="text" placeholder="Video sub Category"
                                value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" id="category_id">
                            <Form.Select aria-label="Default select example">
                                <option>category_id</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group> */}

                        <Modal.Footer style={{ margin: "20px" }}>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="warning" type="submit">
                                Save
                            </Button>
                        </Modal.Footer>
                    </Form>

                    {/* end of form */}
                </Modal.Body>

            </Modal>

        </React.Fragment>
    )
}

export default SubEdit