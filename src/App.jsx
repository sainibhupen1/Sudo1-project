// import BlogBox from "./components/BlogBox";
// import CountingPage from "./components/CountingPage";
// import Course from "./components/course";
// import Footer from "./components/Footer";
// import Home from "./components/Home";
// import LearnPage from "./components/LearnPage";
// import Navbar from "./components/Navbar";
// import PopularCourse from "./components/PopularCourse";
// import Professional from "./components/Professional";
// import Skills from "./components/Skills";
// import SubscriptionBox from "./components/SubscriptionBox";
// import TrandingCourse from "./components/TrandingCourse";
// import VideoPage from "./components/VideoPage";

// function App() {
//   return (
//     <div className="h-[7000px]">
//       <Navbar />
//       <Home />
//       <Course />
//       <PopularCourse />
//       <LearnPage />
//       <BlogBox />
//       <TrandingCourse />
//       <CountingPage />
//       <VideoPage />
//       <Skills />
//       <Professional />
//       <TrandingCourse />
//       <SubscriptionBox />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/main";
import Contact from "./components/Contact";
import About from "./components/About";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={BrowserRouter} />
    </>
  );
}

export default App;
