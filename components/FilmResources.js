import { FaImdb, FaLink, FaPlay } from 'react-icons/fa'

export default function FilmResources({ website, imdb, trailer }) {
  return (
    <div className='mb-10 flex flex-wrap'>
      {website === '' || website === undefined ? null : (
        <a
          href={website}
          className='mb-4 mr-4 flex w-40 cursor-pointer items-center justify-between rounded-md border-none bg-app-greyish-blue py-3 px-8 text-sm font-medium text-app-pure-white hover:bg-app-pure-white hover:text-app-dark-blue'
          target='_blank'
          rel='noreferrer'
        >
          <p>Website</p>
          <FaLink className='text-base' />
        </a>
      )}
      {!imdb ? null : (
        <a
          href={`https://www.imdb.com/title/${imdb}`}
          className='mb-4 flex w-40 cursor-pointer items-center justify-between rounded-md border-none bg-app-greyish-blue py-3 px-8 text-sm font-medium text-app-pure-white hover:bg-app-pure-white hover:text-app-dark-blue'
          target='_blank'
          rel='noreferrer'
        >
          <p>IMDB</p>
          <FaImdb className='text-base' />
        </a>
      )}
      {/* <a
        href={trailer}
        className="mb-4 flex w-full cursor-pointer items-center justify-between rounded-md border-none bg-app-semi-dark-blue py-4 px-8 text-sm font-medium text-app-pure-white hover:bg-app-greyish-blue">
        <p>Trailer</p>
        <FaPlay className="text-base" />
      </a> */}
    </div>
  )
}
