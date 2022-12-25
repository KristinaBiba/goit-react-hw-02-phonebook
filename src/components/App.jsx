import { Component } from 'react';

import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export class App extends Component {

  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  }
   
  handleFilter = (e) => {
    const { value } = e.target;
    this.setState({filter: value})
  }
  
  handleFormSubmit = (newContact) => {
    const normalizeNewContactName = newContact.name.toLowerCase();
    
    this.state.contacts.find(contact => contact.name.toLowerCase() === normalizeNewContactName) ? alert(`${newContact.name} is already incontacts`) : this.setState((prevState) => { return { contacts: [...prevState.contacts, newContact] } });
  }

  render() {

    const {filter, contacts} = this.state;

    const normalizeFilter = filter.toLowerCase();
    const filtredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.handleFormSubmit}></ContactForm>
        </Section>
          

        <Section title="Contacts">
          <Filter value={filter} onChange={this.handleFilter}></Filter>
          <Contacts data={filtredContacts}> </Contacts>
        </Section> 
        
      </>
    );
  }
};
