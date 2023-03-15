// https://stackoverflow.com/a/39914235/11853111
export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
