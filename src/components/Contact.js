import React from "react";
import { connect } from "react-redux";
import { addContact, editContact, deleteContact } from "../actions";

const { BACKEND_URL } = process.env;

const mapStatetoProps = (state) => ({
  contacts: state.contact,
});
const mapDispatchToProps = (dispatch) => ({
  addContact: (contact) => dispatch(addContact(contact)),
  editContact: (id, contact) => dispatch(editContact(id, contact)),
  deleteContact: (id) => dispatch(deleteContact(id)),
});

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  componentDidMount() {
    // fetch("http://localhost:3000/api/contacts", {
    //   method: "get",
    // })
    //   .then((res) => res.json())
    //   .then((res) => console.log(res));
  }

  displayGrid = (contacts) => {
    {
      contacts.length ? (
        contacts.map((contact) => (
          <h2>
            {contact.id} + ":" + {contact.name}
          </h2>
        ))
      ) : (
        <h2>No data</h2>
      );
    }
  };

  render() {
    console.log("contacts ", this.props.contacts);
    return (
      <div>
        {this.displayGrid(this.props.contacts)}
        <br />
        <h2>Add Contact:</h2>
        id: <input type="text" name="id" disabled />
        name:{" "}
        <input type="text" name="name" value={this.name} onChange={(e) => this.setState({ name: e.target.value })} />
        <button onClick={() => this.props.addContact({ name: this.state.name })}>Add</button>
      </div>
    );
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Contact);
