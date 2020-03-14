import React from 'react';

import classNames from '../../../../utils/classNames';
import classes from './errorText.module.scss';



const ErrorText = ({ children, className }) => (
  <span className={classNames(classes.components_inputs_error_text, className)}>{children}</span>
);

export default ErrorText;