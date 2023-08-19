import { MorseTranslator } from "../components";


export default function Home() {
  return (
    <div className="p-2 md:pt-6 md:pb-10 md:px-16 min-h-screen bg-gray-950 dark:bg-slate-300 transition duration-300">
      <MorseTranslator />
    </div>
  )
}
