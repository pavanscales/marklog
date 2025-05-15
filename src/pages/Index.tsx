
import Header from "../components/Header";
import Hero from "../components/Hero";
import EditorDemo from "../components/EditorDemo";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <EditorDemo />
      </main>
      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} ZenBlog. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
