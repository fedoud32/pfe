import React, { forwardRef } from 'react';
import TextField from '@material-ui/core/TextField/TextField';
import Label from '../label/label';
import ErrorText from '../errorText/errorText';
import classNames from '../../../../utils/classNames';

import classes from  './textInputs.module.scss';



const TextInput = forwardRef(
  ({
 label, inputProps, className, errorText, required, children, ...rest
}) => {
    const inputPropsDefault = inputProps || {};
    return (
      <div
        className={classNames(
          classes.components_inputs_text_input,
          errorText !== undefined && classes.components_inputs_input_with_error,
          className,
        )}
      >
        {label && <Label required={required}>{label}</Label>}
        <TextField
          error={!!errorText}
          className={classes.text_input_input}
          inputProps={{
            ...inputPropsDefault,
            
          }}
          autoComplete="off"
          {...rest}
          variant="outlined"
        />

        {errorText !== undefined && <ErrorText>{errorText}</ErrorText>}
      </div>
    );
  },
);

export default TextInput;
