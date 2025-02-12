// pageVariants.js
const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
    },
    in: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 25
      }
    },
    out: {
      opacity: 0,
      x: "100vw",
      transition: {
        ease: "easeInOut"
      }
    }
  };
  
  export default pageVariants;
  