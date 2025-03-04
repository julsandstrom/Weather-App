function Navbar() {
  return (
    <header className="nav-container">
      <div className="nav-title-logo">
        <h4 className="nav-logo">Global Window</h4>
        <img
          src="https://cdn.pixabay.com/photo/2024/05/18/01/15/window-8769303_1280.png"
          alt="Window Icon"
          className="nav-icon"
        />
      </div>

      <nav>
        <a
          className="cool-link hide-button"
          href="https://www.youtube.com/watch?v=NCfMPD5A6hQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stockholm (Live)
        </a>
        <a
          className="cool-link hide-button"
          href="https://www.youtube.com/watch?v=AqkYfZl4vkA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gothenburg (Live)
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
//d-flex justify-content-between align-items-center p-3 px-md-4 bg-light border-bottom box-shadow
