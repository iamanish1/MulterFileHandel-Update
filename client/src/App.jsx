import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <section>
        <Header />
        <div className="container mx-auto p-4 bg-slate-300 shadow-md mt-5">
          <div className="bg-white p-6 w-full max-w-md mx-auto rounded shadow-md my-auto">
            <div>
              <form action>
                <div>
                  <label htmlFor="">Name :</label>
                </div>
                <div className="bg-slate-100 p-2 mb-2">
                  <input
                    type="text"
                    placeholder="enter your Name.."
                    className="w-full h-full outline-none bg-transparent"
                    name="name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="">Email:</label>
                </div>
                <div className="bg-slate-100 p-2 mb-2">
                  <input
                    type="text"
                    placeholder="enter your Name.."
                    className="w-full h-full outline-none bg-transparent"
                    name="email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="">File:</label>
                </div>
                <div className="bg-slate-100 p-2 mb-2">
                  <input
                    type="file"
                    className="w-full h-full outline-none bg-transparent font-sans 
                    uppercase font-semibold"
                    name="file"
                    required
                  />
                </div>

                <button
                  className="lg: bg-black text-white px-6 py-[1.5vmin] w-full max-w-[150px]
                   text-[2.5vmin] rounded-full hover:scale-110 transition-all mx-auto block mt-6
                   max-sm:px-1 max-sm:text-sm max-md:text-sm  max-lg:mx-auto"
                >
                  Sumbit
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer/>
      </section>
     
    </>
  );
}


export default App;
