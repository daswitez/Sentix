import { useState } from 'react'
import { motion } from 'motion/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Badge } from './ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Progress } from './ui/progress'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { 
  Plus, Search, Truck, MapPin, Thermometer, Clock, Package, Route, AlertTriangle,
  CheckCircle2, Navigation, Gauge, Snowflake, Wind, Activity, TrendingUp,
  FileText, Download, Eye, MapPinned, Radio, Fuel, User, Droplets
} from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts'

const transportRoutes = [
  {
    id: 'TRANS-24-001',
    batchId: 'LOT-24-H001',
    origin: 'Cochabamba - Almacén Valle Alto',
    originCoords: '-17.3935, -66.1570',
    destination: 'La Paz - Planta Procesadora',
    destinationCoords: '-16.5000, -68.1500',
    distance: 378,
    status: 'En Tránsito',
    progress: 65,
    driver: 'Roberto Gutiérrez Pérez',
    driverLicense: 'LP-8756432',
    vehicle: 'Volvo FH16 - Refrigerado',
    vehiclePlate: 'ABC-1234',
    quantity: 24000,
    departureDate: '2024-01-15 08:00',
    estimatedArrival: '2024-01-15 16:30',
    currentLocation: 'Oruro - Km 245',
    currentTemp: 6,
    currentHumidity: 82,
    tempHistory: [
      { time: '08:00', temp: 5, humidity: 85 },
      { time: '10:00', temp: 6, humidity: 83 },
      { time: '12:00', temp: 7, humidity: 81 },
      { time: '14:00', temp: 6, humidity: 82 }
    ],
    alerts: [],
    certifications: ['Cadena Frío', 'HACCP', 'BPT'],
    cost: 4500
  },
  {
    id: 'TRANS-24-002',
    batchId: 'LOT-24-H002',
    origin: 'La Paz - Almacén Altiplano',
    originCoords: '-16.5000, -68.1500',
    destination: 'Oruro - Centro Distribución',
    destinationCoords: '-17.9833, -67.1250',
    distance: 232,
    status: 'Completado',
    progress: 100,
    driver: 'María Condori Quispe',
    driverLicense: 'LP-9823456',
    vehicle: 'Mercedes-Benz Actros - Refrigerado',
    vehiclePlate: 'XYZ-5678',
    quantity: 19600,
    departureDate: '2024-01-12 07:00',
    estimatedArrival: '2024-01-12 13:30',
    currentLocation: 'Oruro - Centro Distribución',
    currentTemp: 5,
    currentHumidity: 80,
    tempHistory: [
      { time: '07:00', temp: 5, humidity: 84 },
      { time: '09:00', temp: 5, humidity: 82 },
      { time: '11:00', temp: 6, humidity: 81 },
      { time: '13:00', temp: 5, humidity: 80 }
    ],
    alerts: [],
    certifications: ['Cadena Frío', 'HACCP', 'BPT'],
    cost: 3200
  },
  {
    id: 'TRANS-24-003',
    batchId: 'LOT-24-H003',
    origin: 'Potosí - Almacén Uyuni',
    originCoords: '-20.4597, -66.8249',
    destination: 'Potosí - Planta Industrial',
    destinationCoords: '-19.5836, -65.7531',
    distance: 198,
    status: 'Programado',
    progress: 0,
    driver: 'Carlos Yujra Mamani',
    driverLicense: 'PT-7654321',
    vehicle: 'Scania R500 - Refrigerado',
    vehiclePlate: 'DEF-9012',
    quantity: 18700,
    departureDate: '2024-01-16 06:00',
    estimatedArrival: '2024-01-16 11:30',
    currentLocation: 'Potosí - Almacén Uyuni',
    currentTemp: 8,
    currentHumidity: 78,
    tempHistory: [],
    alerts: [],
    certifications: ['Cadena Frío', 'HACCP', 'BPT', 'Orgánico'],
    cost: 2800
  },
  {
    id: 'TRANS-24-004',
    batchId: 'LOT-24-H004',
    origin: 'Cochabamba - Sipe Sipe',
    originCoords: '-17.4421, -66.3558',
    destination: 'Santa Cruz - Centro Exportación',
    destinationCoords: '-17.8146, -63.1560',
    distance: 512,
    status: 'En Tránsito',
    progress: 35,
    driver: 'Pedro Flores Torres',
    driverLicense: 'CB-5432109',
    vehicle: 'Iveco Stralis - Refrigerado',
    vehiclePlate: 'GHI-3456',
    quantity: 10500,
    departureDate: '2024-01-20 05:00',
    estimatedArrival: '2024-01-20 16:00',
    currentLocation: 'Entre Ríos - Km 180',
    currentTemp: 7,
    currentHumidity: 83,
    tempHistory: [
      { time: '05:00', temp: 6, humidity: 85 },
      { time: '07:00', temp: 7, humidity: 84 },
      { time: '09:00', temp: 8, humidity: 83 },
      { time: '11:00', temp: 7, humidity: 83 }
    ],
    alerts: [
      {
        id: 'ALT-001',
        type: 'Temperatura',
        severity: 'warning',
        message: 'Temperatura alcanzó 8°C a las 09:00',
        time: '09:00'
      }
    ],
    certifications: ['Cadena Frío', 'BPT'],
    cost: 6500
  }
]

