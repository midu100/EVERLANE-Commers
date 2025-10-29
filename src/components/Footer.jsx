import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 py-12 px-10">
      {/* Top section */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-10">
        {/* Account */}
        <div className="min-w-[150px]">
          <h3 className="font-semibold text-gray-900 mb-4">Account</h3>
          <ul className="space-y-2 text-sm">
            <li>Log In</li>
            <li>Sign Up</li>
            <li>Redeem a Gift Card</li>
          </ul>
        </div>

        {/* Company */}
        <div className="min-w-[150px]">
          <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Environmental Initiatives</li>
            <li>Factories</li>
            <li>DEI</li>
            <li>Careers</li>
            <li>International</li>
            <li>Accessibility</li>
          </ul>
        </div>

        {/* Get Help */}
        <div className="min-w-[150px]">
          <h3 className="font-semibold text-gray-900 mb-4">Get Help</h3>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Return Policy</li>
            <li>Shipping Info</li>
            <li>Bulk Orders</li>
          </ul>
        </div>

        {/* Connect */}
        <div className="min-w-[150px]">
          <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
          <ul className="space-y-2 text-sm">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Affiliates</li>
            <li>Our Stores</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col min-w-[250px]">
          <h3 className="font-semibold text-gray-900 mb-4">Newsletter</h3>
          <div className="flex border border-gray-300 rounded overflow-hidden w-full">
            <input
              type="text"
              placeholder="Email Address"
              className="flex-grow px-4 py-2 text-sm outline-none bg-white"
            />
            <button className="bg-black text-white px-4 hover:bg-gray-800 transition">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-200 pt-6 flex flex-wrap justify-between items-center text-xs text-gray-500 gap-4">
        <div className="flex flex-wrap gap-4">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Do Not Sell or Share My Personal Information</p>
          <p>Supply Chain Transparency</p>
          <p>Vendor Code of Conduct</p>
        </div>
        <p>© 2025 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
