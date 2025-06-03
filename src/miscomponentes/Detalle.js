import Image from 'next/image';
export default function Detalles({pelicula, actores}){
    console.log("detalles cargado");
    return (
        <div className="container p-4 bg-gray-800 rounded-lg shadow-lg mx-auto my-8">
            <div className="w-full h-[300px] relative flex items-center justify-center mb-4">
                <Image
                    src={`https://image.tmdb.org/t/p/w500${pelicula.backdrop_path}`}
                    alt="Imagen de ejemplo"
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                />
            </div>
            <h1 className="text-2xl font-bold mb-4 text-start text-white">{pelicula.original_title}</h1>
            <div className='buttons flex justify-start mb-4'>
                <button className="bg-black text-white px-4 py-2 rounded-lg shadow-lg mr-2">Añadir a favoritos</button>
                <button className="bg-white text-black px-4 py-2 rounded-lg shadow-lg">Ver Trailer</button>
            </div>
            <div className=" text-white p-4 rounded-lg shadow-lg">
                <p className="text-lg mb-2">Sipnosis: {pelicula.overview}</p>
                <span>
                    Generos:
                    
                </span>
                {pelicula.genres && pelicula.genres.map((genero) => (
                        <span key={genero.id} className="bg-gray-700 text-white px-2 py-1 rounded-full mr-2">
                            {genero.name}
                        </span>
                    ))}
                
            </div>
            <div className='flex mt-4 justify-between text-white'>
                <div className='flex flex-col '>
                    <span>
                    Fecha de Estreno:
                    </span>
                    <span className="text-white text-start font-bold ms-2">{pelicula.release_date}</span>
                </div>
                <div className='flex flex-col'>
                    <span>
                        Duracion:
                    </span>
                    <span className="text-white font-bold ms-2">{pelicula.runtime} minutos</span>
                </div>
                
            </div>
            <div id='Actors' className='mt-4'>
                <h2 className="text-xl font-bold mb-2 text-white">Actores Principales</h2>
                <div className="grid grid-cols-3 gap-4">
                    {actores.slice(0, 6).map((actor) => (
                        <div key={actor.id} className="bg-gray-700 p-4 w-max rounded-lg shadow-lg">
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                                alt={actor.name}
                                width={400}
                                height={150}
                                className="rounded mb-2"
                            />
                            <h3 className="text-lg font-bold text-white">{actor.name}</h3>
                            <p className="text-sm text-gray-300">{actor.character}</p>
                        </div>
                    ))}
                </div>
                </div>
        </div>

    )

}