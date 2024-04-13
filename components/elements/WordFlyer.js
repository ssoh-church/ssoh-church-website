import Link from "next/link";


export default function WordFlyer({ data }) {
    return (
        <div className="text-dark bg-white p-5 rounded-xl mb-3">
            <h3 className="text-2xl font-bold">{data.title}</h3>
            <p className="text-gray-400 text-xl font-medium">{data.description}</p>
            {data.links.map((item, key) => (
                <Link href={item.href} key={key}>
                    <div className='flex justify-start items-center hover:bg-gray-100 bg-white rounded-lg w-full my-1 px-8 py-2 h-14'>
                        <h2 className="text-dark  text-lg text-dark font-semibold tracking-wide">
                            {item.title}
                        </h2>
                    </div>

                </Link>
            ))}

        </div>
    )
}