import Stars from "./Stars";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* 細かい星（背景として固定） */}
      <Stars />
    </div>
  );
};

export default Background;
