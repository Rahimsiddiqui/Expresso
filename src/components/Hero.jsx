import Listener from "./Listener";

const Hero = () => {
  return (
    <section className="px-6 sm:px-8 pb-26 md:px-12 lg:px-0 mt-16 md:mt-20 mx-auto max-w-6xl">
      <div className="flex flex-col gap-6 lg:gap-8.5 justify-center items-center">
        <h1 className="text-3xl md:text-4xl xl:text-5xl tracking-wide text-text font-bold font-geist-sans text-center">
          AI Speech-to-Text
        </h1>

        <p className="text-base font-medium text-text-secondary max-w-160 text-center">
          Convert your voice to precise text in real-time. Designed for
          professionals who demand clarity, speed, and elegance.
        </p>
      </div>

      <Listener />
    </section>
  );
};

export default Hero;
