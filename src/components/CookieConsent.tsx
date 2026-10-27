import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, Shield, Check, X, Sliders, ChevronRight, Info, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { motion, AnimatePresence } from "framer-motion";

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  advertising: boolean;
  functional: boolean;
  timestamp: string;
  hasConsented: boolean;
}

const STORAGE_KEY = "suriyan_cookie_consent_v1";

const defaultPreferences: CookiePreferences = {
  essential: true, // Always required
  analytics: false,
  advertising: false,
  functional: false,
  timestamp: "",
  hasConsented: false,
};

export const getStoredPreferences = (): CookiePreferences | null => {
  try {
    const item = localStorage.getItem(STORAGE_KEY);
    return item ? JSON.parse(item) : null;
  } catch {
    return null;
  }
};

const CookieConsent = () => {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [tempPreferences, setTempPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  useEffect(() => {
    const stored = getStoredPreferences();
    if (stored && stored.hasConsented) {
      setPreferences(stored);
      setTempPreferences(stored);
      setShowBanner(false);
    } else {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setShowBanner(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for external requests to open preferences (e.g. from footer link or privacy page)
  useEffect(() => {
    const handleOpenModal = () => {
      const current = getStoredPreferences() || defaultPreferences;
      setTempPreferences(current);
      setShowModal(true);
    };

    window.addEventListener("suriyan_open_cookie_modal", handleOpenModal);
    return () => window.removeEventListener("suriyan_open_cookie_modal", handleOpenModal);
  }, []);

  const saveAndBroadcast = (newPrefs: CookiePreferences) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newPrefs));
    } catch {
      // ignore local storage error in private browsing
    }
    setPreferences(newPrefs);
    setTempPreferences(newPrefs);
    setShowBanner(false);

    // Notify other components or tracking scripts
    window.dispatchEvent(
      new CustomEvent("suriyan_cookie_consent_updated", {
        detail: newPrefs,
      })
    );
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      advertising: true,
      functional: true,
      timestamp: new Date().toISOString(),
      hasConsented: true,
    };
    saveAndBroadcast(allAccepted);
  };

  const handleRejectNonEssential = () => {
    const rejected: CookiePreferences = {
      essential: true,
      analytics: false,
      advertising: false,
      functional: false,
      timestamp: new Date().toISOString(),
      hasConsented: true,
    };
    saveAndBroadcast(rejected);
  };

  const handleSavePreferences = () => {
    const custom: CookiePreferences = {
      ...tempPreferences,
      essential: true,
      timestamp: new Date().toISOString(),
      hasConsented: true,
    };
    saveAndBroadcast(custom);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      setShowModal(false);
    }, 800);
  };

  return (
    <>
      {/* 1. Modern Floating Consent Banner */}
      <AnimatePresence>
        {showBanner && !showModal && (
          <motion.aside
            initial={{ y: 80, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 80, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            aria-label="Cookie consent banner"
            className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xl z-50 bg-card/95 backdrop-blur-xl border border-border shadow-elevated rounded-2xl p-5 md:p-6 text-foreground"
          >
            <div className="flex items-start gap-3.5 mb-3">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                <Cookie className="w-5 h-5 animate-pulse" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-heading font-semibold text-base text-foreground">
                    Cookie & Privacy Choices
                  </h3>
                  <button
                    onClick={handleRejectNonEssential}
                    className="text-muted-foreground hover:text-foreground p-1 -mr-1 transition-colors"
                    aria-label="Dismiss and keep essential only"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                  Suriyan Prints uses essential cookies for core functionality. With your consent, we may also use analytics and advertising cookies (such as Google Ads & Analytics) to measure site performance and deliver relevant offers.
                </p>
              </div>
            </div>

            <div className="text-xs text-muted-foreground mb-4 pl-1 flex items-center gap-1.5">
              <span>Read our full</span>
              <Link
                to="/privacy#cookies"
                className="text-primary hover:underline font-medium inline-flex items-center gap-0.5"
              >
                Privacy & Cookie Policy
                <ChevronRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-1 border-t border-border/60">
              <Button
                size="sm"
                onClick={handleAcceptAll}
                className="gradient-primary text-white hover:opacity-90 font-medium text-xs sm:text-sm py-2 px-4 shadow-sm"
              >
                Accept All
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleRejectNonEssential}
                className="text-xs sm:text-sm py-2 px-3 border-border hover:bg-muted font-medium"
              >
                Reject Non-Essential
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setShowModal(true)}
                className="text-xs sm:text-sm py-2 px-3 text-muted-foreground hover:text-foreground font-medium flex items-center justify-center gap-1.5"
              >
                <Sliders className="w-3.5 h-3.5" />
                Manage Preferences
              </Button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* 2. Persistent Floating Trigger to Reopen Settings Anytime */}
      {!showBanner && (
        <button
          onClick={() => {
            const current = getStoredPreferences() || defaultPreferences;
            setTempPreferences(current);
            setShowModal(true);
          }}
          className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-card/90 backdrop-blur-md border border-border shadow-card hover:shadow-elevated hover:scale-105 transition-all flex items-center justify-center text-foreground/80 hover:text-primary group"
          aria-label="Cookie & Privacy Settings"
          title="Cookie & Privacy Settings"
        >
          <Cookie className="w-5 h-5 transition-transform group-hover:rotate-12 text-primary" />
          <span className="sr-only">Cookie Preferences</span>
        </button>
      )}

      {/* 3. Detailed Preferences Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25 }}
              className="bg-card border border-border shadow-elevated rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden text-foreground"
              role="dialog"
              aria-modal="true"
              aria-labelledby="cookie-preferences-title"
            >
              {/* Modal Header */}
              <div className="px-6 py-5 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center text-white">
                    <Sliders className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 id="cookie-preferences-title" className="font-heading font-semibold text-lg text-foreground">
                      Cookie & Consent Preferences
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      Customize which optional cookies and tracking technologies you authorize.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-muted-foreground hover:text-foreground p-1 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Close preferences dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-6 overflow-y-auto space-y-5 text-sm">
                <div className="p-3.5 bg-muted/50 rounded-xl border border-border/60 text-xs text-muted-foreground flex gap-2.5 items-start">
                  <Info className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <p>
                    Suriyan Prints is committed to transparency. You have full control over non-essential tracking. Your choices are stored locally in your browser and can be revised at any time.
                  </p>
                </div>

                {/* Option 1: Strictly Necessary (Always On) */}
                <div className="p-4 rounded-xl border border-border bg-background/50 hover:border-primary/30 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Shield className="w-4 h-4 text-primary" />
                        <h3 className="font-heading font-semibold text-foreground">
                          Strictly Necessary Cookies
                        </h3>
                        <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                          Always Active
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Required for secure navigation, load balancing, preventing fraud, and remembering your cookie consent status. The website cannot function correctly without these.
                      </p>
                      <div className="text-[11px] text-muted-foreground/80 mt-2">
                        <strong>Providers:</strong> Vercel Infrastructure, Application Core.
                      </div>
                    </div>
                    <Switch checked={true} disabled aria-label="Strictly Necessary Cookies are always enabled" />
                  </div>
                </div>

                {/* Option 2: Analytics & Performance */}
                <div className="p-4 rounded-xl border border-border bg-background hover:border-primary/30 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-heading font-semibold text-foreground">
                          Analytics & Performance
                        </h3>
                        <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                          Optional
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Allows us to measure website traffic, evaluate page popularity, and understand how visitors navigate our site so we can improve usability and speed.
                      </p>
                      <div className="text-[11px] text-muted-foreground/80 mt-2">
                        <strong>Providers:</strong> Google Analytics (where enabled), Vercel Web Analytics.
                      </div>
                    </div>
                    <Switch
                      checked={tempPreferences.analytics}
                      onCheckedChange={(checked) =>
                        setTempPreferences((prev) => ({ ...prev, analytics: checked }))
                      }
                      aria-label="Toggle Analytics and Performance cookies"
                    />
                  </div>
                </div>

                {/* Option 3: Advertising & Conversion Tracking */}
                <div className="p-4 rounded-xl border border-border bg-background hover:border-primary/30 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-heading font-semibold text-foreground">
                          Advertising & Remarketing
                        </h3>
                        <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                          Optional
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Used to measure advertising performance and, where applicable, enable relevant advertisements on third-party platforms (like Google). Third-party vendors may set cookies to record ad interactions.
                      </p>
                      <div className="text-[11px] text-muted-foreground/80 mt-2">
                        <strong>Providers:</strong> Google Ads, Google Tag Manager (when active).
                      </div>
                    </div>
                    <Switch
                      checked={tempPreferences.advertising}
                      onCheckedChange={(checked) =>
                        setTempPreferences((prev) => ({ ...prev, advertising: checked }))
                      }
                      aria-label="Toggle Advertising and Remarketing cookies"
                    />
                  </div>
                </div>

                {/* Option 4: Functional & Preferences */}
                <div className="p-4 rounded-xl border border-border bg-background hover:border-primary/30 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-heading font-semibold text-foreground">
                          Functional & Preferences
                        </h3>
                        <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                          Optional
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Enables enhanced functionality, such as remembering your quote selections, mockups, or UI preferences across visits.
                      </p>
                    </div>
                    <Switch
                      checked={tempPreferences.functional}
                      onCheckedChange={(checked) =>
                        setTempPreferences((prev) => ({ ...prev, functional: checked }))
                      }
                      aria-label="Toggle Functional and Preferences cookies"
                    />
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-border bg-muted/20 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setTempPreferences({
                        essential: true,
                        analytics: false,
                        advertising: false,
                        functional: false,
                        timestamp: "",
                        hasConsented: false,
                      });
                    }}
                    className="text-xs flex-1 sm:flex-initial"
                  >
                    Reject All Optional
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setTempPreferences({
                        essential: true,
                        analytics: true,
                        advertising: true,
                        functional: true,
                        timestamp: "",
                        hasConsented: false,
                      });
                    }}
                    className="text-xs flex-1 sm:flex-initial"
                  >
                    Select All
                  </Button>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Button
                    type="button"
                    size="sm"
                    onClick={handleSavePreferences}
                    className="gradient-primary text-white hover:opacity-90 text-xs sm:text-sm font-medium w-full sm:w-auto gap-1.5"
                  >
                    {saveSuccess ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-white" />
                        Saved Successfully
                      </>
                    ) : (
                      <>
                        <Check className="w-4 h-4" />
                        Save Preferences
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieConsent;
