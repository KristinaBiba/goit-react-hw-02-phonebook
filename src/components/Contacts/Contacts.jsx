import {P} from './Contacts_css'

export const Contacts = ({data}) => {
      return (
           data.map(({id, name, number}) => (<P key={id}>{name}: {number}</P>))
      )
    };