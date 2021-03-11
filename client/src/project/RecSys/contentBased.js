import React, { useState } from 'react';
import axios from 'axios';
import "@babel/polyfill";

const request = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "6f7e4fca44edb8eb871611da749e1f67",
    language: "en-US"
  }
});
    
const mList = [
  "Good Will Hunting",
  "Talk to Her",
  "Frida",
  "Immortal Beloved",
];

const ContentBasedMoiveRecommend = () => {
  const [value, setValue] = useState('');
  const [img1, setImg1] = useState('https://cdn.univcoop.kr/static/theme/image/no-image.svg');
  const [img2, setImg2] = useState('https://cdn.univcoop.kr/static/theme/image/no-image.svg');
  const [img3, setImg3] = useState('https://cdn.univcoop.kr/static/theme/image/no-image.svg');
  const [img4, setImg4] = useState('https://cdn.univcoop.kr/static/theme/image/no-image.svg');

  const handleList = async (movie_id) => {
    console.log("movie List: ");
    mList.map(cur => console.log(cur));
    // imdb에서 영화 이미지 받아오기
    const result = await request.get(`/movie/popular`);
    console.log(result);
  }

  const onClickhandler = (e) => {
    e.preventDefault(); // prevent to change route
    handleList(17362);
    /*
    console.log('event: ', value);

    // validity check
    if (!value) {
      return;
      // mention value is empty
    }

    const data = { title: value };
    axios.post(
      'http://af43df7d4aaf.ngrok.io/post',
      data,
      { headers: { "Content-Type":'application/json'}}
    )
    .then((result) => {
      console.log('Yes! 🙆‍♀️ ', result);
      const res = JSON.parse(result.data);
      handleList(res.data)
      })
    .catch(error => console.log('Oppppsss 🙅‍♀️ ', error));
    throw Error("Something went wrong!"); //interupt code
    */
  };

  return (
    <div className="contentBasedMovie">
      <form method="POST" action="/" encType="text/plain">
        <input
          type="text"
          name="movieTitle"
          id="movieTitle"
          onChange={e => setValue(e.target.value)}
          placeholder="영화제목"
        />
        <input
          type="submit"
          value="submit"
          onClick={e => onClickhandler(e)}
        />
      </form>
      <div className="renderMovie">
        <img className="movieImg1" src={img1} alt="movie image" width="200px" />
        <img className="movieImg2" src={img2} alt="movie image" width="200px" />
        <img className="movieImg3" src={img3} alt="movie image" width="200px" />
        <img className="movieImg4" src={img4} alt="movie image" width="200px" />
      </div>
    </div>
  );
};

export default ContentBasedMoiveRecommend;
