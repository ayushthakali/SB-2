import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Services from "./pages/Services";
import AboutUs from "./pages/about/AboutUs";
import Contact from "./pages/Contact";
import Industry from "./pages/Industry";
import Home from "./pages/home/Home";
import Root from "./Root";
import Advisory from "./pages/servicesPages/Advisory";
import Legal from "./pages/servicesPages/Legal";
import NFRS from "./pages/servicesPages/NFRS";
import AduitAssurance from "./pages/servicesPages/Aduit&Assurance";
import MeetOurFounder from "./pages/about/MeetOurFounder";
import Tax from "./pages/servicesPages/Tax";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "about/aboutus",
          element: <AboutUs />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "industry",
          element: <Industry />,
        },
        {
          path: "services/advisory",
          element: <Advisory />,
        },
        {
          path: "services/legal",
          element: <Legal />,
        },
          {
          path: "services/tax",
          element: <Tax />,
        },
        {
          path: "services/NFRS",
          element: <NFRS />,
        },
        {
          path: "services/audit & assurance",
          element: <AduitAssurance />,
        },
         {
          path: "about/meetourfounder",
          element: <MeetOurFounder />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
