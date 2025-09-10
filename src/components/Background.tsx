import Stars from "./Stars";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <Stars />
    </div>
  );
};

export default Background;
