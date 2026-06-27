'use client'

// Styles
import './Hero.scss'

// Components
import Cloud from '@components-ui/Cloud/Cloud'
import FadeUpMotion from '@components-shared/FadeUpMotion'

const Hero = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)

    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className='h-screen min-h-min flex flex-col justify-center items-center relative mb-25'>
      <Cloud fileName='hero.svg' className='Hero_cloud top-[7.5vh] right-0' />

      <div className='flex flex-col justify-center items-center relative'>
        <FadeUpMotion delay={0} x={75} y={0}>
          <h1 className='text-[clamp(2.5rem,10vw,6rem)] font-prosto'>QuCore Dynamic</h1>
        </FadeUpMotion>

        <FadeUpMotion delay={0.1} x={-75} y={0}>
          <h2 className='text-[clamp(1.5rem,5vw,3rem)] font-prosto -mt-1.25 mx-3.75'>
            Where ideas meet technology
          </h2>
        </FadeUpMotion>

        <FadeUpMotion delay={0.3} x={75} y={0}>
          <h3 className='text-[clamp(1.1rem,2.5vw,1.5rem)] font-afacad max-w-135 mt-5 text-(--o-txt)'>
            Build dynamic systems powered by events, automation, and modular architecture
          </h3>
        </FadeUpMotion>

        <div className='Hero_btns flex justify-center gap-17.5 gap-y-7.5 mt-17.5 text-[clamp(1rem,2vw,1.125rem)]'>
          <FadeUpMotion delay={0.4} x={-50} y={0}>
            <button
              className='Hero_btn Explore_btn min-w-37.5 h-10 font-coda pt-0.5 rounded-[20px] cursor-pointer tracking-wider'
              onClick={() => handleScroll('about-section')}
            >
              Explore
            </button>
          </FadeUpMotion>

          <FadeUpMotion delay={0.4} x={50} y={0}>
            <button
              className='Hero_btn Contact-us_btn min-w-37.5 h-10 font-coda pt-0.5 rounded-[20px] cursor-pointer tracking-wider'
              onClick={() => handleScroll('contacts-section')}
            >
              Contact us
            </button>
          </FadeUpMotion>
        </div>
      </div>
    </section>
  )
}

export default Hero
