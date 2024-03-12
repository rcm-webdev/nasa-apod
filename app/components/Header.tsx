import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex lg:flex-1 btn btn-ghost normal-case m-5 navbar max-w-[200px]">
        <Link
          className="flex items-center gap-2 shrink-0 "
          href="/"
          title={`AstroView homepage`}
        >
          <Image
            src="/logo.svg"
            alt={`AstroView logo`}
            className="w-12"
            priority={true}
            width={32}
            height={32}
          />
          <span className="font-extrabold text-lg">AstroView</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
