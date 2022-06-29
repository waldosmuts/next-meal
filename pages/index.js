import { useState } from "react"
import Image from "next/image"
import Header from "../components/home/Header"
import Main from "../components/home/Main"

export default function Home() {
  const [heroImageLoaded, setHeroImageLoaded] = useState(false)

  return (
    <>
      <div className="absolute right-0 top-0 overflow-hidden h-screen -z-10">
        <Image
          src="/images/stovetop-pot.jpg"
          width="1920px"
          height="2880px"
          alt=""
          className={`align-middle ${heroImageLoaded ? "opacity-50" : "opacity-0"} transition duration-500 z-0`}
          onLoad={() => { setHeroImageLoaded(true) }}
        />
        <div className="absolute top-0 right-0 bg-gradient-to-br from-black to-transparent w-full h-full z-10" />
      </div>
      <Header />
      <Main />
    </>
  )
}
