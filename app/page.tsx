export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-16 px-6 py-14 sm:px-10 lg:px-14">
      <section className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
          Dev Reddy
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
          Building thoughtful web experiences with modern JavaScript.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          I am a full-stack developer focused on creating fast, clean, and
          scalable products. This is my personal corner on the web where I
          share projects, experience, and ways to get in touch.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:hello@example.com"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/Dev-Reddy-923"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-400"
          >
            View GitHub
          </a>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          { label: "Years Building", value: "2+" },
          { label: "Projects Shipped", value: "10+" },
          { label: "Tech Stack", value: "Next.js, Node, TS" },
        ].map((item) => (
          <article
            key={item.label}
            className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
          >
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {item.label}
            </p>
            <p className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
              {item.value}
            </p>
          </article>
        ))}
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          Featured Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Project One",
              description:
                "Short description of your first project and the impact it had.",
            },
            {
              title: "Project Two",
              description:
                "Another standout build where you solved a real-world problem.",
            },
          ].map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
            >
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {project.title}
              </h3>
              <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          Let&apos;s Work Together
        </h2>
        <p className="mt-3 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-400">
          Looking for a developer for your next product? I am open to freelance
          opportunities and full-time roles.
        </p>
        <a
          href="mailto:hello@example.com"
          className="mt-6 inline-block rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Say Hello
        </a>
      </section>
    </main>
  );
}
