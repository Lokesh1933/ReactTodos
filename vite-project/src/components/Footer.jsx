

const Footer = () => {
    const d = new Date();
    let a = d.getFullYear();
    return (
      <nav className="bg-indigo-900  text-white py-[1x]">
       <div className="footer text-center">
          {/* <span className="font-bold text-xl mx-8">iTask</span> */}
          <p>Copyright Ⓒ {a}</p>
       </div>
        
      </nav>
    )
  }
  
  export default Footer
  