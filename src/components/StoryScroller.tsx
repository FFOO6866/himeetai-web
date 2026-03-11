import type { Story } from "@/data/stories";
import StoryScene from "@/components/StoryScene";

interface StoryScrollerProps {
  story: Story;
}

const StoryScroller = ({ story }: StoryScrollerProps) => {
  return (
    <>
      {story.scenes.map((scene, i) => (
        <StoryScene
          key={`${story.id}-${i}`}
          image={scene.image}
          sceneNumber={scene.sceneNumber}
          headline={scene.headline}
          insight={scene.text}
        />
      ))}
    </>
  );
};

export default StoryScroller;
