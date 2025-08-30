import CoursesSection from "@/components/CoursesSection";
import WelcomeSection from "@/components/WelcomeSection";

import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col p-12 gap-44">
      <WelcomeSection />

      <Separator />

      <CoursesSection />
    </div>
  );
}
