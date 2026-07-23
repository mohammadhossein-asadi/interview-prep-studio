"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Land Your Dream Job?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Start your interview preparation journey today. It&apos;s free, it&apos;s
            comprehensive, and it works.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="group gap-2 px-8">
              Get Started Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
