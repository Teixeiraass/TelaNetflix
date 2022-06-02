const API_KEY = '5d6fb4bedd3c5c683d6cd0de335910b4';
const API_BASE = 'https://api.themoviedb.org/3';

/*
  - originais da netflix
  -recomendados (trending)
  - em alta (top rated)
  - ação
  - comedia
  - terror
  - romance
  - documentario
*/

const basicFatch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
      slug: 'originals',
      title: 'Originais do Netflix',
      items: await basicFatch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug:'trending',
        title: 'Recomendados para Você',
        items: await basicFatch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug:'toprated',
        title: 'Em Alta',
        items: await basicFatch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug:'action',
        title: 'Ação',
        items: await basicFatch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug:'comedy',
        title: 'Comédia',
        items: await basicFatch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug:'horror',
        title: 'Terror',
        items: await basicFatch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug:'romance',
        title: 'Romance',
        items: await basicFatch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug:'documentery',
        title: 'Documentários',
        items: await basicFatch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
      }
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};

    if(movieId) {
      switch(type) {
        case 'movie':
          info = await basicFatch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
        break;
        case 'tv':
          info = await basicFatch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
        break;
        default:
          info = null;
        break;
      }
    }

    return info;
  }
}