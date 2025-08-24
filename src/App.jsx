import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy load pages
const Services = lazy(() => import("./pages/Services"));
const AboutUs = lazy(() => import("./pages/about/AboutUs"));
const Contact = lazy(() => import("./pages/Contact"));
const Industry = lazy(() => import("./pages/Industry"));
const Home = lazy(() => import("./pages/home/Home"));
const Root = lazy(() => import("./Root"));
const Advisory = lazy(() => import("./pages/servicesPages/Advisory"));
const Legal = lazy(() => import("./pages/servicesPages/Legal"));
const NFRS = lazy(() => import("./pages/servicesPages/NFRS"));
const AduitAssurance = lazy(() => import("./pages/servicesPages/Aduit&Assurance"));
const MeetOurFounder = lazy(() => import("./pages/about/MeetOurFounder"));
const Tax = lazy(() => import("./pages/servicesPages/Tax"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Root />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "services",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Services />
            </Suspense>
          ),
        },
        {
          path: "about/aboutus",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <AboutUs />
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Contact />
            </Suspense>
          ),
        },
        {
          path: "industry",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Industry />
            </Suspense>
          ),
        },
        {
          path: "services/advisory",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Advisory />
            </Suspense>
          ),
        },
        {
          path: "services/legal",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Legal />
            </Suspense>
          ),
        },
        {
          path: "services/tax",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Tax />
            </Suspense>
          ),
        },
        {
          path: "services/NFRS",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <NFRS />
            </Suspense>
          ),
        },
        {
          path: "services/audit & assurance",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <AduitAssurance />
            </Suspense>
          ),
        },
        {
          path: "about/meetourfounder",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <MeetOurFounder />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
