"use client";

import React, { useEffect } from "react";
import { DocsSidebar } from "./DocsSidebar";
import { BrandLogo } from "@/components/media/BrandLogo";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MobileDocsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDocsDrawer({ isOpen, onClose }: MobileDocsDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Drawer Content */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-80 max-w-[85vw] h-full bg-[#F8FBFA] dark:bg-[#121316] border-r border-[#D5DFD9] dark:border-[#2E343D] p-5 z-10 flex flex-col justify-between overflow-y-auto"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#D5DFD9] dark:border-[#2E343D] mb-4">
                <BrandLogo size="sm" />
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-[#4A5F76] hover:text-[#131E2A] dark:text-[#8D98A7] dark:hover:text-[#F0F4F8] hover:bg-[#EEF4F1] dark:hover:bg-[#1B1E23] transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <DocsSidebar onItemClick={onClose} className="w-full pr-0 py-0" />
            </div>

            <div className="pt-6 border-t border-[#D5DFD9] dark:border-[#2E343D] text-[11px] font-mono text-[#4A5F76] dark:text-[#8D98A7]">
              NASA SPACE APPS | DEVUPWARD
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
