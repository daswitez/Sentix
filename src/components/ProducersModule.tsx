import { useState } from 'react'
import { motion } from 'motion/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Progress } from './ui/progress'
import { 
  Calendar, MapPin, Phone, Mail, Users, TrendingUp, AlertTriangle, CheckCircle, 
  Plus, Search, Filter, Award, DollarSign, Activity, BarChart3, FileText,
  Sprout, Droplets, Thermometer, MapPinned, Building2, CreditCard, Package,
  Eye, Download, Clock, ChevronRight, TrendingDown
} from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts'

const producers = [
  {
    id: 'PROD-001',
    name: 'Juan Mamani Condori',
    rut: '2345678-7',
    community: 'Ayllu Qhapaq Anka',
    municipality: 'Colomi, Cochabamba',
    region: 'Valle Alto',
    phone: '+591 4 442 1234',
    email: 'juan.mamani@gmail.com',
    registrationDate: '2020-03-15',
    status: 'Activo',
    certification: 'Orgánico',
    farmSize: '15 hectáreas',
    varieties: ['Papa Waycha', 'Papa Runa', 'Papa Imilla'],
    totalProduction2024: 45000,
    averageQuality: 95,
    cooperativeId: 'COOP-001',
    bankAccount: 'Banco Unión - 1234567890',
    contracts: 12,
    lastHarvest: '2024-01-15',
    nextPlanting: '2024-09-15',
    coordinates: '-17.3935, -66.1570',
    revenue2024: 382500,
    certifications: ['Orgánico SENASAG', 'BPA', 'Comercio Justo'],
    historicalYield: [
      { year: 2020, production: 32000, revenue: 256000 },
      { year: 2021, production: 38000, revenue: 304000 },
      { year: 2022, production: 41000, revenue: 328000 },
      { year: 2023, production: 43000, revenue: 344000 },
      { year: 2024, production: 45000, revenue: 382500 }
    ]
  },
  {
    id: 'PROD-002',
    name: 'María Quispe Choque',
    rut: '3456789-8',
    community: 'Comunidad Warisata',
    municipality: 'Achacachi, La Paz',
    region: 'Altiplano Norte',
    phone: '+591 2 289 5678',
    email: 'maria.quispe@hotmail.com',
    registrationDate: '2019-08-22',
    status: 'Activo',
    certification: 'Tradicional',
    farmSize: '8 hectáreas',
    varieties: ['Papa Imilla Negra', 'Papa Phureja', 'Papa Qoyllu'],
    totalProduction2024: 28000,
    averageQuality: 88,
    cooperativeId: 'COOP-002',
    bankAccount: 'Banco Sol - 9876543210',
    contracts: 8,
    lastHarvest: '2024-01-12',
    nextPlanting: '2024-10-01',
    coordinates: '-15.7439, -69.2094',
    revenue2024: 257600,
    certifications: ['BPA', 'Denominación de Origen'],
    historicalYield: [
      { year: 2020, production: 22000, revenue: 176000 },
      { year: 2021, production: 24000, revenue: 192000 },
      { year: 2022, production: 25000, revenue: 200000 },
      { year: 2023, production: 26000, revenue: 224000 },
      { year: 2024, production: 28000, revenue: 257600 }
    ]
  },
  {
    id: 'PROD-003',
    name: 'Carlos Huanca Ticona',
    rut: '4567890-9',
    community: 'Ayllu Collana',
    municipality: 'Uyuni, Potosí',
    region: 'Altiplano Sur',
    phone: '+591 2 693 2345',
    email: 'carlos.huanca@yahoo.com',
    registrationDate: '2021-05-10',
    status: 'Activo',
    certification: 'Orgánico Premium',
    farmSize: '22 hectáreas',
    varieties: ['Papa Toralapa', 'Papa Sani', "Papa Wayk'ana"],
    totalProduction2024: 67000,
    averageQuality: 97,
    cooperativeId: 'COOP-003',
    bankAccount: 'Banco Mercantil - 5555666677',
    contracts: 15,
    lastHarvest: '2024-01-10',
    nextPlanting: '2024-08-30',
    coordinates: '-20.4597, -66.8249',
    revenue2024: 737000,
    certifications: ['Orgánico Premium SENASAG', 'ECOCERT', 'Denominación de Origen', 'Comercio Justo'],
    historicalYield: [
      { year: 2021, production: 45000, revenue: 450000 },
      { year: 2022, production: 52000, revenue: 520000 },
      { year: 2023, production: 61000, revenue: 640000 },
      { year: 2024, production: 67000, revenue: 737000 }
    ]
  },
  {
    id: 'PROD-004',
    name: 'Rosa Flores Apaza',
    rut: '5678901-0',
    community: 'Ayllu Pacajes',
    municipality: 'Coro Coro, La Paz',
    region: 'Altiplano Norte',
    phone: '+591 2 251 8899',
    email: 'rosa.flores@gmail.com',
    registrationDate: '2018-11-05',
    status: 'Activo',
    certification: 'Orgánico',
    farmSize: '12 hectáreas',
    varieties: ['Papa Waycha', 'Papa Chiar Imilla', 'Papa Pali'],
    totalProduction2024: 36000,
    averageQuality: 92,
    cooperativeId: 'COOP-002',
    bankAccount: 'Banco FIE - 1122334455',
    contracts: 10,
    lastHarvest: '2024-01-18',
    nextPlanting: '2024-09-20',
    coordinates: '-17.1797, -68.4321',
    revenue2024: 324000,
    certifications: ['Orgánico SENASAG', 'BPA'],
    historicalYield: [
      { year: 2020, production: 28000, revenue: 224000 },
      { year: 2021, production: 31000, revenue: 248000 },
      { year: 2022, production: 33000, revenue: 280000 },
      { year: 2023, production: 35000, revenue: 301000 },
      { year: 2024, production: 36000, revenue: 324000 }
    ]
  },
  {
    id: 'PROD-005',
    name: 'Pedro Yujra Mamani',
    rut: '6789012-1',
    community: 'Comunidad Sipe Sipe',
    municipality: 'Sipe Sipe, Cochabamba',
    region: 'Valle Alto',
    phone: '+591 4 428 7766',
    email: 'pedro.yujra@yahoo.com',
    registrationDate: '2022-02-14',
    status: 'Activo',
    certification: 'Tradicional',
    farmSize: '10 hectáreas',
    varieties: ['Papa Runa Toralapa', 'Papa Waycha'],
    totalProduction2024: 31000,
    averageQuality: 85,
    cooperativeId: 'COOP-001',
    bankAccount: 'Banco Unión - 9988776655',
    contracts: 6,
    lastHarvest: '2024-01-20',
    nextPlanting: '2024-09-10',
    coordinates: '-17.4421, -66.3558',
    revenue2024: 248000,
    certifications: ['BPA'],
    historicalYield: [
      { year: 2022, production: 25000, revenue: 200000 },
      { year: 2023, production: 28000, revenue: 224000 },
      { year: 2024, production: 31000, revenue: 248000 }
    ]
  }
]

