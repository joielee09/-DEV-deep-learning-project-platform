import React from 'react';

const handleClick = (e) => {
  const data = e;
}

const Upload = () => (
  <div className="home">
    <h1>Successfully uploaded</h1>
    {/* <img src="/server/uploads/image.jpg" width="100" /> */}
    <button onClick={e=>handleClick(e)}>이미지 파일 불러오기</button>
  </div>
);

export default Upload;
