import React, { Component } from "react";
import { Button, Form, FormText, Modal } from "react-bootstrap";

export default class BookFormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      status: "",
      showModal: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, description, status } = this.state;
    const newBook = {
      title,
      description,
      status,
    };
    // TODO: Send new book data to server using axios or fetch
    console.log("New Book:", newBook);
    this.handleCloseModal();
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  render() {
    return (
      <>
        <Button onClick={this.handleShowModal} className="btn-lg mainButton">
          Add New Book
        </Button>
        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Enter title"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  rows={3}
                  placeholder="Enter description"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  as="select"
                  name="status"
                  value={this.state.status}
                  onChange={this.handleInputChange}
                  required
                >
                  <option value="">Select status</option>
                  <option value="available">Available</option>
                  <option value="unavailable">Unavailable</option>
                </Form.Control>
              </Form.Group>
              <FormText className="text-muted">
                All fields are required.
              </FormText>
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
