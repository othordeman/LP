import {
    BACKEND_URL,
  } from './config';


const Api = {

    fetchAllLps: async () => {
      const endpoint = `http://localhost:3000/lp`
      return await (await fetch(endpoint)).json();
    },
    
    fetchALp: async (lpId) => {
      const endpoint = `http://localhost:3000/lp/${lpId}`
      return await (await fetch(endpoint)).json();
    },


    searchAllLps: async (search) => {
      console.log("SEARCH HÄR", search)
      const endpoint = `http://localhost:3000/search/${search}`
      return await (await fetch(endpoint)).json();
    },

}


export default Api