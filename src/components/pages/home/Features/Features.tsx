// Styles
import './Features.scss'

// Components
import Cloud from '@components-ui/Cloud/Cloud'
import SectionHeader from '@components-ui/SectionHeader'
import FadeUpMotion from '@components-shared/FadeUpMotion'

const Features = () => {
  return (
    <section className='flex flex-col justify-center items-center relative mb-37.5'>
      <Cloud fileName='features.svg' className='right-0' />

      <FadeUpMotion delay={0} x={0} y={50}>
        <SectionHeader>Core features</SectionHeader>
      </FadeUpMotion>

      <div className='w-full max-w-[105.75rem] flex flex-wrap justify-center gap-x-50 gap-y-18.75 mt-25'>
        <FadeUpMotion
          delay={0.1}
          x={0}
          y={50}
          className='Features_card flex flex-col justify-center items-center w-full max-w-107.5 min-w-50 p-6.25 bg-(--bl) border border-(--border) rounded-[20px]'
        >
          <div>
            <img
              src='images/icons/event.svg'
              alt='Event engine icon'
              className='max-h-12.5 w-auto pointer-events-none select-none'
            />
            <h3 className='text-start mt-6.25 font-prosto text-[clamp(1.25rem,2vw,1.75rem)]'>
              Event Engine
            </h3>
            <h4 className='text-start font-afacad text-[clamp(1rem,1.5vw,1.25rem)]'>
              Create and manage system events
            </h4>
          </div>
        </FadeUpMotion>

        <FadeUpMotion
          delay={0.2}
          x={0}
          y={50}
          className='Features_card flex flex-col justify-center items-center w-full max-w-107.5 min-w-50 p-6.25 bg-(--bl) border border-(--border) rounded-[20px]'
        >
          <div>
            <img
              src='images/icons/automation.svg'
              alt='Automation icon'
              className='max-h-12.5 w-auto pointer-events-none select-none'
            />
            <h3 className='text-start mt-6.25 font-prosto text-[clamp(1.25rem,2vw,1.75rem)]'>
              Automation
            </h3>
            <h4 className='text-start font-afacad text-[clamp(1rem,1.5vw,1.25rem)]'>
              Trigger actions automatically
            </h4>
          </div>
        </FadeUpMotion>

        <FadeUpMotion
          delay={0.3}
          x={0}
          y={50}
          className='Features_card flex flex-col justify-center items-center w-full max-w-107.5 min-w-50 p-6.25 bg-(--bl) border border-(--border) rounded-[20px]'
        >
          <div>
            <img
              src='images/icons/management.svg'
              alt='Management icon'
              className='max-h-12.5 w-auto pointer-events-none select-none'
            />
            <h3 className='text-start mt-6.25 font-prosto text-[clamp(1.25rem,2vw,1.75rem)]'>
              Management
            </h3>
            <h4 className='text-start font-afacad text-[clamp(1rem,1.5vw,1.25rem)]'>
              Generate and organize tasks
            </h4>
          </div>
        </FadeUpMotion>

        <FadeUpMotion
          delay={0.4}
          x={0}
          y={50}
          className='Features_card flex flex-col justify-center items-center w-full max-w-107.5 min-w-50 p-6.25 bg-(--bl) border border-(--border) rounded-[20px]'
        >
          <div>
            <img
              src='images/icons/economy.svg'
              alt='Economy icon'
              className='max-h-12.5 w-auto pointer-events-none select-none'
            />
            <h3 className='text-start mt-6.25 font-prosto text-[clamp(1.25rem,2vw,1.75rem)]'>
              Economy
            </h3>
            <h4 className='text-start font-afacad text-[clamp(1rem,1.5vw,1.25rem)]'>
              Track resources and finances
            </h4>
          </div>
        </FadeUpMotion>

        <FadeUpMotion
          delay={0.5}
          x={0}
          y={50}
          className='Features_card flex flex-col justify-center items-center w-full max-w-107.5 min-w-50 p-6.25 bg-(--bl) border border-(--border) rounded-[20px]'
        >
          <div>
            <img
              src='images/icons/architecture.svg'
              alt='Architecture icon'
              className='max-h-12.5 w-auto pointer-events-none select-none'
            />
            <h3 className='text-start mt-6.25 font-prosto text-[clamp(1.25rem,2vw,1.75rem)]'>
              Architecture
            </h3>
            <h4 className='text-start font-afacad text-[clamp(1rem,1.5vw,1.25rem)]'>
              Expand functionality with modules
            </h4>
          </div>
        </FadeUpMotion>

        <FadeUpMotion
          delay={0.6}
          x={0}
          y={50}
          className='Features_card flex flex-col justify-center items-center w-full max-w-107.5 min-w-50 p-6.25 bg-(--bl) border border-(--border) rounded-[20px]'
        >
          <div>
            <img
              src='images/icons/event_flow.svg'
              alt='Event Flow icon'
              className='max-h-12.5 w-auto pointer-events-none select-none'
            />
            <h3 className='text-start mt-6.25 font-prosto text-[clamp(1.25rem,2vw,1.75rem)]'>
              Event Flow
            </h3>
            <h4 className='text-start font-afacad text-[clamp(1rem,1.5vw,1.25rem)]'>
              Controls how events trigger actions
            </h4>
          </div>
        </FadeUpMotion>
      </div>
    </section>
  )
}

export default Features
