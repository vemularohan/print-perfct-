import { useEffect, useState } from "react";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem("pp_cookie_consent");
      if (!v) setShow(true);
    } catch {}
  }, []);

  function accept() {
    try {
      localStorage.setItem("pp_cookie_consent", "1");
    } catch {}
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed left-4 right-4 bottom-6 z-50 shadow-lg rounded-lg bg-card p-4 flex items-center justify-between gap-4">
      <div className="text-sm text-foreground">
        We use cookies to improve your experience. By continuing you agree to our <a href="/help-centre" className="text-primary hover:underline">privacy policy</a>.
      </div>
      <div className="flex items-center gap-2">
        <button onClick={accept} className="px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold">Accept</button>
      </div>
    </div>
  );
}
