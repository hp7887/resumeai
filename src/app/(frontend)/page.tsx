import HeroSection from '@/components/sections/hero-section'
import AtsScoreSection from '@/components/sections/ats-score-section'
import UploadCtaSection from '@/components/sections/upload-cta-section'
import TestimonialsSection from '@/components/sections/testimonials-section'
import FaqSection from '@/components/sections/faq-section'
import ChecklistSection from '@/components/sections/checklist-section'

export default function ResumeCheckerPage() {
  return (
    <>
      <HeroSection />
      <AtsScoreSection />
      <UploadCtaSection />
      <ChecklistSection />
      <TestimonialsSection />
      <FaqSection />
    </>
  )
}
