import React from 'react'

function Cart() {
  return (
    <div> 
        <div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h2 class="text-[#1b0e0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Your Cart</h2>
            <div class="flex items-center gap-4 bg-[#fbf8f8] px-4 min-h-[72px] py-2 justify-between">
              <div class="flex items-center gap-4">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/919f1362-ec46-416b-81c0-e11650790cc2.png")`}}
                ></div>
                <div class="flex flex-col justify-center">
                  <p class="text-[#1b0e0e] text-base font-medium leading-normal line-clamp-1">Filet Mignon</p>
                  <p class="text-[#96524f] text-sm font-normal leading-normal line-clamp-2">2 x $20.00 Medium Rare</p>
                </div>
              </div>
              <div class="shrink-0"><p class="text-[#1b0e0e] text-base font-normal leading-normal">$40.00</p></div>
            </div>
            <div class="flex items-center gap-4 bg-[#fbf8f8] px-4 min-h-[72px] py-2 justify-between">
              <div class="flex items-center gap-4">
                <div
                  class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/8a5a2d09-634a-404f-8ae7-68917199639e.png")`}}
                ></div>
                <div class="flex flex-col justify-center">
                  <p class="text-[#1b0e0e] text-base font-medium leading-normal line-clamp-1">Filet Mignon</p>
                  <p class="text-[#96524f] text-sm font-normal leading-normal line-clamp-2">2 x $20.00 Medium Rare</p>
                </div>
              </div>
              <div class="shrink-0"><p class="text-[#1b0e0e] text-base font-normal leading-normal">$40.00</p></div>
            </div>
            <div class="flex items-center gap-4 bg-[#fbf8f8] px-4 min-h-[72px] py-2 justify-between">
              <div class="flex items-center gap-4">
                <div
                  class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/bb329ce4-9047-460c-8892-ff835ed9297d.png")`}}
                ></div>
                <div class="flex flex-col justify-center">
                  <p class="text-[#1b0e0e] text-base font-medium leading-normal line-clamp-1">Filet Mignon</p>
                  <p class="text-[#96524f] text-sm font-normal leading-normal line-clamp-2">2 x $20.00 Medium Rare</p>
                </div>
              </div>
              <div class="shrink-0"><p class="text-[#1b0e0e] text-base font-normal leading-normal">$40.00</p></div>
            </div>
            <div class="flex items-center gap-4 bg-[#fbf8f8] px-4 min-h-[72px] py-2 justify-between">
              <div class="flex items-center gap-4">
                <div
                  class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/7d61e091-59d5-42c1-9f8f-8c3a48451701.png")`}}
                ></div>
                <div class="flex flex-col justify-center">
                  <p class="text-[#1b0e0e] text-base font-medium leading-normal line-clamp-1">Filet Mignon</p>
                  <p class="text-[#96524f] text-sm font-normal leading-normal line-clamp-2">2 x $20.00 Medium Rare</p>
                </div>
              </div>
              <div class="shrink-0"><p class="text-[#1b0e0e] text-base font-normal leading-normal">$40.00</p></div>
            </div>
            <div class="p-4">
              <div class="flex justify-between gap-x-6 py-2">
                <p class="text-[#96524f] text-sm font-normal leading-normal">Subtotal</p>
                <p class="text-[#1b0e0e] text-sm font-normal leading-normal text-right">$500.00</p>
              </div>
              <div class="flex justify-between gap-x-6 py-2">
                <p class="text-[#96524f] text-sm font-normal leading-normal">Delivery Fee</p>
                <p class="text-[#1b0e0e] text-sm font-normal leading-normal text-right">$50.00</p>
              </div>
              <div class="flex justify-between gap-x-6 py-2">
                <p class="text-[#96524f] text-sm font-normal leading-normal">Tax</p>
                <p class="text-[#1b0e0e] text-sm font-normal leading-normal text-right">$100.00</p>
              </div>
              <div class="flex justify-between gap-x-6 py-2">
                <p class="text-[#96524f] text-sm font-normal leading-normal">Tip</p>
                <p class="text-[#1b0e0e] text-sm font-normal leading-normal text-right">$100.00</p>
              </div>
              <div class="flex justify-between gap-x-6 py-2">
                <p class="text-[#96524f] text-sm font-normal leading-normal">Total</p>
                <p class="text-[#1b0e0e] text-sm font-normal leading-normal text-right">$750.00</p>
              </div>
            </div>
            <div class="flex px-4 py-3">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#e5302a] text-[#fbf8f8] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span class="truncate">Checkout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Cart
