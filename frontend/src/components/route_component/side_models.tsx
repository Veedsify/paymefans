import { LucideSearch, } from "lucide-react";

const SideModels = () => {
  return (
    <div className="relative overflow-auto p-4 md:p-8 min-h-screen lg:block hidden">
      <div className="flex justify-between border border-black rounded-md pl-4 pr-3">
        <input type="search" name="Search" id="search" className="p-3 w-10/12 outline-none" placeholder="Search" />
        <LucideSearch className="self-center pr-2" />
      </div>
    </div>
  );
}

export default SideModels;