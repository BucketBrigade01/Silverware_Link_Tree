import React from "react"

function Card() {
  return (
    <div className="overflow-hidden flex flex-col justify-center items-center bg-violet-500  h-screen lg:h-96 lg:w-64 md:scale-150 rounded-none md:rounded-2xl drop-shadow-2xl">
      <img 
        src="/assets/silverware_hero.png" 
        alt=""
        className="flex-4 pt-8" 
      />
      <a 
        href="https://open.spotify.com/artist/67y3Exu2lTpy9Vp4evxHEB" 
        target="_blank"
        className="flex-2 pb-16 pt-12 md:pb-4 md:pt-0 text-amber-400 md:rotate-0 [text-shadow:_1px_1px_0_rgb(213_54_0_/_100%),_3px_2px_0_rgb(0_0_0_/_100%)] font-bold text-4xl md:text-2xl hover:text-orange-500 transition-all duration-200">
        SPOTIFY
      </a>
      <a 
        href="https://www.instagram.com/silverware_band/" 
        target="_blank"
        className="flex-2 pb-16 md:pb-4 text-amber-400 md:rotate-0 [text-shadow:_1px_1px_0_rgb(213_54_0_/_100%),_3px_2px_0_rgb(0_0_0_/_100%)] font-bold text-4xl md:text-2xl hover:text-orange-500 transition-all duration-200">
        INSTAGRAM
      </a>
      <a 
        href="https://music.apple.com/za/artist/silverware/1688771856" 
        target="_blank"
        className="flex-2 pb-16 md:pb-4 text-amber-400 md:rotate-0 [text-shadow:_1px_1px_0_rgb(213_54_0_/_100%),_3px_2px_0_rgb(0_0_0_/_100%)] font-bold text-4xl md:text-2xl hover:text-orange-500 transition-all duration-200">
        APPLE MUSIC
      </a>
      <a 
        href="https://www.facebook.com/profile.php?id=100092845976787" 
        target="_blank"
        className="flex-2 pb-16 text-amber-400 transform  [text-shadow:_1px_1px_0_rgb(213_54_0_/_100%),_3px_2px_0_rgb(0_0_0_/_100%)] font-bold hover:text-orange-500 text-4xl md:text-2xl transition-all duration-200"
      >
        FACEBOOK
      </a>
    </div>
  )
}

export default Card