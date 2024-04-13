import Link from "next/link"


export default function FlyerBox({imgSrc, href}) {
    return (
        <Link href={href}>
        <div className="flex relative flex-row items-stretch justify-start w-full max-w-full overflow-hidden min-h-[550px] min-w-0 rounded-lg">
            <div className="hover:scale-105 transition ease-in duration-200  relative h-[34.375rem] w-full rounded-sm">
                <div className="relative h-full w-full">
                    <div className="h-full">
                        <div className="opacity-1 absolute left-0 top-0 h-full w-full ">
                            <img
                                src={imgSrc}
                                loading="eager"
                                alt="F"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
}
