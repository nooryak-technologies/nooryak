'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import HomeMainHeader from '@/layouts/headers/HomeMainHeader';
import HomeMainFooter from '@/layouts/footers/HomeMainFooter';

// Layout & Providers
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import EnquiryForm from '../forms/EnquiryFrom';

export default function HeaderFooterWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Reset scroll to top on every route change
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      // Small delay to ensure the new content is rendered before scrolling/refreshing
      const timeout = setTimeout(() => {
        const { ScrollTrigger } = require('gsap/ScrollTrigger');
        const { ScrollSmoother } = require('gsap/ScrollSmoother');
        
        const smoother = ScrollSmoother.get();
        if (smoother) {
          smoother.scrollTo(0, false); // Instant scroll to top
        } else {
          window.scrollTo(0, 0);
        }
        
        ScrollTrigger.refresh();
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [pathname]);
  
  // Check if current path is an admin route or login/register
  const isAdminPage = pathname?.startsWith('/admin') || 
                      pathname === '/login' || 
                      pathname === '/register';

  if (isAdminPage) {
    return <>{children}</>;
  }

  return (
    <>
      <HomeMainHeader />
      <EnquiryForm />

      <ScrollSmoothProvider>
        <CursorAndBackgroundProvider>
          <AnimationWrapper>
            <div id="magic-cursor" className="cursor-white-bg">
              <div id="ball"></div>
            </div>
            <BackToTop />
            
            <div id="smooth-wrapper">
              <div id="smooth-content">
                <main style={{ minHeight: '100vh' }}>
                  {children}
                </main>
                <HomeMainFooter />
              </div>
            </div>
          </AnimationWrapper>
        </CursorAndBackgroundProvider>
      </ScrollSmoothProvider>
    </>
  );
}
