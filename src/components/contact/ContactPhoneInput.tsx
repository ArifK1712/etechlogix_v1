import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';

export interface Country {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
  mask: string;
  placeholder: string;
  minDigits: number;
  maxDigits: number;
}

export const COUNTRIES: Country[] = [
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸', mask: '(###) ###-####', placeholder: '(XXX) XXX-XXXX', minDigits: 10, maxDigits: 10 },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦', mask: '(###) ###-####', placeholder: '(XXX) XXX-XXXX', minDigits: 10, maxDigits: 10 },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧', mask: '#### ######', placeholder: '7XXX XXXXXX', minDigits: 10, maxDigits: 10 },
  { code: 'SA', name: 'Saudi Arabia', dialCode: '+966', flag: '🇸🇦', mask: '## ### ####', placeholder: '5X XXX XXXX', minDigits: 9, maxDigits: 9 },
  { code: 'AE', name: 'United Arab Emirates', dialCode: '+971', flag: '🇦🇪', mask: '## ### ####', placeholder: '5X XXX XXXX', minDigits: 9, maxDigits: 9 },
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳', mask: '##### #####', placeholder: 'XXXXX XXXXX', minDigits: 10, maxDigits: 10 },
  { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺', mask: '### ### ###', placeholder: '4XX XXX XXX', minDigits: 9, maxDigits: 9 },
  { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪', mask: '### ########', placeholder: '1XX XXXXXXXX', minDigits: 10, maxDigits: 11 },
  { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷', mask: '# ## ## ## ##', placeholder: '6 XX XX XX XX', minDigits: 9, maxDigits: 9 },
  { code: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬', mask: '#### ####', placeholder: '8XXX XXXX', minDigits: 8, maxDigits: 8 },
  { code: 'PK', name: 'Pakistan', dialCode: '+92', flag: '🇵🇰', mask: '### #######', placeholder: '3XX XXXXXXX', minDigits: 10, maxDigits: 10 },
  { code: 'QA', name: 'Qatar', dialCode: '+974', flag: '🇶🇦', mask: '#### ####', placeholder: '3XXX XXXX', minDigits: 8, maxDigits: 8 },
  { code: 'KW', name: 'Kuwait', dialCode: '+965', flag: '🇰🇼', mask: '#### ####', placeholder: '5XXX XXXX', minDigits: 8, maxDigits: 8 },
  { code: 'OM', name: 'Oman', dialCode: '+968', flag: '🇴🇲', mask: '#### ####', placeholder: '9XXX XXXX', minDigits: 8, maxDigits: 8 },
  { code: 'BH', name: 'Bahrain', dialCode: '+973', flag: '🇧🇭', mask: '#### ####', placeholder: '3XXX XXXX', minDigits: 8, maxDigits: 8 },
  { code: 'NL', name: 'Netherlands', dialCode: '+31', flag: '🇳🇱', mask: '# ########', placeholder: '6 XXXXXXXX', minDigits: 9, maxDigits: 9 },
  { code: 'CH', name: 'Switzerland', dialCode: '+41', flag: '🇨🇭', mask: '## ### ## ##', placeholder: '7X XXX XX XX', minDigits: 9, maxDigits: 9 },
  { code: 'IE', name: 'Ireland', dialCode: '+353', flag: '🇮🇪', mask: '## ### ####', placeholder: '8X XXX XXXX', minDigits: 9, maxDigits: 9 },
  { code: 'SE', name: 'Sweden', dialCode: '+46', flag: '🇸🇪', mask: '## ### ## ##', placeholder: '7X XXX XX XX', minDigits: 9, maxDigits: 9 },
  { code: 'NO', name: 'Norway', dialCode: '+47', flag: '🇳🇴', mask: '### ## ###', placeholder: '4XX XX XXX', minDigits: 8, maxDigits: 8 },
  { code: 'DK', name: 'Denmark', dialCode: '+45', flag: '🇩🇰', mask: '## ## ## ##', placeholder: 'XX XX XX XX', minDigits: 8, maxDigits: 8 },
  { code: 'FI', name: 'Finland', dialCode: '+358', flag: '🇫🇮', mask: '## ### ####', placeholder: '4X XXX XXXX', minDigits: 9, maxDigits: 9 },
  { code: 'BE', name: 'Belgium', dialCode: '+32', flag: '🇧🇪', mask: '### ## ## ##', placeholder: '4XX XX XX XX', minDigits: 9, maxDigits: 9 },
  { code: 'AT', name: 'Austria', dialCode: '+43', flag: '🇦🇹', mask: '### #######', placeholder: '6XX XXXXXXX', minDigits: 10, maxDigits: 10 },
  { code: 'IT', name: 'Italy', dialCode: '+39', flag: '🇮🇹', mask: '### ### ####', placeholder: '3XX XXX XXXX', minDigits: 10, maxDigits: 10 },
  { code: 'ES', name: 'Spain', dialCode: '+34', flag: '🇪🇸', mask: '### ## ## ##', placeholder: '6XX XX XX XX', minDigits: 9, maxDigits: 9 },
  { code: 'PT', name: 'Portugal', dialCode: '+351', flag: '🇵🇹', mask: '### ### ###', placeholder: '9XX XXX XXX', minDigits: 9, maxDigits: 9 },
  { code: 'PL', name: 'Poland', dialCode: '+48', flag: '🇵🇱', mask: '### ### ###', placeholder: '5XX XXX XXX', minDigits: 9, maxDigits: 9 },
  { code: 'CZ', name: 'Czech Republic', dialCode: '+420', flag: '🇨🇿', mask: '### ### ###', placeholder: '6XX XXX XXX', minDigits: 9, maxDigits: 9 },
  { code: 'GR', name: 'Greece', dialCode: '+30', flag: '🇬🇷', mask: '### ### ####', placeholder: '6XX XXX XXXX', minDigits: 10, maxDigits: 10 },
  { code: 'TR', name: 'Turkey', dialCode: '+90', flag: '🇹🇷', mask: '### ### ## ##', placeholder: '5XX XXX XX XX', minDigits: 10, maxDigits: 10 },
  { code: 'JP', name: 'Japan', dialCode: '+81', flag: '🇯🇵', mask: '## #### ####', placeholder: '90 XXXX XXXX', minDigits: 10, maxDigits: 10 },
  { code: 'KR', name: 'South Korea', dialCode: '+82', flag: '🇰🇷', mask: '## #### ####', placeholder: '10 XXXX XXXX', minDigits: 10, maxDigits: 10 },
  { code: 'CN', name: 'China', dialCode: '+86', flag: '🇨🇳', mask: '### #### ####', placeholder: '1XX XXXX XXXX', minDigits: 11, maxDigits: 11 },
  { code: 'HK', name: 'Hong Kong', dialCode: '+852', flag: '🇭🇰', mask: '#### ####', placeholder: '9XXX XXXX', minDigits: 8, maxDigits: 8 },
  { code: 'TW', name: 'Taiwan', dialCode: '+886', flag: '🇹🇼', mask: '### ### ###', placeholder: '9XX XXX XXX', minDigits: 9, maxDigits: 9 },
  { code: 'MY', name: 'Malaysia', dialCode: '+60', flag: '🇲🇾', mask: '## ### ####', placeholder: '1X XXX XXXX', minDigits: 9, maxDigits: 10 },
  { code: 'ID', name: 'Indonesia', dialCode: '+62', flag: '🇮🇩', mask: '### #### ####', placeholder: '8XX XXXX XXXX', minDigits: 10, maxDigits: 12 },
  { code: 'PH', name: 'Philippines', dialCode: '+63', flag: '🇵🇭', mask: '### ### ####', placeholder: '9XX XXX XXXX', minDigits: 10, maxDigits: 10 },
  { code: 'TH', name: 'Thailand', dialCode: '+66', flag: '🇹🇭', mask: '## ### ####', placeholder: '8X XXX XXXX', minDigits: 9, maxDigits: 9 },
  { code: 'VN', name: 'Vietnam', dialCode: '+84', flag: '🇻🇳', mask: '### ### ####', placeholder: '9XX XXX XXXX', minDigits: 9, maxDigits: 10 },
  { code: 'NZ', name: 'New Zealand', dialCode: '+64', flag: '🇳🇿', mask: '## ### ####', placeholder: '2X XXX XXXX', minDigits: 8, maxDigits: 9 },
  { code: 'ZA', name: 'South Africa', dialCode: '+27', flag: '🇿🇦', mask: '## ### ####', placeholder: '7X XXX XXXX', minDigits: 9, maxDigits: 9 },
  { code: 'EG', name: 'Egypt', dialCode: '+20', flag: '🇪🇬', mask: '### ### ####', placeholder: '1XX XXX XXXX', minDigits: 10, maxDigits: 10 },
  { code: 'NG', name: 'Nigeria', dialCode: '+234', flag: '🇳🇬', mask: '### ### ####', placeholder: '8XX XXX XXXX', minDigits: 10, maxDigits: 10 },
  { code: 'KE', name: 'Kenya', dialCode: '+254', flag: '🇰🇪', mask: '### ######', placeholder: '7XX XXXXXX', minDigits: 9, maxDigits: 9 },
  { code: 'BR', name: 'Brazil', dialCode: '+55', flag: '🇧🇷', mask: '## #####-####', placeholder: 'XX XXXXX-XXXX', minDigits: 11, maxDigits: 11 },
  { code: 'MX', name: 'Mexico', dialCode: '+52', flag: '🇲🇽', mask: '### ### ####', placeholder: 'XXX XXX XXXX', minDigits: 10, maxDigits: 10 },
  { code: 'AR', name: 'Argentina', dialCode: '+54', flag: '🇦🇷', mask: '## ####-####', placeholder: 'XX XXXX-XXXX', minDigits: 10, maxDigits: 10 },
  { code: 'CL', name: 'Chile', dialCode: '+56', flag: '🇨🇱', mask: '# #### ####', placeholder: '9 XXXX XXXX', minDigits: 9, maxDigits: 9 },
  { code: 'CO', name: 'Colombia', dialCode: '+57', flag: '🇨🇴', mask: '### ### ####', placeholder: '3XX XXX XXXX', minDigits: 10, maxDigits: 10 },
  { code: 'IL', name: 'Israel', dialCode: '+972', flag: '🇮🇱', mask: '##-###-####', placeholder: '5X-XXX-XXXX', minDigits: 9, maxDigits: 9 },
  { code: 'BD', name: 'Bangladesh', dialCode: '+880', flag: '🇧🇩', mask: '####-######', placeholder: '1XXX-XXXXXX', minDigits: 10, maxDigits: 10 },
  { code: 'LK', name: 'Sri Lanka', dialCode: '+94', flag: '🇱🇰', mask: '## ### ####', placeholder: '7X XXX XXXX', minDigits: 9, maxDigits: 9 },
  { code: 'JO', name: 'Jordan', dialCode: '+962', flag: '🇯🇴', mask: '# #### ####', placeholder: '7 XXXX XXXX', minDigits: 9, maxDigits: 9 },
  { code: 'LB', name: 'Lebanon', dialCode: '+961', flag: '🇱🇧', mask: '## ######', placeholder: '7X XXXXXX', minDigits: 8, maxDigits: 8 },
];

/** Applies format mask to raw digits */
function formatNumberWithMask(digits: string, mask: string): string {
  if (!digits) return '';
  let digitIndex = 0;
  let formatted = '';

  for (let i = 0; i < mask.length && digitIndex < digits.length; i++) {
    if (mask[i] === '#') {
      formatted += digits[digitIndex++];
    } else {
      formatted += mask[i];
    }
  }

  // If there are still remaining digits not covered by the mask, append them with a space
  if (digitIndex < digits.length) {
    formatted += ' ' + digits.slice(digitIndex);
  }

  return formatted;
}

interface ContactPhoneInputProps {
  id?: string;
  name?: string;
  value?: string;
  onChange?: (fullE164: string, country: Country, localFormatted: string) => void;
  required?: boolean;
  heightClass?: string;
}

export default function ContactPhoneInput({
  name = 'phone',
  value = '',
  onChange,
  required = false,
  heightClass = 'h-14',
}: ContactPhoneInputProps) {
  // Default selection is ALWAYS United States (+1)
  const [selectedCountry, setSelectedCountry] = useState<Country>(COUNTRIES[0]);
  const [digits, setDigits] = useState<string>(() => {
    return value.replace(/\D/g, '');
  });
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [touched, setTouched] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const numberInputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    } else {
      setSearchQuery('');
    }
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let rawVal = e.target.value;
    
    // Strip leading dialing code if pasted by user (e.g. +14805270466 or +966501234567)
    const cleanDialCode = selectedCountry.dialCode.replace(/\D/g, '');
    let cleanDigits = rawVal.replace(/\D/g, '');
    
    if (rawVal.startsWith('+') && cleanDigits.startsWith(cleanDialCode)) {
      cleanDigits = cleanDigits.slice(cleanDialCode.length);
    }

    // Limit to country max digits
    const max = selectedCountry.maxDigits || 15;
    const finalDigits = cleanDigits.slice(0, max);

    setDigits(finalDigits);

    const formatted = formatNumberWithMask(finalDigits, selectedCountry.mask);
    const fullE164 = finalDigits ? `${selectedCountry.dialCode}${finalDigits}` : '';
    onChange?.(fullE164, selectedCountry, formatted);
  };

  const handleSelectCountry = (country: Country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    
    // Re-truncate digits to new country max if needed
    const max = country.maxDigits || 15;
    const adjustedDigits = digits.slice(0, max);
    setDigits(adjustedDigits);

    const formatted = formatNumberWithMask(adjustedDigits, country.mask);
    const fullE164 = adjustedDigits ? `${country.dialCode}${adjustedDigits}` : '';
    onChange?.(fullE164, country, formatted);
    numberInputRef.current?.focus();
  };

  const filteredCountries = COUNTRIES.filter((c) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      c.name.toLowerCase().includes(q) ||
      c.dialCode.includes(q) ||
      c.code.toLowerCase().includes(q)
    );
  });

  const displayFormattedValue = formatNumberWithMask(digits, selectedCountry.mask);
  const submittedE164 = digits ? `${selectedCountry.dialCode}${digits}` : '';
  const isInvalid = touched && digits.length > 0 && digits.length < selectedCountry.minDigits;

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Hidden input storing the full combined E.164 formatted number */}
      <input type="hidden" name={name} value={submittedE164} />

      {/* Unified Input Container */}
      <div
        className={`relative flex ${heightClass} w-full items-center rounded-lg border bg-white text-[15px] text-[#171717] transition-[border-color,box-shadow] duration-300 ${
          isOpen
            ? 'border-[#df012a] ring-4 ring-[#df012a]/[0.07]'
            : isInvalid
            ? 'border-[#df012a]/60 ring-4 ring-[#df012a]/[0.05]'
            : 'border-neutral-200 focus-within:border-[#df012a] focus-within:ring-4 focus-within:ring-[#df012a]/[0.07]'
        }`}
      >
        {/* Country Selector Trigger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-full shrink-0 items-center gap-1.5 rounded-l-lg py-1 pl-3.5 pr-2.5 text-[14px] text-[#171717] outline-none transition-colors hover:bg-neutral-50/80 focus-visible:bg-neutral-100"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-label={`Select country code, currently ${selectedCountry.name} (${selectedCountry.dialCode})`}
        >
          <span className="text-[18px] leading-none" aria-hidden="true">
            {selectedCountry.flag}
          </span>
          <span className="font-medium text-[#171717] tracking-tight text-[14px]">
            {selectedCountry.dialCode}
          </span>
          <ChevronDown
            className={`h-3.5 w-3.5 text-neutral-400 transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-[#df012a]' : ''
            }`}
            strokeWidth={2}
            aria-hidden="true"
          />
        </button>

        {/* Subtle Vertical Divider */}
        <div className="h-6 w-px bg-neutral-200 shrink-0" aria-hidden="true" />

        {/* Phone Number Input with Country Mask & Placeholder */}
        <input
          ref={numberInputRef}
          type="tel"
          value={displayFormattedValue}
          onChange={handleInputChange}
          onBlur={() => setTouched(true)}
          placeholder={selectedCountry.placeholder}
          autoComplete="tel-national"
          required={required}
          className="h-full flex-1 rounded-r-lg bg-transparent px-3 text-[15px] text-[#171717] outline-none placeholder:text-neutral-400 font-normal tracking-wide"
        />
      </div>

      {/* Country Dropdown Panel */}
      {isOpen && (
        <div className="absolute left-0 top-[calc(100%+6px)] z-50 w-full min-w-[280px] max-w-[340px] rounded-xl border border-neutral-200 bg-white p-2 shadow-[0_12px_36px_rgba(0,0,0,0.12)] animate-in fade-in zoom-in-95 duration-150">
          {/* Search Box */}
          <div className="relative mb-2 px-1">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-400"
              strokeWidth={2}
              aria-hidden="true"
            />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search country or code..."
              className="h-9 w-full rounded-md border border-neutral-200 bg-neutral-50/70 pl-8 pr-3 text-[13px] text-[#171717] outline-none transition-colors placeholder:text-neutral-400 focus:border-[#df012a] focus:bg-white"
            />
          </div>

          {/* Country List */}
          <ul
            role="listbox"
            className="max-h-56 overflow-y-auto space-y-0.5 pr-1 scrollbar-thin text-sm"
          >
            {filteredCountries.length > 0 ? (
              filteredCountries.map((c) => {
                const isSelected = c.code === selectedCountry.code;
                return (
                  <li key={c.code}>
                    <button
                      type="button"
                      onClick={() => handleSelectCountry(c)}
                      className={`flex w-full items-center justify-between gap-2.5 rounded-lg px-2.5 py-2 text-left text-[13px] transition-colors ${
                        isSelected
                          ? 'bg-[#df012a]/[0.08] font-medium text-[#df012a]'
                          : 'text-[#171717] hover:bg-neutral-100/80'
                      }`}
                      role="option"
                      aria-selected={isSelected}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-[17px] leading-none shrink-0" aria-hidden="true">
                          {c.flag}
                        </span>
                        <span className="truncate text-neutral-800">
                          {c.name}
                        </span>
                      </div>
                      <span className="font-mono text-xs font-semibold text-neutral-500 shrink-0">
                        {c.dialCode}
                      </span>
                    </button>
                  </li>
                );
              })
            ) : (
              <li className="py-4 text-center text-xs text-neutral-400">
                No countries found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
