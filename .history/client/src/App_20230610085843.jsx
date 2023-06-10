import React from "react";
import { logo } from "./assets/index";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Home, CreatePost } from "./Pages";

const App = () => {
  return (
    <BrowserRouter>
      <div
        className='border-b border-b-slate-600'
        style={{ backgroundColor: "#1a1a1a" }}>
        <header className='items-center px-4 sm:px-8 h-[76px] flex justify-between md:w-11/12 mx-auto'>
          <Link to='/'>
            <img className='md:w-52 w-40' src={logo} alt='Celestial AI logo' />
          </Link>

          <Link
            to='/create_post'
            className='bg-gradient-to-b from-violet-400 hover:from-violet-500 to-violet-600 hover:to-violet-700 text-white font-semibold px-4 py-2 font-inter rounded-md'>
            Create
          </Link>
        </header>
      </div>
      <main
        className='px-4 sm:px-8 py-8'
        style={{ background: "linear-gradient(to bottom, #1a1a1a, #333333)" }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create_post' element={<CreatePost />} />
        </Routes>
      </main>
      <footer
        className='text-gray-600 body-font'
        style={{ backgroundColor: "#333333" }}>
        <div className='container px-4 sm:px-8 py-5 mx-auto flex items-center sm:flex-row flex-col md:w-11/12'>
          <a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
            <img className=' w-28' src={logo} alt='Celestial AI logo' />
          </a>
          <p className='text-base text-slate-300 font-semibold sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-white sm:my-0 my-4'>
            Made by
            <a
              href='https://github.com/VhalennnG'
              className='text-violet-500 ml-1'
              rel='noopener noreferrer'
              target='_blank'>
              Vhalen G
            </a>
          </p>
          <span className='inline-flex sm:ml-auto justify-center sm:justify-start md:gap-2 gap-4'>
            <a
              href='https://discordapp.com/users/688687260148957185'
              target='_blank'>
              <button className='bg-violet-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  fill='currentColor'
                  className='bi bi-discord'
                  viewBox='0 0 16 16'>
                  <path
                    d='M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z'
                    fill='white'></path>
                </svg>
              </button>
            </a>
            <a
              href='https://www.linkedin.com/in/vhalentino-gamgenora-0b701a221'
              target='_blank'>
              <button className='bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded'>
                <svg
                  className='w-5 h-5 fill-current'
                  role='img'
                  viewBox='0 0 256 256'
                  xmlns='http://www.w3.org/2000/svg'>
                  <g>
                    <path d='M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055'></path>
                  </g>
                </svg>
              </button>
            </a>
            <a href='https://github.com/VhalennnG' target='_blank'>
              <button className='bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  aria-hidden='true'
                  role='img'
                  className='w-5'
                  preserveAspectRatio='xMidYMid meet'
                  viewBox='0 0 24 24'>
                  <g fill='none'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z'
                      fill='currentColor'
                    />
                  </g>
                </svg>
              </button>
            </a>
            <a href='mailto:vhalentinog@gmail.com' target='_blank'>
              <button className='bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  aria-hidden='true'
                  role='img'
                  className='w-5'
                  preserveAspectRatio='xMidYMid meet'
                  viewBox='0 0 24 24'>
                  <g fill='none'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z'
                      fill='currentColor'
                    />
                  </g>
                </svg>
              </button>
            </a>
          </span>
        </div>
      </footer>
    </BrowserRouter>
  );
};

export default App;
