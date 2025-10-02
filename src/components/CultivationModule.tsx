import { useState } from 'react'
import { motion } from 'motion/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Badge } from './ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Progress } from './ui/progress'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Label } from './ui/label'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { 
  Plus, Search, Leaf, Thermometer, Droplets, Cloud, Sun, Calendar, MapPin, User,
  TrendingUp, AlertTriangle, CheckCircle, Sprout, Beaker, Wind, Activity,
  FlaskConical, Bug, Snowflake, Zap, BarChart3, Eye, Download, Clock,
  Package, FileText, Award, ChevronRight, Target
} from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'

const cultivationPlots = [
  {
    id: 'PLOT-24-C001',
    name: 'Parcela Valle Alto A',
    location: 'Cochabamba, Valle Alto',
    coordinates: '-17.3935, -66.1570',
    area: 2.5,
    variety: 'Papa Waycha',
    farmer: 'Juan Mamani Condori',
    farmerId: 'PROD-001',
    cooperative: 'Cooperativa Valle Alto',
    plantingDate: '2024-01-05',
    estimatedHarvest: '2024-05-15',
    currentStage: 'Crecimiento Vegetativo',
    progress: 45,
    soilPh: 6.2,
    temperature: 14,
    humidity: 68,
    precipitation: 45,
    soilMoisture: 62,
    organicMatter: 4.2,
    nitrogen: 120,
    phosphorus: 85,
    potassium: 180,
    status: 'Óptimo',
    healthScore: 92,
    expectedYield: 32000,
    seedsPlanted: 850,
    certifications: ['Orgánico SENASAG', 'BPA']
  },
  {
    id: 'PLOT-24-C002',
    name: 'Parcela Altiplano Norte B',
    location: 'La Paz, Altiplano Norte',
    coordinates: '-15.7439, -69.2094',
    area: 3.2,
    variety: 'Papa Imilla Negra',
    farmer: 'María Quispe Choque',
    farmerId: 'PROD-002',
    cooperative: 'Cooperativa Altiplano',
    plantingDate: '2024-01-10',
    estimatedHarvest: '2024-05-20',
    currentStage: 'Emergencia',
    progress: 25,
    soilPh: 5.8,
    temperature: 12,
    humidity: 72,
    precipitation: 52,
    soilMoisture: 71,
    organicMatter: 3.8,
    nitrogen: 95,
    phosphorus: 72,
    potassium: 165,
    status: 'Requiere Atención',
    healthScore: 78,
    expectedYield: 28000,
    seedsPlanted: 1120,
    certifications: ['BPA']
  },
  {
    id: 'PLOT-24-C003',
    name: 'Parcela Uyuni C',
    location: 'Potosí, Valle de Uyuni',
    coordinates: '-20.4597, -66.8249',
    area: 1.8,
    variety: 'Papa Runa Toralapa',
    farmer: 'Carlos Huanca Ticona',
    farmerId: 'PROD-003',
    cooperative: 'Cooperativa Uyuni',
    plantingDate: '2023-12-28',
    estimatedHarvest: '2024-05-05',
    currentStage: 'Floración',
    progress: 65,
    soilPh: 6.5,
    temperature: 15,
    humidity: 65,
    precipitation: 38,
    soilMoisture: 58,
    organicMatter: 5.1,
    nitrogen: 145,
    phosphorus: 95,
    potassium: 195,
    status: 'Óptimo',
    healthScore: 95,
    expectedYield: 22000,
    seedsPlanted: 620,
    certifications: ['Orgánico Premium SENASAG', 'ECOCERT']
  },
  {
    id: 'PLOT-24-C004',
    name: 'Parcela Sipe Sipe D',
    location: 'Cochabamba, Sipe Sipe',
    coordinates: '-17.4421, -66.3558',
    area: 1.2,
    variety: 'Papa Waycha',
    farmer: 'Pedro Yujra Mamani',
    farmerId: 'PROD-005',
    cooperative: 'Cooperativa Valle Alto',
    plantingDate: '2024-01-15',
    estimatedHarvest: '2024-05-25',
    currentStage: 'Emergencia',
    progress: 20,
    soilPh: 6.0,
    temperature: 13,
    humidity: 70,
    precipitation: 48,
    soilMoisture: 66,
    organicMatter: 3.5,
    nitrogen: 88,
    phosphorus: 68,
    potassium: 152,
    status: 'Óptimo',
    healthScore: 85,
    expectedYield: 15000,
    seedsPlanted: 410,
    certifications: ['BPA']
  }
]

