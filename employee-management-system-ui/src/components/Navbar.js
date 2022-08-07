import React, { useState } from "react";

const Navbar = () => {
  const [narlist, setNarlist] = useState([
    { label: "home" },
    { label: "contribute" },
    { label: "grate" },
    { label: "about" },
  ]);
  return (
    <div className="bg-gray-800">
      <ul className="h-16 px-8 flex items-center">
        <div className="h-16 px-8 flex items-center bg-white"> Logo</div>

        {narlist.map((item) => (
          <li className="text-pink-900 font-bold capitalize	 py-5 px-10  hover:bg-pink-400 hover:text-white cursor-pointer">
            {item.label}
          </li>
        ))}
        <li>
          <details className="open:hover: dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg">
            <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
              Why do they call it Ovaltine?
            </summary>
            <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              <p>
                The mug is round. The jar is round. They should call it
                Roundtine.
              </p>
            </div>
          </details>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
