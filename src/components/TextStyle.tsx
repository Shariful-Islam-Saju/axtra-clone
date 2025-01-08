"use client";

const TextStyle = ({ text }: { text: string }) => {

  return (
    /* From Uiverse.io by Rauliqbal */
    <button className="cursor-pointer  px-6 py-3 rounded-xl  border-none font-medium group">
      <div className="relative overflow-hidden">
        <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
        {text}
        </p>
        <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
          {text}
        </p>
      </div>
    </button>
  );
};

export default TextStyle;
