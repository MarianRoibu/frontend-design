import React from 'react';
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import './HomePage.css';

const HomePage = () =>
{
    return (
        <>
            <Navbar />
            <div className="space-images-container">
                <Link to="/main" className="space-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545156521-77bd85671d30')" }}>
                    <div className="image-title">Main Articles</div>
                </Link>
                <a href="https://www.nasa.gov" target="_blank" rel="noopener noreferrer" className="space-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa')" }}>
                    <div className="image-title">NASA</div>
                </a>
                <a href="https://www.spacex.com" target="_blank" rel="noopener noreferrer" className="space-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')" }}>
                    <div className="image-title">SpaceX</div>
                </a>
                <a href="https://www.space.com" target="_blank" rel="noopener noreferrer" className="space-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451188502541-13943edb6acb')" }}>
                    <div className="image-title">Space.com</div>
                </a>
                <a href="https://www.nytimes.com/section/science/space" target="_blank" rel="noopener noreferrer" className="space-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581822261290-991b38693d1b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                    <div className="image-title">New York Times: Space</div>
                </a>
            </div>
        </>
    );
};

export default HomePage;
