// constants/animations.js
export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const confirmationAnimations = {
  container: {
    initial: { opacity: 0, scale: 0.8, y: 50 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  icon: {
    initial: { scale: 0, rotate: -180 },
    animate: { scale: 1, rotate: 0 },
    transition: { delay: 0.3, duration: 0.5, type: "spring", stiffness: 200 }
  },
  title: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.4, duration: 0.6 }
  },
  text: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.6, duration: 0.6 }
  },
  countdown: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { delay: 0.9, duration: 0.6 }
  },
  button: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 1, duration: 0.6 }
  }
}

export const formAnimations = {
  container: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  },
  conditionalField: {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: 'auto' },
    transition: { duration: 0.3 }
  },
  button: {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 }
  }
}