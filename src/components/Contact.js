import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div>
        {this.props.contacts ? this.props.contacts.map((contact) => contact.id + ":" + contact.name) : <h2>No data</h2>}
      </div>
    );
  }
}

export default Contact;
