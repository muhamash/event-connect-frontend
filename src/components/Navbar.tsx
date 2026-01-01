"use client"

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, CalendarDays, LayoutDashboard, LogOut, Menu, Plus, Shield, User, Users, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Mock user role - in production this would come from auth context
type UserRole = "guest" | "user" | "host" | "admin";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Mock: Change this to test different roles
  const isLoggedIn = true;
  const currentRole = "host" as UserRole; 

  const renderGuestNav = () => (
    <>
      <Link href="/events" className="text-foreground hover:text-primary transition-colors">
        Explore Events
      </Link>
      <Link href="/host" className="text-foreground hover:text-primary transition-colors">
        Become a Host
      </Link>
      <Link href="/login">
        <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-muted">
          Login
        </Button>
      </Link>
      <Link href="/register">
        <Button className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all">
          Get Started
        </Button>
      </Link>
    </>
  );

  const renderUserNav = () => (
    <>
      <Link href="/events" className="text-foreground hover:text-primary transition-colors">
        Explore Events
      </Link>
      <Link href="/dashboard" className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
        <CalendarDays className="h-4 w-4" />
        My Events
      </Link>
      <Link href="/profile/user-1">
        <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-muted flex items-center gap-1">
          <User className="h-4 w-4" />
          Profile
        </Button>
      </Link>
      <Link href="/login">
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center gap-1">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </Link>
    </>
  );

  const renderHostNav = () => (
    <>
      <Link href="/events" className="text-foreground hover:text-primary transition-colors">
        Explore Events
      </Link>
      <Link href="/dashboard" className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
        <LayoutDashboard className="h-4 w-4" />
        Dashboard
      </Link>
      <Link href="/events/create" className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
        <Plus className="h-4 w-4" />
        Create Event
      </Link>
      <Link href="/profile/user-1">
        <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-muted flex items-center gap-1">
          <User className="h-4 w-4" />
          Profile
        </Button>
      </Link>
      <Link href="/login">
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center gap-1">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </Link>
    </>
  );

  const renderAdminNav = () => (
    <>
      <Link href="/admin" className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
        <Shield className="h-4 w-4" />
        Admin Dashboard
      </Link>
      <Link href="/admin?tab=users" className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
        <Users className="h-4 w-4" />
        Manage Users
      </Link>
      <Link href="/admin?tab=events" className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
        <CalendarDays className="h-4 w-4" />
        Manage Events
      </Link>
      <Link href="/profile/user-1">
        <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-muted flex items-center gap-1">
          <User className="h-4 w-4" />
          Profile
        </Button>
      </Link>
      <Link href="/login">
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center gap-1">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </Link>
    </>
  );

  const renderDesktopNav = () => {
    if (!isLoggedIn) return renderGuestNav();
    switch (currentRole) {
      case "admin": return renderAdminNav();
      case "host": return renderHostNav();
      case "user": return renderUserNav();
      default: return renderGuestNav();
    }
  };

  const renderMobileGuestNav = () => (
    <>
      <Link
        to="/events"
        className="block py-2 text-foreground hover:text-primary transition-colors"
        onClick={() => setIsOpen(false)}
      >
        Explore Events
      </Link>
      <Link
        to="/host"
        className="block py-2 text-foreground hover:text-primary transition-colors"
        onClick={() => setIsOpen(false)}
      >
        Become a Host
      </Link>
      <Link href="/login" onClick={() => setIsOpen(false)}>
        <Button variant="ghost" className="w-full justify-start text-foreground hover:text-primary hover:bg-muted">
          Login
        </Button>
      </Link>
      <Link href="/register" onClick={() => setIsOpen(false)}>
        <Button className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all">
          Get Started
        </Button>
      </Link>
    </>
  );

  const renderMobileUserNav = () => (
    <>
      <Link
        to="/events"
        className="block py-2 text-foreground hover:text-primary transition-colors"
        onClick={() => setIsOpen(false)}
      >
        Explore Events
      </Link>
      <Link
        to="/dashboard"
        className="block py-2 text-foreground hover:text-primary transition-colors"
        onClick={() => setIsOpen(false)}
      >
        My Events
      </Link>
      <Link href="/profile/user-1" onClick={() => setIsOpen(false)}>
        <Button variant="ghost" className="w-full justify-start text-foreground hover:text-primary hover:bg-muted">
          Profile
        </Button>
      </Link>
      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
        Logout
      </Button>
    </>
  );

  const renderMobileHostNav = () => (
    <>
      <Link
        to="/events"
        className="block py-2 text-foreground hover:text-primary transition-colors"
        onClick={() => setIsOpen(false)}
      >
        Explore Events
      </Link>
      <Link
        to="/dashboard"
        className="block py-2 text-foreground hover:text-primary transition-colors"
        onClick={() => setIsOpen(false)}
      >
        Dashboard
      </Link>
      <Link
        to="/events/create"
        className="block py-2 text-foreground hover:text-primary transition-colors"
        onClick={() => setIsOpen(false)}
      >
        Create Event
      </Link>
      <Link href="/profile/user-1" onClick={() => setIsOpen(false)}>
        <Button variant="ghost" className="w-full justify-start text-foreground hover:text-primary hover:bg-muted">
          Profile
        </Button>
      </Link>
      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
        Logout
      </Button>
    </>
  );

  const renderMobileAdminNav = () => (
    <>
      <Link
        to="/admin"
        className="block py-2 text-foreground hover:text-primary transition-colors"
        onClick={() => setIsOpen(false)}
      >
        Admin Dashboard
      </Link>
      <Link
        to="/admin?tab=users"
        className="block py-2 text-foreground hover:text-primary transition-colors"
        onClick={() => setIsOpen(false)}
      >
        Manage Users
      </Link>
      <Link
        to="/admin?tab=events"
        className="block py-2 text-foreground hover:text-primary transition-colors"
        onClick={() => setIsOpen(false)}
      >
        Manage Events
      </Link>
      <Link href="/profile/user-1" onClick={() => setIsOpen(false)}>
        <Button variant="ghost" className="w-full justify-start text-foreground hover:text-primary hover:bg-muted">
          Profile
        </Button>
      </Link>
      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
        Logout
      </Button>
    </>
  );

  const renderMobileNav = () => {
    if (!isLoggedIn) return renderMobileGuestNav();
    switch (currentRole) {
      case "admin": return renderMobileAdminNav();
      case "host": return renderMobileHostNav();
      case "user": return renderMobileUserNav();
      default: return renderMobileGuestNav();
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-gradient-primary rounded-lg group-hover:shadow-glow transition-all">
              <Calendar className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              EventConnect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {renderDesktopNav()}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3">
                {renderMobileNav()}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
