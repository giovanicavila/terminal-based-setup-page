import { Route, Routes } from "react-router";
import { SetupGuidePage } from "@/pages/SetupGuide/setup-guide";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<SetupGuidePage />} index />
    </Routes>
  );
}
