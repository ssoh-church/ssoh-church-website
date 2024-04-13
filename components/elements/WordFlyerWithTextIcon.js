import Link from "next/link";
import '@flaticon/flaticon-uicons/css/all/all.css'

export default function WordFlyerWithTextIcon({ data }) {
  return (
    <div className="text-dark bg-white p-5 rounded-xl mb-2">
      <h3 className="text-2xl font-bold">{data.title}</h3>
      <p className="text-gray-400 text-xl font-medium">{data.description}</p>
      {data.links.map((item, key) => (
        item.href ? (
          <Link href={item.href} key={key}>
            <div className='flex justify-start items-center hover:bg-gray-100 bg-white rounded-lg w-full my-1 px-2 py-2 h-14'>
              <i className={`${item.iconClass} mr-2 text-2xl`} ></i>
              <h2 className="text-dark text-lg font-semibold tracking-wide">
                {item.title}
              </h2>
            </div>
          </Link>
        ) : (
          <div className='flex justify-start items-center hover:bg-gray-100 bg-white rounded-lg w-full my-1 px-2 py-2 h-14' key={key}>
            <i className={`${item.iconClass} mr-2 text-2xl`} ></i>
            <h2 className="text-dark text-lg font-semibold tracking-wide">
              {item.title}
            </h2>
          </div>
        )
      ))}

    </div>
  )
}