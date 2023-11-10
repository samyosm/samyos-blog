import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto py-16 text-lg">
      <div className="space-y-8">
        <h1 className="font-medium text-4xl">Spotlight</h1>
        <article className="flex gap-8">
          <img
            src="https://picsum.photos/1920/1080"
            className="h-fit w-full rounded-md flex-[1.2]"
            alt="Random"
          />
          <div className="w-full h-full flex-1 flex flex-col gap-8">
            <h2 className="font-medium text-2xl">
              Top 5 Benefits of Open Source Programming
            </h2>
            <p className="line-clamp-4">
              In the ever-evolving world of technology, open source software has
              emerged as a powerful and transformative force. For long-time
              developers and coding enthusiasts, the advantages of open source
              are evident, and its impact on the industry is profound. In this
              article, we will explore the multifaceted benefits of open source
              software, backed by scientifically proven facts and solid
              reasoning.
            </p>
            <Link href="/" className="underline">Read More</Link>
          </div>
        </article>
      </div>
    </main>
  );
}
