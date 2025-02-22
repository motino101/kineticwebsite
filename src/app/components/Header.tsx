import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#393328] w-full px-8 py-4">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-white">
          <span className="font-syne text-2xl" style={{ fontWeight: 700, color: 'white' }}>
            kinetic
          </span>
        </div>
      </div>
      <div className="flex gap-2">
        <div
          className="flex cursor-pointer items-center justify-center overflow-hidden h-10 text-white gap-2"
        >
          <div className="text-white" data-icon="Profile" data-size="20px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
