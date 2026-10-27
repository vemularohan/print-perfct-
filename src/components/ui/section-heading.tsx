import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  eyebrow?: string;
};

export function SectionHeading({ children, className, eyebrow }: Props) {
  return (
    <div className={cn("mb-8", className)}>
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">{eyebrow}</p>
      ) : null}
      <h2 className="border-l-4 border-primary pl-4">{children}</h2>
    </div>
  );
}
