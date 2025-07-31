import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container px-4 py-12 sm:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800">JobHub</h3>
            <p className="text-sm text-gray-600">
              Connecting talent with opportunity. Find your dream job or the perfect candidate.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800">For Job Seekers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/jobs" className="text-gray-600 hover:text-blue-500">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-600 hover:text-blue-500">
                  Create Account
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-500">
                  Career Resources
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800">For Companies</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/register" className="text-gray-600 hover:text-blue-500">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-500">
                  Talent Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-500">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                Contact us at <span className="text-blue-500">support@jobhub.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} JobHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
