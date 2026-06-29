import React from "react";
import { House,MonitorSmartphone, ShoppingCart} from "lucide-react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <>
      <header className="sticky top-0 bg-gray-950/95 backdrop-blur-md text-white shadow-2xl shadow-gray-950/70 border-b border-orange-900">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to={"/"}>
            <div className="flex items-center space-x-3 cursor-pointer">
              <House className="w-8 h-8  text-orange-400 drop-shadow-lg" />
              <h1 className="flex gap-2 text-4xl font-extrabold items-center justify-center">
                TechShop{" "}
                <span className="w-5 h-5">
                  <MonitorSmartphone />
                </span>
              </h1>
            </div>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link to={"/Cart"}
            className="relative p-3 bg-orange-500/10 rounded-xl hover:bg-orange-500/20 transit:duration-300  border-orange-400/50 shadow-lg cursor-pointer">
             <ShoppingCart className="w-6 h-6 text-orange-400" />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
