import {useState, useEffect} from 'react'

const App = () => {

  const [message, setMessage] = useState(null)
  const [value, setValue] = useState(null)
  const [previousChats, setPreviousChats] = useState([])
  const [currentTitle, setCurrentTitle] = useState(null)

  const createNewChat = () => {
    setCurrentTitle(null)
    setMessage(null)
    setValue("")
  }

  const handleClick = (uniqueTitle) => {
    setCurrentTitle(uniqueTitle)
    setMessage(null)
    setValue("")
  }
  
  const getMessages = async () => {

    const options = {
      method: "POST",
      headers: {
          "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`,
          "Content-Type": "application/json"
      },

      body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: value}],
          max_tokens: 100,
      })
      
  }
    try {

      const response = await fetch('https://api.openai.com/v1/chat/completions', options);
      const data = await response.json();
      setMessage(data.choices[0].message)     
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    console.log(currentTitle, value, message)
    if (!currentTitle && value && message) {
      setCurrentTitle(value)
    }

    if (currentTitle && value && message) {
      setPreviousChats(prevChats => (
        [...prevChats, 
        {
          title: currentTitle,
          role: 'user',
          content: value
        },

        {
          title: currentTitle,
          role: message.role,
          content: message.content
        }
        
        ]
      ))
    }
  }, [message, currentTitle])

  console.log(previousChats)

  const currentChats = previousChats.filter(previousChat => previousChat.title === currentTitle)
  const uniqueTitles = Array.from(new Set(previousChats.map(previousChat => previousChat.title)))
  console.log(uniqueTitles)

  return (
    <div className="app">
      <section className="side-bar">
        <button onClick={createNewChat}>+ New chat</button>
        <ul className="history">
          {uniqueTitles?.map((uniqueTitle, index) => <li key={index} onClick={() => handleClick(uniqueTitle)}>{uniqueTitle}</li>)}
        </ul>
        <nav>
          <p>Made by Sadiqful</p>
        </nav>
      </section>
      <section className="main">
       {!currentTitle && <h1>ChatGPT</h1>}
        <ul className="feed">
          {currentChats?.map((chatMessage, index) => <li key={index}>
            <p className='role'>{chatMessage.role}</p>
            <p>{chatMessage.content}</p>
          </li>)}
        </ul>

        <div className="bottom-section">
          <div className="input-container">
          <input value={value} onChange={(e) => setValue(e.target.value)}/>
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
