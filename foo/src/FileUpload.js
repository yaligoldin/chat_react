import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(URL.createObjectURL(selectedFile));
  };

  return (
    <div className='input-control'>
      <input type="file" onChange={handleFileChange} />
      {file && <img src={file} height="100px" />}
    </div>
  );
};

export default FileUpload;
