import logoImg from '../assets/quiz-logo.png';

export default function Header() {
  return (
    <header className="flex flex-col items-center py-4">
        <img className="mb-4" src={logoImg} alt="Quiz Logo" />
        <h1 className="text-3xl font-bold uppercase">ReactQuiz</h1>
    </header>
  )
}