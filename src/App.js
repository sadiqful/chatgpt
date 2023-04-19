const App = () => {

  const getMessages = async () => {

    const options = {
      method: "POST",
      headers: {
          "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`,
          "Content-Type": "application/json"
      },

      body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: "How are you"}],
          max_tokens: 100,
      })
      
  }
    try {

      const response = await fetch('https://api.openai.com/v1/chat/completions', options);
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
