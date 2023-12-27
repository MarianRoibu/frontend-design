import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css'; // Ensure this path is correct
import Navbar from "../Navbar/Navbar";

const MainPage = () =>
{
    const [articles, setArticles] = useState( [] );
    const [filter, setFilter] = useState( '' );
    const [currentPage, setCurrentPage] = useState( 1 );
    const articlesPerPage = 4;
    const filteredArticles = articles.filter( article => article.title.toLowerCase().includes( filter.toLowerCase() ) );
    const totalPages = Math.ceil( filteredArticles.length / articlesPerPage );
    const [animationDirection, setAnimationDirection] = useState( 'right' );

    useEffect( () =>
    {
        fetch( 'https://api.spaceflightnewsapi.net/v3/articles' )
            .then( response => response.json() )
            .then( data => setArticles( data ) )
            .catch( error => console.error( 'Error fetching articles:', error ) );
    }, [] );

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = filteredArticles.slice( indexOfFirstArticle, indexOfLastArticle );

    const paginate = ( pageNumber ) =>
    {
        setAnimationDirection( pageNumber > currentPage ? 'right' : 'left' );
        setCurrentPage( pageNumber );
    };

    const carouselImages = [
        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2",
        "https://images.unsplash.com/photo-1457364887197-9150188c107b",
        "https://images.unsplash.com/photo-1484589065579-248aad0d8b13",
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
    ];

    return (
        <>
            <Navbar />
            <div className="carousel">
                {carouselImages.map( ( image, index ) => (
                    <div key={index} className="carousel-item" style={{ backgroundImage: `url(${image})` }}></div>
                ) )}
                <div className="Text">
                    <input
                        type="text"
                        placeholder="Filter by title..."
                        value={filter}
                        onChange={( e ) => setFilter( e.target.value )}
                        className="article-filter"
                    />
                </div>
            </div>


            <div>
                <div className={`articles-container slide-in-${animationDirection}`}>
                    {currentArticles.map( article => (
                        <Link to={`/article/${article.id}`} key={article.id} className="article-card">
                            <img src={article.imageUrl} alt={article.title} />
                            <p>{article.title}</p>
                        </Link>
                    ) )}
                </div>
            </div>

            <div className="pagination">
                <button
                    className="arrow-button left"
                    onClick={() => currentPage > 1 && paginate( currentPage - 1 )}
                    disabled={currentPage === 1}
                >
                    &lt;
                </button>
                <button
                    className="arrow-button right"
                    onClick={() => currentPage < totalPages && paginate( currentPage + 1 )}
                    disabled={currentPage === totalPages}
                >
                    &gt;
                </button>
            </div>
        </>
    );
};

export default MainPage;
