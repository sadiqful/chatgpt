const App = () => {

  const getMessages = async () => {

    const options = {
      method: "POST",
      body: JSON.stringify({
        message: "Hello How are you?"
      }),

      headers: {
        "Content-Type": "application/json"
      }
    }

    try {

      const response = await fetch('http://localhost:8000/completions', options);
      const data = await response.json();
      console.log(data)

      
    } catch (error) {
      console.error(error)
    }
  }

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
          <div id="submit" onClick={getMessages}>➢</div>
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
