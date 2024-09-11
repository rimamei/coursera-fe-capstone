import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LOGO } from '@/configs/images';
import { Menu, ShoppingCart } from 'lucide-react';

const Header = () => {
  const nav = [
    {
      name: 'Home',
      link: '#Home',
    },
    {
      name: 'Menu',
      link: '#menu',
    },
    {
      name: 'Service',
      link: '#service',
    },
    {
      name: 'Contact Us',
      link: '#contact',
    },
  ];

  return (
    <header className="justify-between bg-[#347474] top-0 flex h-16 items-center gap-4 px-4 md:px-12">
      <div className="flex items-center space-x-2">
        <img src={LOGO} alt="logo" className="h-8 w-auto" />
        <p className="text-white text-base">Little Lemon</p>
      </div>
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <ul className="flex space-x-4 text-white text-base items-center">
          {nav.map((item, index) => (
            <li key={index} className="text-decoration-none">
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <ul className="flex space-x-4 text-white text-base items-center">
          <li className="text-decoration-none space-x-2">
            <ShoppingCart size={24} />
          </li>
          <li className="text-decoration-none">Sign In</li>
        </ul>
        <div className="border-l border border-white h-8"></div>
        <Button className='rounded-full'>Sign Up</Button>
      </nav>
      <div className="md:hidden space-x-4 flex items-center">
        <ShoppingCart size={24} className='text-white' />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <Menu size={24} />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Home</DropdownMenuLabel>
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuLabel>Service</DropdownMenuLabel>
            <DropdownMenuLabel>Contact Us</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sign Up</DropdownMenuItem>
            <DropdownMenuItem>Sign In</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
