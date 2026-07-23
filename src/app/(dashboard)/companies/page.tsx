"use client";

import { AnimatedPage } from "@/components/shared/animated-page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { companies } from "@/data/companies";
import Link from "next/link";

const tierColors: Record<string, string> = {
  faang: "bg-red-500/10 text-red-600",
  "big-tech": "bg-blue-500/10 text-blue-600",
  growth: "bg-green-500/10 text-green-600",
  startup: "bg-purple-500/10 text-purple-600",
};

export default function CompaniesPage() {
  return (
    <AnimatedPage>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Company Collections</h1>
        <p className="text-muted-foreground">
          Interview questions organized by top tech companies.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {companies.map((company) => (
          <Link key={company.id} href={`/companies/${company.id}`}>
            <Card className="group h-full transition-all hover:shadow-md hover:shadow-primary/5">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{company.logo}</span>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {company.name}
                    </CardTitle>
                  </div>
                  <Badge className={`text-xs ${tierColors[company.tier]}`} variant="outline">
                    {company.tier}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-sm text-muted-foreground">
                  {company.description}
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{company.questionCount} Questions</Badge>
                </div>
                <div className="mt-3 flex flex-wrap gap-1">
                  {company.commonTopics.slice(0, 3).map((topic) => (
                    <Badge key={topic} variant="outline" className="text-[10px]">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </AnimatedPage>
  );
}