const warehouses = [
  {
    id: 'WH-001',
    name: 'Almacén Central Cochabamba',
    location: 'Cochabamba, Valle Alto',
    coordinates: '-17.3935, -66.1570',
    capacity: 500000,
    currentStock: 345000,
    temperature: 8,
    humidity: 82,
    status: 'Operativo',
    batches: 12,
    certifications: ['HACCP', 'BPA', 'Frío Controlado']
  },
  {
    id: 'WH-002',
    name: 'Centro Distribución Oruro',
    location: 'Oruro',
    coordinates: '-17.9833, -67.1250',
    capacity: 300000,
    currentStock: 198000,
    temperature: 7,
    humidity: 80,
    status: 'Operativo',
    batches: 8,
    certifications: ['HACCP', 'Frío Controlado']
  },
  {
    id: 'WH-003',
    name: 'Almacén Industrial Potosí',
    location: 'Potosí',
    coordinates: '-19.5836, -65.7531',
    capacity: 200000,
    currentStock: 125000,
    temperature: 9,
    humidity: 78,
    status: 'Operativo',
    batches: 5,
    certifications: ['HACCP', 'Orgánico', 'Frío Controlado']
  }
]

const monthlyTransportData = [
  { month: 'Ene', shipments: 45, onTime: 92 },
  { month: 'Feb', shipments: 38, onTime: 95 },
  { month: 'Mar', shipments: 42, onTime: 89 },
  { month: 'Abr', shipments: 35, onTime: 93 },
  { month: 'May', shipments: 28, onTime: 91 }
]

