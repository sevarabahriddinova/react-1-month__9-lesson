import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

const Recipe = () => {
    const { id } = useParams();
    const { data } = useFetch(`/recipes/${id}`);

    if (!data) {
        return <p className="text-center text-gray-500 text-lg font-semibold mt-10 font-jakarta">Loading...</p>;
    }

    return (
        <section className="bg-gray-50 py-10 font-jakarta">
            <div className="container mx-auto max-w-[600px] p-5">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        className="w-full mx-auto h-64 object-cover p-6"
                        src={data.image}
                        alt={data.name}
                    />
                    <div className="p-6">
                        <h1 className="text-3xl font-bold text-black-800 mb-4">{data.name}</h1>
                        <p className=" mb-2"><strong>Cuisine:</strong> {data.cuisine}</p>
                        <p className=" mb-2"><strong>Rating:</strong> {data.rating} ({data.reviewCount} reviews)</p>
                        <p className=" mb-2"><strong>Difficulty:</strong> {data.difficulty}</p>
                        <p className=" mb-4"><strong>Calories per Serving:</strong> {data.caloriesPerServing} kcal</p>
                    
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recipe;
