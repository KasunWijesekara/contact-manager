import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-555"
      },
      {
        id: 2,
        name: "Karen Doe",
        email: "karen@gmail.com",
        phone: "333-555-555"
      },
      {
        id: 3,
        name: "James Doe",
        email: "james@gmail.com",
        phone: "222-555-555"
      }
    ]
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
