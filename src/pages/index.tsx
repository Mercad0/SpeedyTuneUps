import Head from "next/head";

export default function Home() {
  return (
    <div className="w-full flex justify-center pb-20">
      <Head>
        <title>Speedy Tune Ups - Mobile Fleet Services </title>
        <meta
          name="description"
          content="Speedy Tune-ups is your go-to source for fast, reliable, and professional automotive services. We specialize in tune-ups, oil changes, brake services, and more, ensuring your vehicle stays in peak condition. Visit us today for a superior car care experience!"
        />
        <meta
          name="keywords"
          content="speedy tune-ups, automotive services, car maintenance, car repair, tune-ups, oil changes, brake services, vehicle maintenance, auto care"
        />
        <link rel="icon" href="/Svgs/SpeedyIcon.svg" />
      </Head>
    </div>
  );
}
