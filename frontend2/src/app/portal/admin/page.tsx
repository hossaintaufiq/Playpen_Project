import { Suspense } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { isAdminAuthenticated } from "@/lib/cms/auth";
import { redirect } from "next/navigation";

export default async function AdminLoginPage() {
  const authed = await isAdminAuthenticated();
  if (authed) redirect("/portal/admin/dashboard");

  return (
    <SiteLayout>
      <PageHero
        title="Admin Portal"
        subtitle="Secure access for Playpen staff and administration."
        image="/images/marquee/faculty.jpg"
        imageAlt="Admin portal"
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <Suspense fallback={<div className="text-center text-sm text-muted-foreground">Loading...</div>}>
          <AdminLoginForm />
        </Suspense>
      </section>
    </SiteLayout>
  );
}
