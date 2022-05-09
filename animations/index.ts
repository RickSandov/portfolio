export const animate = (
  type:
    | "moveInLeft"
    | "moveInRight"
    | "moveInUp"
    | "moveInDown"
    | "fadeIn"
    | "fadeOut"
    | "popUp",
  isVisible: boolean,
  delay: number = 0
) => {
  switch (type) {
    case "moveInLeft":
      return {
        animate: {
          x: isVisible ? 0 : "-50%",
          opacity: isVisible ? 1 : 0.01,
        },
      };
    case "moveInRight":
      return {
        animate: {
          x: isVisible ? 0 : "50%",
          opacity: isVisible ? 1 : 0.01,
        },
      };
    case "fadeIn":
      return {
        animate: {
          opacity: isVisible ? 1 : 0.01,
        },
        transition: {
          delay: delay,
          duration: 0.8,
        },
      };
    case "popUp":
      return {
        animate: {
          opacity: isVisible ? 1 : 0.01,
          scale: [0, 2, 1],
        },
        transition: {
          delay: delay,
          duration: 0.8,
        },
      };

    default:
      return {};
  }
};
