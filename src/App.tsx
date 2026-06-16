import { motion } from 'motion/react';
import { Target, Users, ShieldCheck, Crosshair, Award, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';


const GREEN = '#052e16';
const RED = '#dc2626';
const DARK = '#1f2937';
const LIGHT = '#f9fafb';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f9fafb] text-[#1f2937] font-sans selection:bg-[#052e16] selection:text-white print:bg-white">
      {/* ---------------- NAVIGATION ---------------- */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center items-center">
          <div className="flex items-center">
            <div className="flex items-center justify-center shrink-0 p-2">
              <img 
                src="/onx_final_logo.png" 
                alt="ONX Target Sportz" 
                className="w-auto h-20 sm:h-32 md:h-40 object-contain drop-shadow-lg" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  e.currentTarget.nextElementSibling?.classList.add('flex');
                }} 
              />
              <div className="w-20 h-20 bg-[#052e16] rounded-lg hidden items-center justify-center">
                <Target className="text-white w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-32 sm:pt-48 lg:pt-56 pb-16 print:pt-4 print:pb-0">
        {/* Print Only Logo header */}
        <div className="hidden print:flex justify-center mb-10">
          <img src="/onx_final_logo.png" className="h-48 object-contain drop-shadow-sm" alt="ONX Target Sportz" />
        </div>
        {/* ---------------- HERO & WELCOME ---------------- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 print:py-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center print:block print:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="print:break-inside-avoid"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#052e16] tracking-tight mb-6 print:text-4xl print:text-center">
                Aim for Excellence
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl print:text-center print:max-w-none print:mb-8">
                Welcome to On-X Target Sports, where precision, focus, skill, and fun unite to create an unforgettable experience. Led by Mr. Manivasagam and Mr. Thilepan, we train individuals from grassroots beginners to elite athletes.
              </p>
              
              <div className="space-y-6 print:grid print:grid-cols-3 print:space-y-0 print:gap-6">
                <div className="flex gap-4 print:flex-col print:items-center print:text-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-full flex items-center justify-center print:bg-transparent">
                    <Target className="w-6 h-6 text-[#dc2626]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1f2937]">Dual Disciplines</h3>
                    <p className="text-gray-600 print:text-sm">India's first and only academy offering Professional Archery and Shooting under one roof.</p>
                  </div>
                </div>
                <div className="flex gap-4 print:flex-col print:items-center print:text-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f2f8f5] rounded-full flex items-center justify-center print:bg-transparent">
                    <Award className="w-6 h-6 text-[#052e16]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1f2937]">Decades of Expertise</h3>
                    <p className="text-gray-600 print:text-sm">Over 18 years in Archery and 12+ years in Shooting Sports training and coaching.</p>
                  </div>
                </div>
                <div className="flex gap-4 print:flex-col print:items-center print:text-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f2f8f5] rounded-full flex items-center justify-center print:bg-transparent">
                    <ShieldCheck className="w-6 h-6 text-[#052e16]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1f2937]">Safe & Guided</h3>
                    <p className="text-gray-600 print:text-sm">Highest standard of coaching, ensuring absolute safety and customer experience.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[380px] sm:h-[540px] rounded-3xl overflow-hidden bg-[#052e16] shadow-2xl print:h-[250px] print:rounded-2xl print:shadow-none print:break-inside-avoid print:mt-12"
            >
              {/* Abstract Target Visual Background */}
              <div className="absolute inset-0 opacity-20 flex items-center justify-center print:opacity-10">
                <div className="w-[800px] h-[800px] rounded-full border-[40px] border-[#dc2626]/30 animate-[spin_60s_linear_infinite] print:animate-none" />
                <div className="absolute w-[600px] h-[600px] rounded-full border-[40px] border-white/30" />
                <div className="absolute w-[400px] h-[400px] rounded-full border-[40px] border-white/40" />
                <div className="absolute w-[200px] h-[200px] rounded-full bg-[#dc2626]/50" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#052e16] via-transparent to-transparent opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-bl from-[#dc2626]/30 to-transparent opacity-60 print:hidden" />
              <div className="absolute bottom-8 left-8 right-8 text-white print:bottom-6 print:left-6 print:text-center text-center sm:text-left">
                <p className="text-2xl font-bold mb-2">Unforgettable Experience</p>
                <p className="text-white/90 text-lg">Precision, focus, skill, and fun.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ---------------- PACKAGES & PRICING ---------------- */}
        <section className="bg-white py-20 sm:py-28 border-y border-gray-100 print:py-12 print:border-none" id="packages">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 print:mb-10">
              <h2 className="text-4xl sm:text-5xl font-bold text-[#052e16] mb-4">Precision Team Building</h2>
              <p className="text-xl text-gray-500 font-medium">Minimum Group Size: 15+</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 print:block print:space-y-12">
              {/* Left Column: The Arsenal */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#f9fafb] rounded-3xl p-8 sm:p-10 border border-gray-100 print:bg-white print:border-2 print:border-gray-200 print:break-inside-avoid print:p-6"
              >
                <div className="flex items-center gap-3 mb-8 print:mb-6 print:justify-center">
                  <Target className="w-8 h-8 text-[#052e16]" />
                  <h3 className="text-2xl font-bold text-[#052e16]">The Arsenal</h3>
                </div>
                
                <div className="space-y-12 print:space-y-8">
                  <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row gap-6 items-center">
                      <div className="flex-1 w-full print:text-center">
                        <h4 className="text-xl font-bold text-[#1f2937] flex items-center gap-2 mb-2 print:justify-center">
                          <span className="w-2 h-2 rounded-full bg-[#dc2626] group-hover:scale-150 transition-transform"></span>
                          Olympic Spec Rifle
                        </h4>
                        <p className="text-gray-600 sm:ml-5 text-lg print:ml-0">Built completely for elite precision.</p>
                      </div>
                      <div className="w-full sm:w-1/2 h-40 bg-white rounded-xl overflow-hidden flex items-center justify-center print:hidden border border-gray-50">
                        {/* Placeholder for first image */}
                        <img src="/rifle1.jpg" alt="Olympic Spec Rifle" className="w-[110%] h-[110%] object-contain mix-blend-multiply" />
                      </div>
                    </div>
                  </div>

                  <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row gap-6 items-center">
                      <div className="flex-1 w-full print:text-center">
                        <h4 className="text-xl font-bold text-[#1f2937] flex items-center gap-2 mb-2 print:justify-center">
                          <span className="w-2 h-2 rounded-full bg-[#dc2626] group-hover:scale-150 transition-transform"></span>
                          Professional Pistol
                        </h4>
                        <p className="text-gray-600 sm:ml-5 text-lg print:ml-0">Equipped natively with a Red Dot Sight.</p>
                      </div>
                      <div className="w-full sm:w-1/2 h-40 bg-white rounded-xl overflow-hidden flex items-center justify-center print:hidden border border-gray-50">
                        {/* Placeholder for second image */}
                        <img src="/rifle2.jpg" alt="Professional Pistol" className="w-[110%] h-[110%] object-contain mix-blend-multiply" />
                      </div>
                    </div>
                  </div>

                  <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row gap-6 items-center">
                      <div className="flex-1 w-full print:text-center">
                        <h4 className="text-xl font-bold text-[#1f2937] flex items-center gap-2 mb-2 print:justify-center">
                          <span className="w-2 h-2 rounded-full bg-[#dc2626] group-hover:scale-150 transition-transform"></span>
                          Sniper Rifle
                        </h4>
                        <p className="text-gray-600 sm:ml-5 text-lg print:ml-0">Ultimate distance accuracy with a 12x Scope.</p>
                      </div>
                      <div className="w-full sm:w-1/2 h-40 bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center print:hidden relative shadow-inner">
                        <img src="/rifle3.jpg" alt="Sniper Rifle" className="w-full h-full object-cover scale-[1.7] translate-x-[2%] translate-y-[15%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Pricing */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-6 print:break-inside-avoid print:gap-4"
              >
                <div className="bg-[#052e16] rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden print:shadow-none print:border-2 print:border-[#052e16] print:text-black print:bg-white print:p-6">
                  <div className="absolute top-0 right-0 p-8 opacity-10 print:hidden">
                    <Award className="w-48 h-48 transform rotate-12" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-8 relative z-10 print:text-center print:text-[#052e16]">Tiered Pricing</h3>
                  
                  <div className="space-y-6 relative z-10">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-white/20 gap-2 sm:gap-0 pb-4 print:border-gray-200">
                      <div>
                        <div className="text-lg font-bold print:text-gray-900">1 Weapon Plan</div>
                        <div className="text-green-200 print:text-gray-600">10 shots total</div>
                      </div>
                      <div className="text-2xl font-bold text-white print:text-[#052e16] w-full sm:w-auto text-right sm:text-left">₹499 <span className="text-sm font-normal text-green-200 print:text-gray-600">/ person</span></div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-white/20 gap-2 sm:gap-0 pb-4 print:border-gray-200">
                      <div>
                        <div className="text-lg font-bold print:text-gray-900">2 Weapons Plan</div>
                        <div className="text-green-200 print:text-gray-600">20 shots total (10/weapon)</div>
                      </div>
                      <div className="text-2xl font-bold text-white print:text-[#052e16] w-full sm:w-auto text-right sm:text-left">₹849 <span className="text-sm font-normal text-green-200 print:text-gray-600">/ person</span></div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 sm:gap-0">
                      <div>
                        <div className="text-lg font-bold flex items-center gap-2 print:text-gray-900">
                          3 Weapons (Combo)
                        </div>
                        <div className="text-green-200 print:text-gray-600">30 shots total (10/weapon)</div>
                      </div>
                      <div className="text-2xl font-bold text-white print:text-[#052e16] w-full sm:w-auto text-right sm:text-left">₹999 <span className="text-sm font-normal text-green-200 print:text-gray-600">/ person</span></div>
                    </div>
                  </div>

                  <div className="mt-8 bg-[#dc2626]/20 backdrop-blur-sm rounded-xl p-4 border border-[#dc2626]/30 print:bg-red-50 print:border-red-200">
                    <p className="text-[#fecaca] font-bold text-sm sm:text-base flex justify-center items-center gap-2 print:text-[#dc2626]">
                      <span className="text-xl">★</span> Exclusive Perk: Take an additional 10% off the 3-weapon Combo Plan!
                    </p>
                  </div>
                </div>

                <div className="bg-white border-2 border-[#f2f8f5] rounded-3xl p-6 flex items-start gap-4 print:border-gray-200 print:items-center print:text-center print:justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#f2f8f5] flex items-center justify-center flex-shrink-0 print:hidden">
                    <Award className="w-5 h-5 text-[#052e16]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#052e16] text-lg">Event Add-On: Competition Certificates</h4>
                    <p className="text-gray-600 mt-1 text-sm">Fun Competition Certificates included. Requirement: Please share the list of names prior to the event.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ---------------- BOOK (CONTACT) ---------------- */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center print:py-16 print:break-inside-avoid" id="book">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#052e16] mb-4 print:text-3xl">Book Your Experience</h2>
            <p className="text-xl text-gray-600 mb-12 print:text-lg print:mb-8">Lock in your preferred slot for customized corporate schedules.</p>

            <div className="grid sm:grid-cols-3 gap-6 print:grid-cols-3">
              <a href="tel:9884674040" className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 block print:p-4 print:border-none print:shadow-none">
                <div className="w-14 h-14 bg-green-50 text-[#052e16] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform print:hidden">
                  <Phone className="w-7 h-7" />
                </div>
                <div className="font-bold text-gray-900 text-lg mb-1">Phone</div>
                <div className="text-lg text-[#052e16] font-medium">9884674040</div>
              </a>

              <a href="mailto:onxtsportz@gmail.com" className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 block print:p-4 print:border-none print:shadow-none">
                <div className="w-14 h-14 bg-green-50 text-[#052e16] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform print:hidden">
                  <Mail className="w-7 h-7" />
                </div>
                <div className="font-bold text-gray-900 text-lg mb-1">Email</div>
                <div className="text-sm sm:text-lg text-[#052e16] font-medium break-all">onxtsportz@gmail.com</div>
              </a>

              <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 print:p-4 print:border-none print:shadow-none">
                <div className="w-14 h-14 bg-green-50 text-[#052e16] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform print:hidden">
                  <MapPin className="w-7 h-7" />
                </div>
                <div className="font-bold text-gray-900 text-lg mb-1">Locations</div>
                <div className="text-lg text-[#052e16] font-medium">Anna Nagar & Porur</div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      
      {/* ---------------- FOOTER ---------------- */}
      <footer className="bg-[#052e16] border-t border-[#dc2626] py-12 text-center text-green-100/60 flex flex-col items-center print:hidden">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-white rounded p-4 flex items-center justify-center h-28 shadow-lg">
            <img 
              src="/onx_final_logo.png" 
              alt="ONX Target Sportz" 
              className="w-auto h-20 object-contain" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }} 
            />
            <Target className="text-[#052e16] w-12 h-12 hidden" />
          </div>
        </div>
        <p>© {new Date().getFullYear()} ONX Target Sportz. All rights reserved.</p>
      </footer>
    </div>
  );
}

