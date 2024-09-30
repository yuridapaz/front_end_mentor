function App() {
  return (
    <div className="align-center flex h-screen min-h-screen w-full justify-center bg-slate-100">
      <div className="m-auto grid h-[800px] w-[1100px] grid-cols-12 grid-rows-10 gap-8 font-medium">
        <div className="col-span-3 row-span-5 flex flex-col items-center justify-center gap-10 rounded-lg bg-bento-yellow-100 p-8">
          <p className="text-4xl leading-8 tracking-tighter">
            Create and schedule content{" "}
            <span className="italic text-bento-purple-500">quicker.</span>
          </p>
          <img src={"src/assets/images/illustration-create-post.webp"} alt="" />
        </div>
        <div className="col-span-6 row-span-4 flex flex-col items-center justify-center gap-4 rounded-lg bg-bento-purple-500 p-8">
          <p className="text-center text-6xl text-white">
            Social Media <span className="text-bento-yellow-500">10x</span>{" "}
            <span className="italic">Faster</span> with Al
          </p>
          <img
            src={"src/assets/images/illustration-five-stars.webp"}
            alt=""
            className="-mb-2 w-44"
          />
          <p className="text-center text-base font-light text-white">
            Over 4.000 5-star reviews
          </p>
        </div>
        <div className="col-span-3 row-span-7 flex w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-bento-purple-100 p-8">
          <p className="text-3xl leading-7 tracking-tight">
            Schedule to social media.
          </p>

          <img
            src={"src/assets/images/illustration-schedule-posts.webp"}
            alt=""
            className="w-[520px] max-w-none pl-40"
          />

          <p className="font-light leading-5 tracking-tight">
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </div>
        <div className="col-span-3 row-span-3 flex flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-white p-6">
          <img
            src={"src/assets/images/illustration-multiple-platforms.webp"}
            alt=""
            className="relative left-10 w-72 max-w-none object-cover"
          />
          <p className="text-3xl leading-6 tracking-tight">
            Manage multiple accounts and platforms.
          </p>
        </div>
        <div className="col-span-3 row-span-3 flex flex-col items-center justify-center gap-14 overflow-hidden rounded-lg bg-bento-yellow-500 p-6 pb-0">
          <p className="text-[1.65rem] leading-6 tracking-tight">
            Maintain a consistent posting schedule.
          </p>
          <img
            src={"src/assets/images/illustration-consistent-schedule.webp"}
            alt=""
            className="max-h-none w-full max-w-none object-cover object-top"
          />
        </div>
        <div className="col-span-3 row-span-5 rounded-lg bg-bento-yellow-500">
          <img src="" alt="" />
        </div>
        <div className="col-span-3 row-span-3 rounded-lg bg-white">
          <img src="" alt="" />
        </div>
        <div className="col-span-6 row-span-3 rounded-lg bg-bento-purple-500">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
