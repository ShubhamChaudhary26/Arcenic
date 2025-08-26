import Image from "next/image";

export default function Loading() {
    return (
        <div className="loading-screen" >
            <div className="loading-image-box" >
                <Image  fill src="/images/logo.jpg" className="loading-image h-[500px]" alt="Loading Image" />
            </div>
      </div>
    )
}