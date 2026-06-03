import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
function LoginPage() {
  const [mode, setMode] = useState("signin");
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirm: ""
  });
  const onSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (mode === "signup" && !values.name) next.name = "Please enter your name";
    if (!values.email || !/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Enter a valid email";
    if (values.password.length < 6) next.password = "Password must be at least 6 characters";
    if (mode === "signup" && values.confirm !== values.password) next.confirm = "Passwords do not match";
    setErrors(next);
  };
  return /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 min-h-[calc(100vh-200px)]", children: [
    /* @__PURE__ */ jsx("div", { className: "hidden lg:flex items-center justify-center p-12 text-white", style: {
      backgroundImage: "linear-gradient(135deg, hsl(205 80% 30%), hsl(200 80% 50%))"
    }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-md", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative h-10 w-10", children: [
          /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-md bg-white/20 rotate-6" }),
          /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-md bg-white/40 -rotate-6" }),
          /* @__PURE__ */ jsx("span", { className: "absolute inset-2 rounded-sm bg-white" })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold", children: "VistaPrint" })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-white mb-3", children: "Print. Brand. Grow." }),
      /* @__PURE__ */ jsx("p", { className: "opacity-90", children: "Sign in to access your saved designs, track orders and reorder favourites in one click." })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center p-6 md:p-12", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex rounded-md border border-border p-1 mb-7", children: [
        /* @__PURE__ */ jsx("button", { onClick: () => setMode("signin"), className: `flex-1 py-2 text-sm font-medium rounded ${mode === "signin" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`, children: "Sign In" }),
        /* @__PURE__ */ jsx("button", { onClick: () => setMode("signup"), className: `flex-1 py-2 text-sm font-medium rounded ${mode === "signup" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`, children: "Create Account" })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit, className: "space-y-4", noValidate: true, children: [
        mode === "signup" ? /* @__PURE__ */ jsx(Field, { label: "Name", name: "name", type: "text", value: values.name, onChange: (v) => setValues({
          ...values,
          name: v
        }), error: errors.name }) : null,
        /* @__PURE__ */ jsx(Field, { label: "Email", name: "email", type: "email", value: values.email, onChange: (v) => setValues({
          ...values,
          email: v
        }), error: errors.email }),
        /* @__PURE__ */ jsx(Field, { label: "Password", name: "password", type: "password", value: values.password, onChange: (v) => setValues({
          ...values,
          password: v
        }), error: errors.password }),
        mode === "signup" ? /* @__PURE__ */ jsx(Field, { label: "Confirm password", name: "confirm", type: "password", value: values.confirm, onChange: (v) => setValues({
          ...values,
          confirm: v
        }), error: errors.confirm }) : /* @__PURE__ */ jsx("div", { className: "text-right", children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-sm text-primary hover:underline", children: "Forgot password?" }) }),
        /* @__PURE__ */ jsx("button", { type: "submit", className: "w-full bg-primary text-primary-foreground rounded-md py-3 font-semibold hover:bg-primary/90 transition", children: mode === "signin" ? "Sign In" : "Create Account" }),
        /* @__PURE__ */ jsx("button", { type: "button", className: "w-full border-2 border-border rounded-md py-3 font-medium hover:border-primary transition", children: "Continue with Google" }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-center text-muted-foreground mt-4", children: [
          "By continuing you agree to our ",
          /* @__PURE__ */ jsx(Link, { to: "/help-centre", className: "text-primary hover:underline", children: "Terms" }),
          "."
        ] })
      ] })
    ] }) })
  ] });
}
function Field(props) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { htmlFor: props.name, className: "text-sm font-medium mb-1.5 block", children: props.label }),
    /* @__PURE__ */ jsx("input", { id: props.name, type: props.type, value: props.value, onChange: (e) => props.onChange(e.target.value), className: `w-full border rounded-md px-3 py-2.5 text-sm focus:outline-none ${props.error ? "border-destructive" : "border-border focus:border-primary"}` }),
    props.error ? /* @__PURE__ */ jsx("p", { className: "text-xs text-destructive mt-1", children: props.error }) : null
  ] });
}
export {
  LoginPage as component
};
