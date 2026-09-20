import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/practice-areas")({
  component: PracticeAreasLayout,
});

function PracticeAreasLayout() {
  return <Outlet />;
}