
function Copyright() {
  return (
    <div className="text-sm text-gray-300">
      &copy; {new Date().getFullYear()} Sharath Chandra. All rights reserved.
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="flex gap-4 mt-2">
      <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
      <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
      <a href="https://leetcode.com/yourleetcode" target="_blank" rel="noopener noreferrer" className="hover:underline">LeetCode</a>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="text-sm text-gray-300 flex flex-col gap-1">
      <div>
        Email: <a href="mailto:sharath.chandra@example.com" className="hover:underline">sharath.chandra@example.com</a>
      </div>
      <div>
        Location: Bengaluru, India
      </div>
      <div>
        Phone: <a href="tel:+919876543210" className="hover:underline">+91 98765 43210</a>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-6 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex-1 flex flex-col items-start gap-2">
             <FooterLinks />
          <Copyright />
         
        </div>
        <div className="flex-1 flex justify-end">
          <ContactInfo />
        </div>
      </div>
    </footer>
  );
}
