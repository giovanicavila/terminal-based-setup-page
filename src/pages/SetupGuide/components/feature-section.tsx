import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureSectionProps {
  title: string;
  description: string;
  features: string[];
  id: string;
  icon?: React.ReactNode;
}

export function FeatureSection({
  title,
  description,
  features,
  id,
  icon,
}: FeatureSectionProps) {
  return (
    <section className="scroll-mt-20 py-12" id={id}>
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <Card className="border-border/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              {icon && (
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {icon}
                </div>
              )}
              <div>
                <CardTitle className="text-2xl">{title}</CardTitle>
                <p className="mt-1 text-muted-foreground text-sm">
                  {description}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: static list from translations
                <li className="flex gap-3" key={`${id}-${index}`}>
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
