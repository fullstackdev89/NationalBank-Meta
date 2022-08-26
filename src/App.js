import "./App.css";

function App() {
  return (
    <div className="">
      <div className="bg-white w-full">
        <div className="max-w-[1280px] w-11/12 m-auto">
          <img src="/img/logo.png" alt="" className="h-20 mt-20" />
          {/* Navbar */}
          {/* <div className="sm:flex justify-between py-5 px-4 mt-10 sm:mt-20 gap-10 rounded-lg items-center bg-black">
            <div className="flex justify-start items-center gap-4">
              <img src="/img/Group2.png" alt="" />
              <p className="text-white text-lg font-medium hidden sm:block">
                First National Bank of the MetaVerse
              </p>
            </div>
            <div className="flex sm:justify-center -mt-8 sm:mt-0 justify-end items-center gap-5 sm:gap-10 text-white font-medium text-md">
              <p className="cursor-pointer">Features</p>
              <p className="cursor-pointer">Integrations</p>
              <p className="cursor-pointer">Resources</p>
            </div>
            <div className="flex justify-end mt-4 sm:mt-0 text-yellow-300 font-bold text-lg gap-7">
              <p>Login</p>
              <p>Register</p>
            </div>
          </div> */}

          {/* Content */}
          <div className="sm:flex justify-between gap-10 mt-10 sm:mt-20">
            <div className="sm:w-1/2">
              <p className="text-black text-center sm:text-start text-3xl sm:text-5xl font-bold leading-[40px] sm:leading-[60px]">
                Custom Credit / Debit Cards for you
              </p>
              <p className="text-black/75 text-xl sm:text-3xl text-center sm:text-start mt-4">
                Issue fully customizable cards fast and easy.
              </p>
              <div className="flex justify-between gap-10 shadow-2xl bg-white p-2 mt-10 rounded-md">
                <input
                  type={"text"}
                  placeholder="Enter your email."
                  className="outline-0 text-black px-3 py-2 w-full"
                />
                <button className="bg-black text-white px-2 py-2 font-bold sm:w-64 text-lg rounded-md w-[400px]">
                  Join the waitlist
                </button>
              </div>
              <div className="mt-20">
                <div className="flex justify-start gap-3 items-center mt-5 px-2">
                  <img src="/img/check.png" alt="" className="h-7" />
                  <p className="text-black/75 text-lg">
                    Stripe and Paypal support.
                  </p>
                </div>
                <div className="flex justify-start gap-3 items-center mt-5 px-2">
                  <img src="/img/check.png" alt="" className="h-7" />
                  <p className="text-black/75 text-lg">
                    Easiest way to get credit cards.
                  </p>
                </div>
                <div className="flex justify-start gap-3 items-center mt-5 px-2">
                  <img src="/img/check.png" alt="" className="h-7" />
                  <p className="text-black/75 text-lg">
                    Custom cards for all your needs.
                  </p>
                </div>
                <div className="flex justify-start gap-3 items-center mt-5 px-2">
                  <img src="/img/check.png" alt="" className="h-7" />
                  <p className="text-black/75 text-lg">
                    Superfast APIs for you to deploy.
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:w-1/2">
              <img
                src="/img/1.png"
                alt=""
                className="w-full max-w-[400px] m-auto mt-10 sm:mt-0"
              />
              <div className="w-full bg-black rounded p-4 sm:flex justify-between mt-10 mb-6 sm:mb-0">
                <div className="flex justify-center sm:justify-start gap-4 items-center">
                  <img src="/img/Vector.png" alt="" className="w-10 h-10" />
                  <div>
                    <p className="text-white font-bold text-lg">
                      Hi, we love cookies
                    </p>
                    <p className="text-white font-thin text-md">
                      We need it to better serve you.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-10 mt-4 sm:mt-0">
                  {/* <button className="text-white bg-yellow-400 font-bold px-6 py-2 rounded ">
                    Okay
                  </button> */}
                  <button className="text-white borderw-white border-2 font-bold px-6 py-2 rounded ">
                    Accept
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
