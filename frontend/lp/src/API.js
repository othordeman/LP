import {
    BACKEND_URL,
  } from './config';


const Api = {

    fetchAllLps: async (page) => {
      const endpoint = `http://localhost:3000/${page}`
      return await (await fetch(endpoint)).json();
    },
    
    fetchALp: async (lpId) => {
      const endpoint = `http://localhost:3000/lp/${lpId}`
      return await (await fetch(endpoint)).json();
    },


    searchAllLps: async (search) => {
      const endpoint = `http://localhost:3000/search/${search}`
      return await (await fetch(endpoint)).json();
    },

}


export default Api