const cooperatives = [
  {
    id: 'COOP-001',
    name: 'Cooperativa Agropecuaria Valle Alto',
    president: 'Roberto Vargas Luna',
    members: 145,
    region: 'Cochabamba',
    phone: '+591 4 425 8888',
    email: 'info@coopvallealto.bo',
    certifications: ['Orgánico', 'Comercio Justo', 'BPA'],
    totalProduction: '2,500 toneladas/año',
    foundedYear: 2015,
    address: 'Av. Heroínas 234, Cochabamba',
    website: 'www.coopvallealto.bo',
    activeContracts: 42,
    totalRevenue: 1850000,
    averageQuality: 93
  },
  {
    id: 'COOP-002',
    name: 'Asociación de Productores del Altiplano',
    president: 'Elena Mamani Quispe',
    members: 98,
    region: 'La Paz',
    phone: '+591 2 245 7777',
    email: 'contacto@asoaltiplano.bo',
    certifications: ['Tradicional', 'BPA', 'Denominación de Origen'],
    totalProduction: '1,800 toneladas/año',
    foundedYear: 2012,
    address: 'Calle Sagárnaga 156, La Paz',
    website: 'www.asoaltiplano.bo',
    activeContracts: 35,
    totalRevenue: 1620000,
    averageQuality: 90
  },
  {
    id: 'COOP-003',
    name: 'Cooperativa Papa Nativa Potosí',
    president: 'Miguel Condori Vargas',
    members: 87,
    region: 'Potosí',
    phone: '+591 2 622 9999',
    email: 'gerencia@papanativa.bo',
    certifications: ['Orgánico Premium', 'Denominación de Origen', 'ECOCERT'],
    totalProduction: '3,200 toneladas/año',
    foundedYear: 2010,
    address: 'Plaza 10 de Noviembre, Potosí',
    website: 'www.papanativa.bo',
    activeContracts: 58,
    totalRevenue: 2880000,
    averageQuality: 96
  }
]

