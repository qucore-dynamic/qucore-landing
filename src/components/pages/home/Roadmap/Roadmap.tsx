// Styles
import './Roadmap.scss'

// Components
import Cloud from '@components-ui/Cloud/Cloud'
import FadeUpMotion from '@components-shared/FadeUpMotion'
import SectionHeader from '@components-ui/SectionHeader'

const Roadmap = () => {
  return (
    <section className='flex flex-col justify-center items-center relative mb-37.5'>
      <Cloud fileName='roadmap.svg' className='right-0' />

      <FadeUpMotion delay={0} x={0} y={50}>
        <SectionHeader>Roadmap</SectionHeader>
      </FadeUpMotion>

      <div className='flex justify-center items-center'>
        <div className='Roadmap_content mt-25 w-max flex gap-25 justify-center items-start text-center relative'>
          <div className='Roadmap_image w-full absolute left-7.5 flex justify-center pointer-events-none select-none'>
            <FadeUpMotion delay={0.1} x={-50} y={0}>
              <img
                src='images/roadmap_line.svg'
                alt='Roadmap line image'
                className='w-full max-w-367.5 object-cover z-0'
              />
            </FadeUpMotion>
          </div>

          <div className='Roadmap_image-smaller hidden w-full absolute -top-1.5 items-center pointer-events-none select-none'>
            <FadeUpMotion
              delay={0.1}
              x={-50}
              y={0}
              className='w-full flex flex-col justify-center items-start'
            >
              <div className='w-2.5 h-2.5 bg-(--o-txt) rounded-full relative right-1.5 top-1.25'></div>
              <div className='Roadmap_image-smaller-line h-0.5 w-full'></div>
            </FadeUpMotion>
          </div>

          <div className='Roadmap_image-smaller-vertical hidden w-full h-[102.5%] -mt-12 absolute top-0 justify-center pointer-events-none select-none'>
            <FadeUpMotion
              delay={0.1}
              x={0}
              y={50}
              className='flex flex-col justify-start items-center'
            >
              <div className='w-2.5 h-2.5 bg-(--o-txt) rounded-full relative top-1'></div>
              <div className='Roadmap_image-smaller-vertical-line w-0.5 h-[102.5%]'></div>
            </FadeUpMotion>
          </div>

          <FadeUpMotion
            delay={0.2}
            x={0}
            y={75}
            className='Roadmap_card z-2 w-full flex flex-col justify-start items-center relative top-39'
          >
            <div className='w-12.5 h-12.5 bg-(--bl) border-2 border-(--o-txt) rounded-full flex justify-center items-center'>
              <img
                src='images/icons/mvp.svg'
                alt='MVP icon'
                className='pointer-events-none select-none h-6.25'
              />
            </div>

            <div>
              <h3 className='Roadmap_card-header mt-8.75 font-coda font-extrabold text-[clamp(1.5rem,2.5vw,2rem)]'>
                MVP
              </h3>

              <h4 className='Roadmap_card-text w-full max-w-75 mt-1.25 font-prosto text-[clamp(0.85rem,1.5vw,1.1rem)]'>
                Updates financial state of the system based on the event data (e.g. revenue, costs,
                balances)
              </h4>
            </div>
          </FadeUpMotion>

          <FadeUpMotion
            delay={0.3}
            x={0}
            y={75}
            className='Roadmap_card Roadmap_card-rev z-2 w-full flex flex-col justify-start items-center relative top-4'
          >
            <div className='w-12.5 h-12.5 bg-(--bl) border-2 border-(--o-txt) rounded-full flex justify-center items-center'>
              <img
                src='images/icons/beta.svg'
                alt='Beta icon'
                className='pointer-events-none select-none h-6.25'
              />
            </div>

            <div>
              <h3 className='Roadmap_card-header mt-8.75 font-coda font-extrabold text-[clamp(1.5rem,2.5vw,2rem)]'>
                Beta
              </h3>

              <h4 className='Roadmap_card-text w-full max-w-75 mt-1.25 font-prosto text-[clamp(0.85rem,1.5vw,1.1rem)]'>
                An extended version introducing external connectivity and system visibility through
                API access, webhooks, and basic analytics for tracking system behavior
              </h4>
            </div>
          </FadeUpMotion>

          <FadeUpMotion
            delay={0.4}
            x={0}
            y={75}
            className='Roadmap_card z-2 w-full flex flex-col justify-start items-center relative top-11'
          >
            <div className='w-12.5 h-12.5 bg-(--bl) border-2 border-(--o-txt) rounded-full flex justify-center items-center'>
              <img
                src='images/icons/future.svg'
                alt='Future icon'
                className='pointer-events-none select-none h-6.25'
              />
            </div>

            <div>
              <h3 className='Roadmap_card-header mt-8.75 font-coda font-extrabold text-[clamp(1.5rem,2.5vw,2rem)]'>
                Future
              </h3>

              <h4 className='Roadmap_card-text w-full max-w-75 mt-1.25 font-prosto text-[clamp(0.85rem,1.5vw,1.1rem)]'>
                A long-term vision of the platform with a visual system builder, marketplace for
                reusable modules, and AI-powered automation to simplify complex logic creation
              </h4>
            </div>
          </FadeUpMotion>
        </div>
      </div>
    </section>
  )
}

export default Roadmap
