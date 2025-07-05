"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "../Container";

// SVG Icon Components
const GitHubIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12.0216 0.0900879C5.40734 0.0900879 0.0438385 5.54404 0.0438385 12.2724C0.0438385 17.6549 3.47584 22.2214 8.23498 23.8323C8.83359 23.945 9.05336 23.568 9.05336 23.2462C9.05336 22.9557 9.04225 21.9961 9.0371 20.9781C5.70486 21.7151 5.00172 19.5407 5.00172 19.5407C4.45686 18.1326 3.67181 17.7582 3.67181 17.7582C2.58506 17.0021 3.75372 17.0176 3.75372 17.0176C4.9565 17.1034 5.58982 18.273 5.58982 18.273C6.65812 20.1355 8.39187 19.597 9.07538 19.2857C9.18288 18.4986 9.49329 17.9607 9.83584 17.6567C7.17541 17.3487 4.37871 16.3041 4.37871 11.6361C4.37871 10.306 4.84662 9.21928 5.61283 8.36613C5.48847 8.05909 5.07848 6.82023 5.72886 5.14218C5.72886 5.14218 6.73468 4.81476 9.02361 6.39093C9.97904 6.12101 11.0037 5.98564 12.0216 5.981C13.0395 5.98564 14.065 6.12101 15.0222 6.39093C17.3084 4.81476 18.3128 5.14218 18.3128 5.14218C18.9648 6.82023 18.5546 8.05909 18.4302 8.36613C19.1982 9.21928 19.6629 10.306 19.6629 11.6361C19.6629 16.3152 16.8609 17.3454 14.1937 17.647C14.6233 18.0251 15.0062 18.7665 15.0062 19.9031C15.0062 21.5329 14.9923 22.8448 14.9923 23.2462C14.9923 23.5704 15.2079 23.9503 15.815 23.8307C20.5716 22.218 23.9992 17.6531 23.9992 12.2724C23.9992 5.54404 18.6365 0.0900879 12.0216 0.0900879Z"
      fill="currentColor"
    />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM5.76081 9.93891H8.48027V18.1098H5.76081V9.93891ZM8.65938 7.41135C8.64173 6.6102 8.06883 6 7.13852 6C6.2082 6 5.6 6.6102 5.6 7.41135C5.6 8.1959 6.19023 8.82367 7.10322 8.82367H7.12059C8.06883 8.82367 8.65938 8.1959 8.65938 7.41135ZM15.1566 9.74704C16.9461 9.74704 18.2877 10.9151 18.2877 13.4248L18.2876 18.1098H15.5682V13.7384C15.5682 12.6403 15.1747 11.8911 14.1903 11.8911C13.4389 11.8911 12.9914 12.3962 12.7949 12.8841C12.723 13.0589 12.7053 13.3025 12.7053 13.5467V18.11H9.98555C9.98555 18.11 10.0214 10.7058 9.98555 9.93913H12.7053V11.0965C13.0663 10.5401 13.7127 9.74704 15.1566 9.74704Z"
      fill="currentColor"
    />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      fill="currentColor"
    />
  </svg>
);

const MediumIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"
      fill="currentColor"
    />
  </svg>
);

export const Footer = () => {
  const getCurrentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/isamrish",
      label: "GitHub",
      icon: GitHubIcon,
    },
    {
      href: "https://linkedin.com/in/isamrish/",
      label: "LinkedIn",
      icon: LinkedInIcon,
    },
    {
      href: "https://twitter.com/isamrishk",
      label: "Twitter",
      icon: TwitterIcon,
    },
    {
      href: "https://isamrish.medium.com",
      label: "Medium",
      icon: MediumIcon,
    },
  ];

  const footerLinks = [
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/useful-prompts", label: "Useful Prompts" },
    { href: "/learning", label: "Learning" },
  ];

  return (
    <footer
      className="border-t border-white"
      style={{ backgroundColor: "#2f5a83" }}
    >
      <Container>
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                Amrish Kushwaha
              </h3>
              <p className="text-sm text-white max-w-xs">
                Software engineer passionate about building great products and
                sharing knowledge through writing and teaching.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white">Connect</h4>
              <ul className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <li key={social.href}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 rounded-md bg-white/10 hover:bg-white/20 transition-colors group"
                        aria-label={social.label}
                      >
                        <IconComponent className="w-4 h-4 text-white group-hover:text-white transition-colors" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-white">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
              <p className="text-xs text-white">
                Copyright &copy; {getCurrentYear} Amrish Kushwaha. All rights
                reserved.
              </p>
              <div className="flex space-x-4 text-xs text-white">
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Back to top ↑
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
