import React, {Suspense} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './Home';
// import loadable from '@loadable/component'
const OtherComponent = React.lazy(() => import('./Other'))
const HomeComponent = React.lazy(() => import('./Home'))
const AllContactsComponent = React.lazy(() => import('./AllContact'))
const AboutComponent = React.lazy(() => import('./About'))
const ContactComponent = React.lazy(() => import('./Contact'))

const About = ()=><Suspense fallback={<div>LOADING....</div>}><AboutComponent/></Suspense>
const Contact = ()=><Suspense fallback={<div>LOADING....</div>}><ContactComponent/></Suspense>
const AllContacts = ()=><Suspense fallback={<div>LOADING....</div>}><AllContactsComponent/></Suspense>
const Home = ()=><Suspense fallback={<div>LOADING....</div>}><HomeComponent/></Suspense>
const Other = ()=><Suspense fallback={<div>LOADING....</div>}><OtherComponent /></Suspense>

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="contact" element={<AllContacts />} />
        <Route path="contact/:id" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="other" element={<Other/>} />
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}