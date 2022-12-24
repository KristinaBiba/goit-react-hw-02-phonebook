import {Li} from './Contacts_css'

export const Contacts = ({data}) => {
      return (
          <ul>
               {data.map(({id, name, number}) => (<Li key={id}>{name}: {number}</Li>))}
          </ul>)
    };