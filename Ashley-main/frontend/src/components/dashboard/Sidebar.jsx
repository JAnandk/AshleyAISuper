import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, TrendingUp, Package, MapPin, Users, Settings, BarChart3, AlertCircle, Lightbulb, Shield, X } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard', href: '/' },
  { icon: TrendingUp, label: 'Sales & Conversion', id: 'sales', href: '/sales-conversion' },
  { icon: Package, label: 'Inventory & Assortment', id: 'products', href: '/inventory-assortment' },
  { icon: MapPin, label: 'Regional View', id: 'regional', href: '/regional-view' },
  { icon: Lightbulb, label: 'Playbook Studio', id: 'playbooks', href: '/playbook-studio' },
  { icon: BarChart3, label: 'Manufacturing Ops', id: 'manufacturing', href: '/manufacturing-ops' },
  { icon: BarChart3, label: 'Delivery & Logistics', id: 'partners', href: '/delivery-logistics' },
  { icon: Users, label: 'Store Teams', id: 'field', href: '/store-teams' },
  { icon: AlertCircle, label: 'Alerts', id: 'alerts', href: '/alerts', badge: 4 },
  { icon: Lightbulb, label: 'Recommendations', id: 'recommendations', href: '/recommendations', badge: 8 },
];

export const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-full w-64 border-r border-border bg-card transition-transform duration-300 md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Mobile Close Button */}
          <div className="flex items-center justify-between p-4 md:hidden border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">Menu</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 space-y-1 p-4 overflow-y-auto">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                className={cn(
                  "w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-smooth",
                  currentPath === item.href
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
                to={item.href}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className={cn(
                    "flex items-center justify-center h-5 min-w-5 px-1.5 rounded-full text-[10px] font-bold",
                    currentPath === item.href
                      ? "bg-primary-foreground text-primary"
                      : "bg-destructive text-destructive-foreground"
                  )}>
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Bottom Section */}
          <div className="p-4 border-t border-border space-y-2">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
              <Shield className="h-5 w-5 text-primary" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-foreground">Secure Mode</p>
                <p className="text-[10px] text-muted-foreground truncate">Confidential computing active</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="w-full justify-start gap-3">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};
