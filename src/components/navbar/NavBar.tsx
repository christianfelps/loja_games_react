
function Navbar() {
    return (
    <nav className="flex flex-row justify-around bg-steam text-white">
      <div >Lojito <br /> De la <br /> Gamesitos </div>
  
      <div className='flex gap-4 items-center'>
          <a href="">Produtos</a>
          <a href="">Categorias </a>
         <a href=""> Cadastrar Categoria</a>
         <a href="">login</a>
      </div>
  </nav>
    )
  }
  
  export default Navbar