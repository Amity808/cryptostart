import React from 'react'
import Image from "next/image"
const Show = () => {
  return (
    <div className=' flex justify-center items-center'>
          <div className='flex gap-10 flex-wrap w-full justify-center items-center' >
      <div className=' bg-[#272d37] text-white flex flex-col items-center justify-center w-[380px] h-[320px] rounded-lg text-center'>
      <div>
        <Image src="/wallet1.png" alt='startpay' width={50} className="mb-5" height={50} />
      </div>
      <div>
        <p className=" text-lg font-normal">Connect your account</p>
        <p>Connect Your wallet to get started.</p>
      </div>
    </div>
    <div className=' bg-[#272d37] text-white flex flex-col items-center justify-center w-[380px] h-[320px] rounded-lg text-center'>
      <div>
        <Image src="/payment.png" alt='startpay' width={50} className="mb-5" height={50} />
      </div>
      <div>
        <p className=" text-lg font-normal">Create Payment</p>
        <p>Generate Your desire link payment</p>
      </div>
    </div>
    <div className=' bg-[#272d37] text-white flex flex-col items-center justify-center w-[380px] h-[320px] rounded-lg text-center'>
      <div>
        <Image src="/wallet.png" alt='startpay' width={50} className="mb-5" height={50} />
      </div>
      <div>
        <p className=" text-lg font-normal">Share and Payment</p>
        <p>Share payment to your loved ones and enjoy crossborder payment</p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Show