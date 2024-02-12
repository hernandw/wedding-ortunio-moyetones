import React from 'react'

const Error = ({msj}) => {
  return (
    <div>
      <p className="p-2 text-center text-red-600 -">{msj}</p>
    </div>
  );
}

export default Error
