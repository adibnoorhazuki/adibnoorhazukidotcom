import type { Social } from '@/@types/social'

export const socials: Social[] = [
  {
    title: 'Located At',
    icon: 'mingcute:location-line',
    description: 'Kenwingston Square Garden Residence, 63000 Cyberjaya Selangor',
    isShowInContact: true,
  },
  {
    title: 'My Nationality',
    icon: 'mingcute:map-pin-line',
    description: 'Malaysian',
    isShowInContact: true,
  },
  {
    title: 'Contact Me',
    icon: 'mingcute:idcard-line',
    href: '/contact',
    isShowInContact: false,
  },
  {
    title: 'Call Me',
    icon: 'mingcute:phone-line',
    href: 'tel:018-2556064',
    isShowInContact: true,
  },
  {
    title: 'Email Me',
    icon: 'mingcute:mail-line',
    href: 'mailto:adibnoorhazuki@gmail.com',
    isShowInContact: true,
  },
  {
    title: 'Follow me on LinkedIn',
    icon: 'mingcute:linkedin-line',
    href: 'https://www.linkedin.com/in/adib-noor-hazuki-7367a91a8/',
    isShowInContact: true,
  },
  {
    title: 'Check out my GitHub',
    icon: 'mingcute:github-line',
    href: 'https://github.com/adibnoorhazuki/',
    isShowInContact: true,
  },
]