const cultivationActivities = [
  {
    id: 'ACT-001',
    plotId: 'PLOT-24-C001',
    plotName: 'Parcela Valle Alto A',
    type: 'Fertilización',
    date: '2024-01-20',
    description: 'Aplicación de fertilizante orgánico rico en nitrógeno',
    responsible: 'Juan Mamani Condori',
    products: ['Humus de lombriz andino 200 kg', 'Compost orgánico 150 kg'],
    cost: 1200,
    duration: '3 horas',
    status: 'Completado',
    weather: 'Soleado, 18°C'
  },
  {
    id: 'ACT-002',
    plotId: 'PLOT-24-C002',
    plotName: 'Parcela Altiplano Norte B',
    type: 'Control de Plagas',
    date: '2024-01-18',
    description: 'Inspección fitosanitaria y aplicación preventiva orgánica',
    responsible: 'María Quispe Choque',
    products: ['Extracto de neem 5L', 'Bacillus thuringiensis 2kg'],
    cost: 850,
    duration: '4 horas',
    status: 'Completado',
    weather: 'Nublado, 12°C'
  },
  {
    id: 'ACT-003',
    plotId: 'PLOT-24-C003',
    plotName: 'Parcela Uyuni C',
    type: 'Riego',
    date: '2024-01-25',
    description: 'Riego por aspersión programado',
    responsible: 'Carlos Huanca Ticona',
    products: ['Agua de pozo profundo 15000L'],
    cost: 320,
    duration: '2 horas',
    status: 'Completado',
    weather: 'Soleado, 16°C'
  },
  {
    id: 'ACT-004',
    plotId: 'PLOT-24-C001',
    plotName: 'Parcela Valle Alto A',
    type: 'Aporque',
    date: '2024-02-05',
    description: 'Aporque manual y limpieza de malezas',
    responsible: 'Juan Mamani Condori',
    products: ['Mano de obra 6 jornales'],
    cost: 600,
    duration: '6 horas',
    status: 'En Progreso',
    weather: 'Parcialmente nublado, 15°C'
  },
  {
    id: 'ACT-005',
    plotId: 'PLOT-24-C004',
    plotName: 'Parcela Sipe Sipe D',
    type: 'Análisis de Suelo',
    date: '2024-01-30',
    description: 'Toma de muestras para análisis de laboratorio',
    responsible: 'Pedro Yujra Mamani',
    products: ['Servicio laboratorio SENASAG'],
    cost: 450,
    duration: '1 hora',
    status: 'Programado',
    weather: 'Soleado, 17°C'
  }
]

const soilAnalysisData = [
  { parameter: 'pH', actual: 6.2, optimal: 6.5, unit: '' },
  { parameter: 'M.O.', actual: 4.2, optimal: 4.5, unit: '%' },
  { parameter: 'N', actual: 120, optimal: 140, unit: 'ppm' },
  { parameter: 'P', actual: 85, optimal: 90, unit: 'ppm' },
  { parameter: 'K', actual: 180, optimal: 180, unit: 'ppm' }
]

const growthStages = [
  { stage: 'Siembra', duration: '1 día', status: 'completed' },
  { stage: 'Emergencia', duration: '15-20 días', status: 'completed' },
  { stage: 'Crecimiento Vegetativo', duration: '30-40 días', status: 'current' },
  { stage: 'Floración', duration: '15-25 días', status: 'pending' },
  { stage: 'Tuberización', duration: '25-35 días', status: 'pending' },
  { stage: 'Maduración', duration: '15-20 días', status: 'pending' }
]

const weatherForecast = [
  { day: 'Lun', temp: 14, humidity: 68, rain: 20 },
  { day: 'Mar', temp: 15, humidity: 65, rain: 10 },
  { day: 'Mié', temp: 16, humidity: 70, rain: 40 },
  { day: 'Jue', temp: 13, humidity: 75, rain: 60 },
  { day: 'Vie', temp: 14, humidity: 72, rain: 30 },
  { day: 'Sáb', temp: 15, humidity: 68, rain: 15 },
  { day: 'Dom', temp: 16, humidity: 66, rain: 5 }
]

