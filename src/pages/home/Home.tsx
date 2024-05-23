

function Home() {
  return (
    <main className='text-white flex flex-row w-full justify-center items-center bg-play '>
        <div className='flex flex-col items-center  mr-16 w-1/2'>
            <h1 className="text-2xl mb-2">Bem vido a interface de sua loja</h1>
            <p>Adicione Games e Categorias</p>
                <button className='bg-gray-500 hover:bg-steam px-6 py-2 mt-4 '>Novo produto</button>
        </div>
        <div className='flex flex-row w-6/12 '>
            <img className='w-full' src="https://cdn-icons-png.flaticon.com/512/10069/10069349.png" alt="" />
        </div>
    </main>
  )
}

export default Home