import { useState } from 'react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { 
  Sprout, 
  Truck, 
  ClipboardList, 
  Factory, 
  Search,
  Bell,
  Settings,
  BarChart3,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  Users,
  Leaf
} from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
  activeTab: string
  onTabChange: (tab: string) => void
}

export function Layout({ children, activeTab, onTabChange }: LayoutProps) {
  const [notifications] = useState(3)

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'producers', label: 'Productores', icon: Users },
    { id: 'cultivation', label: 'Cultivo', icon: Leaf },
    { id: 'harvest', label: 'Cosecha', icon: Sprout },
    { id: 'logistics', label: 'Logística', icon: Truck },
    { id: 'orders', label: 'Pedidos', icon: ClipboardList },
    { id: 'processing', label: 'Proceso Industrial', icon: Factory },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Sprout className="h-8 w-8 text-green-600" />
                <h1 className="text-xl font-semibold text-gray-900">Central</h1>
              </div>
              <Badge variant="secondary" className="hidden sm:inline-flex">
                Sistema de Trazabilidad Bolivia
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {notifications}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-5 w-5" />
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">AH</span>
                </div>
                <span className="text-sm text-gray-700 hidden sm:block">Admin</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-7 bg-white">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <TabsTrigger
                  key={item.id}
                  value={item.id}
                  className="flex items-center space-x-2 data-[state=active]:bg-green-50 data-[state=active]:text-green-700"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>
          {children}
        </Tabs>
      </div>
    </div>
  )
}