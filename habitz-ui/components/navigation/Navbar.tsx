import { Stylable } from '../types';

export default function Navbar({ className = '' }: Stylable) {
  return <div className={`bg-accent-400 ${className}`}>Nav</div>;
}
