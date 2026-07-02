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

      <div className='flex justify-center items-center'>
        <div className='Process_content w-full flex flex-col justify-center items-start text-center relative mt-25'>
          <FadeUpMotion
            delay={0.1}
            x={0}
            y={75}
            className='Process_block z-3 flex justify-start items-center relative'
          >
            <div className='Process_block-content flex flex-col justify-center items-center'>
              <div className='Process_card w-full max-w-87.5 min-h-48 p-8.75 bg-(--bl) border border-(--border) rounded-[20px] flex flex-col justify-center items-center relative z-2'>
                <h3 className='Process_card-num absolute top-0 left-5.75 font-coda text-[clamp(3rem,4.5vw,7.5rem)] -z-1 blur-[0.075rem] select-none'>
                  01
                </h3>

                <h3 className='font-prosto text-[clamp(1.25rem,6vw,1.75rem)]'>Shipment Arrives</h3>

                <h4 className='mt-1.25 font-afacad text-[clamp(1rem,5.5vw,1.375rem)]'>
                  (Warehouse A)
                </h4>
              </div>

              <p className='Process_block-text max-w-82 mt-3.75 font-prosto text-[clamp(0.85rem,1vw,1.1rem)]'>
                Trigger event that starts the entire process. It can come from user input, API, or
                external system
              </p>
            </div>

            <div className='Process_block-image flex flex-col justify-center items-center w-max absolute left-84'>
              <img
                src='images/arrow.svg'
                alt='Arrow image'
                className='w-71 mb-17 relative pointer-events-none select-none'
              />

              <div className='absolute -top-6'>
                <div className='w-12.5 h-12.5 bg-(--bl) outline-[3px] border-(--o-txt) rounded-full flex justify-center items-center'>
                  <img
                    src='images/icons/economy_module.svg'
                    alt='Economy module icon'
                    className='w-6.25 pointer-events-none select-none'
                  />
                </div>
              </div>
            </div>
          </FadeUpMotion>

          <FadeUpMotion
            delay={0.2}
            x={0}
            y={75}
            className='Process_block z-2 flex justify-start items-center relative ml-109 -mt-40'
          >
            <div className='Process_block-content flex flex-col justify-center items-center'>
              <div className='Process_card w-full max-w-87.5 min-h-48 p-8.75 bg-(--bl) border border-(--border) rounded-[20px] flex flex-col justify-center items-center relative z-2'>
                <h3 className='Process_card-num absolute top-0 left-5.75 font-coda text-[clamp(3rem,4.5vw,7.5rem)] -z-1 blur-[0.075rem] select-none'>
                  02
                </h3>

                <h3 className='font-prosto text-[clamp(1.25rem,5.5vw,1.75rem)]'>Economy Module</h3>

                <h4 className='mt-1.25 font-afacad text-[clamp(1rem,5.5vw,1.375rem)]'>
                  +500 USD revenue recorded
                </h4>
              </div>

              <p className='Process_block-text max-w-82 mt-3.75 font-prosto text-[clamp(0.85rem,1vw,1.1rem)]'>
                Updates financial state of the system based on the event data (e.g. revenue, costs,
                balances)
              </p>
            </div>

            <div className='Process_block-image flex flex-col justify-center items-center w-max absolute left-84'>
              <img
                src='images/arrow.svg'
                alt='Arrow image'
                className='w-71 mb-17 relative pointer-events-none select-none'
              />

              <div className='absolute -top-6'>
                <div className='w-12.5 h-12.5 bg-(--bl) outline-[3px] border-(--o-txt) rounded-full flex justify-center items-center'>
                  <img
                    src='images/icons/task_system.svg'
                    alt='Task system icon'
                    className='w-6.25 pointer-event-none select-none'
                  />
                </div>
              </div>
            </div>
          </FadeUpMotion>

          <FadeUpMotion
            delay={0.3}
            x={0}
            y={75}
            className='Process_block flex justify-start items-center relative ml-218 -mt-40'
          >
            <div className='Process_block-content flex flex-col justify-center items-center'>
              <div className='Process_card w-full max-w-87.5 min-h-48 p-8.75 bg-(--bl) border border-(--border) rounded-[20px] flex flex-col justify-center items-center relative z-2'>
                <h3 className='Process_card-num absolute top-0 left-5.75 font-coda text-[clamp(3rem,4.5vw,7.5rem)] -z-1 blur-[0.075rem] select-none'>
                  03
                </h3>

                <h3 className='font-prosto text-[clamp(1.25rem,5.5vw,1.75rem)]'>Task System</h3>

                <h4 className='mt-1.25 font-afacad text-[clamp(1rem,5.5vw,1.375rem)]'>
                  Task created: “Unload cargo in Zone B”
                </h4>
              </div>

              <p className='Process_block-text max-w-82 mt-3.75 font-prosto text-[clamp(0.85rem,1vw,1.1rem)]'>
                Automatically generates actionable tasks for responsible users or roles
              </p>
            </div>

            <div className='Process_block-image flex flex-col justify-center items-center w-max absolute left-87.5'>
              <img
                src='images/arrow.svg'
                alt='Arrow image'
                className='w-71 mb-17 relative pointer-events-none select-none'
              />

              <div className='absolute -top-6'>
                <div className='w-12.5 h-12.5 bg-(--bl) outline-[3px] border-(--o-txt) rounded-full flex justify-center items-center'>
                  <img
                    src='images/icons/inventory_system.svg'
                    alt='Invertory system icon'
                    className='w-6.25 pointer-event-none select-none'
                  />
                </div>
              </div>
            </div>
          </FadeUpMotion>

          <FadeUpMotion
            delay={0.4}
            x={0}
            y={75}
            className='Process_block flex justify-start items-center relative ml-330 -mt-35.75'
          >
            <div className='Process_block-content flex flex-col justify-center items-center'>
              <div className='Process_card w-full max-w-87.5 min-h-48 p-8.75 bg-(--bl) border border-(--border) rounded-[20px] flex flex-col justify-center items-center relative z-2'>
                <h3 className='Process_card-num absolute top-0 left-5.75 font-coda text-[clamp(3rem,4.5vw,7.5rem)] -z-1 blur-[0.075rem] select-none'>
                  04
                </h3>

                <h3 className='font-prosto text-[clamp(1.25rem,5.5vw,1.75rem)]'>
                  Inventory System
                </h3>

                <h4 className='mt-1.25 font-afacad text-[clamp(1rem,5.5vw,1.375rem)]'>
                  +150 items added to stock
                </h4>
              </div>

              <p className='Process_block-text max-w-82 mt-3.75 font-prosto text-[clamp(0.85rem,1vw,1.1rem)]'>
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
