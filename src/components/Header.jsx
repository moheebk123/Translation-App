import { FiZap } from "react-icons/fi";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-center gap-4 py-4 px-6">
      {/* Logo / Brand */}
        <FiZap className="text-purple-400 text-2xl" />
        <h1 className="text-2xl font-semibold tracking-wide text-white">
          Translate
        </h1>
    </header>
  );
}

export default Header;
