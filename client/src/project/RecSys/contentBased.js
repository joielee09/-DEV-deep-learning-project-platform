import React, { useState } from 'react';
import axios from 'axios';
import '@babel/polyfill';

const request = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '6f7e4fca44edb8eb871611da749e1f67',
    language: 'en-US',
  },
});

const ContentBasedMoiveRecommend = () => {
  const [value, setValue] = useState('');
  const [year, setYear] = useState('');
  const [img1, setImg1] = useState('https://cdn.univcoop.kr/static/theme/image/no-image.svg');
  const [img2, setImg2] = useState('https://cdn.univcoop.kr/static/theme/image/no-image.svg');
  const [img3, setImg3] = useState('https://cdn.univcoop.kr/static/theme/image/no-image.svg');
  const [img4, setImg4] = useState('https://cdn.univcoop.kr/static/theme/image/no-image.svg');

  const handleList = async (movieList) => {
    console.log('movie List: ', movieList);
    getMovie(movieList[0]);
    // imdb에서 영화 이미지 받아오기
    // const result = await request.get(`/movie/popular`);
    // getMovie(mList~4번째영화까지);
  };
  const getMovie = async (param) => {
    const result = await request.get('search/movie', {
      params: {
        query: (param),
      },
    });
    console.log(result);

    const first_movie = result.data.results[0];
    const second_movie = result.data.results[1];
    const third_movie = result.data.results[2];
    const forth_movie = result.data.results[3];

    const poster_path_first = first_movie? first_movie.poster_path: '';
    const poster_path_second = second_movie? second_movie.poster_path: '';
    const poster_path_third = third_movie? third_movie.poster_path: '';
    const poster_path_forth = forth_movie? forth_movie.poster_path: '';

    console.log(poster_path_first, poster_path_second, poster_path_third, poster_path_forth);

    // if poster doesn't exit -> render default image

    setImg1(
      first_movie
        ? `http://image.tmdb.org/t/p/w200/${poster_path_first}`
        : 'https://cdn.univcoop.kr/static/theme/image/no-image.svg'
        );
    setImg2(
      second_movie
        ? `http://image.tmdb.org/t/p/w200/${poster_path_second}`
        : 'https://cdn.univcoop.kr/static/theme/image/no-image.svg');
    setImg3(
      third_movie
        ? `http://image.tmdb.org/t/p/w200/${poster_path_third}`
        : 'https://cdn.univcoop.kr/static/theme/image/no-image.svg');
    setImg4(
      forth_movie
        ? `http://image.tmdb.org/t/p/w200/${poster_path_forth}`
        : 'https://cdn.univcoop.kr/static/theme/image/no-image.svg');
  };

  const onClickhandler = (e) => {
    e.preventDefault(); // prevent to change route
    console.log('event: ', value, 'year: ', year);
    // validity check
    if (!value || !year) {
      return;
      // mention value is empty
    }

    setImg1('https://cdn.univcoop.kr/static/theme/image/no-image.svg');
    setImg2('https://cdn.univcoop.kr/static/theme/image/no-image.svg');
    setImg3('https://cdn.univcoop.kr/static/theme/image/no-image.svg');
    setImg4('https://cdn.univcoop.kr/static/theme/image/no-image.svg');

    const data = { title: value, year: year };
    axios.post(
      'http://d88572de440c.ngrok.io/post',
      data,
      { headers: { 'Content-Type': 'application/json' } },
    )
      .then((result) => {
        console.log('Yes! 🙆‍♀️ ', result);
        const res = JSON.parse(result.data);
        // console.log("res.data: ", res.data);
        handleList(res.data);
      })
      .catch(error => console.log('Oppppsss 🙅‍♀️ ', error));
    // throw Error('Something went wrong!'); // interupt code
  };

  return (
    <div className="contentBasedMovie">
      <form method="POST" action="/" encType="text/plain" style={{ marginBottom:'40px' }}>
        <input
          type="text"
          name="movieTitle"
          id="movieTitle"
          onChange={e => setValue(e.target.value)}
          placeholder="영화제목"
        />
        <input
          type="number"
          name="movieYear"
          id="movieYear"
          onChange={e => setYear(e.target.value)}
          placeholder="개봉연도"
        />
        <input
          type="submit"
          value="submit"
          onClick={e => onClickhandler(e)}
        />
      </form>
      <div className="renderMovie" style={{ display:'flex', justifyContent: 'space-around' }}>
        <img className="movieImg1" src={img1} alt="movie image" width="200px" height="300px" />
        <img className="movieImg2" src={img2} alt="movie image" width="200px" height="300px" />
        <img className="movieImg3" src={img3} alt="movie image" width="200px" height="300px" />
        <img className="movieImg4" src={img4} alt="movie image" width="200px" height="300px" />
      </div>
    </div>
  );
};

export default ContentBasedMoiveRecommend;
