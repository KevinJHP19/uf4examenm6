'use client'
import { useSearchParams} from 'next/navigation';
import { useState, useEffect } from 'react';
import Detalles from '@/miscomponentes/Detalle'
export default function About(){
    const searchParams = useSearchParams()
    const id = searchParams.get('id');
    console.log("ID de la película:", {id} );
    const [datos, setDatos] = useState({});
     const [actores, setActores] = useState([]);
    const url =`https://api.themoviedb.org/3/movie/${id}&language=es-ES&append_to_response=videos,credits`
    const url2 = `https://api.themoviedb.org/3/movie/${id}/credits?language=es-ES`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDhkOTgyMWJlZjJiMWU5ZWI2NzkyMjdkNDM1NDliYiIsIm5iZiI6MTc0ODk2MDg5NS42NjgsInN1YiI6IjY4M2YwNjdmYjQ4OTNhYTJiNDY4YTVmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TeeIbEESy15r8O4QzbIpXJEolvGyDkXa72M0Vv8QBWI'
        }
        };

    async function PeliculasDetalles(){
        const respuesta = await fetch(url, options);
        const datos = await respuesta.json();
        console.log("Detalles de la película:", datos);
        
        setDatos(datos);
        

    }
    async function ActoresDetalles(){
        const respuesta = await fetch(url2, options);
        const actores = await respuesta.json();
        console.log("Actores de la película:", actores);
         setActores(actores.cast);
    }
    useEffect(() => {
        PeliculasDetalles();
        ActoresDetalles();
    }, [id]);
    
    return (
        <div className='bg-gray-800 '>
            <h1>About</h1>
            <Detalles pelicula={datos} actores={actores}/>

            
        </div>
    )
}