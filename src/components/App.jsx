import { Component } from 'react';

import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';

import { nanoid } from 'nanoid'



export class App extends Component {

  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
    name: '',
    number: '',
  }

  handlechange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleAddContact = (e) => {
    e.preventDefault();

    const { name, number } = e.currentTarget.elements;
    
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts,
          { name: name.value,
            number: number.value,
            id: nanoid(),}],
        name: '',
        number: '',
      };
    });
  }
  
  render() {
    return (
      <>
        <Section title="Phonebook">
          <form onSubmit={this.handleAddContact}>
            <input
              type="text"
              name="name"
              onChange={this.handlechange}
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <input
              type="tel"
              name="number"
              onChange={this.handlechange}
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <button type="submit" text="Add contact">Add contact</button>
          </form>
        </Section>
          

        <Section title="Contacts">
          <input
              name="filter"
              onChange={this.handlechange}
              value={this.state.filter}/>
         <Contacts data={this.state.contacts}> </Contacts>
        </Section> 
        
      </>
    );
  }
};
