"use client";

import { AnimatedPage } from "@/components/shared/animated-page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useUserStore, useSettingsStore } from "@/stores";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export default function SettingsPage() {
  const { name, email, targetLevel, studyGoalMinutes, setUser } = useUserStore();
  const { theme, setTheme } = useSettingsStore();

  return (
    <AnimatedPage>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account and preferences.
        </p>
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Profile */}
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <Input
                value={name}
                onChange={(e) => setUser({ name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input value={email} disabled />
            </div>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card>
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">Theme</div>
                <div className="text-xs text-muted-foreground">
                  Choose your preferred theme
                </div>
              </div>
              <ThemeToggle />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">Target Level</div>
                <div className="text-xs text-muted-foreground">
                  Your interview preparation goal
                </div>
              </div>
              <select
                value={targetLevel}
                onChange={(e) =>
                  setUser({ targetLevel: e.target.value as "junior" | "mid" | "senior" | "staff" })
                }
                className="rounded-md border bg-background px-3 py-1 text-sm"
              >
                <option value="junior">Junior</option>
                <option value="mid">Mid-Level</option>
                <option value="senior">Senior</option>
                <option value="staff">Staff Engineer</option>
              </select>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">Daily Study Goal</div>
                <div className="text-xs text-muted-foreground">
                  Minutes per day
                </div>
              </div>
              <Input
                type="number"
                value={studyGoalMinutes}
                onChange={(e) =>
                  setUser({ studyGoalMinutes: parseInt(e.target.value) || 30 })
                }
                className="w-20 text-right"
              />
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-destructive/20">
          <CardHeader>
            <CardTitle className="text-destructive">Danger Zone</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">Reset Progress</div>
                <div className="text-xs text-muted-foreground">
                  Clear all your progress data
                </div>
              </div>
              <Button variant="destructive" size="sm">
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AnimatedPage>
  );
}