export function CultivationModule() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPlot, setSelectedPlot] = useState<typeof cultivationPlots[0] | null>(null)
  const [filterStatus, setFilterStatus] = useState('all')

  const filteredPlots = cultivationPlots.filter(plot => {
    const matchesSearch = plot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plot.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || plot.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const totalArea = cultivationPlots.reduce((sum, p) => sum + p.area, 0)
  const avgHealthScore = Math.round(cultivationPlots.reduce((sum, p) => sum + p.healthScore, 0) / cultivationPlots.length)
  const totalExpectedYield = cultivationPlots.reduce((sum, p) => sum + p.expectedYield, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-lg"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200&h=300&fit=crop"
          alt="Cultivo de papas"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-emerald-800/90 flex items-center justify-between p-6">
          <div className="text-white">
            <h2 className="text-xl">Módulo de Cultivo</h2>
            <p className="text-sm opacity-90">Gestión integral de parcelas y actividades agrícolas</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">
                <Plus className="w-4 h-4 mr-2" />
                Nueva Parcela
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>Registrar Nueva Parcela de Cultivo</DialogTitle>
                <DialogDescription>Complete la información de la parcela</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Nombre de Parcela</Label>
                  <Input placeholder="Ej: Parcela Valle Alto A" />
                </div>
                <div>
                  <Label>Área (hectáreas)</Label>
                  <Input type="number" placeholder="2.5" />
                </div>
                <div>
                  <Label>Ubicación</Label>
                  <Input placeholder="Cochabamba, Valle Alto" />
                </div>
                <div>
                  <Label>Coordenadas GPS</Label>
                  <Input placeholder="-17.3935, -66.1570" />
                </div>
                <div>
                  <Label>Variedad de Papa</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="waycha">Papa Waycha</SelectItem>
                      <SelectItem value="imilla">Papa Imilla Negra</SelectItem>
                      <SelectItem value="runa">Papa Runa Toralapa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Productor</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PROD-001">Juan Mamani Condori</SelectItem>
                      <SelectItem value="PROD-002">María Quispe Choque</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Fecha de Siembra</Label>
                  <Input type="date" />
                </div>
                <div>
                  <Label>Cantidad de Semillas (kg)</Label>
                  <Input type="number" placeholder="850" />
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <Button variant="outline">Cancelar</Button>
                <Button>Registrar Parcela</Button>
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
        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              Parcelas Activas
              <Sprout className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{cultivationPlots.length}</div>
            <Progress value={75} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              Área Total
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{totalArea.toFixed(1)} ha</div>
            <Progress value={60} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-amber-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              Rendimiento Esp.
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{(totalExpectedYield / 1000).toFixed(1)} T</div>
            <Progress value={82} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-emerald-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              Salud Promedio
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{avgHealthScore}%</div>
            <Progress value={avgHealthScore} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              Actividades
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{cultivationActivities.length}</div>
            <Progress value={70} className="h-1 mt-2" />
          </CardContent>
        </Card>
      </motion.div>

      <Tabs defaultValue="plots" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="plots">Parcelas</TabsTrigger>
          <TabsTrigger value="activities">Actividades</TabsTrigger>
          <TabsTrigger value="soil">Análisis Suelo</TabsTrigger>
          <TabsTrigger value="weather">Clima</TabsTrigger>
          <TabsTrigger value="inputs">Insumos</TabsTrigger>
        </TabsList>

        <TabsContent value="plots" className="space-y-4">
          <div className="flex space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar parcela..."
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
                <SelectItem value="Óptimo">Óptimo</SelectItem>
                <SelectItem value="Requiere Atención">Requiere Atención</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPlots.map((plot, index) => (
              <motion.div
                key={plot.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedPlot(plot)}>
                  <CardHeader className={`border-l-4 ${plot.status === 'Óptimo' ? 'border-l-green-500' : 'border-l-amber-500'}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Leaf className="h-5 w-5 text-green-600" />
                        <CardTitle className="text-base">{plot.name}</CardTitle>
                      </div>
                      <Badge variant={plot.status === 'Óptimo' ? 'default' : 'secondary'}>
                        {plot.status}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center space-x-2 mt-1">
                      <MapPin className="h-3 w-3" />
                      <span>{plot.location}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-muted-foreground">Variedad</p>
                        <p className="font-medium">{plot.variety}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Área</p>
                        <p className="font-medium">{plot.area} ha</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Productor</p>
                        <p className="font-medium text-xs">{plot.farmer}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Etapa</p>
                        <p className="font-medium text-xs">{plot.currentStage}</p>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-muted-foreground">Progreso</span>
                        <span className="font-medium">{plot.progress}%</span>
                      </div>
                      <Progress value={plot.progress} className="h-2" />
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex items-center space-x-1 p-2 bg-blue-50 rounded">
                        <Thermometer className="h-4 w-4 text-blue-600" />
                        <div>
                          <p className="text-xs text-muted-foreground">Temp</p>
                          <p className="text-sm font-medium">{plot.temperature}°C</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 p-2 bg-cyan-50 rounded">
                        <Droplets className="h-4 w-4 text-cyan-600" />
                        <div>
                          <p className="text-xs text-muted-foreground">Hum</p>
                          <p className="text-sm font-medium">{plot.humidity}%</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 p-2 bg-green-50 rounded">
                        <Activity className="h-4 w-4 text-green-600" />
                        <div>
                          <p className="text-xs text-muted-foreground">Salud</p>
                          <p className="text-sm font-medium">{plot.healthScore}%</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t flex justify-between items-center">
                      <div className="text-xs text-muted-foreground">
                        Cosecha: {new Date(plot.estimatedHarvest).toLocaleDateString('es-ES')}
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="h-3 w-3 mr-1" />
                        Ver Detalles
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="activities" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Registro de Actividades Agrícolas</CardTitle>
              <CardDescription>Historial completo de actividades por parcela</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Parcela</TableHead>
                    <TableHead>Actividad</TableHead>
                    <TableHead>Descripción</TableHead>
                    <TableHead>Insumos</TableHead>
                    <TableHead>Costo (Bs)</TableHead>
                    <TableHead>Estado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cultivationActivities.map((activity) => (
                    <TableRow key={activity.id}>
                      <TableCell className="text-sm">
                        {new Date(activity.date).toLocaleDateString('es-ES')}
                      </TableCell>
                      <TableCell className="text-sm font-medium">{activity.plotName}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{activity.type}</Badge>
                      </TableCell>
                      <TableCell className="text-sm">{activity.description}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">
                        {activity.products.slice(0, 1).map((p, i) => (
                          <div key={i}>{p}</div>
                        ))}
                      </TableCell>
                      <TableCell className="font-medium">Bs {activity.cost}</TableCell>
                      <TableCell>
                        <Badge variant={
                          activity.status === 'Completado' ? 'default' :
                          activity.status === 'En Progreso' ? 'secondary' : 'outline'
                        }>
                          {activity.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="soil" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FlaskConical className="h-5 w-5" />
                  <span>Análisis de Suelo</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={soilAnalysisData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="parameter" />
                    <PolarRadiusAxis />
                    <Radar name="Actual" dataKey="actual" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                    <Radar name="Óptimo" dataKey="optimal" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Parámetros del Suelo - Parcela Valle Alto A</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {soilAnalysisData.map((param, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{param.parameter}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-muted-foreground">
                          Actual: {param.actual}{param.unit}
                        </span>
                        <span className="text-green-600">
                          Óptimo: {param.optimal}{param.unit}
                        </span>
                      </div>
                    </div>
                    <Progress 
                      value={(param.actual / param.optimal) * 100} 
                      className="h-2"
                    />
                  </div>
                ))}
                <div className="pt-4 border-t">
                  <Button className="w-full">
                    <FileText className="h-4 w-4 mr-2" />
                    Descargar Informe Completo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cultivationPlots.map((plot) => (
              <Card key={plot.id}>
                <CardHeader>
                  <CardTitle className="text-sm">{plot.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 bg-blue-50 rounded">
                      <p className="text-muted-foreground">pH</p>
                      <p className="font-medium">{plot.soilPh}</p>
                    </div>
                    <div className="p-2 bg-green-50 rounded">
                      <p className="text-muted-foreground">M.O.</p>
                      <p className="font-medium">{plot.organicMatter}%</p>
                    </div>
                    <div className="p-2 bg-purple-50 rounded">
                      <p className="text-muted-foreground">N (ppm)</p>
                      <p className="font-medium">{plot.nitrogen}</p>
                    </div>
                    <div className="p-2 bg-amber-50 rounded">
                      <p className="text-muted-foreground">P (ppm)</p>
                      <p className="font-medium">{plot.phosphorus}</p>
                    </div>
                    <div className="p-2 bg-red-50 rounded col-span-2">
                      <p className="text-muted-foreground">K (ppm)</p>
                      <p className="font-medium">{plot.potassium}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="weather" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Cloud className="h-5 w-5" />
                  <span>Pronóstico Semanal</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={weatherForecast}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="temp" stroke="#ef4444" name="Temperatura (°C)" strokeWidth={2} />
                    <Line yAxisId="right" type="monotone" dataKey="humidity" stroke="#3b82f6" name="Humedad (%)" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Probabilidad de Precipitación</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={weatherForecast}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="rain" fill="#22c55e" name="Prob. Lluvia (%)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {weatherForecast.map((day, index) => (
              <Card key={index} className="text-center">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">{day.day}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Sun className="h-8 w-8 mx-auto text-amber-500" />
                  <p className="text-2xl">{day.temp}°C</p>
                  <div className="text-xs space-y-1">
                    <div className="flex items-center justify-center space-x-1">
                      <Droplets className="h-3 w-3 text-blue-600" />
                      <span>{day.humidity}%</span>
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                      <Cloud className="h-3 w-3 text-gray-600" />
                      <span>{day.rain}% lluvia</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="inputs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Control de Insumos Agrícolas</CardTitle>
              <CardDescription>Inventario y costos de insumos por actividad</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'Humus de Lombriz Andino', quantity: '450 kg', cost: 3600, category: 'Fertilizante', supplier: 'Agro Andino SRL', lastPurchase: '2024-01-15' },
                  { name: 'Extracto de Neem Orgánico', quantity: '15 L', cost: 2550, category: 'Control Plagas', supplier: 'Bio Productos Bolivia', lastPurchase: '2024-01-10' },
                  { name: 'Bacillus thuringiensis', quantity: '8 kg', cost: 3400, category: 'Control Plagas', supplier: 'Agro Andino SRL', lastPurchase: '2024-01-18' },
                  { name: 'Compost Orgánico', quantity: '600 kg', cost: 3000, category: 'Fertilizante', supplier: 'Compost Valle SA', lastPurchase: '2024-01-20' },
                  { name: 'Semilla Certificada Papa Waycha', quantity: '1260 kg', cost: 12600, category: 'Semilla', supplier: 'SENASAG Certificado', lastPurchase: '2023-12-28' }
                ].map((input, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <Package className="h-5 w-5 text-green-700" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium">{input.name}</h4>
                        <p className="text-xs text-muted-foreground">
                          {input.category} • {input.supplier}
                        </p>
                      </div>
                    </div>
                    <div className="text-right space-y-1 mr-4">
                      <p className="text-sm font-medium">{input.quantity}</p>
                      <p className="text-xs text-muted-foreground">
                        Última compra: {new Date(input.lastPurchase).toLocaleDateString('es-ES')}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">Bs {input.cost.toLocaleString()}</p>
                      <Badge variant="outline" className="text-xs mt-1">{input.category}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Plot Details Dialog */}
      {selectedPlot && (
        <Dialog open={!!selectedPlot} onOpenChange={() => setSelectedPlot(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl">Detalles de Parcela - {selectedPlot.name}</DialogTitle>
              <DialogDescription>{selectedPlot.id}</DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              {/* Overview */}
              <div className="grid grid-cols-3 gap-4">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Target className="h-8 w-8 mx-auto text-green-600 mb-2" />
                    <p className="text-xs text-muted-foreground">Rendimiento Esperado</p>
                    <p className="text-xl">{(selectedPlot.expectedYield / 1000).toFixed(1)} T</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Activity className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                    <p className="text-xs text-muted-foreground">Salud de Cultivo</p>
                    <p className="text-xl">{selectedPlot.healthScore}%</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Calendar className="h-8 w-8 mx-auto text-purple-600 mb-2" />
                    <p className="text-xs text-muted-foreground">Días para Cosecha</p>
                    <p className="text-xl">
                      {Math.ceil((new Date(selectedPlot.estimatedHarvest).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Growth Stages */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Etapas de Crecimiento</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {growthStages.map((stage, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          stage.status === 'completed' ? 'bg-green-500 text-white' :
                          stage.status === 'current' ? 'bg-blue-500 text-white' :
                          'bg-gray-200 text-gray-500'
                        }`}>
                          {stage.status === 'completed' ? <CheckCircle className="h-5 w-5" /> :
                           stage.status === 'current' ? <Clock className="h-5 w-5" /> :
                           <div className="w-3 h-3 rounded-full bg-gray-400" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{stage.stage}</p>
                          <p className="text-xs text-muted-foreground">{stage.duration}</p>
                        </div>
                        <Badge variant={
                          stage.status === 'completed' ? 'default' :
                          stage.status === 'current' ? 'secondary' : 'outline'
                        }>
                          {stage.status === 'completed' ? 'Completado' :
                           stage.status === 'current' ? 'En Curso' : 'Pendiente'}
                        </Badge>
                      </div>
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
