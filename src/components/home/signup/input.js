/** @jsx jsx */
import { jsx } from 'theme-ui';

const Input = ({ type, name, handleChange, value, ariaLabel, placeholder, id }) => {
  return (
    <input
      sx={{
        my: 1,
        border: '3px solid',
        borderColor: 'text',
        height: '2em',
        fontFamily: 'heading',
        padding: 2,
        maxWidth: 800,
        ':focus': {
          border: '4px solid',
          borderColor: 'text',
        },
      }}
      placeholder={placeholder}
      aria-label={ariaLabel}
      value={value}
      type={type}
      name={name}
      onChange={handleChange}
      id={id}
    />
  );
};

export default Input;
