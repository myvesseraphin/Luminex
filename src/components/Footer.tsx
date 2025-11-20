import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "lucide-react";

export function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: "facebook",
      url: "https://www.facebook.com",
      icon: FacebookIcon,
    },
    {
      name: "twitter",
      url: "https://www.twitter.com",
      icon: TwitterIcon,
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com",
      icon: LinkedinIcon,
    },
  ];

  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* BRAND */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Luminex Logo"
                className="w-10 h-10 rounded-lg shadow-sm object-contain"
              />
              <span className="text-2xl font-bold text-gray-900">Luminex</span>
            </div>

            <p className="text-gray-600 mb-6 max-w-md">
              {t("footer.description")}
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3">
              {socialLinks.map(({ name, url, icon: Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:border-primary transition-colors"
                >
                  <span className="sr-only">{t(`footer.${name}`)}</span>
                  <Icon className="w-5 h-5 text-gray-700" />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">
              {t("footer.quickLinks")}
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/hero" className="hover:text-primary transition-colors">
                  {t("footer.about")}
                </Link>
              </li>

              <li>
                <Link to="/features" className="hover:text-primary transition-colors">
                  {t("footer.features")}
                </Link>
              </li>

              <li>
                <Link to="/team" className="hover:text-primary transition-colors">
                  {t("footer.team")}
                </Link>
              </li>

              <li>
                <a
                  href="https://luminextech.base44.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {t("footer.login")}
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">
              {t("footer.contact")}
            </h3>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>{t("footer.address")}</span>
              </li>

              <li className="flex items-center gap-3">
                <MailIcon className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${t("footer.email")}`}
                  className="hover:text-primary transition-colors"
                >
                  {t("footer.email")}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href={`tel:${t("footer.phone")}`}
                  className="hover:text-primary transition-colors"
                >
                  {t("footer.phone")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
