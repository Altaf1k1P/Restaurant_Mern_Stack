import React from 'react'

function Footer() {
  return (
    <footer class="flex flex-col gap-6 px-5 py-10 text-center @container">
      <div class="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
        <a class="text-[#96524f] text-base font-normal leading-normal min-w-40" href="#">About Us</a>
        <a class="text-[#96524f] text-base font-normal leading-normal min-w-40" href="#">Contact Us</a>
        <a class="text-[#96524f] text-base font-normal leading-normal min-w-40" href="#">Careers</a>
        <a class="text-[#96524f] text-base font-normal leading-normal min-w-40" href="#">Press</a>
        <a class="text-[#96524f] text-base font-normal leading-normal min-w-40" href="#">Blog</a>
        <a class="text-[#96524f] text-base font-normal leading-normal min-w-40" href="#">Gift Cards</a>
        <a class="text-[#96524f] text-base font-normal leading-normal min-w-40" href="#">DoorDash Stories</a>
        <a class="text-[#96524f] text-base font-normal leading-normal min-w-40" href="#">LinkedIn</a>
    </div>
    <div class="flex flex-wrap justify-center gap-4"></div>
</footer>
  )
}

export default Footer
