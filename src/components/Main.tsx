const Main = () => {
  return (
    <>
      <main>
        <section className="bg-cream h-screen flex items-center justify-center">
          <h1 className="text-2xl md:text-4xl font-semibold text-center">
            Hii...👋, My Name{" "}
            <span className="text-3xl font-de-hudson-hand md:text-5xl text-orange">
              Gopal
            </span>
          </h1>
        </section>
        <section className="bg-orange h-screen flex items-center justify-center">
          <h2 className="text-2xl md:text-4xl font-normal text-center">
            I am{" "}
            <span className="font-de-hudson-hand text-3xl md:text-5xl text-light-cream">
              Full Stack
            </span>{" "}
            Web Developer.
          </h2>
        </section>
        <section className="bg-brand-black h-screen flex flex-col gap-6 items-center justify-center px-4">
          <h2 className="text-2xl text-orange md:text-4xl font-normal text-center">
            I{" "}
            <span className="font-de-hudson-hand text-3xl md:text-5xl text-light-cream">
              Code
            </span>{" "}
            With.
          </h2>
          <div className="mx-auto flex flex-wrap gap-4">
            <img
              src="https://skillicons.dev/icons?i=html"
              className="w-20 p-3"
              alt="html5 logo"
            />
            <img
              src="https://skillicons.dev/icons?i=css"
              className="w-20 p-3"
              alt="css3 logo"
            />
            <img
              src="https://skillicons.dev/icons?i=js"
              className="w-20 p-3"
              alt="javascript logo"
            />
            <img
              src="https://skillicons.dev/icons?i=react"
              className="w-20 p-3"
              alt="react logo"
            />
            <img
              src="https://skillicons.dev/icons?i=next"
              className="w-20 p-3"
              alt="nextjs logo"
            />
            <img
              src="https://skillicons.dev/icons?i=nodejs"
              className="w-20 p-3"
              alt="nodejs logo"
            />
            <img
              src="https://skillicons.dev/icons?i=mongodb"
              className="w-20 p-3"
              alt="mongodb logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg"
              className="w-20 p-3"
              alt="mongoose logo"
            />
            <img
              src="https://skillicons.dev/icons?i=express"
              className="w-20 p-3"
              alt="express logo"
            />
            <img
              src="https://skillicons.dev/icons?i=npm"
              className="w-20 p-3"
              alt="npm logo"
            />
            <img
              src="https://skillicons.dev/icons?i=tailwind"
              className="w-20 p-3"
              alt="tailwind logo"
            />
            <img
              src="https://skillicons.dev/icons?i=ts"
              className="w-20 p-3"
              alt="typescript logo"
            />
            <img
              src="https://skillicons.dev/icons?i=git"
              className="w-20 p-3"
              alt="git logo"
            />
            <img
              src="https://skillicons.dev/icons?i=github"
              className="w-20 p-3"
              alt="github logo"
            />
          </div>
          <h2 className="text-2xl text-orange md:text-4xl font-normal text-center">
            Also{" "}
            <span className="font-de-hudson-hand text-3xl md:text-5xl text-light-cream">
              Familiar
            </span>{" "}
            With.
          </h2>
          <div className="flex flex-wrap gap-4">
            <img
              src="https://skillicons.dev/icons?i=py"
              className="w-20 pr-3"
              alt="python logo"
            />
            <img
              src="https://skillicons.dev/icons?i=c"
              className="w-20 pr-3"
              alt="c logo"
            />
          </div>
          <h2 className="text-2xl text-orange md:text-4xl font-normal text-center">
            <span className="font-de-hudson-hand text-3xl md:text-5xl text-light-cream">
              Currently
            </span>{" "}
            Learning.
          </h2>
          <div className="flex flex-wrap gap-4">
            <img
              src="https://skillicons.dev/icons?i=redis"
              className="w-20 pr-3"
              alt="redis logo"
            />

            <img
              src="https://skillicons.dev/icons?i=mysql"
              className="w-20 pr-3"
              alt="mysql logo"
            />

            <img
              src="https://skillicons.dev/icons?i=prisma"
              className="w-20 pr-3"
              alt="prisma logo"
            />
          </div>
        </section>
        <section className="bg-deep-green h-screen flex items-center justify-center">
          <h2 className="text-2xl md:text-4xl font-normal text-light-cream text-center">
            My Education{" "}
            <span className="font-de-hudson-hand text-3xl md:text-5xl text-green">
              Collage Dropout
            </span>{" "}
            by BadLuck.
          </h2>
        </section>
      </main>
    </>
  );
};

export default Main;
