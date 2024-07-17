/* eslint-disable @typescript-eslint/no-explicit-any */
export const transformData = (data: any) => {
  return {
    ...data,
    description: data.description.split(","),
    technology: data.technology.split(","),
  };
};
