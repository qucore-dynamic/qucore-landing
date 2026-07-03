// Styles
import './Contacts.scss'

// Components
import Cloud from '@components/ui/Cloud/Cloud'
import SectionHeader from '@components/ui/SectionHeader'
import FadeUpMotion from '@components-shared/FadeUpMotion'

const Contacts = () => {
  return (
    <section id='contacts-section' className='flex flex-col justify-center items-center relative'>
      <Cloud fileName='contacts.svg' className='left-0' />

      <FadeUpMotion delay={0} x={0} y={50}>
        <SectionHeader>Get in touch?</SectionHeader>
      </FadeUpMotion>

      <div className='Contacts_content w-full flex flex-wrap justify-center items-center gap-x-43.75 gap-y-18.75 my-56.25'>
        <FadeUpMotion
          delay={0.1}
          x={0}
          y={50}
          className='Contacts_card flex flex-col justify-center items-start bg-(--bl) border border-(--border) rounded-[20px] w-full max-w-71.25 p-6.25'
        >
          <a href='mailto:artemzhr11@gmail.com' target='_blank' className='w-full flex flex-col'>
            <img
              src='images/icons/email.svg'
              alt='Email icon'
              className='w-18.75 h-18.75 pointer-events-none select-none'
            />

            <h3 className='font-coda font-extrabold text-[1.375rem] mt-5 mb-2'>Email</h3>

            <h3 className='font-prosto text-[clamp(0.8rem,1vw,1rem)] text-(--o-txt) opacity-65'>
              qucoredynamic@gmail.com
            </h3>
          </a>
        </FadeUpMotion>

        <FadeUpMotion
          delay={0.2}
          x={0}
          y={50}
          className='Contacts_card flex flex-col justify-center items-start bg-(--bl) border border-(--border) rounded-[20px] w-full max-w-71.25 p-6.25'
        >
          <a
            href='https://github.com/qucore-dynamic'
            target='_blank'
            className='w-full flex flex-col'
          >
            <img
              src='images/icons/github.svg'
              alt='GitHub icon'
              className='w-18.75 h-18.75 pointer-events-none select-none'
            />

            <h3 className='font-coda font-extrabold text-[1.375rem] mt-5 mb-2'>GitHub</h3>

            <h4 className='font-prosto text-[clamp(0.8rem,1vw,1rem)] text-(--o-txt) opacity-65'>
              qucore-dynamic
            </h4>
          </a>
        </FadeUpMotion>

        <FadeUpMotion
          delay={0.3}
          x={0}
          y={50}
          className='Contacts_card flex flex-col justify-center items-start bg-(--bl) border border-(--border) rounded-[20px] w-full max-w-71.25 p-6.25'
        >
          <a href='https://discord.gg/BsPGCvmZVt' target='_blank' className='w-full flex flex-col'>
            <img
              src='images/icons/discord.svg'
              alt='Discord icon'
              className='w-18.75 h-18.75 pointer-events-none select-none'
            />

            <h3 className='font-coda font-extrabold text-[1.375rem] mt-5 mb-2'>Discord</h3>

            <h4 className='font-prosto text-[clamp(0.8rem,1vw,1rem)] text-(--o-txt) opacity-65'>
              QuCore Dynamic
            </h4>
          </a>
        </FadeUpMotion>
      </div>

      <FadeUpMotion delay={0.3} x={50} y={0}>
        <footer className='font-prosto text-[clamp(0.65rem,0.75vw,1rem)] text-(--o-txt) text-center mb-5'>
          © 2026 QuCore Dynamic. All rights reserved
        </footer>
      </FadeUpMotion>
    </section>
  )
}

export default Contacts
