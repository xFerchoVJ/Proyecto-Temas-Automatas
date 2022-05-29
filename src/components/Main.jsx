import { Dropdown } from "./Dropdown";
import { Footer } from "./Footer";
export const Main = () => {
  return (
    <main className="m-0 vh-100 row justify-content-center align-items-center">
      <div className="col-auto">
        <h1 className="high text-center">Automata Browser</h1>
        <div className="search">
          <Dropdown/>
        </div>
      </div>
      <Footer />
    </main>
  );
};
