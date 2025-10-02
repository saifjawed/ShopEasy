import React from 'react';

const Icon = ({ component: Component, className, ...props }) => <Component className={className} {...props} />;

export default Icon;