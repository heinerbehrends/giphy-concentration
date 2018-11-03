import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormStyled = styled.form`

`;

export const Search = props => {
  const { handleSubmit, handleChange, value, cards } = props;
  if (cards) {
    return null
  }
  return (
    <FormStyled onSubmit={handleSubmit}>
      <label>
        Search Giphy to start a game:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </FormStyled>
  );
}

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object)
}

export default Search;
