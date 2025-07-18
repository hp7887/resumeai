import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, FileText } from 'lucide-react'

const checklistData = [
  {
    title: 'Format',
    items: [
      'File format and size',
      'Resume length',
      'Long bullet points with suggestions on how to shorten',
      'Action verbs',
      'Repetitive phrases with suggestions on how to rephrase',
    ],
  },
  {
    title: 'Resume sections',
    items: [
      'Contact information',
      'Essential sections',
      'Personality showcase with tips on how to improve',
      'Optional sections',
      'Section order',
    ],
  },
]

export default function ChecklistSection() {
  return (
    <section className="bg-checklist-section text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Our AI-powered resume checker goes beyond typos and punctuation
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We've built-in ChatGPT to help you create a resume that's tailored to the position
            you're applying for.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Левая колонка */}
          <div className="lg:pr-8">
            <h3 className="text-2xl font-bold mb-4">Resume optimization checklist</h3>
            <p className="text-gray-400">
              We check for 16 crucial things across 5 different categories on your resume including
              content, file type, and keywords in the most important sections of your resume. Here's
              a full list of the checks you'll receive:
            </p>
          </div>

          {/* Средняя и правая колонки с карточками */}
          {checklistData.map((category) => (
            <Card
              key={category.title}
              className="bg-gray-900/50 dark:card-bg-override border-gray-700/50 rounded-xl"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex-shrink-0 bg-green-300/10 text-green-300 rounded-full p-2.5">
                  <FileText className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl text-white">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
