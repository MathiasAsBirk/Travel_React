import './blog.css';

const blogPosts = [
  {
    id: 1,
    title: "Exploring Rijeka",
    stop: "First Stop",
    pdf: "/src/assets/blogs/Rijeka-Blog.pdf",
  },
  {
    id: 2,
    title: "Exploring Trieste",
    stop: "Second Stop",
    pdf: "/src/assets/blogs/Trieste.Blog.pdf",
  },
  {
    id: 3,
    title: "Exploring Venice",
    stop: "Third Stop",
    pdf: "/src/assets/blogs/Venice-Blog.pdf",
  },
  {
    id: 4,
    title: "Exploring Milan",
    stop: "Fourth Stop",
    pdf: "/src/assets/blogs/Milan-Blog.pdf",
  },
  {
    id: 5,
    title: "Exploring Florence",
    stop: "Fifth Stop",
    pdf: "/src/assets/blogs/Florence-Blog.pdf",
  },
  {
    id: 6,
    title: "Exploring Rome",
    stop: "Final Stop",
    pdf: "/src/assets/blogs/Rome-Blog.pdf",
  },
];

function Blog() {
  return (
    <div className="blog-page page-content">
      <div className="blog-page__header">
        <span className="blog-page__tag">Journal</span>
        <h1 className="blog-page__title">Travel Blog</h1>
        <p className="blog-page__subtitle">Read our detailed stories from each city we visited</p>
      </div>

      <div className="blog-page__list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-page__item">
            <div className="blog-page__item-number">{String(post.id).padStart(2, '0')}</div>
            <div className="blog-page__item-body">
              <span className="blog-page__item-stop">{post.stop}</span>
              <h2 className="blog-page__item-title">{post.title}</h2>
            </div>
            <a href={post.pdf} target="_blank" rel="noopener noreferrer" className="blog-page__item-btn">
              Read PDF
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
