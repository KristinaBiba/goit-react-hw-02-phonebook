import { Li, Ul } from './Contacts_css';

import PropTypes from 'prop-types';

export const Contacts = ({data}) => {
      return (
          <Ul>
               {data.map(({id, name, number}) => (<Li key={id}>{name}: {number}</Li>))}
          </Ul>)
};
    
Contacts.propTypes = {
      data: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
      }))
}