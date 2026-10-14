import Image from 'next/image';
import Link from 'next/link';
import { LOGO } from '@/lib/config';

// Logo image ONLY (the artwork already contains the brand name). Shared by Header and Footer.
export default function Logo({ className = 'h-16 w-16', priority = false }) {
  return (
    <Link href="/" aria-label={`${LOGO.alt} home`} className="inline-flex rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-light">
      <Image
        src={LOGO.src}
        width={LOGO.width}
        height={LOGO.height}
        alt={LOGO.alt}
        priority={priority}
        unoptimized
        className={`${className} rounded-lg object-contain`}
      />
    </Link>
  );
}
