import { BrowserRouter } from "react-router";
import { ThemeProvider } from "@/contexts/theme-context";
import { TranslateProvider } from "@/contexts/translate-context";
import { AppRoutes } from "@/routes/routes";

export function Providers() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ThemeProvider
        defaultTheme="system"
        storageKey="terminal-dev-stack-theme"
      >
        <TranslateProvider defaultLanguage="pt">
          <AppRoutes />
        </TranslateProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
