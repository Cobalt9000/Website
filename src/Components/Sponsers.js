import React from 'react'

function Sponsers() {
  return (
    <div className='scroll' data-section-name={"s-four"} id={"Sponsers"}>
      <section class="text-gray-600 body-font h-full pt-10 w-full sponsors">
        <div class="container text-4xl mx-auto w-full text-center text-white">Sponsers</div>
        <div class="container px-5 py-8 mx-auto">
          {/* <div class="self-center items-center font-bold text-white text-xl pb-8">Gold</div> */}
          <div class="flex flex-wrap -m-4">
            <div class="p-4 w-1/3">
              <div class="">
                <img class="lg:h-24 md:h-16 w-full  object-center" src="devfolio_logo_white.png" alt="sponser_logo" />
              </div>
            </div>
            <div class="p-4 w-1/3">
              <div class="">
                {/* <img class="lg:h-24 md:h-16 w-full  object-center" src="filecoin_white.png" alt="sponser_logo" /> */}
              </div>
            </div>
            <div class="p-4 w-1/3">
              <div class="">
                <img class="lg:h-24 md:h-16 w-full  object-center" src="filecoin_white.png" alt="sponser_logo" />
              </div>
            </div>
          </div>
        </div>
        {/* Silver */}
        <div class="container px-5 py-8 mx-auto">
          {/* <div class="self-center items-center font-bold text-white text-xl pb-8">Silver</div> */}
          <div class="flex flex-wrap -m-4">
            <div class="p-4 w-1/3">
              <div class="">
                <img class="lg:h-24 md:h-16 w-full  object-center" src="polygon_logo_white.png" alt="sponser_logo" />

              </div>
            </div>
            <div class="p-4 w-1/3">
              <div class="">
                {/* <img class="lg:h-24 md:h-16 w-full  object-center" src="" alt="sponser_logo" /> */}

              </div>
            </div>
            <div class="p-4 w-1/3">
              <div class="">
                <img class="lg:h-24 md:h-16 w-full  object-center" src="replit_white.png" alt="sponser_logo" />
              </div>
            </div>
          </div>
        </div>
        {/* Bronze */}
        <div class="container px-5 py-8 mx-auto">
          {/* <div class="self-center items-center font-bold text-white text-xl pb-8">Bronze</div> */}
          <div class="flex flex-wrap -m-4">
            <div class="p-4 w-1/3">
              <div class="">
                {/* <img class="lg:h-24 md:h-16 w-full  object-center" src="" alt="sponser_logo" /> */}

              </div>
            </div>
            <div class="p-4 w-1/3">
              <div class="">
                <img class="lg:h-24 md:h-16 w-full  object-center" src="solana_white.png" alt="sponser_logo" />

              </div>
            </div>
            <div class="p-4 w-1/3">
              <div class="">
                {/* <img class="lg:h-24 md:h-16 w-full  object-center" src="" alt="sponser_logo" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sponsers