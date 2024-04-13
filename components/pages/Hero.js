
  
  export default function Hero() {
    return (
        <div className="flex relative flex-row items-stretch justify-start w-full max-w-full overflow-hidden min-h-[550px] min-w-0 rounded-lg">
        <div className="relative h-[34.375rem] w-full rounded-sm">
          <div className="relative h-full w-full">
            <div className="h-full">
              <div className="opacity-1 absolute left-0 top-0 h-full w-full transition ease-in-out duration-500 ">
                <img
                  src="gregerhabor.jpg"
                  loading="eager"
                  alt="F"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-0 z-20 flex w-full items-end">
              <div className="z-10 relative w-full">
                <div className="z-10 absolute bottom-4 h-max w-full rounded-sm px-6 font-DM">
                  <span className="max-w-[109px] bg-gray-600 py-3 relative flex items-center my-auto justify-center whitespace-nowrap rounded-xl px-[10px] h-[23px] text-xs font-bold text-white">
                    Latest Sermon
                  </span>
                  <h1 className="text-[32px] font-bold leading-[38.4px] text-white mb-[6px] my-5">
                    The Ressurection
                  </h1>
                  <div className="flex flex-wrap gap-2 sm:gap-3 my-4">
                    <a
                      className="text-white bg-indigo-500 px-7 py-2 rounded-2xl"
                      id="ec-central-header-ec-watch-sermon"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >Watch Sermon
                    </a>
                    <a
                      className="text-dark bg-white px-7 py-2 rounded-2xl"
                      id="ec-central-header-ec-watch-sermon"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >View More Sermon
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  