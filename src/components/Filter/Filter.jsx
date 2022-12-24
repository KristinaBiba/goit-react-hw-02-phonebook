import {Input} from '../ContactForm/ContactForm_css'


export const Filter = ({value, handleFilter}) => {
      return (
          <Input
              name="filter"
              onChange={handleFilter}
              value={value}/>)
    };