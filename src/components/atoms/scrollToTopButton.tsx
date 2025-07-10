import { useScrollPosition } from "../../utils/scrollToTop";

export const ScrollToTopButton = () => {
  const isVisible = useScrollPosition(400);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-zinc-600 hover:bg-zinc-400 px-4 py-2 rounded-lg transition-all duration-200 shadow-lg border border-portfolio-border"
    >
      Top ↑
    </button>
  );
};