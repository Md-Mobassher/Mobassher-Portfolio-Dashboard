/* eslint-disable @typescript-eslint/no-explicit-any */

const Container = ({ children, padding }: any) => {
  return (
    <div
      className="max-w-[1200px] mx-auto px-8"
      style={{
        padding,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
