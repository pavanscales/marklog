
const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8 max-w-4xl">
        Notion-like editor with<br />a simple headless API
      </h1>
      <p className="text-xl text-gray-600 mb-10">
        A simple blogging CMS for devs and marketers
      </p>
      <button className="bg-gray-800 text-white font-medium px-6 py-3 rounded-md hover:bg-gray-700 transition-colors">
        Start blogging for free
      </button>
      <div className="mt-8 p-2 bg-gray-100 rounded-md text-gray-600 font-mono text-sm">
        npm i zenblog
      </div>
    </section>
  );
};

export default Hero;
