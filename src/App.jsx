
import sol from '../public/assets/sol.svg'

function App() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-sky-500 text-white">
      <img src={sol} className="w-[150px]" />
      <header className="text-4xl font-bold">Argentina</header>
      <p className="mt-4 text-lg text-gray-100">
        Tierra de paisajes, pasión y cultura.
      </p>
    </div>
  )
}

export default App
