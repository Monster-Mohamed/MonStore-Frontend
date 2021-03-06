export const ButtonSiteAni = {
  hidden: {
    boxShadow: "0 0 5px 1px #6A5495",
  },
  hover: {
    boxShadow: "0 0 10px 3px #6A5495",
    transition: {
      yoyo: Infinity,
      duration: 1,
    },
  },
};

export const ButtonProductAni = {
  hover: {
    y: 30,
    opacity: 0,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 120,
    },
  },
};

export const ButtonProductAni2 = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 120,
    },
  },
};
