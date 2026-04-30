import Image from "next/image"

import banner from "@/assets/banner-book-bow.png"
function Banner() {
  return (
    <div className="mx-auto mt-10 ">
      <Image className="rounded" src={banner} width={1140} height={400} alt="Banner Image" />
    </div>
  )
}

export default Banner
