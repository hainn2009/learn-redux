import React from "react";
import { connect } from "react-redux";
import { addContact, editContact, deleteContact, fetchContact } from "../actions";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
// import { getContainerUtilityClass } from "@mui/material";

// const { BACKEND_URL } = process.env;

const mapStatetoProps = (state) => ({
  contacts: state.contact,
});
// const mapDispatchToProps = (dispatch) => ({
//   fetchContact: () => dispatch(fetchContact),
//   addContact: (contact) => dispatch(addContact(contact)),
//   editContact: (id, contact) => dispatch(editContact(id, contact)),
//   deleteContact: (id) => dispatch(deleteContact(id)),
// });
// const mapDispatchToProps = {
//   fetchContact: () => fetchContact(),
//   addContact: (contact) => addContact(contact),
// };
const mapDispatchToProps = {
  fetchContact,
  addContact,
  editContact,
  deleteContact,
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  componentDidMount() {
    this.props.fetchContact();
  }

  displayGrid = (contacts) => {
    const columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "name", headerName: "Name", width: 130 },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (cellValue) => {
          return (
            <Button variant="contained" color="error" onClick={() => this.props.deleteContact(cellValue.row.id)}>
              Delete
            </Button>
          );
        },
      },
    ];
    const rows = contacts.map((contact) => {
      return {
        ...contact,
      };
    });
    return (
      <div style={{ height: 400, width: "100%" }}>
        {" "}
        <DataGrid columns={columns} rows={rows} pageSize={5} rowsPerPageOptions={[5]} />
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
