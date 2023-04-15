const App = () => {
  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New chat</button>
        <ul className="history">
          <li> History </li>
        </ul>
        <nav>
          <p>Made by Sadiqful</p>
        </nav>
      </section>
      <section className="main">
        <h1>ChatGPT</h1>
        <ul className="feed">

        </ul>

        <div className="bottom-section">
          <div className="input-container">
          <input/>
          <div id="submit">➢</div>
          </div>
          <p className="info">
          ChatGPT Mar 23 Version. Free Research Preview. 
          Our goal is to make AI systems more natural and safe to interact with.
          Your feedback will help us improve
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
