import { stories, type Story } from "@/data/stories";

const STORAGE_KEY = "himeetai_lastStoryIndex";

export function getActiveStory(): Story {
  // Check for query parameter override
  const params = new URLSearchParams(window.location.search);
  const storyParam = params.get("story");

  if (storyParam) {
    const found = stories.find((s) => s.id === storyParam);
    if (found) return found;
  }

  // Rotation logic
  const stored = localStorage.getItem(STORAGE_KEY);
  let nextIndex = 0;

  if (stored !== null) {
    const lastIndex = parseInt(stored, 10);
    if (!isNaN(lastIndex)) {
      nextIndex = (lastIndex + 1) % stories.length;
    }
  }

  localStorage.setItem(STORAGE_KEY, String(nextIndex));
  return stories[nextIndex];
}
