import Image from 'next/image'

export default function AtsScoreSection() {
  return (
    <section className="relative bg-gray-50/70 dark:bg-zinc-950/70 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-20 bg-gradient-to-b from-transparent to-gray-50/70 dark:to-zinc-950/70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:hidden px-6 mb-12">
          <Image
            src="/ats-checker.svg"
            alt="Illustration of a resume being analyzed by an ATS checker"
            width={488}
            height={400}
            className="w-full h-auto"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="hidden lg:block relative">
            <div className="sticky top-32 self-start">
              <Image
                src="/ats-checker.svg"
                alt="Illustration of a resume being analyzed by an ATS checker"
                width={488}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Правая колонка с текстом */}
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              CareerMind's Resume Checker forms its ATS score with a two-tier system
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              When you're applying for a job, there's a high chance your resume will be screened
              through an applicant tracking system way before it finds its way on a recruiter's
              screen. ATS helps hiring managers find the right candidates by searching for keywords
              and adding the resume to a database.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              That's why the success of your resume is highly dependent on how optimized your resume
              is for the job you're applying for, the resume template you're using, and what skills
              and keywords you have included.
            </p>

            <div className="space-y-10 mt-12">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-green-100/80 dark:bg-green-500/10 rounded-full flex-shrink-0 flex items-center justify-center shadow-inner">
                  <span className="text-xl font-bold text-green-600 dark:text-green-300">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    The proportion of content we can interpret
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Similar to an ATS, we analyze and attempt to comprehend your resume. The greater
                    our understanding of your resume, the more effectively it aligns with a
                    company's ATS.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-green-100/80 dark:bg-green-500/10 rounded-full flex-shrink-0 flex items-center justify-center shadow-inner">
                  <span className="text-xl font-bold text-green-600 dark:text-green-300">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    What our checker identifies
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Although an ATS doesn't look for spelling mistakes and poorly crafted content,
                    recruitment managers certainly do. The second part of our score is based on the
                    quantifiable achievements you have in your resume and the quality of the written
                    content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
