import { PiHeartHalfDuotone } from 'react-icons/pi'

export default function Loading() {
    return (
      <div className="sm:w-96 w-full h-screen flex flex-col justify-center items-center">
        <PiHeartHalfDuotone className="w-10 h-10 loading text-[#FF3C38]" />
      </div>
    )
  }