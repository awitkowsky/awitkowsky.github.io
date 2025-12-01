function About() {
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <div className="flex w-4/5 gap-0 h-110 rounded-2xl">
        <div className="w-1/2 flex flex-col justify-center items-start border-r-2 border-amber-400 text-left pr-20">
          <h1 className="text-7xl font-bold text-white mb-6">
            Antoni Witkowski
          </h1>
          <p className="text-xl text-[#dbcaba] mb-10">
            I'm a student at SCI Technical School, majoring in IT with a
            specialization in cybersecurity. I'm from Poland, and I love
            creating things where I can actually see the results — it gives me
            joy and a real sense of pride. I’m always eager to learn new
            technologies, and web development is not just a skill for me — it’s
            something I genuinely enjoy.
          </p>
          <div className="w-9/10 bg-gray-900 p-2 text-center italic font-semibold rounded-2xl border-1 border-amber-500 m-3 text-base">
            <a
              target="_BLANK"
              href="https://en.wikipedia.org/wiki/Poland#Cuisine"
              className="cursor-default"
            >
              „Responsywność? Tak, reaguję płaczem. Ale przynajmniej jestem consistent, w przeciwieństwie do mojego UI.”
            </a>
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-center">
          <img
            src="dasda-modified.png"
            alt="Antoni's profile graphic"
            className="object-contain h-full w-full drop-shadow-amber-500 drop-shadow-md"
          />
        </div>
      </div>
    </main>
  );
}

export default About;
