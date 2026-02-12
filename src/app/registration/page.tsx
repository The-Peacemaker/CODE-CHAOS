"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Users, 
  User, 
  Mail, 
  Phone, 
  Building, 
  GraduationCap,
  Sparkles,
  Star,
  Leaf,
  Heart,
  BookOpen,
  Building2,
  Lightbulb,
  Rocket,
  Code,
  Coffee,
  Terminal,
  Send
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import CustomCursor from "@/components/CustomCursor";

// Validation helpers
const isValidPhone = (phone: string) => /^[0-9]{10}$/.test(phone.replace(/\s/g, ""));
const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidName = (name: string) => name.trim().length >= 2;

// Animated doodle components
const Squiggle = () => (
  <svg width="60" height="30" viewBox="0 0 60 30">
    <motion.path
      d="M5,15 Q15,5 25,15 T45,15 T55,15"
      fill="none"
      stroke="var(--color-terracotta)"
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    />
  </svg>
);

const CircleDoodle = () => (
  <motion.div
    className="w-10 h-10 border-3 border-[var(--color-gold)] rounded-full"
    animate={{ 
      scale: [1, 1.2, 1],
      borderRadius: ["50%", "30%", "50%"],
    }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  />
);

const CrossDoodle = () => (
  <svg width="24" height="24" viewBox="0 0 30 30">
    <motion.path
      d="M5,5 L25,25 M25,5 L5,25"
      fill="none"
      stroke="var(--color-stone)"
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
    />
  </svg>
);

// Themes data
const THEMES = [
  { id: "sustainability", name: "Sustainability & Environment", icon: Leaf, color: "var(--color-terracotta)" },
  { id: "health", name: "Health & Well-being", icon: Heart, color: "#e57373" },
  { id: "education", name: "Education & Learning", icon: BookOpen, color: "var(--color-gold)" },
  { id: "smartsociety", name: "Smart Society", icon: Building2, color: "var(--color-stone)" },
  { id: "openinnovation", name: "Open Innovation", icon: Lightbulb, color: "#9575cd" },
];

// Form step indicator
function StepIndicator({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2 mb-6 sm:mb-8">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div key={i} className="flex items-center">
          <motion.div
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 sm:border-3 border-[var(--color-ink)] flex items-center justify-center font-[family-name:var(--font-ancient)] font-bold text-sm sm:text-lg ${
              i + 1 <= currentStep 
                ? "bg-[var(--color-terracotta)] text-white" 
                : "bg-[var(--color-paper)] text-[var(--color-ink)]"
            }`}
            style={{ boxShadow: "2px 2px 0 var(--color-ink)" }}
            animate={i + 1 === currentStep ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            {i + 1 <= currentStep - 1 ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : i + 1}
          </motion.div>
          {i < totalSteps - 1 && (
            <div className={`w-6 sm:w-12 h-0.5 sm:h-1 mx-0.5 sm:mx-1 ${
              i + 1 < currentStep ? "bg-[var(--color-terracotta)]" : "bg-[var(--color-stone)]/30"
            }`} />
          )}
        </div>
      ))}
    </div>
  );
}

// Styled input component
function FormInput({ 
  label, 
  icon: Icon, 
  placeholder, 
  type = "text", 
  value, 
  onChange,
  required = true,
  error
}: {
  label: string;
  icon: React.ElementType;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
}) {
  const hasError = !!error && value.length > 0;
  
  return (
    <div className="mb-3 sm:mb-4">
      <label className="block font-[family-name:var(--font-data)] text-xs sm:text-sm text-[var(--color-ink)] mb-1.5 sm:mb-2 uppercase">
        {label} {required && <span className="text-[var(--color-terracotta)]">*</span>}
      </label>
      <div className="relative">
        <Icon className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 ${hasError ? "text-red-500" : "text-[var(--color-stone)]"}`} />
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className={`w-full pl-10 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-[var(--color-paper)] border-2 sm:border-3 font-[family-name:var(--font-grotesk)] text-sm sm:text-base text-[var(--color-ink)] placeholder:text-[var(--color-stone)]/60 focus:outline-none focus:ring-2 transition-all ${
            hasError 
              ? "border-red-500 focus:ring-red-500" 
              : "border-[var(--color-ink)] focus:ring-[var(--color-terracotta)]"
          }`}
          style={{ boxShadow: hasError ? "2px 2px 0 rgb(239 68 68)" : "2px 2px 0 var(--color-ink)" }}
        />
      </div>
      {hasError && (
        <p className="mt-1 font-[family-name:var(--font-data)] text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

// Team size selector
function TeamSizeSelector({ value, onChange }: { value: number; onChange: (size: number) => void }) {
  return (
    <div className="mb-5 sm:mb-6">
      <label className="block font-[family-name:var(--font-data)] text-xs sm:text-sm text-[var(--color-ink)] mb-2 sm:mb-3 uppercase">
        How big is your squad? <span className="text-[var(--color-terracotta)]">*</span>
      </label>
      <div className="flex gap-2 sm:gap-3 flex-wrap">
        {[1, 2, 3, 4].map((size) => (
          <motion.button
            key={size}
            type="button"
            onClick={() => onChange(size)}
            className={`w-12 h-12 sm:w-14 sm:h-14 border-2 sm:border-3 border-[var(--color-ink)] font-[family-name:var(--font-ancient)] text-lg sm:text-xl font-bold transition-colors ${
              value === size 
                ? "bg-[var(--color-terracotta)] text-white" 
                : "bg-[var(--color-paper)] text-[var(--color-ink)] hover:bg-[var(--color-gold)]"
            }`}
            style={{ boxShadow: "2px 2px 0 var(--color-ink)" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {size}
          </motion.button>
        ))}
      </div>
      <p className="mt-2 font-[family-name:var(--font-data)] text-xs text-[var(--color-stone)]">
        {value === 1 ? "Going solo? Brave!" : `Squad of ${value} - ${value === 4 ? "Maximum power!" : "Nice team!"}`}
      </p>
    </div>
  );
}

// Theme selector
function ThemeSelector({ value, onChange }: { value: string; onChange: (theme: string) => void }) {
  return (
    <div className="mb-5 sm:mb-6">
      <label className="block font-[family-name:var(--font-data)] text-xs sm:text-sm text-[var(--color-ink)] mb-2 sm:mb-3 uppercase">
        Pick your battlefield <span className="text-[var(--color-terracotta)]">*</span>
      </label>
      <div className="grid gap-2 sm:gap-3">
        {THEMES.map((theme) => {
          const Icon = theme.icon;
          return (
            <motion.button
              key={theme.id}
              type="button"
              onClick={() => onChange(theme.id)}
              className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 border-2 sm:border-3 border-[var(--color-ink)] text-left transition-colors ${
                value === theme.id 
                  ? "bg-[var(--color-terracotta)] text-white" 
                  : "bg-[var(--color-paper)] text-[var(--color-ink)] hover:bg-[var(--color-cream)]"
              }`}
              style={{ boxShadow: "2px 2px 0 var(--color-ink)" }}
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: value === theme.id ? "white" : theme.color }} />
              <span className="font-[family-name:var(--font-grotesk)] text-xs sm:text-sm font-medium">{theme.name}</span>
              {value === theme.id && <Check className="w-4 h-4 sm:w-5 sm:h-5 ml-auto" />}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// Textarea component
function FormTextarea({ 
  label, 
  placeholder, 
  value, 
  onChange,
  rows = 4,
  error,
  minLength = 10
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  error?: string;
  minLength?: number;
}) {
  const hasError = !!error && value.length > 0;
  const charCount = value.trim().length;
  
  return (
    <div className="mb-3 sm:mb-4">
      <label className="block font-[family-name:var(--font-data)] text-xs sm:text-sm text-[var(--color-ink)] mb-1.5 sm:mb-2 uppercase">
        {label} <span className="text-[var(--color-terracotta)]">*</span>
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        required
        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[var(--color-paper)] border-2 sm:border-3 font-[family-name:var(--font-grotesk)] text-sm sm:text-base text-[var(--color-ink)] placeholder:text-[var(--color-stone)]/60 focus:outline-none focus:ring-2 transition-all resize-none ${
          hasError 
            ? "border-red-500 focus:ring-red-500" 
            : "border-[var(--color-ink)] focus:ring-[var(--color-terracotta)]"
        }`}
        style={{ boxShadow: hasError ? "2px 2px 0 rgb(239 68 68)" : "2px 2px 0 var(--color-ink)" }}
      />
      <div className="flex justify-between mt-1">
        {hasError ? (
          <p className="font-[family-name:var(--font-data)] text-xs text-red-500">{error}</p>
        ) : (
          <span />
        )}
        <p className={`font-[family-name:var(--font-data)] text-xs ${
          charCount >= minLength ? "text-green-600" : "text-[var(--color-stone)]"
        }`}>
          {charCount}/{minLength}+ chars
        </p>
      </div>
    </div>
  );
}

// Member section
function MemberSection({ 
  memberNumber, 
  data, 
  onChange 
}: { 
  memberNumber: number;
  data: { name: string; email: string; phone: string };
  onChange: (field: string, value: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-4 sm:mb-6 p-3 sm:p-4 bg-[var(--color-cream)] border-2 border-[var(--color-ink)] rounded-sm"
    >
      <h4 className="font-[family-name:var(--font-ancient)] text-base sm:text-lg font-bold text-[var(--color-ink)] mb-3 sm:mb-4 flex items-center gap-2">
        <User className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-terracotta)]" />
        Member {memberNumber}
      </h4>
      <FormInput
        label="Name"
        icon={User}
        placeholder="What do they go by?"
        value={data.name}
        onChange={(v) => onChange("name", v)}
        error={!isValidName(data.name) ? "Name must be at least 2 characters" : undefined}
      />
      <FormInput
        label="Email"
        icon={Mail}
        placeholder="Their digital address"
        type="email"
        value={data.email}
        onChange={(v) => onChange("email", v)}
        error={!isValidEmail(data.email) ? "Enter a valid email (e.g., name@gmail.com)" : undefined}
      />
      <FormInput
        label="Phone"
        icon={Phone}
        placeholder="10-digit number"
        type="tel"
        value={data.phone}
        onChange={(v) => onChange("phone", v)}
        error={!isValidPhone(data.phone) ? "Phone must be exactly 10 digits" : undefined}
      />
    </motion.div>
  );
}

// Floating sticker
function FloatingSticker({ icon: Icon, color, position, delay, rotation }: {
  icon: React.ElementType;
  color: string;
  position: string;
  delay: number;
  rotation: number;
}) {
  return (
    <motion.div
      className={`absolute ${position} hidden lg:block`}
      initial={{ scale: 0, rotate: rotation - 20 }}
      animate={{ scale: 1, rotate: rotation }}
      transition={{ delay, type: "spring", stiffness: 200 }}
    >
      <motion.div
        className="p-3 bg-[var(--color-paper)] border-2 border-[var(--color-ink)]"
        style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
        animate={{ 
          y: [0, -10, 0],
          rotate: [rotation, rotation + 5, rotation],
        }}
        transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon className="w-6 h-6" style={{ color }} />
      </motion.div>
    </motion.div>
  );
}

// Form data interface
interface FormData {
  teamName: string;
  teamSize: number;
  leaderName: string;
  leaderPhone: string;
  leaderEmail: string;
  college: string;
  department: string;
  member2: { name: string; email: string; phone: string };
  member3: { name: string; email: string; phone: string };
  member4: { name: string; email: string; phone: string };
  theme: string;
  idea: string;
}

export default function RegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    teamName: "",
    teamSize: 1,
    leaderName: "",
    leaderPhone: "",
    leaderEmail: "",
    college: "",
    department: "",
    member2: { name: "", email: "", phone: "" },
    member3: { name: "", email: "", phone: "" },
    member4: { name: "", email: "", phone: "" },
    theme: "",
    idea: "",
  });

  const updateFormData = (field: keyof FormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateMember = (memberKey: "member2" | "member3" | "member4", field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [memberKey]: { ...prev[memberKey], [field]: value }
    }));
  };

  const validateStep1 = () => {
    return (
      formData.teamName.trim().length >= 2 &&
      isValidName(formData.leaderName) &&
      isValidPhone(formData.leaderPhone) &&
      isValidEmail(formData.leaderEmail) &&
      formData.college.trim().length >= 2 &&
      formData.department.trim().length >= 2
    );
  };

  const validateStep2 = () => {
    if (formData.teamSize === 1) return true;
    
    for (let i = 2; i <= formData.teamSize; i++) {
      const member = formData[`member${i}` as keyof FormData] as { name: string; email: string; phone: string };
      if (!isValidName(member.name) || !isValidEmail(member.email) || !isValidPhone(member.phone)) return false;
    }
    return true;
  };

  const validateStep3 = () => {
    return formData.theme && formData.idea.trim().length >= 10;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      // If solo, skip step 2
      if (formData.teamSize === 1) {
        setCurrentStep(3);
      } else {
        setCurrentStep(2);
      }
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
    }
  };

  const handleBack = () => {
    if (currentStep === 3 && formData.teamSize === 1) {
      setCurrentStep(1);
    } else {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsSubmitting(true);
    
    // Google Form entry IDs
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSewIyWHeRRAHW_sR8gJFIzGv5URhwA0TaNTwhurQAiYI74bdA/formResponse";
    
    // Map theme IDs to display names
    const themeNames: Record<string, string> = {
      sustainability: "Sustainability & Environment",
      health: "Health & Well-being",
      education: "Education & Learning",
      smartsociety: "Smart Society",
      openinnovation: "Open Innovation",
    };
    
    // Build form data
    const submitData = new URLSearchParams();
    submitData.append("entry.2145810089", formData.teamName);
    submitData.append("entry.897151969", String(formData.teamSize));
    submitData.append("entry.1559420330", formData.leaderName);
    submitData.append("entry.1439391927", formData.leaderPhone);
    submitData.append("entry.1639504260", formData.leaderEmail);
    submitData.append("entry.917794505", formData.college);
    submitData.append("entry.1147408991", formData.department);
    
    // Member 2
    submitData.append("entry.342895641", formData.member2.name || "N/A");
    submitData.append("entry.1687069429", formData.member2.email || "N/A");
    submitData.append("entry.2040890039", formData.member2.phone || "N/A");
    
    // Member 3
    submitData.append("entry.716007235", formData.member3.name || "N/A");
    submitData.append("entry.1348199730", formData.member3.email || "N/A");
    submitData.append("entry.1489190325", formData.member3.phone || "N/A");
    
    // Member 4
    submitData.append("entry.13568527", formData.member4.name || "N/A");
    submitData.append("entry.1986462531", formData.member4.email || "N/A");
    submitData.append("entry.536437350", formData.member4.phone || "N/A");
    
    // Theme and Idea
    submitData.append("entry.1728448481", themeNames[formData.theme] || formData.theme);
    submitData.append("entry.871594244", formData.idea);
    
    try {
      // Submit to Google Forms (using no-cors mode since Google Forms doesn't support CORS)
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: submitData.toString(),
      });
      
      // Since no-cors doesn't return readable response, we assume success
      setIsSuccess(true);
    } catch {
      alert("Something went wrong. Please try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success state
  if (isSuccess) {
    return (
      <main className="min-h-screen bg-[var(--color-cream)] overflow-hidden relative cursor-crosshair">
        <CustomCursor />
        <div className="absolute inset-0 bg-grid opacity-40" />
        
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-center"
          >
            <motion.div
              className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 bg-[var(--color-terracotta)] border-3 sm:border-4 border-[var(--color-ink)] rounded-full flex items-center justify-center"
              style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Check className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-[family-name:var(--font-ancient)] text-3xl sm:text-4xl md:text-6xl font-black text-[var(--color-ink)] mb-3 sm:mb-4"
            >
              Registered!
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="font-[family-name:var(--font-grotesk)] text-base sm:text-lg text-[var(--color-stone)] mb-6 sm:mb-8 max-w-sm sm:max-w-md mx-auto px-2"
            >
              Your application has been submitted! Shortlisted teams will be notified with payment details soon.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link href="/">
                <motion.button
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-[var(--color-terracotta)] border-2 sm:border-3 border-[var(--color-ink)] font-[family-name:var(--font-ancient)] text-base sm:text-lg font-bold text-white"
                  style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back to Home
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color-cream)] overflow-x-hidden relative cursor-crosshair">
      <CustomCursor />
      <div className="absolute inset-0 bg-grid opacity-40" />
      
      {/* Floating Stickers */}
      <FloatingSticker icon={Code} color="var(--color-terracotta)" position="left-[3%] top-[20%]" delay={0.2} rotation={-12} />
      <FloatingSticker icon={Terminal} color="var(--color-gold)" position="right-[3%] top-[25%]" delay={0.4} rotation={8} />
      <FloatingSticker icon={Coffee} color="var(--color-stone)" position="left-[5%] bottom-[20%]" delay={0.6} rotation={15} />
      <FloatingSticker icon={Rocket} color="var(--color-terracotta)" position="right-[5%] bottom-[25%]" delay={0.8} rotation={-8} />

      {/* Subtle Doodles */}
      <motion.div 
        className="absolute left-[8%] top-[45%] opacity-50 hidden lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Squiggle />
      </motion.div>
      <motion.div 
        className="absolute right-[8%] top-[55%] opacity-50 hidden lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ delay: 1.2 }}
      >
        <CircleDoodle />
      </motion.div>
      <motion.div 
        className="absolute right-[10%] bottom-[45%] opacity-40 hidden lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ delay: 1.4 }}
      >
        <CrossDoodle />
      </motion.div>

      {/* Back Button */}
      <motion.div
        className="fixed top-6 left-4 sm:top-8 sm:left-8 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Link href="/">
          <motion.div
            className="flex items-center gap-2 px-4 py-2 bg-[var(--color-paper)] border-2 border-[var(--color-ink)] font-[family-name:var(--font-data)] text-sm text-[var(--color-ink)] cursor-pointer"
            style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </motion.div>
        </Link>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center px-4 py-20 sm:py-24">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h1 className="font-[family-name:var(--font-ancient)] text-4xl sm:text-5xl md:text-6xl font-black text-[var(--color-ink)] leading-none relative inline-block">
            REGISTER
            <motion.div
              className="absolute -right-4 -top-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-6 h-6 text-[var(--color-gold)] fill-[var(--color-gold)]" />
            </motion.div>
          </h1>
          <p className="font-[family-name:var(--font-data)] text-sm text-[var(--color-stone)] mt-2 uppercase">
            Join the chaos • Feb 25-26, 2026
          </p>
        </motion.div>

        {/* Step Indicator */}
        <StepIndicator currentStep={currentStep} totalSteps={3} />

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-xl bg-[var(--color-paper)] border-3 sm:border-4 border-[var(--color-ink)] p-4 sm:p-6 md:p-8 relative"
          style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
        >
          {/* Tape decoration */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[var(--color-gold)]/80 border-2 border-[var(--color-ink)]" />
          
          <motion.div
            className="absolute -right-3 -top-3"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-6 h-6 text-[var(--color-terracotta)]" />
          </motion.div>

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {/* Step 1: Team & Leader Details */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="font-[family-name:var(--font-ancient)] text-xl sm:text-2xl font-bold text-[var(--color-ink)] mb-4 sm:mb-6 flex items-center gap-2">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-terracotta)]" />
                    Squad Assembly
                  </h2>

                  <FormInput
                    label="Team Name"
                    icon={Users}
                    placeholder="What's your crew called?"
                    value={formData.teamName}
                    onChange={(v) => updateFormData("teamName", v)}
                    error={formData.teamName.trim().length < 2 ? "Team name must be at least 2 characters" : undefined}
                  />

                  <TeamSizeSelector 
                    value={formData.teamSize} 
                    onChange={(v) => updateFormData("teamSize", v)} 
                  />

                  <div className="border-t-2 border-dashed border-[var(--color-stone)]/30 my-4 sm:my-6" />

                  <h3 className="font-[family-name:var(--font-ancient)] text-base sm:text-lg font-bold text-[var(--color-ink)] mb-3 sm:mb-4">
                    {formData.teamSize === 1 ? "Your Details" : "Team Leader Details"}
                  </h3>

                  <FormInput
                    label="Name"
                    icon={User}
                    placeholder="Your full name"
                    value={formData.leaderName}
                    onChange={(v) => updateFormData("leaderName", v)}
                    error={!isValidName(formData.leaderName) ? "Name must be at least 2 characters" : undefined}
                  />

                  <FormInput
                    label="Phone Number"
                    icon={Phone}
                    placeholder="10-digit number"
                    type="tel"
                    value={formData.leaderPhone}
                    onChange={(v) => updateFormData("leaderPhone", v)}
                    error={!isValidPhone(formData.leaderPhone) ? "Phone must be exactly 10 digits" : undefined}
                  />

                  <FormInput
                    label="Email"
                    icon={Mail}
                    placeholder="your@email.com"
                    type="email"
                    value={formData.leaderEmail}
                    onChange={(v) => updateFormData("leaderEmail", v)}
                    error={!isValidEmail(formData.leaderEmail) ? "Enter a valid email (e.g., name@gmail.com)" : undefined}
                  />

                  <FormInput
                    label="College"
                    icon={Building}
                    placeholder="Your institution"
                    value={formData.college}
                    error={formData.college.trim().length < 2 ? "College name is required" : undefined}
                    onChange={(v) => updateFormData("college", v)}
                  />

                  <FormInput
                    label="Department & Year"
                    icon={GraduationCap}
                    placeholder="e.g., CSE 3rd Year"
                    value={formData.department}
                    onChange={(v) => updateFormData("department", v)}
                    error={formData.department.trim().length < 2 ? "Department & year is required" : undefined}
                  />
                </motion.div>
              )}

              {/* Step 2: Team Members */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="font-[family-name:var(--font-ancient)] text-xl sm:text-2xl font-bold text-[var(--color-ink)] mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-terracotta)]" />
                    Squad Mates
                  </h2>
                  <p className="font-[family-name:var(--font-data)] text-xs sm:text-sm text-[var(--color-stone)] mb-4 sm:mb-6">
                    Add details for your {formData.teamSize - 1} team member{formData.teamSize > 2 ? "s" : ""}
                  </p>

                  {formData.teamSize >= 2 && (
                    <MemberSection
                      memberNumber={2}
                      data={formData.member2}
                      onChange={(field, value) => updateMember("member2", field, value)}
                    />
                  )}

                  {formData.teamSize >= 3 && (
                    <MemberSection
                      memberNumber={3}
                      data={formData.member3}
                      onChange={(field, value) => updateMember("member3", field, value)}
                    />
                  )}

                  {formData.teamSize >= 4 && (
                    <MemberSection
                      memberNumber={4}
                      data={formData.member4}
                      onChange={(field, value) => updateMember("member4", field, value)}
                    />
                  )}
                </motion.div>
              )}

              {/* Step 3: Theme & Idea */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="font-[family-name:var(--font-ancient)] text-xl sm:text-2xl font-bold text-[var(--color-ink)] mb-4 sm:mb-6 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-gold)]" />
                    Your Mission
                  </h2>

                  <ThemeSelector 
                    value={formData.theme} 
                    onChange={(v) => updateFormData("theme", v)} 
                  />

                  <FormTextarea
                    label="Brief Idea Description"
                    placeholder="Tell us about your innovative idea in a few sentences. What problem does it solve? How will you approach it?"
                    value={formData.idea}
                    onChange={(v) => updateFormData("idea", v)}
                    rows={5}
                    minLength={10}
                    error={formData.idea.trim().length < 10 ? "Please describe your idea (at least 10 characters)" : undefined}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-6 sm:mt-8 pt-4 sm:pt-6 border-t-2 border-dashed border-[var(--color-stone)]/30 gap-3">
              {currentStep > 1 ? (
                <motion.button
                  type="button"
                  onClick={handleBack}
                  className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[var(--color-cream)] border-2 sm:border-3 border-[var(--color-ink)] font-[family-name:var(--font-data)] text-xs sm:text-sm font-bold text-[var(--color-ink)]"
                  style={{ boxShadow: "2px 2px 0 var(--color-ink)" }}
                  whileHover={{ scale: 1.02, x: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  Back
                </motion.button>
              ) : (
                <div />
              )}

              {currentStep < 3 ? (
                <motion.button
                  type="button"
                  onClick={handleNext}
                  disabled={currentStep === 1 ? !validateStep1() : !validateStep2()}
                  className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[var(--color-terracotta)] border-2 sm:border-3 border-[var(--color-ink)] font-[family-name:var(--font-data)] text-xs sm:text-sm font-bold text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ boxShadow: "2px 2px 0 var(--color-ink)" }}
                  whileHover={{ scale: 1.02, x: 3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Next
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  disabled={!validateStep3() || isSubmitting}
                  className="flex items-center gap-1.5 sm:gap-2 px-5 sm:px-8 py-2.5 sm:py-3 bg-[var(--color-terracotta)] border-2 sm:border-3 border-[var(--color-ink)] font-[family-name:var(--font-data)] text-xs sm:text-sm font-bold text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ boxShadow: "2px 2px 0 var(--color-ink)" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </motion.div>
                      <span className="hidden sm:inline">Submitting...</span>
                      <span className="sm:hidden">Wait...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Submit Registration</span>
                      <span className="sm:hidden">Submit</span>
                    </>
                  )}
                </motion.button>
              )}
            </div>
          </form>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 sm:mt-8 font-[family-name:var(--font-data)] text-[10px] sm:text-xs text-[var(--color-stone)] text-center px-4"
        >
          Entry fee: ₹100 per person • Payment details shared upon shortlist confirmation
        </motion.p>
      </div>
    </main>
  );
}
