// Components
import Cloud from '@components-ui/Cloud'

const Hero = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center text-center relative'>
      <Cloud fileName='hero.svg' className='Cloud top-[7.5%] right-0' />
    </div>
  )
}

export default Hero
