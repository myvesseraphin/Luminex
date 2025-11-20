import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "rw", label: "Kinyarwanda" },
    { code: "sw", label: "Kiswahili" },
  ];

  const current = i18n.language.slice(0, 2);

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-2
          px-4 py-2
          rounded-full
          bg-white
          text-gray-800
          font-medium
          border border-gray-200
          shadow-sm
          hover:border-orange-400
          hover:bg-orange-50
          transition-all
        "
      >
        <span>
          {languages.find((l) => l.code === current)?.label || "Language"}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="
              absolute right-0 mt-2
              w-40
              bg-white
              border border-gray-100
              rounded-xl
              shadow-lg
              py-2
              z-50
            "
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLang(lang.code)}
                className={`
                  w-full text-left px-4 py-2 flex items-center justify-between
                  hover:bg-orange-50 hover:text-orange-600
                  transition rounded-lg
                  ${current === lang.code ? "bg-orange-100 text-orange-600" : ""}
                `}
              >
                {lang.label}
                {current === lang.code && (
                  <Check className="w-4 h-4" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