export function LogisticsModule() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRoute, setSelectedRoute] = useState<typeof transportRoutes[0] | null>(null)
  const [filterStatus, setFilterStatus] = useState('all')

  const filteredRoutes = transportRoutes.filter(route => {
    const matchesSearch = route.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         route.origin.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || route.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const activeShipments = transportRoutes.filter(r => r.status === 'En Tránsito').length
  const totalDistance = transportRoutes.reduce((sum, r) => sum + r.distance, 0)
  const totalQuantity = transportRoutes.reduce((sum, r) => sum + r.quantity, 0)
  const onTimeRate = 93

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-lg"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&h=300&fit=crop"
          alt="Logística de transporte"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-800/90 flex items-center justify-between p-6">
          <div className="text-white">
            <h2 className="text-xl">Módulo de Logística</h2>
            <p className="text-sm opacity-90">Gestión de transporte y cadena de frío</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">
                <Plus className="w-4 h-4 mr-2" />
                Nueva Ruta
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>Programar Nueva Ruta de Transporte</DialogTitle>
                <DialogDescription>Configure los detalles del envío</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Lote de Origen</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="LOT-24-H001">LOT-24-H001</SelectItem>
                      <SelectItem value="LOT-24-H002">LOT-24-H002</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Cantidad (kg)</Label>
                  <Input type="number" placeholder="24000" />
                </div>
                <div>
                  <Label>Origen</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cochabamba">Cochabamba - Valle Alto</SelectItem>
                      <SelectItem value="lapaz">La Paz - Altiplano</SelectItem>
                      <SelectItem value="potosi">Potosí - Uyuni</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Destino</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lapaz">La Paz - Planta Procesadora</SelectItem>
                      <SelectItem value="oruro">Oruro - Centro Distribución</SelectItem>
                      <SelectItem value="santacruz">Santa Cruz - Exportación</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Conductor</Label>
                  <Input placeholder="Roberto Gutiérrez Pérez" />
                </div>
                <div>
                  <Label>Licencia</Label>
                  <Input placeholder="LP-8756432" />
                </div>
                <div>
                  <Label>Vehículo</Label>
                  <Input placeholder="Volvo FH16 - Refrigerado" />
                </div>
                <div>
                  <Label>Placa</Label>
                  <Input placeholder="ABC-1234" />
                </div>
                <div>
                  <Label>Fecha/Hora Salida</Label>
                  <Input type="datetime-local" />
                </div>
                <div>
                  <Label>Temp. Objetivo (°C)</Label>
                  <Input type="number" placeholder="6" />
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <Button variant="outline">Cancelar</Button>
                <Button>Programar Ruta</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
      >
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              Envíos Activos
              <Truck className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{activeShipments}</div>
            <Progress value={75} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              Distancia Total
              <Route className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{totalDistance} km</div>
            <Progress value={65} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              Carga Total
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{(totalQuantity / 1000).toFixed(1)} T</div>
            <Progress value={80} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-amber-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              Puntualidad
              <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{onTimeRate}%</div>
            <Progress value={onTimeRate} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-cyan-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              Almacenes
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{warehouses.length}</div>
            <Progress value={90} className="h-1 mt-2" />
          </CardContent>
        </Card>
      </motion.div>

      <Tabs defaultValue="routes" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="routes">Rutas</TabsTrigger>
          <TabsTrigger value="tracking">Tracking</TabsTrigger>
          <TabsTrigger value="warehouses">Almacenes</TabsTrigger>
          <TabsTrigger value="temperature">Cadena Frío</TabsTrigger>
          <TabsTrigger value="analytics">Análisis</TabsTrigger>
        </TabsList>

        <TabsContent value="routes" className="space-y-4">
          <div className="flex space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar ruta..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los Estados</SelectItem>
                <SelectItem value="En Tránsito">En Tránsito</SelectItem>
                <SelectItem value="Completado">Completado</SelectItem>
                <SelectItem value="Programado">Programado</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {filteredRoutes.map((route, index) => (
              <motion.div
                key={route.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className={`border-l-4 ${
                    route.status === 'En Tránsito' ? 'border-l-blue-500' :
                    route.status === 'Completado' ? 'border-l-green-500' : 'border-l-gray-500'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Truck className={`h-6 w-6 ${
                          route.status === 'En Tránsito' ? 'text-blue-600' :
                          route.status === 'Completado' ? 'text-green-600' : 'text-gray-600'
                        }`} />
                        <div>
                          <CardTitle className="text-base">{route.id}</CardTitle>
                          <CardDescription className="text-sm">
                            {route.vehicle} - {route.vehiclePlate}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {route.alerts.length > 0 && (
                          <Badge variant="destructive">
                            <AlertTriangle className="h-3 w-3 mr-1" />
                            {route.alerts.length} alertas
                          </Badge>
                        )}
                        <Badge variant={
                          route.status === 'En Tránsito' ? 'default' :
                          route.status === 'Completado' ? 'secondary' : 'outline'
                        }>
                          {route.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Origen</p>
                        <p className="text-sm font-medium">{route.origin}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Destino</p>
                        <p className="text-sm font-medium">{route.destination}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Conductor</p>
                        <p className="text-sm font-medium">{route.driver}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Distancia</p>
                        <p className="text-sm font-medium">{route.distance} km</p>
                      </div>
                    </div>

                    {route.status === 'En Tránsito' && (
                      <div>
                        <div className="flex items-center justify-between text-xs mb-2">
                          <span className="text-muted-foreground">Progreso del Viaje</span>
                          <span className="font-medium">{route.progress}%</span>
                        </div>
                        <Progress value={route.progress} className="h-2" />
                      </div>
                    )}

                    <div className="grid grid-cols-4 gap-2">
                      <div className="flex items-center space-x-2 p-2 bg-blue-50 rounded">
                        <Thermometer className="h-4 w-4 text-blue-600" />
                        <div>
                          <p className="text-xs text-muted-foreground">Temp</p>
                          <p className="text-sm font-medium">{route.currentTemp}°C</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 p-2 bg-cyan-50 rounded">
                        <Droplets className="h-4 w-4 text-cyan-600" />
                        <div>
                          <p className="text-xs text-muted-foreground">Hum</p>
                          <p className="text-sm font-medium">{route.currentHumidity}%</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 p-2 bg-purple-50 rounded">
                        <Package className="h-4 w-4 text-purple-600" />
                        <div>
                          <p className="text-xs text-muted-foreground">Carga</p>
                          <p className="text-sm font-medium">{(route.quantity / 1000).toFixed(1)}T</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 p-2 bg-green-50 rounded">
                        <Navigation className="h-4 w-4 text-green-600" />
                        <div>
                          <p className="text-xs text-muted-foreground">Estado</p>
                          <p className="text-xs font-medium">{route.currentLocation.split(' - ')[0]}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 inline mr-1" />
                        Llegada: {new Date(route.estimatedArrival).toLocaleString('es-ES')}
                      </div>
                      <Button variant="outline" size="sm" onClick={() => setSelectedRoute(route)}>
                        <Eye className="h-3 w-3 mr-1" />
                        Ver Detalle
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tracking" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {transportRoutes.filter(r => r.status === 'En Tránsito').map((route) => (
              <Card key={route.id}>
                <CardHeader>
                  <CardTitle className="text-base flex items-center justify-between">
                    <span>{route.id}</span>
                    <Badge>En Tránsito</Badge>
                  </CardTitle>
                  <CardDescription>{route.origin} → {route.destination}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border-2 border-dashed border-blue-200">
                    <div className="flex items-center justify-center space-x-2 mb-3">
                      <MapPinned className="h-8 w-8 text-blue-600" />
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Ubicación Actual</p>
                        <p className="font-medium">{route.currentLocation}</p>
                      </div>
                    </div>
                    <Progress value={route.progress} className="h-2 mb-2" />
                    <p className="text-xs text-center text-muted-foreground">{route.progress}% completado</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <User className="h-4 w-4 text-gray-600 mb-2" />
                      <p className="text-xs text-muted-foreground">Conductor</p>
                      <p className="text-sm font-medium">{route.driver}</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <Truck className="h-4 w-4 text-gray-600 mb-2" />
                      <p className="text-xs text-muted-foreground">Vehículo</p>
                      <p className="text-sm font-medium">{route.vehiclePlate}</p>
                    </div>
                  </div>

                  {route.tempHistory.length > 0 && (
                    <div>
                      <p className="text-sm font-medium mb-2">Historial de Temperatura</p>
                      <ResponsiveContainer width="100%" height={150}>
                        <LineChart data={route.tempHistory}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="time" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="temp" stroke="#3b82f6" strokeWidth={2} name="Temp (°C)" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="warehouses" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {warehouses.map((warehouse) => (
              <Card key={warehouse.id}>
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardTitle className="text-base">{warehouse.name}</CardTitle>
                  <CardDescription className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span>{warehouse.location}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-4">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-muted-foreground">Capacidad Utilizada</span>
                      <span className="font-medium">
                        {((warehouse.currentStock / warehouse.capacity) * 100).toFixed(0)}%
                      </span>
                    </div>
                    <Progress value={(warehouse.currentStock / warehouse.capacity) * 100} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">
                      {(warehouse.currentStock / 1000).toFixed(0)}T / {(warehouse.capacity / 1000).toFixed(0)}T
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 bg-blue-50 rounded">
                      <Thermometer className="h-4 w-4 text-blue-600 mb-1" />
                      <p className="text-xs text-muted-foreground">Temperatura</p>
                      <p className="text-sm font-medium">{warehouse.temperature}°C</p>
                    </div>
                    <div className="p-2 bg-cyan-50 rounded">
                      <Droplets className="h-4 w-4 text-cyan-600 mb-1" />
                      <p className="text-xs text-muted-foreground">Humedad</p>
                      <p className="text-sm font-medium">{warehouse.humidity}%</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t">
                    <p className="text-xs text-muted-foreground mb-2">Certificaciones:</p>
                    <div className="flex flex-wrap gap-1">
                      {warehouse.certifications.map((cert, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Lotes Almacenados:</span>
                      <span className="font-medium">{warehouse.batches}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="temperature" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Snowflake className="h-5 w-5" />
                <span>Monitoreo de Cadena de Frío</span>
              </CardTitle>
              <CardDescription>Control en tiempo real de temperatura y humedad</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {transportRoutes.filter(r => r.tempHistory.length > 0).map((route) => (
                  <div key={route.id} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">{route.id}</h4>
                      <Badge variant={route.currentTemp <= 8 ? 'default' : 'destructive'}>
                        {route.currentTemp}°C
                      </Badge>
                    </div>
                    <ResponsiveContainer width="100%" height={200}>
                      <LineChart data={route.tempHistory}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis yAxisId="left" domain={[0, 15]} />
                        <YAxis yAxisId="right" orientation="right" domain={[70, 90]} />
                        <Tooltip />
                        <Legend />
                        <Line yAxisId="left" type="monotone" dataKey="temp" stroke="#3b82f6" name="Temp (°C)" strokeWidth={2} />
                        <Line yAxisId="right" type="monotone" dataKey="humidity" stroke="#06b6d4" name="Hum (%)" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Envíos Mensuales</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyTransportData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="shipments" fill="#3b82f6" name="Envíos" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tasa de Puntualidad</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyTransportData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[80, 100]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="onTime" stroke="#10b981" name="Puntualidad (%)" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Route Details Dialog */}
      {selectedRoute && (
        <Dialog open={!!selectedRoute} onOpenChange={() => setSelectedRoute(null)}>
          <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl">Detalles de Ruta - {selectedRoute.id}</DialogTitle>
              <DialogDescription>Información completa del transporte</DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              <div className="grid grid-cols-4 gap-4">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Route className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                    <p className="text-xs text-muted-foreground">Distancia</p>
                    <p className="text-xl">{selectedRoute.distance} km</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Thermometer className="h-8 w-8 mx-auto text-cyan-600 mb-2" />
                    <p className="text-xs text-muted-foreground">Temperatura</p>
                    <p className="text-xl">{selectedRoute.currentTemp}°C</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Package className="h-8 w-8 mx-auto text-purple-600 mb-2" />
                    <p className="text-xs text-muted-foreground">Carga</p>
                    <p className="text-xl">{(selectedRoute.quantity / 1000).toFixed(1)}T</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Activity className="h-8 w-8 mx-auto text-green-600 mb-2" />
                    <p className="text-xs text-muted-foreground">Progreso</p>
                    <p className="text-xl">{selectedRoute.progress}%</p>
                  </CardContent>
                </Card>
              </div>

              {selectedRoute.alerts.length > 0 && (
                <Card className="border-amber-500">
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center space-x-2">
                      <AlertTriangle className="h-4 w-4 text-amber-600" />
                      <span>Alertas Activas</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {selectedRoute.alerts.map((alert) => (
                        <div key={alert.id} className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium">{alert.message}</p>
                            <Badge variant="destructive">{alert.severity}</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">Hora: {alert.time}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
