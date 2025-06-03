'use client';
import { useEffect} from 'react';
export default function Peliculas(){
    console.log( "Peliculas cargado")
    const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDhkOTgyMWJlZjJiMWU5ZWI2NzkyMjdkNDM1NDliYiIsIm5iZiI6MTc0ODk2MDg5NS42NjgsInN1YiI6IjY4M2YwNjdmYjQ4OTNhYTJiNDY4YTVmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TeeIbEESy15r8O4QzbIpXJEolvGyDkXa72M0Vv8QBWI'
  }
};
async function peliculaspopulares(){
    const respuesta = await fetch(url, options)
    const datos = await respuesta.json()
    console.log(datos)
}


    useEffect(() => {
        peliculaspopulares();

        

        
    })

    return (
        <div>
            <h1>peliculas cargadas</h1>
        </div>
    )
}