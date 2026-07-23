"use client";

import { useParams } from "next/navigation";
import { AnimatedPage } from "@/components/shared/animated-page";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { companies } from "@/data/companies";
import { allQuestions } from "@/data";
import Link from "next/link";

export default function CompanyDetailPage() {
  const params = useParams();
  const companyId = params.companyId as string;
  const company = companies.find((c) => c.id === companyId);

  if (!company) {
    return (
      <AnimatedPage>
        <div className="py-16 text-center">
          <h2 className="text-xl font-semibold">Company not found</h2>
          <Link href="/companies">
            <Button variant="link" className="mt-4">Back to companies</Button>
          </Link>
        </div>
      </AnimatedPage>
    );
  }

  const companyQuestions = allQuestions.filter((q) =>
    q.companyTags.includes(company.name)
  );

  return (
    <AnimatedPage>
      <Breadcrumb
        items={[
          { label: "Companies", href: "/companies" },
          { label: company.name },
        ]}
      />

      <div className="mt-6 mb-8">
        <div className="flex items-center gap-4">
          <span className="text-4xl">{company.logo}</span>
          <div>
            <h1 className="text-3xl font-bold">{company.name}</h1>
            <p className="text-muted-foreground">{company.description}</p>
          </div>
        </div>
      </div>

      <div className="mb-6 flex gap-2">
        <Badge variant="secondary">{company.questionCount} Questions</Badge>
        <Badge variant="outline">{company.tier}</Badge>
      </div>

      <h2 className="mb-4 text-xl font-semibold">Questions from {company.name}</h2>

      <div className="space-y-3">
        {companyQuestions.length > 0 ? (
          companyQuestions.map((q) => (
            <Link key={q.id} href={`/questions/${q.id}`}>
              <Card className="transition-all hover:shadow-md">
                <CardContent className="flex items-center justify-between p-4">
                  <div>
                    <Badge variant="outline" className="text-xs mb-1">{q.difficulty}</Badge>
                    <h3 className="font-medium">{q.title}</h3>
                    <p className="text-xs text-muted-foreground">{q.topic}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">
              Questions for this company are being curated. Check back soon!
            </CardContent>
          </Card>
        )}
      </div>
    </AnimatedPage>
  );
}
