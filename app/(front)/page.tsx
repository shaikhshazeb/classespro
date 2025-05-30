import { DashboardPreview } from '@/components/frontend/dashboard-preview'
import GridFeatures from '@/components/frontend/grid-features'
import HeroSection from '@/components/frontend/Hero-section'
import LogoCloud from '@/components/frontend/logo-cloud'
import Pricing from '@/components/frontend/pricing'
import React from 'react'

export default function page() {
  return (
    <main>
    <HeroSection/>
    <LogoCloud/>
    <DashboardPreview/> 
    <GridFeatures/>
    <Pricing/>
    </main>
  )
}

