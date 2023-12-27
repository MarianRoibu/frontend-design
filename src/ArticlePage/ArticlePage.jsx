// ArticlePage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import './ArticlePage.css';
import Navbar from "../Navbar/Navbar";

const fetchArticle = async ( id ) =>
{
    const response = await fetch( `https://api.spaceflightnewsapi.net/v3/articles/${id}` );
    return response.json();
};

const ArticlePage = () =>
{
    const { id } = useParams();
    const { data: article, isLoading, error } = useQuery( ['article', id], () => fetchArticle( id ) );

    if ( isLoading ) return <div>Loading...</div>;
    if ( error ) return <div>An error occurred: {error.message}</div>;

    return (
        <>
            <Navbar />
            <div className="article-container">
                <h1 className="article-title">{article.title}</h1>
                <p className="article-date"><strong>Published on:</strong> {new Date( article.publishedAt ).toLocaleDateString()}</p>
                <img src={article.imageUrl} alt={article.title} className="article-image" />
                <div className="article-content">
                    <p>{article.summary}</p>
                    <div className="article-metadata-container">
                        <p className="article-source"><strong>Source:</strong> {article.newsSite}</p>
                        <p className="article-author"><strong>Author:</strong> {article.author}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArticlePage;