const productionByMonth = [
  { month: 'Ene', production: 420, quality: 94 },
  { month: 'Feb', production: 380, quality: 92 },
  { month: 'Mar', production: 280, quality: 90 },
  { month: 'Abr', production: 50, quality: 88 },
  { month: 'May', production: 0, quality: 0 },
  { month: 'Jun', production: 0, quality: 0 },
  { month: 'Jul', production: 0, quality: 0 },
  { month: 'Ago', production: 45, quality: 87 },
  { month: 'Sep', production: 0, quality: 0 },
  { month: 'Oct', production: 0, quality: 0 },
  { month: 'Nov', production: 0, quality: 0 },
  { month: 'Dic', production: 120, quality: 91 }
]

export function ProducersModule() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterRegion, setFilterRegion] = useState('all')
  const [selectedProducer, setSelectedProducer] = useState<typeof producers[0] | null>(null)

  const filteredProducers = producers.filter(producer => {
    const matchesSearch = producer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         producer.community.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRegion = filterRegion === 'all' || producer.region === filterRegion
    return matchesSearch && matchesRegion
  })

  const totalProduction = producers.reduce((sum, p) => sum + p.totalProduction2024, 0)
  const totalRevenue = producers.reduce((sum, p) => sum + p.revenue2024, 0)
  const averageQuality = Math.round(producers.reduce((sum, p) => sum + p.averageQuality, 0) / producers.length)

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-green-600 to-emerald-700 p-6 rounded-lg text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl">Módulo de Productores</h2>
            <p className="text-sm opacity-90">Gestión integral de productores de papas bolivianas</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">
                <Plus className="w-4 h-4 mr-2" />
                Nuevo Productor
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Registrar Nuevo Productor</DialogTitle>
                <DialogDescription>
                  Complete la información del productor para registrarlo en el sistema
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input id="name" placeholder="Ej: Juan Mamani Condori" />
                </div>
                <div>
                  <Label htmlFor="rut">RUT/CI</Label>
                  <Input id="rut" placeholder="1234567-8" />
                </div>
                <div>
                  <Label htmlFor="community">Comunidad</Label>
                  <Input id="community" placeholder="Ej: Ayllu Qhapaq Anka" />
                </div>
                <div>
                  <Label htmlFor="municipality">Municipio</Label>
                  <Input id="municipality" placeholder="Ej: Colomi, Cochabamba" />
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" placeholder="+591 4 442 1234" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="productor@email.com" />
                </div>
                <div>
                  <Label htmlFor="farmSize">Tamaño de Finca (hectáreas)</Label>
                  <Input id="farmSize" placeholder="15" type="number" />
                </div>
                <div>
                  <Label htmlFor="certification">Certificación</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="organic">Orgánico</SelectItem>
                      <SelectItem value="traditional">Tradicional</SelectItem>
                      <SelectItem value="premium">Orgánico Premium</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-2">
                  <Label htmlFor="varieties">Variedades de Papa</Label>
                  <Textarea id="varieties" placeholder="Papa Waycha, Papa Runa, Papa Imilla..." />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="coordinates">Coordenadas GPS</Label>
                  <Input id="coordinates" placeholder="-17.3935, -66.1570" />
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <Button variant="outline">Cancelar</Button>
                <Button>Registrar Productor</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
      >
        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total Productores</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{producers.length}</div>
            <p className="text-xs text-muted-foreground">+12 este mes</p>
            <Progress value={85} className="h-1 mt-2" />
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Cooperativas</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{cooperatives.length}</div>
            <p className="text-xs text-muted-foreground">{cooperatives.reduce((s, c) => s + c.members, 0)} miembros totales</p>
            <Progress value={60} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Producción Total</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{(totalProduction / 1000).toFixed(1)} T</div>
            <p className="text-xs text-muted-foreground">Este año 2024</p>
            <Progress value={78} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-amber-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Ingresos Totales</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">Bs {(totalRevenue / 1000).toFixed(0)}K</div>
            <p className="text-xs text-muted-foreground">+15% vs 2023</p>
            <Progress value={92} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-emerald-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Calidad Promedio</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{averageQuality}%</div>
            <p className="text-xs text-muted-foreground">Certificaciones activas</p>
            <Progress value={averageQuality} className="h-1 mt-2" />
          </CardContent>
        </Card>
      </motion.div>

      <Tabs defaultValue="producers" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="producers">Productores</TabsTrigger>
          <TabsTrigger value="cooperatives">Cooperativas</TabsTrigger>
          <TabsTrigger value="analytics">Análisis</TabsTrigger>
          <TabsTrigger value="certifications">Certificaciones</TabsTrigger>
          <TabsTrigger value="map">Mapa</TabsTrigger>
        </TabsList>

        <TabsContent value="producers" className="space-y-4">
          {/* Filters */}
          <div className="flex space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar productor o comunidad..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterRegion} onValueChange={setFilterRegion}>
              <SelectTrigger className="w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las Regiones</SelectItem>
                <SelectItem value="Valle Alto">Valle Alto</SelectItem>
                <SelectItem value="Altiplano Norte">Altiplano Norte</SelectItem>
                <SelectItem value="Altiplano Sur">Altiplano Sur</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Producers Table */}
          <Card>
            <CardHeader>
              <CardTitle>Lista de Productores</CardTitle>
              <CardDescription>
                Gestión completa de productores registrados en el sistema
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Productor</TableHead>
                    <TableHead>Comunidad/Región</TableHead>
                    <TableHead>Variedades</TableHead>
                    <TableHead>Producción 2024</TableHead>
                    <TableHead>Ingresos</TableHead>
                    <TableHead>Calidad</TableHead>
                    <TableHead>Certificación</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducers.map((producer) => (
                    <TableRow key={producer.id} className="cursor-pointer hover:bg-gray-50">
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback>{producer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{producer.name}</div>
                            <div className="text-xs text-muted-foreground">{producer.id}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium text-sm">{producer.community}</div>
                          <div className="text-xs text-muted-foreground">{producer.region}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {producer.varieties.slice(0, 2).map((variety, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {variety}
                            </Badge>
                          ))}
                          {producer.varieties.length > 2 && (
                            <Badge variant="secondary" className="text-xs">
                              +{producer.varieties.length - 2}
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{(producer.totalProduction2024 / 1000).toFixed(1)} T</div>
                          <div className="text-xs text-muted-foreground">{producer.farmSize}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">Bs {(producer.revenue2024 / 1000).toFixed(0)}K</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Progress value={producer.averageQuality} className="h-2 w-16" />
                          <span className="text-sm">{producer.averageQuality}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={producer.certification === 'Orgánico Premium' ? 'default' : 'secondary'}
                        >
                          {producer.certification}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSelectedProducer(producer)}
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          Ver
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cooperatives" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {cooperatives.map((coop) => (
              <motion.div
                key={coop.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-base">{coop.name}</span>
                      <Badge variant="default">{coop.members} miembros</Badge>
                    </CardTitle>
                    <CardDescription>
                      Presidente: {coop.president}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-4">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        <div>
                          <p className="text-xs text-muted-foreground">Región</p>
                          <p className="font-medium">{coop.region}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-green-600" />
                        <div>
                          <p className="text-xs text-muted-foreground">Fundada</p>
                          <p className="font-medium">{coop.foundedYear}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4 text-purple-600" />
                        <div>
                          <p className="text-xs text-muted-foreground">Contratos</p>
                          <p className="font-medium">{coop.activeContracts}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-amber-600" />
                        <div>
                          <p className="text-xs text-muted-foreground">Ingresos</p>
                          <p className="font-medium">Bs {(coop.totalRevenue / 1000).toFixed(0)}K</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t">
                      <p className="text-xs text-muted-foreground mb-2">Certificaciones:</p>
                      <div className="flex flex-wrap gap-1">
                        {coop.certifications.map((cert, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Producción Anual:</span>
                        <span className="font-medium">{coop.totalProduction}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-2">
                        <span className="text-muted-foreground">Calidad Promedio:</span>
                        <span className="font-medium flex items-center">
                          {coop.averageQuality}%
                          <Award className="h-3 w-3 ml-1 text-amber-500" />
                        </span>
                      </div>
                    </div>

                    <div className="pt-3 space-y-2">
                      <Button className="w-full" variant="outline" size="sm">
                        <Users className="h-3 w-3 mr-2" />
                        Ver Miembros
                      </Button>
                      <Button className="w-full" size="sm">
                        <ChevronRight className="h-3 w-3 mr-2" />
                        Ver Detalles
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Producción mensual */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5" />
                  <span>Producción Mensual 2024</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={productionByMonth}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="production" fill="#10b981" name="Producción (Ton)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Tendencia histórica */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Tendencia Histórica</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={producers[0].historicalYield}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="production" stroke="#3b82f6" name="Producción (kg)" strokeWidth={2} />
                    <Line type="monotone" dataKey="revenue" stroke="#10b981" name="Ingresos (Bs)" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Distribución por región */}
            <Card>
              <CardHeader>
                <CardTitle>Distribución por Región</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Valle Alto', value: 2, color: '#10b981' },
                        { name: 'Altiplano Norte', value: 2, color: '#3b82f6' },
                        { name: 'Altiplano Sur', value: 1, color: '#f59e0b' }
                      ]}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label={(entry) => `${entry.name}: ${entry.value}`}
                    >
                      {[
                        { name: 'Valle Alto', value: 2, color: '#10b981' },
                        { name: 'Altiplano Norte', value: 2, color: '#3b82f6' },
                        { name: 'Altiplano Sur', value: 1, color: '#f59e0b' }
                      ].map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Top productores */}
            <Card>
              <CardHeader>
                <CardTitle>Top 5 Productores por Ingresos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {producers
                    .sort((a, b) => b.revenue2024 - a.revenue2024)
                    .slice(0, 5)
                    .map((producer, index) => (
                      <div key={producer.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                            index === 0 ? 'bg-amber-500 text-white' :
                            index === 1 ? 'bg-gray-400 text-white' :
                            index === 2 ? 'bg-orange-600 text-white' :
                            'bg-gray-200 text-gray-700'
                          }`}>
                            #{index + 1}
                          </div>
                          <div>
                            <p className="text-sm font-medium">{producer.name}</p>
                            <p className="text-xs text-muted-foreground">{producer.region}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">Bs {(producer.revenue2024 / 1000).toFixed(0)}K</p>
                          <p className="text-xs text-muted-foreground">{(producer.totalProduction2024 / 1000).toFixed(1)}T</p>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="certifications" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {producers.map((producer) => (
              <Card key={producer.id}>
                <CardHeader>
                  <CardTitle className="text-base flex items-center justify-between">
                    <span>{producer.name}</span>
                    <Badge>{producer.certifications.length} certificados</Badge>
                  </CardTitle>
                  <CardDescription>{producer.community}, {producer.region}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {producer.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium">{cert}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="map" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPinned className="h-5 w-5" />
                <span>Mapa de Productores por Región</span>
              </CardTitle>
              <CardDescription>Distribución geográfica de productores en Bolivia</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-8 border-2 border-dashed border-blue-200">
                <div className="text-center space-y-4">
                  <MapPinned className="h-16 w-16 mx-auto text-blue-600" />
                  <h3 className="text-lg">Mapa Interactivo de Productores</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    Visualización geográfica de todos los productores registrados con sus coordenadas GPS en las regiones de Bolivia
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                    {producers.map((producer) => (
                      <div key={producer.id} className="p-4 bg-white rounded-lg border">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-red-600 mt-1" />
                          <div className="text-left">
                            <p className="text-sm font-medium">{producer.name}</p>
                            <p className="text-xs text-muted-foreground">{producer.region}</p>
                            <p className="text-xs text-blue-600 mt-1">{producer.coordinates}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Producer Details Dialog */}
      {selectedProducer && (
        <Dialog open={!!selectedProducer} onOpenChange={() => setSelectedProducer(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl">Perfil Completo del Productor</DialogTitle>
              <DialogDescription>{selectedProducer.id}</DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6">
              {/* Header Info */}
              <div className="flex items-start justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="text-lg">
                      {selectedProducer.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg">{selectedProducer.name}</h3>
                    <p className="text-sm text-muted-foreground">{selectedProducer.community}</p>
                    <Badge variant="default" className="mt-2">{selectedProducer.certification}</Badge>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Calidad Promedio</p>
                  <p className="text-2xl text-green-600">{selectedProducer.averageQuality}%</p>
                </div>
              </div>

              {/* Contact & Location */}
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Información de Contacto</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedProducer.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedProducer.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedProducer.municipality}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CreditCard className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedProducer.bankAccount}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Estadísticas de Producción</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tamaño de Finca:</span>
                      <span className="font-medium">{selectedProducer.farmSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Producción 2024:</span>
                      <span className="font-medium">{(selectedProducer.totalProduction2024/1000).toFixed(1)} T</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Ingresos 2024:</span>
                      <span className="font-medium">Bs {(selectedProducer.revenue2024/1000).toFixed(0)}K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Contratos:</span>
                      <span className="font-medium">{selectedProducer.contracts}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Variedades */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Variedades Cultivadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {selectedProducer.varieties.map((variety, index) => (
                      <Badge key={index} variant="outline" className="px-3 py-1">
                        <Sprout className="h-3 w-3 mr-1" />
                        {variety}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Historical Performance */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Desempeño Histórico</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={selectedProducer.historicalYield}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Line yAxisId="left" type="monotone" dataKey="production" stroke="#10b981" name="Producción (kg)" strokeWidth={2} />
                      <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#3b82f6" name="Ingresos (Bs)" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Certificaciones Activas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {selectedProducer.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-medium">{cert}</span>
                        </div>
                        <Badge variant="outline">Activo</Badge>
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
