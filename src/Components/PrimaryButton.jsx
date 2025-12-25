import React from 'react'

function PrimaryButton(props) {
  return (
      <button
            id="apply-dm_sans-font"
            className="w-40 sm:w-60 md:w-52 lg:w-[15rem] h-12 sm:h-14 md:h-16 lg:h-[3.6rem] text-[hsl(38,61%,73%)] bg-transparent font-bold text-xs sm:text-sm md:text-sm lg:text-[12px] tracking-[3px] border-[hsl(38,61%,73%)] border-2 hover:bg-[hsl(38,61%,73%)] hover:text-black hover:cursor-pointer transition-all duration-300"
          >
            {props.content}
        </button>
  )
}

export default PrimaryButton