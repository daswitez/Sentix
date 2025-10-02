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
  Plus, Search, Filter, Factory, Package, TrendingUp, CheckCircle, Clock,
  AlertCircle, Eye, Download, Settings, Zap, Target, BarChart3, Activity,
  Beaker, ShieldCheck, FileText, Award, Gauge, Thermometer, Users, Box
} from 'lucide-react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts'

const productionLines = [
  {
    id: 'LINE-001',
    name: 'Línea Papa Procesada 1',
    location: 'Planta Industrial La Paz',
    status: 'En Operación',
    currentBatch: 'LOT-24-H001',
    product: 'Papa Pelada y Cortada',
    capacity: 5000,
    currentLoad: 3200,
    efficiency: 88,
    operator: 'Equipo A - Turno Mañana',
    startTime: '2024-01-15 06:00',
    estimatedEnd: '2024-01-15 14:00',
    quality: 94,
    temperature: 4,
    certifications: ['HACCP', 'BPM', 'ISO 22000']
  },
  {
    id: 'LINE-002',
    name: 'Línea Papa Congelada',
    location: 'Planta Industrial La Paz',
    status: 'En Operación',
    currentBatch: 'LOT-24-H003',
    product: 'Papa Pre-Frita Congelada',
    capacity: 4000,
    currentLoad: 2800,
    efficiency: 92,
    operator: 'Equipo B - Turno Mañana',
    startTime: '2024-01-15 06:30',
    estimatedEnd: '2024-01-15 13:30',
    quality: 96,
    temperature: -18,
    certifications: ['HACCP', 'BPM', 'ISO 22000', 'Orgánico']
  },
  {
    id: 'LINE-003',
    name: 'Línea Empaque Premium',
    location: 'Planta Industrial Potosí',
    status: 'Mantenimiento',
    currentBatch: null,
    product: 'Papa Empacada al Vacío',
    capacity: 3000,
    currentLoad: 0,
    efficiency: 0,
    operator: 'Mantenimiento Programado',
    startTime: null,
    estimatedEnd: '2024-01-16 08:00',
    quality: 0,
    temperature: 8,
    certifications: ['HACCP', 'BPM']
  },
  {
    id: 'LINE-004',
    name: 'Línea Deshidratado',
    location: 'Planta Industrial Cochabamba',
    status: 'En Operación',
    currentBatch: 'LOT-24-H004',
    product: 'Papa Deshidratada (Chuño)',
    capacity: 2500,
    currentLoad: 1800,
    efficiency: 85,
    operator: 'Equipo C - Turno Tarde',
    startTime: '2024-01-15 14:00',
    estimatedEnd: '2024-01-15 22:00',
    quality: 90,
    temperature: 25,
    certifications: ['HACCP', 'BPM', 'Denominación Origen']
  }
]

const finalProducts = [
  {
    id: 'PROD-F-001',
    name: 'Papa Pelada y Cortada',
    category: 'Procesado Fresco',
    description: 'Papa procesada lista para cocinar',
    sourceBatch: 'LOT-24-H001',
    quantity: 18000,
    packageSize: '5 kg',
    packagesProduced: 3600,
    unitPrice: 15.5,
    totalValue: 279000,
    shelfLife: '7 días',
    storageTemp: '2-4°C',
    qualityScore: 94,
    certifications: ['SENASAG', 'HACCP', 'BPM'],
    productionDate: '2024-01-15',
    expiryDate: '2024-01-22',
    status: 'Disponible'
  },
  {
    id: 'PROD-F-002',
    name: 'Papa Pre-Frita Congelada',
    category: 'Congelado',
    description: 'Papa pre-frita lista para freír',
    sourceBatch: 'LOT-24-H003',
    quantity: 15000,
    packageSize: '2.5 kg',
    packagesProduced: 6000,
    unitPrice: 22.0,
    totalValue: 330000,
    shelfLife: '12 meses',
    storageTemp: '-18°C',
    qualityScore: 96,
    certifications: ['SENASAG', 'HACCP', 'BPM', 'Orgánico'],
    productionDate: '2024-01-15',
    expiryDate: '2025-01-15',
    status: 'Disponible'
  },
  {
    id: 'PROD-F-003',
    name: 'Chuño Premium (Papa Deshidratada)',
    category: 'Deshidratado',
    description: 'Chuño tradicional boliviano premium',
    sourceBatch: 'LOT-24-H004',
    quantity: 3200,
    packageSize: '1 kg',
    packagesProduced: 3200,
    unitPrice: 28.0,
    totalValue: 89600,
    shelfLife: '24 meses',
    storageTemp: 'Ambiente',
    qualityScore: 90,
    certifications: ['SENASAG', 'Denominación Origen', 'Producto Andino'],
    productionDate: '2024-01-15',
    expiryDate: '2026-01-15',
    status: 'Disponible'
  },
  {
    id: 'PROD-F-004',
    name: 'Papa Empacada al Vacío',
    category: 'Empaque Premium',
    description: 'Papa fresca empacada al vacío',
    sourceBatch: 'LOT-24-H002',
    quantity: 12000,
    packageSize: '3 kg',
    packagesProduced: 4000,
    unitPrice: 18.5,
    totalValue: 222000,
    shelfLife: '21 días',
    storageTemp: '4-8°C',
    qualityScore: 92,
    certifications: ['SENASAG', 'HACCP', 'BPM'],
    productionDate: '2024-01-14',
    expiryDate: '2024-02-04',
    status: 'Disponible'
  }
]

