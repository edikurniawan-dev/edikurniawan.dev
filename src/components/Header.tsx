import React from "react";

export default function Header() {
  return (
    <header className="h-16 border-b border-dashed px-10">
      <div className="flex h-full w-full items-center justify-between border-x border-dashed px-10">
        <div className="item-center flex gap-5">
          <div className="">Logo</div>
          <div className="flex gap-5">
            <span>Experiences</span>
            <span>Projects</span>
            <span>Contact</span>
          </div>
        </div>
        <div className="">dark</div>
      </div>
    </header>
  );
}
