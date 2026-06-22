'use client'

// Styles
import './Hero.scss'

// Components
import Cloud from '@components-ui/Cloud'
import FadeUpMotion from '@components-shared/FadeUpMotion'

const Hero = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)

    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='h-screen min-h-min flex flex-col justify-center items-center text-center relative'>
      <Cloud fileName='hero.svg' className='Cloud top-[7.5vh] right-0' />

      <div className='flex flex-col justify-center items-center text-center relative'>
        <FadeUpMotion delay={0} x={75} y={0}>
          <h1 className='text-[96px] font-prosto'>QuCore Dynamic</h1>
        </FadeUpMotion>

        <FadeUpMotion delay={0.1} x={-75} y={0}>
          <h2 className='text-[48px] font-prosto -mt-2.5'>Where ideas meet technology</h2>
        </FadeUpMotion>

        <FadeUpMotion delay={0.3} x={75} y={0}>
          <h3 className='text-[24px] font-afacad max-w-135 mt-5 text-(--o-txt)'>
            Build dynamic systems powered by events, automation, and modular architecture
          </h3>
        </FadeUpMotion>

        <div className='flex gap-25 mt-17.5'>
          <FadeUpMotion delay={0.4} x={50} y={0}>
            <button
              className='Explore_btn font-coda tracking-wider'
              onClick={() => handleScroll('about-section')}
            >
              Explore
            </button>
          </FadeUpMotion>

          <FadeUpMotion delay={0.4} x={-50} y={0}>
            <button
              className='Contact-us_btn font-coda tracking-wider'
              onClick={() => handleScroll('contacts-section')}
            >
              Contact us
            </button>
          </FadeUpMotion>
        </div>
      </div>
    </div>
  )
}

export default Hero
