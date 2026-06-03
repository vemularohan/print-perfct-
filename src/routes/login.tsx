import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign In — PrintPerfect" },
      { name: "description", content: "Sign in or create an account to track orders, save designs and reorder fast." },
      { property: "og:title", content: "Sign In — PrintPerfect" },
      { property: "og:description", content: "Access your PrintPerfect account." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({ name: "", email: "", password: "", confirm: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (mode === "signup" && !values.name) next.name = "Please enter your name";
    if (!values.email || !/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Enter a valid email";
    if (values.password.length < 6) next.password = "Password must be at least 6 characters";
    if (mode === "signup" && values.confirm !== values.password) next.confirm = "Passwords do not match";
    setErrors(next);
  };

  return (
    <div className="grid lg:grid-cols-2 min-h-[calc(100vh-200px)]">
      <div className="hidden lg:flex items-center justify-center p-12 text-white" style={{ backgroundImage: "linear-gradient(135deg, hsl(205 80% 30%), hsl(200 80% 50%))" }}>
        <div className="max-w-md">
          <div className="flex items-center gap-2 mb-8">
            <div className="relative h-10 w-10">
              <span className="absolute inset-0 rounded-md bg-white/20 rotate-6" />
              <span className="absolute inset-0 rounded-md bg-white/40 -rotate-6" />
              <span className="absolute inset-2 rounded-sm bg-white" />
            </div>
            <span className="text-2xl font-bold">PrintPerfect</span>
          </div>
          <h1 className="text-white mb-3">Print. Brand. Grow.</h1>
          <p className="opacity-90">Sign in to access your saved designs, track orders and reorder favourites in one click.</p>
        </div>
      </div>

      <div className="flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <div className="flex rounded-md border border-border p-1 mb-7">
            <button onClick={() => setMode("signin")} className={`flex-1 py-2 text-sm font-medium rounded ${mode === "signin" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>Sign In</button>
            <button onClick={() => setMode("signup")} className={`flex-1 py-2 text-sm font-medium rounded ${mode === "signup" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>Create Account</button>
          </div>

          <form onSubmit={onSubmit} className="space-y-4" noValidate>
            {mode === "signup" ? (
              <Field label="Name" name="name" type="text" value={values.name} onChange={(v) => setValues({ ...values, name: v })} error={errors.name} />
            ) : null}
            <Field label="Email" name="email" type="email" value={values.email} onChange={(v) => setValues({ ...values, email: v })} error={errors.email} />
            <Field label="Password" name="password" type="password" value={values.password} onChange={(v) => setValues({ ...values, password: v })} error={errors.password} />
            {mode === "signup" ? (
              <Field label="Confirm password" name="confirm" type="password" value={values.confirm} onChange={(v) => setValues({ ...values, confirm: v })} error={errors.confirm} />
            ) : (
              <div className="text-right">
                <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
              </div>
            )}
            <button type="submit" className="w-full bg-primary text-primary-foreground rounded-md py-3 font-semibold hover:bg-primary/90 transition">
              {mode === "signin" ? "Sign In" : "Create Account"}
            </button>
            <button type="button" className="w-full border-2 border-border rounded-md py-3 font-medium hover:border-primary transition">
              Continue with Google
            </button>
            <p className="text-xs text-center text-muted-foreground mt-4">
              By continuing you agree to our <Link to="/help-centre" className="text-primary hover:underline">Terms</Link>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

function Field(props: { label: string; name: string; type: string; value: string; error?: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label htmlFor={props.name} className="text-sm font-medium mb-1.5 block">{props.label}</label>
      <input
        id={props.name}
        type={props.type}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        className={`w-full border rounded-md px-3 py-2.5 text-sm focus:outline-none ${props.error ? "border-destructive" : "border-border focus:border-primary"}`}
      />
      {props.error ? <p className="text-xs text-destructive mt-1">{props.error}</p> : null}
    </div>
  );
}
