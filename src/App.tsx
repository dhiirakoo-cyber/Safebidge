/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield, LayoutGrid, Info, HelpCircle, Bell, User, Search, Menu } from 'lucide-react';
import { motion } from 'motion/react';
import { PaymentPortal } from './components/PaymentPortal';
import { AIChat } from './components/AIChat';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans overflow-hidden selection:bg-blue-100 selection:text-slate-900">
      {/* Header Navigation */}
      <nav className="h-16 bg-slate-900 flex items-center justify-between px-8 text-white shrink-0 z-50 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Shield size={24} className="text-white" fill="currentColor" opacity={0.2} />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight uppercase leading-none">SafeBridge</h1>
            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">Secure Ethiopia Fintech</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-[13px] font-bold uppercase tracking-wider text-slate-400">
          <a href="#" className="text-emerald-400 border-b-2 border-emerald-400 py-1">Dashboard</a>
          <a href="#" className="hover:text-white transition-colors">History</a>
          <a href="#" className="hover:text-white transition-colors">Safety</a>
          <a href="#" className="hover:text-white transition-colors">Settings</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-slate-800 rounded-full px-4 py-1.5 gap-3 border border-slate-700 focus-within:ring-2 ring-emerald-500 transition-all">
            <Search size={14} className="text-slate-400" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none outline-none text-xs font-medium w-40 text-slate-200"
            />
          </div>
          <button className="p-2 text-slate-400 hover:text-white transition-colors relative">
            <Bell size={18} />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
          </button>
          <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold ring-2 ring-slate-800 border border-slate-600">JD</div>
          <button className="lg:hidden p-1.5 text-slate-400">
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Main Content Layout */}
      <main className="flex-1 p-8 grid grid-cols-12 gap-8 overflow-hidden max-w-[1440px] mx-auto w-full">
        {/* Left: Transaction Pane */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
          <PaymentPortal />
        </div>

        {/* Right: Assistant and Activity */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 overflow-hidden">
          <AIChat />
          
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Mallaqa Gorsaa / Recent Activity</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center group cursor-pointer">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-red-500 transition-colors">
                     <LayoutGrid size={14} />
                   </div>
                   <div>
                     <p className="text-xs font-bold text-slate-800">To: 091****88</p>
                     <p className="text-[10px] text-slate-400 font-medium">Telebirr • 2 mins ago</p>
                   </div>
                 </div>
                 <span className="text-xs font-bold text-red-600">-450.00</span>
              </div>
              <div className="flex justify-between items-center group cursor-pointer">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-emerald-500 transition-colors">
                     <Shield size={14} />
                   </div>
                   <div>
                     <p className="text-xs font-bold text-slate-800">From: CBE Wallet</p>
                     <p className="text-[10px] text-slate-400 font-medium">Top up • 1 hour ago</p>
                   </div>
                 </div>
                 <span className="text-xs font-bold text-emerald-600">+1,200.00</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="h-10 border-t border-slate-200 px-8 flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider bg-white shrink-0">
        <div>&copy; 2026 SAFEBRIDGE FINTECH | ADDIS ABABA, ETHIOPIA</div>
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-1.5 grayscale opacity-70">
            <Shield size={12} />
            <span className="font-black">SB SECURITY VERIFIED</span>
          </div>
          <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_4px_rgba(16,185,129,0.5)]"></div> SERVER LOAD: LOW</span>
          <span>SUPPORT: 9522</span>
        </div>
      </footer>
    </div>
  );
}

// Re-import ChevronRight for the learn more part
import { ChevronRight } from 'lucide-react';
