import { Alien, FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
  return (
    <footer className='bg-steam flex flex-row  text-white'>
        <div className=' container flex flex-col  items-center py-4'>
            <p>Loja Desenvolvida por Christian Games&#169;</p>
        </div>
        
        <div className='flex flex-row gap-2'>
        <Alien size={48}/>
        <FacebookLogo size={48} color="#ebeaea" /> 
        <InstagramLogo size={48} color="#ebeaea" />
        <GithubLogo size={48} color="#ebeaea" />
        <LinkedinLogo size={48} color="#ebeaea" />
        </div>
    </footer>
  )
}

export default Footer