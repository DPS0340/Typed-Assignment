export const onEnter = (callback: () => {}) => (event: React.KeyboardEvent) => {
  if (event.key !== "Enter") {
    return;
  }
  callback();
};
