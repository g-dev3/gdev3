import Main from "./components/Main";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="font-lexend">
        <header className="px-8 py-4 bg-cream md:px-16 md:bg-deep-green text-light-cream ">
          <Navbar />
        </header>
        <Main/>
      </div>
    </>
  );
};

export default App;
