export const Footer = () => {
  let date = new Date()
  const year = date.getFullYear()
  return (
    <footer className="flex bg-gray-950 dark:bg-slate-300 justify-center">
        <h1 className="p-2 text-gray-500">{year} José Díaz - Morse translator</h1>
    </footer>
  )
}