const qualityControls = [
  {
    id: 'QC-001',
    productionLine: 'LINE-001',
    product: 'Papa Pelada y Cortada',
    inspector: 'Ing. Laura Mendoza - Control Calidad',
    date: '2024-01-15 10:00',
    checks: [
      { parameter: 'Color', result: 'Aprobado', score: 95 },
      { parameter: 'Textura', result: 'Aprobado', score: 94 },
      { parameter: 'Tamaño', result: 'Aprobado', score: 93 },
      { parameter: 'Defectos', result: 'Aprobado', score: 96 },
      { parameter: 'Microbiología', result: 'Apto', score: 98 }
    ],
    overallScore: 94,
    status: 'Aprobado',
    certificate: 'CERT-QC-001'
  },
  {
    id: 'QC-002',
    productionLine: 'LINE-002',
    product: 'Papa Pre-Frita Congelada',
    inspector: 'Técnico INLASA - Planta La Paz',
    date: '2024-01-15 11:30',
    checks: [
      { parameter: 'Temperatura', result: 'Aprobado', score: 98 },
      { parameter: 'Color Dorado', result: 'Excelente', score: 97 },
      { parameter: 'Crocancia', result: 'Aprobado', score: 95 },
      { parameter: 'Aceite', result: 'Óptimo', score: 96 },
      { parameter: 'Microbiología', result: 'Apto', score: 99 }
    ],
    overallScore: 96,
    status: 'Aprobado',
    certificate: 'CERT-QC-002'
  }
]

const monthlyProductionData = [
  { month: 'Ene', production: 95, efficiency: 88 },
  { month: 'Feb', production: 88, efficiency: 90 },
  { month: 'Mar', production: 102, efficiency: 92 },
  { month: 'Abr', production: 85, efficiency: 87 },
  { month: 'May', production: 78, efficiency: 89 }
]

const productDistribution = [
  { name: 'Procesado Fresco', value: 40, color: '#3b82f6' },
  { name: 'Congelado', value: 35, color: '#10b981' },
  { name: 'Deshidratado', value: 15, color: '#f59e0b' },
  { name: 'Empaque Premium', value: 10, color: '#8b5cf6' }
]

