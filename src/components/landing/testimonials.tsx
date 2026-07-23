"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Frontend Engineer at Google",
    content:
      "This platform helped me prepare for my Google interview in just 2 weeks. The question library is incredibly comprehensive and the AI feedback was spot-on.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Full Stack Developer at Meta",
    content:
      "The spaced repetition flashcards were a game-changer. I could finally retain complex concepts instead of cramming the night before.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Backend Engineer at Stripe",
    content:
      "I loved the company-specific question collections. Knowing what Stripe typically asks gave me a huge confidence boost going into the interview.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Loved by{" "}
            <span className="text-primary">Developers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of developers who aced their interviews.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-2xl p-6"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
