import classes from "./lang.module.css";
import { useTranslation } from "react-i18next";
import '../i18n.js';
import { memo, useCallback, useState, useEffect } from "react";

// eslint-disable-next-line react/display-name
const LanguageButton = memo(() => {
  const { i18n } = useTranslation();
  const [activeLocale, setActiveLocale] = useState(i18n.language); // Initialize with current language

  const changeLanguage = useCallback((language) => {
    i18n.changeLanguage(language);
    setActiveLocale(language);
  }, [i18n]);

  const listLocales = ["en", "es"];

  // Update activeLocale when i18n.language changes
  useEffect(() => {
    setActiveLocale(i18n.language);
  }, [i18n.language]);

  return (
    <div className={classes.languageSwitcher}>
      <ul className={classes.items}>
        {listLocales.map((locale) => (
          <li key={locale} className={classes.li_item}>
            <button
              className={`${classes.item} ${
                activeLocale === locale ? classes.active : ""
              }`}
              onClick={() => changeLanguage(locale)}
            >
              {locale.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export { LanguageButton };
