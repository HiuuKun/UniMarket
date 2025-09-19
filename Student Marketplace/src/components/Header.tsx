import { Search, Plus, User, ShoppingBag, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Header({ currentPage, onNavigate, searchQuery, onSearchChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          <ShoppingBag className="h-6 w-6 text-primary" />
          <span className="font-semibold">UniMarket</span>
        </div>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-input-background"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => onNavigate('home')}
            className={`text-sm transition-colors hover:text-primary ${
              currentPage === 'home' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Browse
          </button>
          <button
            onClick={() => onNavigate('categories')}
            className={`text-sm transition-colors hover:text-primary ${
              currentPage === 'categories' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Categories
          </button>
          <button
            onClick={() => onNavigate('sell')}
            className={`text-sm transition-colors hover:text-primary ${
              currentPage === 'sell' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Sell
          </button>
          <button
            onClick={() => onNavigate('profile')}
            className={`text-sm transition-colors hover:text-primary ${
              currentPage === 'profile' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            My Items
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Button 
            onClick={() => onNavigate('sell')}
            className="hidden sm:flex"
            size="sm"
          >
            <Plus className="h-4 w-4 mr-2" />
            Sell Item
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => onNavigate('profile')}
          >
            <User className="h-4 w-4" />
          </Button>
          
          {/* Mobile Menu */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search items..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 bg-input-background"
          />
        </div>
      </div>
    </header>
  );
}