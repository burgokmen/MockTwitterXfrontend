import frame14 from "../assets/frame14.png";
import frame15 from "../assets/frame15.png";

const SideBarRight = () => {
  return (
    <div className="w-[50rem]">
      <input className="w-[21rem] my-5" placeholder="Search Twitter" />
      <div>
        <img src={frame14} alt="frame14" />
        <img src={frame15} alt="frame15" />
      </div>
      <div className="">
        <h1 className="my-4 text-[1.5rem] font-bold">You might like</h1>
        <div className="flex flex-col gap-4 mt-4">
          <div
            id="ComponentRoot"
            className="flex flex-row gap-8 w-full items-center"
          >
            <div className="self-start flex flex-row gap-3 w-3/5 items-start">
              <img
                src="https://file.rendit.io/n/0bb2uN81UMJaHBoUNLtq.png"
                alt="Ellipse"
                id="Ellipse"
                className="w-16 shrink-0"
              />
              <div className="flex flex-col mt-1 gap-px w-[142px] items-start">
                <div className="text-lg font-['Segoe_UI'] font-semibold">
                  Mushtariy
                </div>
                <div className="text-lg font-['Segoe_UI']">@Mushtar565266</div>
              </div>
            </div>
            <div className="bg-black flex flex-col justify-center w-24 shrink-0 h-10 items-center rounded-[50px]">
              <div className="text-lg font-['Segoe_UI'] font-bold leading-[18px] text-white">
                Follow
              </div>
            </div>
          </div>
          <div>
            <div
              id="ComponentRoot"
              className="flex flex-row gap-16 w-full items-center"
            >
              <div className="self-start flex flex-row gap-3 w-1/2 items-start">
                <img
                  src="https://file.rendit.io/n/6fGuQkv06Nak1YXXZy7N.png"
                  alt="Ellipse"
                  id="Ellipse"
                  className="w-16 shrink-0"
                />
                <div className="flex flex-col mt-1 gap-px w-3/5 items-start">
                  <div
                    id="Mushtariy"
                    className="text-lg font-['Segoe_UI'] font-semibold"
                  >
                    Shuhratbek
                  </div>
                  <div id="Mushtar" className="text-lg font-['Segoe_UI']">
                    @mrshukhrat
                  </div>
                </div>
              </div>
              <div className="bg-black flex flex-col justify-center w-24 shrink-0 h-10 items-center rounded-[50px]">
                <div className="text-lg font-['Segoe_UI'] font-bold leading-[18px] text-white">
                  Follow
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-[1.5rem] font-bold">Show more</h1>
        </div>
        <div>
          <div id="NewRootRoot" className="flex flex-col w-full">
            <div className="bg-[#f7f9f9] flex flex-row justify-between items-start pt-5 px-4 rounded-lg">
              <div className="flex flex-col mb-8 gap-8 w-1/2 items-start">
                <div className="self-stretch flex flex-col gap-5 items-start">
                  <div className="text-2xl font-['Segoe_UI'] font-bold">
                    Trends for you
                  </div>
                  <div className="self-stretch flex flex-col justify-between mr-4 gap-4">
                    <div className="flex flex-col gap-1 items-start">
                      <div className="self-stretch flex flex-col gap-px items-start">
                        <div className="font-['Segoe_UI'] text-[#393b41]">
                          Trending in Germany
                        </div>
                        <div className="text-xl font-['Segoe_UI'] font-semibold">
                          Revolution
                        </div>
                      </div>
                      <div className="font-['Segoe_UI'] text-[#393b41]">
                        50.4K Tweets
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                      <div className="self-stretch flex flex-col gap-px items-start">
                        <div className="font-['Segoe_UI'] text-[#393b41]">
                          Trending in Germany
                        </div>
                        <div className="text-xl font-['Segoe_UI'] font-semibold">
                          Revolution
                        </div>
                      </div>
                      <div className="font-['Segoe_UI'] text-[#393b41]">
                        50.4K Tweets
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                      <div className="self-stretch flex flex-col gap-px items-start">
                        <div className="font-['Segoe_UI'] text-[#393b41]">
                          Trending in Germany
                        </div>
                        <div className="text-xl font-['Segoe_UI'] font-semibold">
                          Revolution
                        </div>
                      </div>
                      <div className="font-['Segoe_UI'] text-[#393b41]">
                        50.4K Tweets
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-lg font-['Segoe_UI'] leading-[18px] text-[#1da1f2]">
                  Show more
                </div>
              </div>
              <div className="flex flex-col justify-between mt-1 w-6 shrink-0 h-64 items-end">
                <div className="self-start flex flex-col gap-10 w-6 h-16 shrink-0 items-start">
                  <img
                    src="https://file.rendit.io/n/g7PxF6YplYqf1i3viiGu.svg"
                    alt="Settings"
                    id="Settings"
                    className="w-6"
                  />
                  <img
                    src="https://file.rendit.io/n/EkiFlZ3QmTze3YpWiCMa.svg"
                    alt="Vector"
                    className="self-end w-4"
                  />
                </div>
                <img
                  src="https://file.rendit.io/n/EkiFlZ3QmTze3YpWiCMa.svg"
                  alt="Vector1"
                  className="w-4"
                />
                <img
                  src="https://file.rendit.io/n/EkiFlZ3QmTze3YpWiCMa.svg"
                  alt="Vector2"
                  className="w-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarRight;
