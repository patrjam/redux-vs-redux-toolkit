export const customDelay = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
