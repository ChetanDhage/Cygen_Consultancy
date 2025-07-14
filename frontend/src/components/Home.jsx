import React, { lazy, Suspense } from 'react'
const CategorySection = lazy(() => import('../pages/home/CategorySection'));
const HeroSection = lazy(() => import('../pages/home/HeroSection'));
const TopConsultants = lazy(() => import('../pages/home/TopConsultants'));
const WhyChoose = lazy(() => import('../pages/home/WhyChoose'));
const HowItWorks = lazy(() => import('../pages/home/HowItWorks'));
const Testimonials = lazy(() => import('../pages/home/Testimonials'));
const Footer = lazy(() => import('../pages/home/Footer'));

const Home = () => {
    return (
        <>
            <Suspense fallback={<div>Loading..</div>}>
                <HeroSection />
                <CategorySection />
                <TopConsultants />
                <WhyChoose />
                <HowItWorks />
                <Testimonials />
                <Footer />
            </Suspense>
        </>
    )
}

export default Home
