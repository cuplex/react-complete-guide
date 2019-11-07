import React from 'react';

const withStyles = (WrappedComponent, className) => {
  const WithStyles = (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>      
    )
  }
  WithStyles.displayName =`WithStyles(${getDisplayName(WrappedComponent)})`;
  return WithStyles;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withStyles;