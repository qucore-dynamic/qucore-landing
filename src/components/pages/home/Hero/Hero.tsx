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
      <Cloud fileName='hero.svg' className='Hero_cloud top-[7.5vh] right-0' />

      <div className='flex flex-col justify-center items-center text-center relative'>
        <FadeUpMotion delay={0} x={75} y={0}>
          <h1 className='Hero_header text-[96px] font-prosto'>QuCore Dynamic</h1>
        </FadeUpMotion>

        <FadeUpMotion delay={0.1} x={-75} y={0}>
          <h2 className='Hero_second-header text-[48px] font-prosto -mt-2.5'>
            Where ideas meet technology
          </h2>
        </FadeUpMotion>

        <FadeUpMotion delay={0.3} x={75} y={0}>
          <h3 className='Hero_third-header text-[24px] font-afacad max-w-135 mt-5 text-(--o-txt)'>
            Build dynamic systems powered by events, automation, and modular architecture
          </h3>
        </FadeUpMotion>

        <div className='Hero_btns flex gap-25 mt-17.5'>
          <FadeUpMotion delay={0.4} x={-50} y={0}>
            <button
              className='Hero_btn Explore_btn w-37.5 h-10 font-coda text-[18px] pt-0.5 rounded-[20px] cursor-pointer tracking-wider'
              onClick={() => handleScroll('about-section')}
            >
              Explore
            </button>
          </FadeUpMotion>

          <FadeUpMotion delay={0.4} x={50} y={0}>
            <button
              className='Hero_btn Contact-us_btn w-37.5 h-10 font-coda text-[18px] pt-0.5 rounded-[20px] cursor-pointer tracking-wider'
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
