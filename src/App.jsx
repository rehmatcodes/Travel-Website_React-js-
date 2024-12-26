import React from 'react'
 import { Navbar,Hero,Footer, Memory, Explore, Advertise, Pricings, Banner, Newslatter } from './components'
import { hero,memory,navlinks, placesAPI,brands,pricingapi,bannerAPI,footerAPI } from './data/travigodata';

const App = () => {
  return (
    <>
     <Navbar navlinks={navlinks}   />
     <Hero  hero={hero}  />
     <Memory Memory={memory}  />
     <Explore title='Explore The Beauty Of World' placesAPI={placesAPI}  />
     <Advertise  brands={brands}   />
     <Pricings pricingapi ={pricingapi}/> 
     <Banner  bannerAPI={bannerAPI}   />
     <Newslatter/>
     <Footer footerAPI={footerAPI}/>
     </>
  );
};

export default App