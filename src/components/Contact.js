import React from "react";
import { connect } from "react-redux";
import { addContact, editContact, deleteContact, fetchContact } from "../actions";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
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
      selectedId: "",
      editMode: false,
    };
  }
  componentDidMount() {
    this.props.fetchContact();
  }

  displayGrid = (contacts) => {
    const columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "name", headerName: "Name", width: 300 },
      {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (cellValue) => {
          return (
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                onClick={() => {
                  this.setState({ selectedId: cellValue.row.id, name: cellValue.row.name, editMode: true });
                }}
                disabled={this.state.editMode && this.state.selectedId === cellValue.row.id}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => this.props.deleteContact(cellValue.row.id)}
                disabled={this.state.editMode && this.state.selectedId === cellValue.row.id}
              >
                Delete
              </Button>
            </Stack>
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
        <DataGrid columns={columns} rows={rows} pageSize={5} rowsPerPageOptions={[5]} />
      </div>
    );
  };

  handleAddOrEdit = () => {
    if (this.state.editMode) {
      this.props.editContact({ id: this.state.selectedId, name: this.state.name });
      this.setState({ editMode: false, selectedId: "", name: "" });
    } else {
      this.props.addContact({ name: this.state.name });
      this.setState({ name: "" });
    }
  };

  render() {
    return (
      <div>
        <h2>Add/Edit Contact:</h2>
        <Stack direction="row" spacing={2}>
          id: <input type="text" name="id" value={this.state.selectedId} disabled />
          name:{" "}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
            onKeyDown={(e) => e.key === "Enter" && this.handleAddOrEdit()}
          />
          {this.state.editMode ? (
            <div>
              <Button variant="contained" onClick={() => this.handleAddOrEdit()}>
                Update
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  this.setState({ editMode: false, selectedId: "", name: "" });
                }}
              >
                Cancel
              </Button>
            </div>
          ) : (
            <Button onClick={() => this.handleAddOrEdit()} variant="contained">
              Add
            </Button>
          )}
        </Stack>
        {this.displayGrid(this.props.contacts)}
      </div>
    );
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Contact);
