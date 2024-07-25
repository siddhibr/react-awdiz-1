import React, {  useState } from 'react'
import axios from 'axios';

const Spotify = () => {
    const [allSongs, SetAllSongs]=useState(null)
    const[search ,SetSearch] = useState("")

    
async function getSongs(){
  const options = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/search/',
    params: {
      type: 'multi',
      offset: '0',
      limit: '10',
      numberOfTopResults: '5'
    },
    headers: {
      'x-rapidapi-key': 'caaea96702msh0cbc3ed36797b3ap15ec96jsn30817794d7f0',
      'x-rapidapi-host': 'spotify23.p.rapidapi.com'
    }
  };
  
  console.log(options);

try {
	const response = await axios.request(options);
  console.log("Hiiiii")
  console.log(response.data);
	SetAllSongs(response.data);
  
} catch (error) {
	console.log("HIIIasas"); 
    SetAllSongs(null)
}
}

function handleSubmit(e){
  e.preventDefault();
    getSongs();
}


  return (
    <div>
        <form >
        <h1>Spotify</h1>
        <input type='text'
        placeholder='search'
        value={search}
        onChange={(e)=>SetSearch(e.target.value)} />
        <button onClick={handleSubmit}> submit</button>

        
         </form>
         <div>
          {allSongs}
         
         </div>
    </div>
  )
}

export default Spotify;
// "status": true,
        // "creator": "https://telegram.dog/simplehacker1 , https://wa.me/919771241425",
        // "result": {
        //   "artists": "Manjeet Beliya, Jyoti Jaiswal",
        //   "title": "Mera Piya",
        //   "album": "Mera Piya",
        //   "cover": "https://i.scdn.co/image/ab67616d0000b2732c70ceba6078c01d9f8f1f51",
        //   "releaseDate": "2023-12-23",
        //   "download_link": "https://cdn4.meow.gs/api/stream?t=XZZuiiQqDkebtWPFofE6Q&e=1720080725500&h=Q7UnlsDFh7jzvocpMuHJ4E3s9vcS5mWg9dO7fXa_gfk&s=BGW8yvP3BC_SjfMU4th5YJxsUgix2TsfMbhowb4w6Q4&i=Wc7aGNgbqIa4EU1vTTD2hw"
        