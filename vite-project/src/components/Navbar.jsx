

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-indigo-900 text-white py-4">
     <div className="logo">
        <span className="font-bold text-xl mx-8">iTask</span>
     </div>
      <ul className="flex gap-8 mx-9">
        <li className="cursor-pointer hover:font-bold transition-all duration-100 drop-shadow-sm">Home</li>
        <li className="cursor-pointer hover:font-bold transition-all duration-100 drop-shadow-sm">Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
