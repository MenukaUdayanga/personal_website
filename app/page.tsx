import React from 'react';
import Navbar from './components/navBar';
import HomeSection from './components/homeSection';
import ProjectSection from './components/projectSection';
import ExpeianceSection from './components/experianceSection'
import Example from './components/example'
import Profile from './components/reviewSection'

function Page() {
  return (
    <div className="w-full overflow-hidden">
      {/* Fixed Navbar */}
      <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
        <Navbar />
      </div>

      {/* Scrollable Content */}
      <div className='overflow-auto' style={{ paddingTop: '4rem' }}>
        <HomeSection />
        <ProjectSection />
        <ExpeianceSection/>
        {/* <Example/> */}
        <Profile/>
      </div>
    </div>
  );
}

export default Page;
