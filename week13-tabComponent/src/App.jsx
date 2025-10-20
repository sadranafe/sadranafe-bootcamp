import Tabs from "./components/Tabs/Tabs"

const App = () => {
  const DummyData = [
    { label : 'Tab 1' , header : 'content 1' , content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, cum!' },
    { label : 'Tab 2' , header : 'content 2' , content: 'Lorem ipsum dolor sit amet.' },
    { label : 'Tab 3' , header : 'content 3' , content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quos ipsa architecto temporibus odio magnam quibusdam unde repudiandae autem eos.' },
    { label : 'Tab 4' , header : 'content 4' , content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eveniet, doloribus assumenda perspiciatis commodi reprehenderit praesentium quis animi facilis sint minima harum debitis distinctio magnam libero quae, neque optio. Dicta!' },
  ]

  return (
    <>
      <div className = "w-full h-screen flex flex-wrap justify-center items-center">
          <Tabs tabs = {DummyData}/>
      </div>
    </>
  )
}

export default App