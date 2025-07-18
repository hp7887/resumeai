// Создайте файл: components/footer.tsx
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* ...содержимое колонок футера... */}
                    <div>
                        <h5 className="font-semibold mb-4">Get started</h5>
                        <ul className="space-y-2 text-gray-300">
                            <li><Link href="#" className="hover:text-white">Create Resume</Link></li>
                            {/* ... остальные ссылки ... */}
                            <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
                        </ul>
                    </div>
                     <div>
                        <h5 className="font-semibold mb-4">Resume</h5>
                        <ul className="space-y-2 text-gray-300">
                           {/* ... ссылки ... */}
                        </ul>
                    </div>
                     <div>
                        <h5 className="font-semibold mb-4">Cover Letter</h5>
                        <ul className="space-y-2 text-gray-300">
                           {/* ... ссылки ... */}
                        </ul>
                    </div>
                     <div>
                        <h5 className="font-semibold mb-4">Resources</h5>
                        <ul className="space-y-2 text-gray-300">
                           {/* ... ссылки ... */}
                        </ul>
                    </div>
                </div>
                <hr className="border-gray-700 my-8" />
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                            </div>
                            <span className="text-blue-400 font-medium">CareerMind</span>
                        </div>
                        <span className="text-gray-400 text-sm">Made with love by people who care.</span>
                    </div>
                    <div className="text-gray-400 text-sm">© 2025. All rights reserved.</div>
                </div>
            </div>
        </footer>
    )
}