import MovieScroll from "../shared/MovieScroll"

export  function generateStaticParams(){
    return[
        { genre: 'comedy'},
        { genre: 'drama'},
        { genre: 'horror'},
    ]

}

export function generateMetadata({params: {genre}}){
    return{
        title: `My ${genre} movie database`,
        description: `Here are some of my favorite ${genre} mobies`,

}
}
export default function Page({ params: {genre} }){
    return(
        <main className="p-8">
            <h1 className="capitalize text-2xl text-orange-400 font-semibold text-center">
                {genre} Movies
            </h1>
            <MovieScroll genre = {genre} number ={12}/>
        </main>
    )
}