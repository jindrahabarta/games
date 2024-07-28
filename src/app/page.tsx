export default function Home() {
    return (
        <main className="h-screen">
            <div className="w-full h-full flex flex-col justify-center items-center relative z-30">
                <h1 className="text-white text-6xl font-pixelify z-50">
                    Hello world!
                </h1>
                <h2 className=" text-white text-3xl font-pixelify hover:text-red-600 z-50">
                    <a href="/game1">Let´s play</a>
                </h2>
            </div>
            <div className="w-screen h-screen overflow-hidden absolute top-0 z-10 bg-slate-900 bg-opacity-80"></div>
            <div className="w-screen h-screen overflow-hidden absolute top-0 z-0 ">
                <video className="w-screen" autoPlay loop muted id="myvideo">
                    <source
                        src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rS5r4eB/videoblocks-2020_1566_wbm_sp_pixelatedvideogamestitle_b1eixtko3t__p__48381892da3f7c9dade12aa7d05a3410__P360.mp4"
                        type="video/mp4"
                    />
                    browser does not support this
                </video>
            </div>
        </main>
    )
}
