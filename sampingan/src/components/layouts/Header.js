import Link from 'next/link';
import {MenuIcon} from '@heroicons/react/solid';

export default function Header () {
  const menus = [
    {
      name: 'Beranda',
      link: '/' 
    },
    {
      name: 'Notifikasi',
      link: '/notification' 
    },
    {
      name: 'Profil',
      link: '/profile' 
    },
  ]
  
  return <div className="fixed bg-gray-800 w-full text-white flex flex-row items-center justify-center" style={{
    height: 64
  }}>
    <div className="relative w-full mx-2 px-2 flex flex-row items-center justify-between">
      <h1 className="mr-auto text-lg font-bold">SAMPINGAN</h1>
      <div className="hidden flex-row items-center lg:flex">
        {menus.map((v,i) => <Link key={i} href={v.link}>
          <div className='mx-2 p-3 cursor-pointer hover:bg-gray-700 rounded-md'>{v.name}</div>
        </Link>)}
      </div>
      <div className='flex lg:hidden'>
        <button className='rounded-md'><MenuIcon height={24} width={24}/></button>
      </div>
    </div>
  </div>
}