export function ProcessingModule() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLine, setSelectedLine] = useState<typeof productionLines[0] | null>(null)
  const [filterStatus, setFilterStatus] = useState('all')

  const filteredLines = productionLines.filter(line => {
    const matchesSearch = line.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         line.product.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || line.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const activeLines = productionLines.filter(l => l.status === 'En Operación').length
  const totalProduction = finalProducts.reduce((sum, p) => sum + p.quantity, 0)
  const avgEfficiency = Math.round(productionLines.reduce((sum, l) => sum + l.efficiency, 0) / productionLines.length)
  const totalValue = finalProducts.reduce((sum, p) => sum + p.totalValue, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-lg"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=300&fit=crop"
          alt="Procesamiento industrial"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-blue-800/90 flex items-center justify-between p-6">
          <div className="text-white">
            <h2 className="text-xl">Módulo de Procesamiento Industrial</h2>
            <p className="text-sm opacity-90">Control de líneas de producción y productos finales</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">
                <Plus className="w-4 h-4 mr-2" />
                Nueva Producción
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>Iniciar Nuevo Lote de Producción</DialogTitle>
                <DialogDescription>Configure el proceso de producción</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Línea de Producción</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      {productionLines.map(line => (
                        <SelectItem key={line.id} value={line.id}>{line.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Lote de Materia Prima</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="LOT-24-H001">LOT-24-H001</SelectItem>
                      <SelectItem value="LOT-24-H002">LOT-24-H002</SelectItem>
                      <SelectItem value="LOT-24-H003">LOT-24-H003</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Producto a Fabricar</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pelada">Papa Pelada y Cortada</SelectItem>
                      <SelectItem value="prefrita">Papa Pre-Frita Congelada</SelectItem>
                      <SelectItem value="chuno">Chuño Premium</SelectItem>
                      <SelectItem value="vacio">Papa Empacada al Vacío</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Cantidad a Procesar (kg)</Label>
                  <Input type="number" placeholder="5000" />
                </div>
                <div>
                  <Label>Operador Responsable</Label>
                  <Input placeholder="Equipo A - Turno Mañana" />
                </div>
                <div>
                  <Label>Hora de Inicio</Label>
                  <Input type="time" />
                </div>
                <div>
                  <Label>Temperatura Objetivo (°C)</Label>
                  <Input type="number" placeholder="4" />
                </div>
                <div>
                  <Label>Tamaño de Empaque</Label>
                  <Input placeholder="5 kg" />
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <Button variant="outline">Cancelar</Button>
                <Button>Iniciar Producción</Button>
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
        <Card className="border-l-4 border-l-indigo-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              Líneas Activas
              <Factory className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{activeLines}/{productionLines.length}</div>
            <Progress value={(activeLines / productionLines.length) * 100} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              Producción Total
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{(totalProduction / 1000).toFixed(1)} T</div>
            <Progress value={85} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              Eficiencia Prom.
              <Gauge className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{avgEfficiency}%</div>
            <Progress value={avgEfficiency} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-amber-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              Valor Producido
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">Bs {(totalValue / 1000).toFixed(0)}K</div>
            <Progress value={92} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              Productos
              <Box className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{finalProducts.length}</div>
            <Progress value={75} className="h-1 mt-2" />
          </CardContent>
        </Card>
      </motion.div>

      <Tabs defaultValue="lines" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="lines">Líneas Producción</TabsTrigger>
          <TabsTrigger value="products">Productos Finales</TabsTrigger>
          <TabsTrigger value="quality">Control Calidad</TabsTrigger>
          <TabsTrigger value="certificates">Certificados</TabsTrigger>
          <TabsTrigger value="analytics">Análisis</TabsTrigger>
        </TabsList>

        <TabsContent value="lines" className="space-y-4">
          <div className="flex space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar línea..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los Estados</SelectItem>
                <SelectItem value="En Operación">En Operación</SelectItem>
                <SelectItem value="Mantenimiento">Mantenimiento</SelectItem>
                <SelectItem value="Detenida">Detenida</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredLines.map((line, index) => (
              <motion.div
                key={line.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className={`border-l-4 ${
                    line.status === 'En Operación' ? 'border-l-green-500' :
                    line.status === 'Mantenimiento' ? 'border-l-amber-500' : 'border-l-gray-500'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Factory className={`h-5 w-5 ${
                          line.status === 'En Operación' ? 'text-green-600' :
                          line.status === 'Mantenimiento' ? 'text-amber-600' : 'text-gray-600'
                        }`} />
                        <CardTitle className="text-base">{line.name}</CardTitle>
                      </div>
                      <Badge variant={
                        line.status === 'En Operación' ? 'default' :
                        line.status === 'Mantenimiento' ? 'secondary' : 'outline'
                      }>
                        {line.status}
                      </Badge>
                    </div>
                    <CardDescription>{line.location}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-muted-foreground">Producto</p>
                        <p className="font-medium text-xs">{line.product}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Operador</p>
                        <p className="font-medium text-xs">{line.operator}</p>
                      </div>
                      {line.currentBatch && (
                        <>
                          <div>
                            <p className="text-muted-foreground">Lote Actual</p>
                            <Badge variant="outline" className="text-xs">{line.currentBatch}</Badge>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Capacidad</p>
                            <p className="font-medium">{(line.currentLoad / 1000).toFixed(1)}/{(line.capacity / 1000).toFixed(1)}T</p>
                          </div>
                        </>
                      )}
                    </div>

                    {line.status === 'En Operación' && (
                      <div>
                        <div className="flex items-center justify-between text-xs mb-2">
                          <span className="text-muted-foreground">Eficiencia</span>
                          <span className="font-medium">{line.efficiency}%</span>
                        </div>
                        <Progress value={line.efficiency} className="h-2" />
                      </div>
                    )}

                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex items-center space-x-1 p-2 bg-blue-50 rounded">
                        <Thermometer className="h-4 w-4 text-blue-600" />
                        <div>
                          <p className="text-xs text-muted-foreground">Temp</p>
                          <p className="text-sm font-medium">{line.temperature}°C</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 p-2 bg-green-50 rounded">
                        <Target className="h-4 w-4 text-green-600" />
                        <div>
                          <p className="text-xs text-muted-foreground">Calidad</p>
                          <p className="text-sm font-medium">{line.quality || 'N/A'}%</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 p-2 bg-purple-50 rounded">
                        <Activity className="h-4 w-4 text-purple-600" />
                        <div>
                          <p className="text-xs text-muted-foreground">Estado</p>
                          <p className="text-xs font-medium">{line.status === 'En Operación' ? 'Activa' : 'Parada'}</p>
                        </div>
                      </div>
                    </div>

                    {line.status === 'En Operación' && (
                      <div className="pt-3 border-t flex items-center justify-between text-xs">
                        <div>
                          <Clock className="h-3 w-3 inline mr-1" />
                          <span className="text-muted-foreground">
                            Fin estimado: {line.estimatedEnd?.split(' ')[1]}
                          </span>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => setSelectedLine(line)}>
                          <Eye className="h-3 w-3 mr-1" />
                          Ver
                        </Button>
                      </div>
                    )}

                    {line.status === 'Mantenimiento' && (
                      <div className="pt-3 border-t text-xs text-center">
                        <Settings className="h-4 w-4 inline mr-1 text-amber-600" />
                        <span className="text-muted-foreground">
                          Retorno: {line.estimatedEnd}
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="products" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {finalProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{product.name}</CardTitle>
                    <Badge>{product.category}</Badge>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-4">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-muted-foreground text-xs">Cantidad Producida</p>
                      <p className="font-medium">{(product.quantity / 1000).toFixed(1)} T</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Paquetes</p>
                      <p className="font-medium">{product.packagesProduced.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Tamaño Empaque</p>
                      <p className="font-medium">{product.packageSize}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Precio Unitario</p>
                      <p className="font-medium">Bs {product.unitPrice}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-muted-foreground">Calidad</span>
                      <span className="font-medium">{product.qualityScore}%</span>
                    </div>
                    <Progress value={product.qualityScore} className="h-2" />
                  </div>

                  <div className="pt-3 border-t grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <p className="text-muted-foreground">Vida Útil</p>
                      <p className="font-medium">{product.shelfLife}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Temp. Almacén</p>
                      <p className="font-medium">{product.storageTemp}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Producción</p>
                      <p className="font-medium">{new Date(product.productionDate).toLocaleDateString('es-ES')}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Vencimiento</p>
                      <p className="font-medium">{new Date(product.expiryDate).toLocaleDateString('es-ES')}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t">
                    <p className="text-xs text-muted-foreground mb-2">Certificaciones:</p>
                    <div className="flex flex-wrap gap-1">
                      {product.certifications.map((cert, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Valor Total:</span>
                      <span className="font-medium">Bs {product.totalValue.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="quality" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Inspecciones de Control de Calidad</CardTitle>
              <CardDescription>Auditorías y verificaciones de calidad en proceso</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {qualityControls.map((qc) => (
                  <div key={qc.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-medium">{qc.product}</h4>
                        <p className="text-sm text-muted-foreground">{qc.productionLine} - {qc.inspector}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(qc.date).toLocaleString('es-ES')}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge variant={qc.status === 'Aprobado' ? 'default' : 'destructive'} className="mb-2">
                          {qc.status}
                        </Badge>
                        <p className="text-sm font-medium">Score: {qc.overallScore}%</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                      {qc.checks.map((check, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded-lg">
                          <p className="text-xs text-muted-foreground">{check.parameter}</p>
                          <p className="text-sm font-medium">{check.result}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <Progress value={check.score} className="h-1 flex-1" />
                            <span className="text-xs">{check.score}%</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t">
                      <div className="flex items-center space-x-2">
                        <ShieldCheck className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Certificado: {qc.certificate}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-1" />
                          Ver Informe
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-3 w-3 mr-1" />
                          PDF
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="certificates" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {finalProducts.map((product) => (
              <Card key={product.id}>
                <CardHeader>
                  <CardTitle className="text-sm flex items-center justify-between">
                    <span>{product.id}</span>
                    <Badge>{product.certifications.length} certificados</Badge>
                  </CardTitle>
                  <CardDescription>{product.name}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {product.certifications.map((cert, index) => (
                    <div key={index} className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-blue-600" />
                          <span className="text-sm font-medium">{cert}</span>
                        </div>
                        <Badge variant="default">Activo</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Emitido: {new Date(product.productionDate).toLocaleDateString('es-ES')}
                      </p>
                      <div className="flex space-x-2 mt-3">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="h-3 w-3 mr-1" />
                          Ver
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Download className="h-3 w-3 mr-1" />
                          PDF
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Producción Mensual</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyProductionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="production" fill="#4f46e5" name="Producción (Ton)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Eficiencia Mensual</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyProductionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[80, 100]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="efficiency" stroke="#10b981" name="Eficiencia (%)" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Distribución por Tipo de Producto</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={productDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      dataKey="value"
                    >
                      {productDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Rendimiento por Línea</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {productionLines
                    .filter(l => l.efficiency > 0)
                    .sort((a, b) => b.efficiency - a.efficiency)
                    .map((line, index) => (
                      <div key={line.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                            index === 0 ? 'bg-amber-500 text-white' :
                            index === 1 ? 'bg-gray-400 text-white' :
                            'bg-gray-200 text-gray-700'
                          }`}>
                            #{index + 1}
                          </div>
                          <div>
                            <p className="text-sm font-medium">{line.name}</p>
                            <p className="text-xs text-muted-foreground">{line.product}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{line.efficiency}%</p>
                          <p className="text-xs text-muted-foreground">{(line.currentLoad / 1000).toFixed(1)}T</p>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Line Details Dialog */}
      {selectedLine && (
        <Dialog open={!!selectedLine} onOpenChange={() => setSelectedLine(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl">Detalles de Línea - {selectedLine.name}</DialogTitle>
              <DialogDescription>Monitoreo en tiempo real</DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              <div className="grid grid-cols-4 gap-4">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Gauge className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                    <p className="text-xs text-muted-foreground">Eficiencia</p>
                    <p className="text-xl">{selectedLine.efficiency}%</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Target className="h-8 w-8 mx-auto text-green-600 mb-2" />
                    <p className="text-xs text-muted-foreground">Calidad</p>
                    <p className="text-xl">{selectedLine.quality}%</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Package className="h-8 w-8 mx-auto text-purple-600 mb-2" />
                    <p className="text-xs text-muted-foreground">Carga Actual</p>
                    <p className="text-xl">{(selectedLine.currentLoad / 1000).toFixed(1)}T</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Thermometer className="h-8 w-8 mx-auto text-cyan-600 mb-2" />
                    <p className="text-xs text-muted-foreground">Temperatura</p>
                    <p className="text-xl">{selectedLine.temperature}°C</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Certificaciones de Línea</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {selectedLine.certifications.map((cert, index) => (
                      <Badge key={index} variant="outline" className="px-3 py-1">
                        <ShieldCheck className="h-3 w-3 mr-1" />
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
