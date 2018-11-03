import React from 'react';
import styled from 'styled-components';

const FormStyled = styled.form`

`;

export const Search = (props) => {
  const { handleSubmit, handleChange, value } = props;
  return (
    <FormStyled onSubmit={handleSubmit}>
      <label>
        Search:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </FormStyled>
  );
}

export default Search;
