// Typescript
import { LayoutT } from '@shared-types/layouts'

const SectionHeader = ({ children }: LayoutT) => {
  return (
    <h2 className='font-prosto text-[clamp(1.5rem,2.5vw,2.375rem)] relative text-center w-full max-w-max'>
      {children}
    </h2>
  )
}

export default SectionHeader
