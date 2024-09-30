function App() {
  return (
    <div className="align-center flex h-screen min-h-screen w-full justify-center bg-slate-100">
      <div className="m-auto grid grid-cols-1 gap-8 bg-slate-100 p-4 font-medium sm:h-[800px] sm:w-[1100px] sm:grid-cols-12 sm:grid-rows-10">
        <div className="order-7 flex flex-col items-start justify-center gap-4 rounded-lg bg-bento-yellow-100 p-6 sm:order-none sm:col-span-3 sm:row-span-5 sm:items-center sm:gap-10 sm:p-8">
          <p className="text-3xl leading-7 tracking-tighter sm:text-4xl sm:leading-8">
            Create and schedule content{" "}
            <span className="italic text-bento-purple-500">quicker.</span>
          </p>
          <img
            src={"src/assets/images/illustration-create-post.webp"}
            alt=""
            className="w-3/5 sm:w-full"
          />
        </div>
        <div className="order-1 flex flex-col items-center justify-center gap-4 rounded-lg bg-bento-purple-500 p-8 sm:order-none sm:col-span-6 sm:row-span-4">
          <p className="mb-2 text-center text-5xl text-white sm:mb-0 sm:text-6xl">
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
        <div className="order-4 flex w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-bento-purple-100 p-8 sm:order-none sm:col-span-3 sm:row-span-7">
          <p className="text-2xl leading-7 tracking-tight sm:text-3xl sm:leading-7">
            Schedule to social media.
          </p>
          <img
            src={"src/assets/images/illustration-schedule-posts.webp"}
            alt=""
            className="sm:w-[520px] sm:max-w-none sm:pl-40"
          />
          <p className="text-center font-light leading-5 tracking-wide sm:text-start sm:leading-5 sm:tracking-tight">
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </div>
        <div className="order-2 flex flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-white p-6 sm:order-none sm:col-span-3 sm:row-span-3">
          <img
            src={"src/assets/images/illustration-multiple-platforms.webp"}
            alt=""
            className="relative w-full object-cover sm:left-10 sm:w-72 sm:max-w-none"
          />
          <p className="text-2xl leading-6 tracking-tight sm:text-3xl sm:leading-6">
            Manage multiple accounts and platforms.
          </p>
        </div>

        <div className="order-3 flex flex-col items-start justify-center gap-4 overflow-hidden rounded-lg bg-bento-yellow-500 p-6 pb-0 sm:order-none sm:col-span-3 sm:row-span-3 sm:items-center sm:gap-14">
          <p className="text-2xl leading-6 tracking-tight sm:text-[1.65rem]">
            Maintain a consistent posting schedule.
          </p>
          <img
            src={"src/assets/images/illustration-consistent-schedule.webp"}
            alt=""
            className="h-[136px] w-52 object-cover object-top sm:h-auto sm:max-h-none sm:w-full sm:max-w-none"
          />
        </div>
        <div className="order-8 flex flex-col justify-between rounded-lg bg-bento-yellow-500 p-5 sm:order-none sm:col-span-3 sm:row-span-5">
          <p className="pr-10 text-3xl leading-7 tracking-tighter sm:text-4xl sm:leading-8">
            Write your content using Al.
          </p>
          <img
            src={"src/assets/images/illustration-ai-content.webp"}
            alt=""
            className="mt-4 w-4/6 sm:mt-0 sm:w-full"
          />
        </div>
        <div className="order-6 flex flex-col gap-3 rounded-lg bg-white p-6 sm:order-none sm:col-span-3 sm:row-span-3 sm:gap-0 sm:p-5">
          <p className="text-5xl sm:mb-2 sm:text-6xl"> {">"}56% </p>
          <p className="font-light">faster audience growth</p>
          <img
            src={"src/assets/images/illustration-audience-growth.webp"}
            alt=""
            className="w-1/2 max-w-none sm:mt-auto sm:w-5/6"
          />
        </div>

        <div className="order-5 flex flex-col items-center justify-center gap-6 rounded-lg bg-bento-purple-500 p-6 sm:order-none sm:col-span-6 sm:row-span-3 sm:flex-row sm:gap-8 sm:p-5">
          <img
            src={"src/assets/images/illustration-grow-followers.webp"}
            alt=""
            className="w-3/5 sm:w-full"
          />
          <p className="self-center px-10 text-center text-3xl leading-7 tracking-tight text-white sm:px-0 sm:text-start sm:text-[2.5rem] sm:leading-8">
            Grow followers with non-stop content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
