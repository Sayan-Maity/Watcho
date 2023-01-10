import Image from 'next/image'
import Link from 'next/link'
import ProfilePic from '../assets/image-avatar2.jpg'
import AppLogo from './icons/AppIcon'
import IconNavHome from './icons/IconNavHome'
import IconNavMovie from './icons/IconNavMovie'
import IconNavTv from './icons/IconNavTv'
import NavigationIcon from './NavigationIcon'

export default function Navigation() {
  return (
    <nav className='sticky top-0 z-50 flex items-center justify-between bg-app-semi-dark-blue p-5 md:mx-6 md:mt-6 md:mb-[33px] md:rounded-[10px] lg:fixed lg:left-0 lg:mr-0 lg:h-5/6 lg:flex-col lg:py-9'>
      <Link href='/' passHref>
        <a>
          <AppLogo />
        </a>
      </Link>
      <div className='flex w-1/2 items-center justify-between lg:h-[200px] lg:flex-col 2xs:w-2/5'>
        <NavigationIcon href='/'>
          <IconNavHome />
        </NavigationIcon>
        <NavigationIcon href='/movie'>
          <IconNavMovie />
        </NavigationIcon>
        <NavigationIcon href='/tv'>
          <IconNavTv />
        </NavigationIcon>
        {/* <NavigationIcon href="/bookmark">
          <IconNavBookmark />
        </NavigationIcon> */}
      </div>
      <a href="https://github.com/Sayan-Maity" target="_blank" rel="noreferrer">
      <div className='flex items-center justify-center rounded-full bg-cyan-200 p-px'>
        <Image
          className='rounded-full'
          src={ProfilePic}
          alt='user avatar'
          height={25}
          width={25}
          unoptimized
        />
      </div>
      </a>
    </nav>
  )
}
