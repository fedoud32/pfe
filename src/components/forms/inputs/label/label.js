import React from 'react';
import classes from './label.module.scss';
import classNames from '../../../../utils/classNames';



const Label = ({
 children, className, required, ...rest
}) => (
  // eslint-disable-next-line
  <div {...rest} className={classNames(classes.components_inputs_label, className)}>
    {children}
    {required && <span className={classes.components_inputs_required_field}>*</span>}
  </div>
);

export default Label;
