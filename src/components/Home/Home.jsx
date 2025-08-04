function Home() {
  const skillStyle = {
    background:
      "linear-gradient(#1a1a1f, #1a1a1f) padding-box, linear-gradient(135deg, #f3701e, #a67bc5) border-box",
    border: "2px solid transparent",
    color: "#e8d8c9",
  };

  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <div className="flex w-4/5 gap-10 h-110 rounded-2xl">
        <div className="w-1/2 flex flex-col justify-center items-start border-r-2 border-amber-400 text-left pr-20">
          <h1 className="text-7xl font-bold text-white mb-6">
            Junior Frontend Developer
          </h1>
          <p className="text-2xl text-[#dbcaba] my-10">
            I'm a beginner web developer who puts everything into each project —
            not just to learn, but because I genuinely enjoy building things
            from scratch.
          </p>
          <div className="flex flex-row gap-4 text-lg mt-10 w-full">
            <div className="px-6 py-3 rounded-full text-sm" style={skillStyle}>
              React
            </div>
            <div className="px-6 py-3 rounded-full text-sm" style={skillStyle}>
              Tailwind
            </div>
            <div className="px-6 py-3 rounded-full text-sm" style={skillStyle}>
              JavaScript
            </div>
            <div className="px-6 py-3 rounded-full text-sm" style={skillStyle}>
              Pentesting
            </div>
          </div>
        </div>

        <div className="w-1/2 flex justify-center">
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3lvaTI2eXVuNG9oejRucXBwNGJ6eGFtb2p1b2Z4NmF4anFtcG5wcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/3kPDmoWdBpQPNhCnUG/giphy.gif"
            alt="Mój gif z git'a ;* "
            className="object-contain h-full w-full"
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
