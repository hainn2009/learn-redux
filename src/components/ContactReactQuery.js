import { useQuery, useMutation, useQueryClient } from "react-query";
import { QueryClient, QueryClientProvider } from "react-query";
import { Button, Row, Col } from "reactstrap";

const client = new QueryClient();

const fetchContacts = async () => {
  const response = await fetch("http://localhost:4001/api/contacts");
  const res = await response.json();
  return res;
};

const addContact = async (contact) => {
  const response = await fetch("http://localhost:4001/api/contacts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
  const res = await response.json();
  return res;
};
const editContact = async (contact) => {
  const response = await fetch(`http://localhost:4001/api/contacts/${contact.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
  return await response.json();
};

const deleteContact = (id) => fetch(`http://localhost:4001/api/contacts/${id}`, { method: "DELETE" });

const ContactReactQuery = () => {
  const query = useQuery("contacts", fetchContacts);
  const client = useQueryClient();
  const mutationAdd = useMutation(addContact, {
    onSuccess: (data) => {
      client.setQueryData("contacts", (old) => [...old, data]);
      //   client.invalidateQueries("contacts");
    },
  });
  const mutationDelete = useMutation(deleteContact, {
    onSuccess: (data, variables, context) => {
      client.setQueryData("contacts", (old) => {
        console.log(old);
        return old.filter((c) => c.id !== variables);
      });
      //   client.invalidateQueries("contacts");
      //   console.log(data);
      //   console.log(variables);
      //   console.log(context);
    },
  });
  const mutationEdit = useMutation(editContact, {
    onSuccess: (data) => {
      client.setQueryData("contacts", (old) => {
        const contact = old.find((contact) => contact.id === data.id);
        contact.name = data.name;
        return old;
      });
    },
  });

  return (
    <div>
      {query.data &&
        query.data.map((contact) => (
          <Row key={contact.id}>
            <Col>{contact.id}</Col>
            <Col>{contact.name}</Col>
            <Col>
              <Button color="primary" onClick={() => mutationEdit.mutate({ id: contact.id, name: "Hoai" })}>
                Edit
              </Button>
              <Button color="danger" onClick={() => mutationDelete.mutate(contact.id)}>
                Delete
              </Button>
            </Col>
          </Row>
        ))}

      <Button
        color="primary"
        onClick={() => {
          mutationAdd.mutate({
            name: "Hai",
          });
        }}
      >
        Add Contact
      </Button>
    </div>
  );
};
export default (
  <QueryClientProvider client={client}>
    <ContactReactQuery />
  </QueryClientProvider>
);
