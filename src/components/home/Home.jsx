import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

const Home = () => {
    const [searchText, setSearchText] = useState('');
    const { data: recipes } = useFetch('/recipes', searchText);

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    return (
        <>
            <header className="bg-gray-100 shadow-md">
                <div className="container mx-auto max-w-[1440px] p-5 flex justify-center items-center">
                    <div className="w-full">
                        <form className="relative">
                            <input type="text" value={searchText} onChange={handleSearchChange} className="max-w-[400px] py-2 pl-10 pr-4 text-gray-900 bg-white border border-blue-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-d-500 focus:border-blue-500  font-jakarta" placeholder="Search " />
                            <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" >
                                <path fillRule="evenodd" d="M13.293 14.707a1 1 0 011.414-1.414l3.586 3.586a1 1 0 01-1.414 1.414l-3.586-3.586zM11 2a7 7 0 100 14 7 7 0 000-14zm-5 7a5 5 0 1110 0 5 5 0 01-10 0z" clipRule="evenodd" />
                            </svg>
                        </form>
                    </div>
                </div>
            </header>
            <section>
                <div className="container mx-auto max-w-[1440px]  bg-gray-00   p-2  rounded-lg">
                    <div className="home__wrapper flex flex-wrap  justify-center gap-[80px] font-sans mt-[40px] " >
                        {recipes && recipes.length > 0 ? (
                            recipes.map((recipe) => (
                                <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
                                    <div className="w-[400px] h-[500px] recipe-card bg-gray-100 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 ">
                                        <img className="recipe-image w-full h-[300px] object-cover transition-transform duration-100 transform hover:scale-105 p-4 " src={recipe.image} />
                                        <div className="recipe-content p-4 " >
                                            <h2 className="recipe-name text-xl font-bold text-gray-800 mb-2">
                                                {recipe.name}
                                            </h2>
                                            <p className="recipe-cuisine text-gray-600 mb-2">
                                                Countrie: {recipe.cuisine}
                                            </p>
                                            <p className="recipe-rating text-gray-600 text-sm">
                                                Rating: {recipe.rating}
                                            </p>
                                            <p className="recipe-difficulty text-gray-600 text-sm">
                                                Difficulty: {recipe.difficulty}
                                            </p>
                                            <p className="recipe-calories text-gray-600 text-sm">
                                                Calorie: {recipe.caloriesPerServing}
                                            </p>
                                            <p className='recipe-description   text-gray-600 text-sm '>
                                                    Description: {recipe.description}
                                            </p>

                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p className="text-center text-gray-500 text-lg font-semibold mt-10 font-jakarta">
                                LOADING...
                            </p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
