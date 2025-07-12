import React from 'react';
import styled from 'styled-components';

const Radio2 = ({ name, value = 1, onChange }) => {
  return (
    <StyledWrapper>
      <div className="rating">
        {[5, 4, 3, 2, 1].map(star => (
          <React.Fragment key={star}>
            <input
              type="radio"
              id={`${name}-star${star}`}
              name={name}
              value={star}
              checked={value === star}
              onChange={() => onChange && onChange(star)}
            />
            <label htmlFor={`${name}-star${star}`} title={`${star} stars`} />
          </React.Fragment>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .rating:not(:checked) > input {
    position: absolute;
    appearance: none;
  }

  .rating:not(:checked) > label {
    float: right;
    cursor: pointer;
    font-size: 30px;
    color: #666;
  }

  .rating:not(:checked) > label:before {
    content: "★";
  }

  .rating:not(:checked) > label:hover,
  .rating:not(:checked) > label:hover ~ label {
    color: #ff9e0b;
  }

  .rating > input:checked ~ label {
    color: #ffa723;
  }
`;

export default Radio2;