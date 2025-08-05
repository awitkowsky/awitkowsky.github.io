import { Mail, Github, Linkedin } from "lucide-react";

function Contact() {
  return (
    <main className="h-screen w-screen flex items-center justify-center px-6">
      <div className="flex w-4/5 gap-0 h-110 rounded-2xl">
        <div className="w-1/2 flex flex-col justify-center items-start border-r-2 border-amber-400 text-left pr-20">
          <h1 className="text-5xl font-bold text-white mb-6">Let’s Connect</h1>
          <p className="text-lg text-[#dbcaba] mb-8">
            Got an idea, opportunity or just want to say hi? <br />
            Feel free to drop a message or reach me through social media.
          </p>

          <div className="flex flex-col gap-4 text-white">
            <a
              href="mailto:awitkowsky.contact@gmail.com"
              className="flex items-center gap-3 hover:text-[#f3701e] transition"
            >
              <Mail size={20} /> awitkowsky.contact@gmail.com
            </a>
            <a
              href="https://github.com/awitkowsky"
              target="_blank"
              className="flex items-center gap-3 hover:text-[#a67bc5] transition"
            >
              <Github size={20} /> github.com/awitkowsky
            </a>
            <a
              href="https://www.linkedin.com/in/antoniwitkowski/"
              target="_blank"
              className="flex items-center gap-3 hover:text-[#4b607f] transition"
            >
              <Linkedin size={20} /> linkedin.com/in/antoniwitkowski
            </a>
            <a
              href="https://www.instagram.com/a_cherry_w/"
              target="_blank"
              className="flex items-center gap-3 hover:text-pink-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2a1 1 0 100 2 1 1 0 000-2z" />
              </svg>
              instagram.com/a_cherry_w
            </a>
            <a
              href="https://www.facebook.com/a.cherry.w/"
              target="_blank"
              className="flex items-center gap-3 hover:text-blue-500 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 10-11.625 9.875v-6.987H8.078V12h2.297V9.797c0-2.271 1.353-3.531 3.43-3.531.993 0 2.031.176 2.031.176v2.25h-1.144c-1.128 0-1.48.699-1.48 1.414V12h2.516l-.402 2.888h-2.114v6.987A10.002 10.002 0 0022 12z" />
              </svg>
              facebook.com/a.cherry.w
            </a>
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-center">
          <form className="w-4/5 space-y-4 text-white">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl bg-[#1a1a1f] border border-[#f3701e]/30 focus:outline-none focus:ring-2 focus:ring-[#f3701e]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-xl bg-[#1a1a1f] border border-[#a67bc5]/30 focus:outline-none focus:ring-2 focus:ring-[#a67bc5]"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full p-3 rounded-xl bg-[#1a1a1f] border border-[#4b607f]/30 focus:outline-none focus:ring-2 focus:ring-[#4b607f]"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                alert("👷 This funcionality is still under development");
              }}
              type="submit"
              className="w-full py-3 rounded-full font-medium text-white hover:scale-105 transition"
              style={{
                background: "linear-gradient(135deg, #f3701e, #a67bc5)",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact;
