import { useState } from "react";
import { initialTabs as tabs } from '../ui/projectSections.jsx';
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function Projects() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <div className="container w-full mt-28 wrapper">
      <nav className="mb-4">
        <ul className="flex">
          {tabs.map((item) => (
            <li
              key={item.label}  
              className={`cursor-pointer py-2 px-4 ${item === selectedTab ? "font-bold" : ""}`}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.label}`}
              {item === selectedTab ? (
                <motion.div className="h-0.5 rounded-md bg-secondary h3" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main className="p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? selectedTab.content : "😋"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
