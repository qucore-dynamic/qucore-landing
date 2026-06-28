// Styles
import './Process.scss'

// Components
import Cloud from '@components-ui/Cloud/Cloud'
import FadeUpMotion from '@components-shared/FadeUpMotion'
import SectionHeader from '@components-ui/SectionHeader'

const Process = () => {
  return (
    <section className='flex flex-col justify-center items-center relative mb-37.5'>
      <Cloud fileName='process.svg' className='left-0' />

      <FadeUpMotion delay={0} x={0} y={50}>
        <SectionHeader>How it works</SectionHeader>
      </FadeUpMotion>

      <div className='Process_wrapper flex justify-center items-center'>
        <div className='Process_content w-full flex flex-col justify-center items-start text-center relative mt-25'>
          <FadeUpMotion
            delay={0.1}
            x={0}
            y={50}
            className='Process_block flex justify-start items-center relative'
          >
            <div className='Process_block-content flex flex-col justify-center items-center'>
              <div className='Process_card w-full max-w-87.5 min-h-48 p-8.75 bg-(--bl) border border-(--border) rounded-[20px] flex flex-col justify-center items-center'>
                <h3 className='Process_card-header font-prosto text-[clamp(1rem,6vw,1.75rem)]'>
                  Shipment Arrives
                </h3>

                <h4 className='Process_card-text mt-1.25 font-afacad text-[clamp(1rem,5.5vw,1.375rem)]'>
                  (Warehouse A)
                </h4>
              </div>

              <p className='Process_block-text max-w-82 mt-3.75 font-prosto text-[clamp(1rem,4vw,1.375rem)]'>
                Trigger event that starts the entire process. It can come from user input, API, or
                external system
              </p>
            </div>

            <div className='Process_block-image flex flex-col justify-center items-center w-max absolute left-84'>
              <img
                src='images/arrow.svg'
                alt='Arrow image'
                className='Process_block-arrow-line w-71 mb-17 relative pointer-events-none select-none'
              />

              <div className='Process_block-arrow absolute -top-6'>
                <div className='Process_block-arrow-circle w-12.5 h-12.5 bg-(--bl) outline-[3px] border-(--o-txt) rounded-full flex justify-center items-center'>
                  <img
                    src='images/icons/economy_module.svg'
                    alt='Economy module icon'
                    className='Process_block-arrow-circle-icon w-6.25 pointer-events-none select-none'
                  />
                </div>
              </div>
            </div>
          </FadeUpMotion>

          <FadeUpMotion
            delay={0.2}
            x={0}
            y={50}
            className='Process_block flex justify-start items-center relative ml-109 -mt-40'
          >
            <div className='Process_block-content flex flex-col justify-center items-center'>
              <div className='Process_card w-full max-w-87.5 min-h-48 p-8.75 bg-(--bl) border border-(--border) rounded-[20px] flex flex-col justify-center items-center'>
                <h3 className='Process_card-header font-prosto text-[clamp(1rem,5.5vw,1.75rem)]'>
                  Economy Module
                </h3>

                <h4 className='Process_card-text mt-1.25 font-afacad text-[clamp(1rem,5.5vw,1.375rem)]'>
                  +500 USD revenue recorded
                </h4>
              </div>

              <p className='Process_block-text max-w-82 mt-3.75 font-prosto text-[clamp(1rem,4vw,1.375rem)]'>
                Updates financial state of the system based on the event data (e.g. revenue, costs,
                balances)
              </p>
            </div>

            <div className='Process_block-image flex flex-col justify-center items-center w-max absolute left-84'>
              <img
                src='images/arrow.svg'
                alt='Arrow image'
                className='Process_block-arrow-line w-71 mb-17 relative pointer-events-none select-none'
              />

              <div className='Process_block-arrow absolute -top-6'>
                <div className='Process_block-arrow-circle w-12.5 h-12.5 bg-(--bl) outline-[3px] border-(--o-txt) rounded-full flex justify-center items-center'>
                  <img
                    src='images/icons/task_system.svg'
                    alt='Task system icon'
                    className='Process_block-arrow-circle-icon w-6.25 pointer-event-none select-none'
                  />
                </div>
              </div>
            </div>
          </FadeUpMotion>

          <FadeUpMotion
            delay={0.3}
            x={0}
            y={50}
            className='Process_block flex justify-start items-center relative ml-218 -mt-40'
          >
            <div className='Process_block-content flex flex-col justify-center items-center'>
              <div className='Process_card w-full max-w-87.5 min-h-48 p-8.75 bg-(--bl) border border-(--border) rounded-[20px] flex flex-col justify-center items-center'>
                <h3 className='Process_card-header font-prosto text-[clamp(1rem,5.5vw,1.75rem)]'>
                  Task System
                </h3>

                <h4 className='Process_card-text mt-1.25 font-afacad text-[clamp(1rem,5.5vw,1.375rem)]'>
                  Task created: “Unload cargo in Zone B”
                </h4>
              </div>

              <p className='Process_block-text max-w-82 mt-3.75 font-prosto text-[clamp(1rem,4vw,1.375rem)]'>
                Automatically generates actionable tasks for responsible users or roles
              </p>
            </div>

            <div className='Process_block-image flex flex-col justify-center items-center w-max absolute left-87.5'>
              <img
                src='images/arrow.svg'
                alt='Arrow image'
                className='Process_block-arrow-line w-71 mb-17 relative pointer-events-none select-none'
              />

              <div className='Process_block-arrow absolute -top-6'>
                <div className='Process_block-arrow-circle w-12.5 h-12.5 bg-(--bl) outline-[3px] border-(--o-txt) rounded-full flex justify-center items-center'>
                  <img
                    src='images/icons/inventory_system.svg'
                    alt='Invertory system icon'
                    className='Process_block-arrow-circle-icon w-6.25 pointer-event-none select-none'
                  />
                </div>
              </div>
            </div>
          </FadeUpMotion>

          <FadeUpMotion
            delay={0.4}
            x={0}
            y={50}
            className='Process_block flex justify-start items-center relative ml-327 -mt-35.75'
          >
            <div className='Process_block-content flex flex-col justify-center items-center'>
              <div className='Process_card w-full max-w-87.5 min-h-48 p-8.75 bg-(--bl) border border-(--border) rounded-[20px] flex flex-col justify-center items-center'>
                <h3 className='Process_card-header font-prosto text-[clamp(1rem,5.5vw,1.75rem)]'>
                  Inventory System
                </h3>

                <h4 className='Process_card-text mt-1.25 font-afacad text-[clamp(1rem,5.5vw,1.375rem)]'>
                  +150 items added to stock
                </h4>
              </div>

              <p className='Process_block-text max-w-82 mt-3.75 font-prosto text-[clamp(1rem,4vw,1.375rem)]'>
                Adjusts stock levels based on the received shipment data and updates system state
              </p>
            </div>
          </FadeUpMotion>
        </div>
      </div>
    </section>
  )
}

export default Process
