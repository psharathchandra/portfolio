
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
      <a href="https://github.com/psharathchandra" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
      <a href="https://www.linkedin.com/in/sharathchandrapalakolu/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
    </div>
  );
}

function ContactInfo() {
  return (
    <div id="contact" className="text-sm text-gray-300 flex flex-col gap-1">
      <div className="text-xl font-bold">
        Contact:
      </div>
      <div>
        Email: <a href="mailto:sharathchandrapalakolu@gmail.com" className="hover:underline">sharathchandrapalakolu@gmail.com</a>
      </div>
      <div>
        Location: United States
      </div>
      <div>
        Phone: <a href="tel:+1 (602)-312-1710" className="hover:underline">+1 (602)-312-1710</a>

        </div>
        </div>
        );
      }

      export default function Footer() {
        return (
        <footer id="footer" className="bg-dark text-light py-6 border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-center items-center gap-8">
          <div className="flex flex-col items-start">
            <ContactInfo />
          </div>
          <div className="flex flex-col items-start pl-40">
             <FooterLinks />
            <Copyright />
          </div>
          </div>
    </footer>
  );
}
