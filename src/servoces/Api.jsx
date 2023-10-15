import axios from 'axios';

const KEY = '7767ff949005c6c2b1276d0401107c06'
axios.defaults.baseURL = "https://api.themoviedb.org/3/"

export async function getTrandingMovie(){
    try{
        const {data} = await axios.get(`trending/movie/day?api_key=${KEY}`)
    return data.results
    }catch(error){
       console.log(error)
    }
}