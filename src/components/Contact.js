import React from "react";
import { connect } from "react-redux";
import { addContact, editContact, deleteContact } from "../actions";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { getContainerUtilityClass } from "@mui/material";

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
    const columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "name", headerName: "Name", width: 130 },
    ];

    // return contacts.length > 0 ? (
    //   contacts.map((contact) => (
    //     <h2>
    //       {contact.id}:{contact.name}
    //     </h2>
    //   ))
    // ) : (
    //   <h2>No data</h2>
    // );
    return (
      <div style={{ height: 400, width: "100%" }}>
        {" "}
        <DataGrid columns={columns} rows={contacts} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.displayGrid(this.props.contacts)}
        <br />
        <h2>Add Contact:</h2>
        id: <input type="text" name="id" disabled />
        name:{" "}
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <Button
          onClick={() => {
            this.props.addContact({ name: this.state.name });
            this.setState({ name: "" });
          }}
          variant="contained"
        >
          Add
        </Button>
      </div>
    );
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Contact);
