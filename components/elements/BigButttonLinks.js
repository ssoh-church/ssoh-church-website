import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const BigButtonLinks = ({ href, text }) => {
    return (
        <Link href={href}>
            <div className='flex justify-between items-center drop-shadow hover:drop-shadow-xl bg-white rounded-3xl w-full px-8 py-2 h-20 mb-3 '>
                <h2 className="text-dark  text-2xl font-bold">
                    <span className='rounded-full p-4 w-20 h-20 bg-blue-400 mr-5'><i className='fi fi-rr-hand-heart text-lg'></i></span> {text}
                </h2>
                <ArrowRightIcon className='w-5 h-5 text-indigo-500' />
            </div>

        </Link>
    );
};

export default BigButtonLinks;
