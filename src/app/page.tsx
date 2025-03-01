import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen relative">
      <div className="z-50 relative">
        <Profile />
      </div>
      <Spline
        className="min-h-screen absolute top-0 z-0"
        scene="https://prod.spline.design/LMFdBmJz4tg06ygZ/scene.splinecode"
      />
    </main>
  );
}

function Profile() {
  return (
    <section className="bg-transparent px-6 lg:px-8">
      <figure className="mx-auto max-w-2xl">
        <p className="sr-only">5 out of 5 stars</p>
        <div className="flex gap-x-1 text-indigo-600"></div>
        <blockquote className="mt-10 text-lg font-semibold tracking-tight text-gray-900 sm:text-2xl/9">
          <p className="text-white">
            “Be aware that you tend to overestimate your knowledge. Be skeptical of predictions, especially if they come
            from so-called experts. And with all plans, favor the pessimistic scenario. This way, you have a chance of
            judging the situation somewhat realistically.”
          </p>
          <p className="text-sm text-white italic mt-4">
            Rolf Dobelli. The Art of Thinking Clearly (p. 45). HarperCollins. Kindle Edition.
          </p>
        </blockquote>
        <figcaption className="mt-10 flex items-center gap-x-6">
          <img
            alt=""
            src="https://images.unsplash.com/profile-1690088439594-b0d45be5b87dimage?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            className="size-14 rounded-full bg-gray-50"
          />
          <div className="text-sm/6">
            <div className="font-semibold text-gray-200 text-xl">Gery Wibowo</div>
            <div className="mt-0.5 text-gray-300">
              Software Engineer at <b>Lemonilo</b>
            </div>
          </div>
        </figcaption>
        <div className="px-4 mt-12">
          <List />
        </div>
      </figure>
    </section>
  );
}

const profiles = [
  {
    id: 1,
    platform: "GitHub",
    username: "monkeymars",
    href: "https://github.com/monkeymars/",
    imageUrl: "https://www.svgrepo.com/show/512317/github-142.svg",
    description: "Open source enthusiast with a passion for writing clean code.",
  },
  {
    id: 2,
    platform: "Unsplash",
    username: "@gergilgad",
    href: "https://unsplash.com/@gergilgad",
    imageUrl: "https://www.svgrepo.com/show/306907/unsplash.svg",
    description: "Capturing moments, one photo at a time. Interested in Landscapes.",
  },
  {
    id: 3,
    platform: "NPM",
    username: "akungery",
    href: "https://www.svgrepo.com/show/355146/npm.svg",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg",
    description: "Published several open source npm packages.",
  },
  {
    id: 4,
    platform: "LinkedIn",
    username: "Gery Wibowo",
    href: "https://www.linkedin.com/in/gery-wibowo-4886a9a5/",
    imageUrl: "https://www.svgrepo.com/show/452047/linkedin-1.svg",
    description: "Software Engineer at Lemonilo.com",
  },
  {
    id: 5,
    platform: "Frasa.io",
    username: "Gery Wibowo",
    href: "https://frasa.io/",
    imageUrl: "https://frasa.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffrasa-logo-black.e7d3826f.png&w=1080&q=75",
    description: "Founder of Frasa.io",
  },
  {
    id: 6,
    platform: "flow.wibowo.dev",
    username: "Go Try! guest:123456",
    href: "https://flow.wibowo.dev/",
    imageUrl: "https://avatars.githubusercontent.com/u/85702467?s=200&v=4",
    description: "AI Agents & Workflows",
  },
];

function List() {
  return (
    <div className="flow-root">
      <ul role="list" className="">
        {profiles.map((profile, profileIdx) => (
          <li key={profile.id}>
            <div className="relative pb-8">
              {profileIdx !== profiles.length - 1 ? (
                <span aria-hidden="true" className="absolute left-3 top-5 -ml-px h-full w-0.5 bg-gray-100" />
              ) : null}
              <div className="relative flex items-start space-x-3">
                <div className="relative">
                  <img
                    alt=""
                    src={profile.imageUrl}
                    className="flex size-6 items-center justify-center rounded-sm bg-white ring-8 ring-white"
                  />
                </div>
                <div className="min-w-0 flex-1 pl-2 -mt-2">
                  <div>
                    <div className="text-sm">
                      <a href={profile.href} className="font-bold text-gray-200 underline">
                        {profile.username}
                      </a>{" "}
                      <span className="text-gray-300">
                        on <b>{profile.platform}</b>
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-300">{profile.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
