'use client';
import React from 'react';	
import Link from 'next/link';
export default function Peliculas({peliculas}){
    console.log( "Peliculas cargado")
    console.log(peliculas);
    return (
        <div className='container mx-auto p-4'>
            <h1 className="text-2xl font-bold mb-4 text-center text-white">Películas Populares</h1>
            <div className="flex justify-between flex-wrap">
                {peliculas.slice(0, 9).map((pelicula) => (
                    <Link href={`/about?id=${pelicula.id}`} key={pelicula.id} className="w-1/3 p-2">
                   <div key={pelicula.id} className="pb-5 mt-5 shadow bg-black text-white rounded-lg">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                            alt={pelicula.title}
                            className="w-100 h-auto"
                        />
                        <h2 className="text-lg font-bold mt-2 ps-3">{pelicula.title}</h2>
                    </div> 
                    </Link>
                    
                
                    
                ))}
            </div>
        </div>
    )
}