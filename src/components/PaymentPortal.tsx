import React, { useState } from 'react';
import { Phone, DollarSign, Lock, CheckCircle2, ChevronRight, AlertCircle, ShieldCheck, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BANKS } from '../constants';
import { Bank } from '../types';

export const PaymentPortal: React.FC = () => {
  const [selectedBank, setSelectedBank] = useState<Bank>(BANKS.find(b => b.id === 'Telebirr') || BANKS[5]);
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || !amount) return;
    
    setStatus('processing');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 flex flex-col h-full overflow-hidden relative">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-xl font-bold text-slate-800 tracking-tight">Maallaqa Dabarsi <span className="text-slate-400 font-normal ml-2 text-sm">/ Money Transfer</span></h2>
          <p className="text-xs text-slate-400 mt-1">Inter-bank & Telebirr secure gateway</p>
        </div>
        <span className="text-[10px] font-bold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100 uppercase tracking-widest flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
          System Online
        </span>
      </div>

      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-4 ml-1">
        Baankii filadhu <span className="text-slate-300 font-normal">(Select Bank)</span>
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {BANKS.map((bank) => (
          <motion.button
            key={bank.id}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedBank(bank)}
            className={`p-4 border-2 rounded-xl flex flex-col items-center justify-center gap-3 transition-all duration-200 relative group overflow-hidden h-28 ${
              selectedBank.id === bank.id
                ? 'border-blue-600 bg-blue-50/50 shadow-sm'
                : 'border-slate-100 bg-slate-50/50 hover:border-slate-200 hover:bg-white font-medium'
            }`}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white shadow-sm border ${
              selectedBank.id === bank.id ? 'border-blue-200' : 'border-slate-100'
            }`}>
              <img 
                src={bank.logo} 
                alt={bank.name} 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  const name = bank.id === 'Telebirr' ? 'Tele' : bank.id;
                  target.src = `https://ui-avatars.com/api/?name=${name}&background=${bank.color.replace('#', '')}&color=fff`;
                }}
                className={`max-h-[85%] max-w-[85%] object-contain ${
                  selectedBank.id === bank.id ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'
                } transition-all`}
              />
            </div>
            <span className={`text-[9px] font-black tracking-widest uppercase ${
              selectedBank.id === bank.id ? 'text-blue-700' : 'text-slate-500'
            }`}>
              {bank.name}
            </span>
            {selectedBank.id === bank.id && (
              <div className="absolute top-2 right-2 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                <CheckCircle2 size={10} className="text-white" />
              </div>
            )}
          </motion.button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2.5">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">
              Lakk. Bilbilaa <span className="text-slate-300 font-normal">(Phone)</span>
            </label>
            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm tracking-tighter transition-colors group-focus-within:text-blue-600">
                +251
              </span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="91 234 5678"
                className="w-full pl-16 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-bold text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all placeholder:text-slate-300"
              />
            </div>
          </div>
          <div className="space-y-2.5">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">
              Hamma Qarshii <span className="text-slate-300 font-normal">(ETB)</span>
            </label>
            <div className="relative">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="1,250.00"
                className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-bold text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all placeholder:text-slate-300"
              />
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="bg-emerald-50 border border-emerald-100 p-5 rounded-xl flex items-center gap-4 text-emerald-800 shadow-sm"
            >
              <div className="bg-emerald-500 p-2 rounded-lg text-white shadow-lg shadow-emerald-500/20">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-tight">Transaction Processed</h4>
                <p className="text-xs font-medium text-emerald-600">Securely settled via {selectedBank.name}. ID: #SB-{Math.floor(Math.random()*10000)}</p>
              </div>
            </motion.div>
          ) : (
            <motion.div className="flex flex-col gap-4">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'processing' || !phone || !amount}
                className={`w-full h-16 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                  status === 'processing' 
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : 'bg-blue-700 text-white hover:bg-blue-800 shadow-xl shadow-blue-200 active:scale-[0.98]'
                }`}
              >
                {status === 'processing' ? (
                  <Loader2 size={24} className="animate-spin" />
                ) : (
                  <>
                    <span>Dabarsi SafeBridge-n</span>
                    <Lock size={18} className="opacity-50" />
                  </>
                )}
              </motion.button>
              <p className="text-center text-[10px] text-slate-400 font-medium leading-relaxed px-12">
                By clicking transfer, you agree to our terms and conditions. All banking transactions are encrypted with 256-bit SSL protocols.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};
