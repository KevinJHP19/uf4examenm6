'use client';
import Peliculas from "@/miscomponentes/Peliculas";
import { useState, useEffect } from 'react';
export default function MovieExplorer() {
    console.log( "MovieExplorer cargado")
    const [datos, setDatos] = useState([]);
    const url = "https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1"
    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDhkOTgyMWJlZjJiMWU5ZWI2NzkyMjdkNDM1NDliYiIsIm5iZiI6MTc0ODk2MDg5NS42NjgsInN1YiI6IjY4M2YwNjdmYjQ4OTNhYTJiNDY4YTVmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TeeIbEESy15r8O4QzbIpXJEolvGyDkXa72M0Vv8QBWI'
  }
};
async function peliculaspopulares(){
    const respuesta = await fetch( url, options)
    const datos = await respuesta.json()
    console.log(datos)
    setDatos(datos.results);

}
    useEffect(() => {
        peliculaspopulares();

    },[])
    return (
        <div className="bg-gray-800">
            
        <Peliculas peliculas={datos}/>
        </div>
        

        
    )
}