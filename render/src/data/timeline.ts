import type { TimelineEvent } from "@/types";

export const timelineEvents: TimelineEvent[] = [
  {
    id: "university",
    type: "education",
    dateKey: "timeline.items.university.date",
    titleKey: "timeline.items.university.title",
    descriptionKey: "timeline.items.university.description",
    institution: "University",
  },
  {
    id: "self-study",
    type: "experience",
    dateKey: "timeline.items.self_study.date",
    titleKey: "timeline.items.self_study.title",
    descriptionKey: "timeline.items.self_study.description",
    institution: "Self-directed",
  },
];
