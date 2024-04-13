import Link from "next/link";


export default function WordFlyerWithImageIcon({ data }) {
  return (
    <div className="text-dark bg-white p-5 rounded-xl mb-3">
      <h3 className="text-2xl font-bold">{data.title}</h3>
      <p className="text-gray-400 text-xl font-medium">{data.description}</p>
      {data.links.map((item, key) => (
        <Link href={item.href} key={key}>
          <div className='flex justify-start items-center hover:bg-gray-100 bg-white rounded-lg w-full my-1 px-2 py-2 h-14'>
            <Image src={item.iconSrc} className="w-20 h-20" width={20} height={20} priority />
            <h2 className="text-dark  text-lg text-dark font-semibold tracking-wide">
              {item.title}
            </h2>
          </div>

        </Link>
      ))}

    </div>
  )
}