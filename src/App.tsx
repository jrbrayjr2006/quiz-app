import './App.css'
import Header from './components/Header'
import Quiz from './components/Quiz'

export default function App() {

  return (
    <>
      <Header />
      <main className="flex flex-col items-center mx-auto px-0 md:px-4">
        <Quiz />
      </main>
    </>
  )
};