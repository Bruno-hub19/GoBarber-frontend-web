import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

// when just extends another interface, just define it as a type
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
