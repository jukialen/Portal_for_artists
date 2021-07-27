import React from 'react';

export const Links = ({
  idInput,
  hrefLink,
  classLink,
  title,
  elementLink,
  ...props
}) => {
  return (
    <a href={hrefLink} id={idInput} className={classLink}>
      {title}
      {elementLink}
    </a>
  );
};
