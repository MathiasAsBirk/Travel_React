import React from 'react';
import './blog.css';

const blogPosts = [
    {
        id: 1,
        title: "Exploring Rijeka: The First Stop on Our Road Trip Adventure",
        pdf: "/src/assets/blogs/Rijeka-Blog.pdf",
    },
    {
        id: 2,
        title: "Exploring Trieste: The Second Stop on Our Road trip Adventure",
        pdf: "/src/assets/blogs/Trieste.Blog.pdf",
    },
    {
        id: 3,
        title: "Exploring Venice: The Third Stop on Our Road trip Adventure",
        pdf: "/src/assets/blogs/Venice-Blog.pdf",
    },
    {
        id: 3,
        title: "Exploring Milan: The Fourth Stop on Our Road trip Adventure",
        pdf: "/src/assets/blogs/Milan-Blog.pdf",
    },
    {
        id: 3,
        title: "Exploring Florence: The Fifth Stop on Our Road trip Adventure",
        pdf: "/src/assets/blogs/Florence-Blog.pdf",
    },
    {
        id: 3,
        title: "Exploring Rome: The Final Stop on Our Road trip Adventure",
        pdf: "/src/assets/blogs/Rome-Blog.pdf",
    },
];

function Blog() {
    return (
        <div className="blogs-container">
            <h1>Our Travel Blog´s</h1>
            <div className="blog-list">
                {blogPosts.map((post) => (
                    <div key={post.id} className="blog-item">
                        <h2>{post.title}</h2>
                        <a href={post.pdf} target="_blank" rel="noopener noreferrer">
                            <button>Read PDF</button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;


