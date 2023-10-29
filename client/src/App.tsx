import Header from "./components/Header"
import Home from "./pages/Home"

function App() {
  return (
    <>
    <Header />

    <main className='sm:px-8 px-4 py-8 w-full'>
      <Home />
    </main>
    </>
  )
}

export default App
