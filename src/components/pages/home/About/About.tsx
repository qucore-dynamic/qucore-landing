// Styles
import './About.scss'

// Components
import Cloud from '@components-ui/Cloud/Cloud'
import SectionHeader from '@components-ui/SectionHeader'
import FadeUpMotion from '@components-shared/FadeUpMotion'

const About = () => {
  return (
    <div id='about-section' className='flex flex-col justify-center items-center mb-37.5'>
      <Cloud fileName='about.svg' className='About_cloud left-0' />

      <FadeUpMotion delay={0} x={0} y={50}>
        <SectionHeader>What is QuCore Dynamic?</SectionHeader>
      </FadeUpMotion>

      <div className='About_wraper flex flex-col justify-center items-center mt-25'>
        <div className='About_content flex justify-center items-center gap-12.5'>
          <div className='About_schema w-[50%] flex flex-col justify-center items-center'>
            <div className='About_schema-steps w-full max-w-112.5 flex flex-col justify-center items-center'>
              <FadeUpMotion
                delay={0.1}
                x={-75}
                y={0}
                className='About_schema-step About_schema-step-1 self-start bg-(--bl) px-[25%] py-[7.5%] font-coda text-[clamp(1rem,1.75vw,1.5rem)] flex flex-col justify-center items-center rounded-[20px] border border-(--border)'
              >
                <div>Event</div>
              </FadeUpMotion>

              <FadeUpMotion
                delay={0.1}
                x={-75}
                y={0}
                className='About_schema-arrow z-1 mr-[25%] self-center flex flex-col justify-center items-center relative'
              >
                <div className='About_schema-arrow-line w-[2px] h-16.25 bg-(--o-txt)'></div>
                <div className='absolute -bottom-1.5 w-3 h-3 rounded-full bg-(--o-txt) z-1'></div>
              </FadeUpMotion>

              <FadeUpMotion
                delay={0.2}
                x={-75}
                y={0}
                className='About_schema-step About_schema-step-2 self-center bg-(--bl) px-[25%] py-[7.5%] font-coda text-[clamp(1rem,1.75vw,1.5rem)] flex flex-col justify-center items-center rounded-[20px] border border-(--border)'
              >
                <div>Action</div>
              </FadeUpMotion>

              <FadeUpMotion
                delay={0.2}
                x={-75}
                y={0}
                className='About_schema-arrow z-1 ml-[25%] self-center flex flex-col justify-center items-center relative'
              >
                <div className='About_schema-arrow-line w-[2px] h-16.25 bg-(--o-txt)'></div>
                <div className='absolute -bottom-1.5 w-3 h-3 rounded-full bg-(--o-txt) z-1'></div>
              </FadeUpMotion>

              <FadeUpMotion
                delay={0.3}
                x={-75}
                y={0}
                className='About_schema-step About_schema-step-3 self-end bg-(--bl) px-[25%] py-[7.5%] font-coda text-[clamp(1rem,1.75vw,1.5rem)] flex flex-col justify-center items-center rounded-[20px] border border-(--border)'
              >
                <div>Result</div>
              </FadeUpMotion>
            </div>
          </div>

          <div className='About_text font-afacad text-[clamp(1rem,1.75vw,1.5rem)] text-start w-full max-w-[50%]'>
            <FadeUpMotion delay={0.5} x={75} y={0}>
              QuCore Dynamic is a modular platform designed to simplify the creation of dynamic,
              interconnected systems. Instead of hardcoding every process, developers can define
              events, actions, and relationships that automatically drive application behavior
            </FadeUpMotion>

            <br />
            <br />

            <FadeUpMotion delay={0.6} x={-75} y={0}>
              Built on an event-driven architecture, the platform ensures every action triggers
              meaningful consequences. A completed task can update statistics, a received shipment
              can affect inventory and finances, and a single user action can launch entire chains
              of automated processes
            </FadeUpMotion>

            <br />
            <br />

            <FadeUpMotion delay={0.7} x={75} y={0}>
              By combining automation with a modular design, QuCore Dynamic helps developers build
              scalable solutions that are easier to maintain, extend, and adapt. Whether you're
              creating educational platforms, business management tools, or simulation projects, it
              reduces complexity and encourages rapid development through a clean, extensible
              architecture
            </FadeUpMotion>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
