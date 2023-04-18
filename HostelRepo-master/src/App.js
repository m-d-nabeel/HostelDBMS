import "./App.css";
import Home from "./X_pages/Home/Home.jsx";
import About from "./X_pages/About/About.jsx";
import SeatAlloc from "./X_pages/SeatAlloc/SeatAlloc";
import Contact from "./X_pages/Contact/Contact";
import Rules from "./X_pages/Rules/Rules";
import Fee from "./X_pages/Fee/Fee";
import Faq from "./X_pages/Faq/Faq";
import Dashboard from "./X_pages/Dashboard/Dashboard";
import Login from "./X_pages/Login/Login.jsx";
import NotFound from "./X_pages/NotFound/NotFound";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Profile from "./X_pages/Profile/Profile";
import NewLogin from "./X_pages/NewLogin/NewLogin";
import PrePaymentForm from "./X_pages/Payment/prePayForm";
import PaymentForm from "./X_pages/Payment/payment";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <Home />,
// 	},
// 	{
// 		path: "/about",
// 		element: <About />,
// 	},

// 	{
// 		path: "/Login",
// 		element: <Login />,
// 	},
// 	{
// 		path: "/SeatAlloc",
// 		element: <SeatAlloc />,
// 	},
// 	{
// 		path: "/Contact",
// 		element: <Contact />,
// 	},
// 	{
// 		path: "/Rules",
// 		element: <Rules />,
// 	},
// 	{
// 		path: "/Fee",
// 		element: <Fee />,
// 	},
// 	{
// 		path: "/Faq",
// 		element: <Faq />,
// 	},
// 	{
// 		path: "/Dashboard",
// 		element: <Dashboard/>,
// 	},
// ]);

// function App() {
//   return (
//     <>
//     <Navbar />
//     <RouterProvider router={router} />
//     </>
//   );
// }

// export default App;

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/NewLogin",
    element: <NewLogin />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/SeatAlloc",
    element: <SeatAlloc />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Rules",
    element: <Rules />,
  },
  {
    path: "/Fee",
    element: <Fee />,
  },
  {
    path: "/Faq",
    element: <Faq />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/Profile/:studentId",
    element: <Profile />,
  },
  {
    path: "/Payment",
    element: <PrePaymentForm />,
  },
  {
    path: "/PaymentSubmit",
    element: <PaymentForm />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SeatAlloc" element={<SeatAlloc />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Rules" element={<Rules />} />
        <Route path="/Fee" element={<Fee />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </RouterProvider>
    </>
  );
}

export default App;
