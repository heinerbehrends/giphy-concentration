import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 1.5rem;
  margin-top: 3rem;
`;

const Label = styled.label``;
const Input = styled.input`
  padding: 0.5rem;
  font-size: 1.5rem;
  margin-left: 1.5rem;
`;

export const Search = (props) => {
  const { handleSubmit, handleChange, value, cards } = props;
  if (cards) {
    return null;
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Search Giphy to start a game...
        <Input type="text" value={value} onChange={handleChange} />
      </Label>
      <Input type="submit" value="Go!" />
    </Form>
  );
};

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object),
};

export default Search;
