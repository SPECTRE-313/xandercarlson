import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function DropdownNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="p-2 bg-gray-800 text-white rounded-lg shadow-md fixed top-4 left-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-12 left-4 bg-white shadow-lg rounded-lg w-48 p-2"
        >
          <ul className="space-y-2">
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">Home</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">About</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">Services</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">Contact</a></li>
          </ul>
        </motion.div>
      )}
