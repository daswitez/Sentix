import { useState } from 'react'
import { motion } from 'motion/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Badge } from './ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Progress } from './ui/progress'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { 
  Plus, Search, Filter, Sprout, Thermometer, Droplets, Bug, Leaf, Calendar, MapPin, User,
  Award, Package, TrendingUp, AlertTriangle, CheckCircle, Eye, Download, FileText,
  ClipboardCheck, Scale, Microscope, ShieldCheck, Truck, BarChart3, Target
} from 'lucide-react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts'

const harvestBatches = [
  {
    id: 'LOT-24-H001',
    plotId: 'PLOT-24-C001',
    plotName: 'Parcela Valle Alto A',
    variety: 'Papa Waycha',
    farmer: 'Juan Mamani Condori',
    farmerId: 'PROD-001',
    harvestDate: '2024-01-15',
    quantity: 32000,
    qualityScore: 95,
    certification: 'Orgánico SENASAG',
    status: 'Almacenado',
    location: 'Almacén Cochabamba',
    temperature: 8,
    humidity: 85,
    classification: {
      primera: 24000,
      segunda: 6500,
      descarte: 1500
    },
    analysis: {
      moisture: 78,
      starch: 16.5,
      sugarContent: 0.3,
      defects: 2.1,
      pesticideResidue: 0,
      microbiological: 'Apto'
    },
    inspections: [
      {
        id: 'INS-001',
        date: '2024-01-15',
        inspector: 'Ing. Roberto Flores - SENASAG',
        type: 'Calidad Visual',
        result: 'Aprobado',
        score: 95
      },
      {
        id: 'INS-002',
        date: '2024-01-15',
        inspector: 'Técnico INLASA',
        type: 'Análisis Microbiológico',
        result: 'Apto',
        score: 98
      }
    ],
    certificates: ['CERT-SENASAG-001', 'CERT-ORG-001', 'CERT-BPA-001']
  },
  {
    id: 'LOT-24-H002',
    plotId: 'PLOT-24-C002',
    plotName: 'Parcela Altiplano Norte B',
    variety: 'Papa Imilla Negra',
    farmer: 'María Quispe Choque',
    farmerId: 'PROD-002',
    harvestDate: '2024-01-12',
    quantity: 28000,
    qualityScore: 88,
    certification: 'BPA',
    status: 'En Tránsito',
    location: 'Ruta La Paz - Oruro',
    temperature: 7,
    humidity: 82,
    classification: {
      primera: 19600,
      segunda: 6800,
      descarte: 1600
    },
    analysis: {
      moisture: 76,
      starch: 15.8,
      sugarContent: 0.4,
      defects: 4.5,
      pesticideResidue: 0,
      microbiological: 'Apto'
    },
    inspections: [
      {
        id: 'INS-003',
        date: '2024-01-12',
        inspector: 'Ing. Carmen Ticona - SENASAG',
        type: 'Calidad Visual',
        result: 'Aprobado',
        score: 88
      },
      {
        id: 'INS-004',
        date: '2024-01-12',
        inspector: 'Lab. INLASA La Paz',
        type: 'Análisis Físico-Químico',
        result: 'Apto',
        score: 90
      }
    ],
    certificates: ['CERT-SENASAG-002', 'CERT-BPA-002']
  },
  {
    id: 'LOT-24-H003',
    plotId: 'PLOT-24-C003',
    plotName: 'Parcela Uyuni C',
    variety: 'Papa Runa Toralapa',
    farmer: 'Carlos Huanca Ticona',
    farmerId: 'PROD-003',
    harvestDate: '2024-01-10',
    quantity: 22000,
    qualityScore: 97,
    certification: 'Orgánico Premium SENASAG',
    status: 'En Procesamiento',
    location: 'Planta Industrial Potosí',
    temperature: 9,
    humidity: 80,
    classification: {
      primera: 18700,
      segunda: 2900,
      descarte: 400
    },
    analysis: {
      moisture: 79,
      starch: 17.2,
      sugarContent: 0.2,
      defects: 0.8,
      pesticideResidue: 0,
      microbiological: 'Apto'
    },
    inspections: [
      {
        id: 'INS-005',
        date: '2024-01-10',
        inspector: 'Ing. Miguel Vargas - SENASAG',
        type: 'Calidad Premium',
        result: 'Excelente',
        score: 97
      },
      {
        id: 'INS-006',
        date: '2024-01-10',
        inspector: 'ECOCERT Bolivia',
        type: 'Certificación Orgánica',
        result: 'Certificado',
        score: 100
      },
      {
        id: 'INS-007',
        date: '2024-01-10',
        inspector: 'INLASA Potosí',
        type: 'Análisis Completo',
        result: 'Apto',
        score: 96
      }
    ],
    certificates: ['CERT-SENASAG-003', 'CERT-ECOCERT-001', 'CERT-PREMIUM-001']
  },
  {
    id: 'LOT-24-H004',
    plotId: 'PLOT-24-C004',
    plotName: 'Parcela Sipe Sipe D',
    variety: 'Papa Waycha',
    farmer: 'Pedro Yujra Mamani',
    farmerId: 'PROD-005',
    harvestDate: '2024-01-20',
    quantity: 15000,
    qualityScore: 85,
    certification: 'BPA',
    status: 'Almacenado',
    location: 'Almacén Cochabamba',
    temperature: 8,
    humidity: 84,
    classification: {
      primera: 10500,
      segunda: 3600,
      descarte: 900
    },
    analysis: {
      moisture: 77,
      starch: 15.5,
      sugarContent: 0.5,
      defects: 5.2,
      pesticideResidue: 0,
      microbiological: 'Apto'
    },
    inspections: [
      {
        id: 'INS-008',
        date: '2024-01-20',
        inspector: 'Ing. Patricia Rojas - SENASAG',
        type: 'Calidad Visual',
        result: 'Aprobado',
        score: 85
      }
    ],
    certificates: ['CERT-SENASAG-004', 'CERT-BPA-003']
  }
]

const qualityStandards = [
  { category: 'Primera', minSize: '45mm', maxDefects: '3%', color: '#10b981' },
  { category: 'Segunda', minSize: '35mm', maxDefects: '8%', color: '#f59e0b' },
  { category: 'Descarte', minSize: '<35mm', maxDefects: '>8%', color: '#ef4444' }
]

const monthlyHarvestData = [
  { month: 'Ene', quantity: 97, quality: 92 },
  { month: 'Feb', quantity: 85, quality: 89 },
  { month: 'Mar', quantity: 72, quality: 91 },
  { month: 'Abr', quantity: 35, quality: 88 },
  { month: 'May', quantity: 12, quality: 90 }
]

export function HarvestModule() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBatch, setSelectedBatch] = useState<typeof harvestBatches[0] | null>(null)
  const [filterStatus, setFilterStatus] = useState('all')

  const filteredBatches = harvestBatches.filter(batch => {
    const matchesSearch = batch.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         batch.variety.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || batch.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const totalHarvested = harvestBatches.reduce((sum, b) => sum + b.quantity, 0)
  const avgQuality = Math.round(harvestBatches.reduce((sum, b) => sum + b.qualityScore, 0) / harvestBatches.length)
  const totalPrimera = harvestBatches.reduce((sum, b) => sum + b.classification.primera, 0)

  const classificationData = [
    { name: 'Primera', value: totalPrimera, color: '#10b981' },
    { name: 'Segunda', value: harvestBatches.reduce((sum, b) => sum + b.classification.segunda, 0), color: '#f59e0b' },
    { name: 'Descarte', value: harvestBatches.reduce((sum, b) => sum + b.classification.descarte, 0), color: '#ef4444' }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-lg"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1592921870789-04563d55041c?w=1200&h=300&fit=crop"
          alt="Cosecha de papas"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-orange-800/90 flex items-center justify-between p-6">
          <div className="text-white">
            <h2 className="text-xl">Módulo de Cosecha</h2>
            <p className="text-sm opacity-90">Control de calidad y certificación de lotes cosechados</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">
                <Plus className="w-4 h-4 mr-2" />
                Registrar Cosecha
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>Registrar Nueva Cosecha</DialogTitle>
                <DialogDescription>Complete la información del lote cosechado</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Parcela de Origen</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PLOT-24-C001">Parcela Valle Alto A</SelectItem>
                      <SelectItem value="PLOT-24-C002">Parcela Altiplano Norte B</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Fecha de Cosecha</Label>
                  <Input type="date" />
                </div>
                <div>
                  <Label>Cantidad Total (kg)</Label>
                  <Input type="number" placeholder="32000" />
                </div>
                <div>
                  <Label>Calidad Primera (kg)</Label>
                  <Input type="number" placeholder="24000" />
                </div>
                <div>
                  <Label>Calidad Segunda (kg)</Label>
                  <Input type="number" placeholder="6500" />
                </div>
                <div>
                  <Label>Descarte (kg)</Label>
                  <Input type="number" placeholder="1500" />
                </div>
                <div>
                  <Label>Inspector SENASAG</Label>
                  <Input placeholder="Ing. Roberto Flores" />
                </div>
                <div>
                  <Label>Tipo de Certificación</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="organic">Orgánico SENASAG</SelectItem>
                      <SelectItem value="bpa">BPA</SelectItem>
                      <SelectItem value="premium">Orgánico Premium</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <Button variant="outline">Cancelar</Button>
                <Button>Registrar Cosecha</Button>
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
        <Card className="border-l-4 border-l-amber-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              Total Cosechado
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{(totalHarvested / 1000).toFixed(1)} T</div>
            <Progress value={85} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              Calidad Primera
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{(totalPrimera / 1000).toFixed(1)} T</div>
            <Progress value={92} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              Lotes Activos
              <Sprout className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{harvestBatches.length}</div>
            <Progress value={70} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-emerald-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              Calidad Promedio
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{avgQuality}%</div>
            <Progress value={avgQuality} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              Certificados
              <ShieldCheck className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">
              {harvestBatches.reduce((sum, b) => sum + b.certificates.length, 0)}
            </div>
            <Progress value={88} className="h-1 mt-2" />
          </CardContent>
        </Card>
      </motion.div>

      <Tabs defaultValue="batches" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="batches">Lotes</TabsTrigger>
          <TabsTrigger value="quality">Control Calidad</TabsTrigger>
          <TabsTrigger value="certificates">Certificados</TabsTrigger>
          <TabsTrigger value="analysis">Análisis</TabsTrigger>
          <TabsTrigger value="inspections">Inspecciones</TabsTrigger>
        </TabsList>

        <TabsContent value="batches" className="space-y-4">
          <div className="flex space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar lote..."
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
                <SelectItem value="Almacenado">Almacenado</SelectItem>
                <SelectItem value="En Tránsito">En Tránsito</SelectItem>
                <SelectItem value="En Procesamiento">En Procesamiento</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredBatches.map((batch, index) => (
              <motion.div
                key={batch.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedBatch(batch)}>
                  <CardHeader className="border-l-4 border-l-amber-500">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Package className="h-5 w-5 text-amber-600" />
                        <CardTitle className="text-base">{batch.id}</CardTitle>
                      </div>
                      <Badge>{batch.status}</Badge>
                    </div>
                    <CardDescription>{batch.variety} - {batch.plotName}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-muted-foreground">Productor</p>
                        <p className="font-medium text-xs">{batch.farmer}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Fecha Cosecha</p>
                        <p className="font-medium">{new Date(batch.harvestDate).toLocaleDateString('es-ES')}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Cantidad Total</p>
                        <p className="font-medium">{(batch.quantity / 1000).toFixed(1)} T</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Certificación</p>
                        <Badge variant="outline" className="text-xs">{batch.certification}</Badge>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="text-muted-foreground">Calidad</span>
                        <span className="font-medium">{batch.qualityScore}%</span>
                      </div>
                      <Progress value={batch.qualityScore} className="h-2" />
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="p-2 bg-green-50 rounded text-center">
                        <p className="text-muted-foreground">Primera</p>
                        <p className="font-medium">{(batch.classification.primera / 1000).toFixed(1)}T</p>
                      </div>
                      <div className="p-2 bg-amber-50 rounded text-center">
                        <p className="text-muted-foreground">Segunda</p>
                        <p className="font-medium">{(batch.classification.segunda / 1000).toFixed(1)}T</p>
                      </div>
                      <div className="p-2 bg-red-50 rounded text-center">
                        <p className="text-muted-foreground">Descarte</p>
                        <p className="font-medium">{(batch.classification.descarte / 1000).toFixed(1)}T</p>
                      </div>
                    </div>

                    <div className="pt-3 border-t flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-3 w-3" />
                        <span className="text-muted-foreground">{batch.location}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="h-3 w-3 mr-1" />
                        Ver
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="quality" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5" />
                  <span>Distribución por Clasificación</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={classificationData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      dataKey="value"
                    >
                      {classificationData.map((entry, index) => (
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
                <CardTitle>Estándares de Calidad SENASAG</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {qualityStandards.map((standard, index) => (
                    <div key={index} className="p-4 border rounded-lg" style={{ borderLeftWidth: '4px', borderLeftColor: standard.color }}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{standard.category}</h4>
                        <Badge style={{ backgroundColor: standard.color, color: 'white' }}>
                          {standard.category}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="text-muted-foreground">Tamaño Mínimo</p>
                          <p className="font-medium">{standard.minSize}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Defectos Máx.</p>
                          <p className="font-medium">{standard.maxDefects}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Análisis de Calidad por Lote</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Lote</TableHead>
                    <TableHead>Humedad (%)</TableHead>
                    <TableHead>Almidón (%)</TableHead>
                    <TableHead>Azúcares (%)</TableHead>
                    <TableHead>Defectos (%)</TableHead>
                    <TableHead>Residuos</TableHead>
                    <TableHead>Microbiología</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {harvestBatches.map((batch) => (
                    <TableRow key={batch.id}>
                      <TableCell className="font-medium">{batch.id}</TableCell>
                      <TableCell>{batch.analysis.moisture}%</TableCell>
                      <TableCell>{batch.analysis.starch}%</TableCell>
                      <TableCell>{batch.analysis.sugarContent}%</TableCell>
                      <TableCell>{batch.analysis.defects}%</TableCell>
                      <TableCell>
                        <Badge variant={batch.analysis.pesticideResidue === 0 ? 'default' : 'destructive'}>
                          {batch.analysis.pesticideResidue === 0 ? 'No Detectado' : 'Detectado'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={batch.analysis.microbiological === 'Apto' ? 'default' : 'destructive'}>
                          {batch.analysis.microbiological}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="certificates" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {harvestBatches.map((batch) => (
              <Card key={batch.id}>
                <CardHeader>
                  <CardTitle className="text-base flex items-center justify-between">
                    <span>{batch.id}</span>
                    <Badge>{batch.certificates.length} certificados</Badge>
                  </CardTitle>
                  <CardDescription>{batch.variety} - {batch.farmer}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {batch.inspections.map((inspection, index) => (
                    <div key={index} className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <ShieldCheck className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-medium">{inspection.type}</span>
                        </div>
                        <Badge variant={
                          inspection.result === 'Excelente' || inspection.result === 'Certificado' ? 'default' :
                          inspection.result === 'Aprobado' || inspection.result === 'Apto' ? 'secondary' : 'outline'
                        }>
                          {inspection.result}
                        </Badge>
                      </div>
                      <div className="text-xs space-y-1">
                        <p className="text-muted-foreground">Inspector: {inspection.inspector}</p>
                        <p className="text-muted-foreground">Fecha: {new Date(inspection.date).toLocaleDateString('es-ES')}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-muted-foreground">Score:</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={inspection.score} className="h-1 w-20" />
                            <span className="font-medium">{inspection.score}%</span>
                          </div>
                        </div>
                      </div>
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

        <TabsContent value="analysis" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Cosecha Mensual</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyHarvestData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="quantity" fill="#f59e0b" name="Cantidad (Ton)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tendencia de Calidad</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyHarvestData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="quality" stroke="#10b981" name="Calidad (%)" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="inspections" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Registro de Inspecciones SENASAG / INLASA</CardTitle>
              <CardDescription>Historial completo de inspecciones de calidad</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Lote</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Inspector</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Resultado</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {harvestBatches.flatMap(batch => 
                    batch.inspections.map(inspection => (
                      <TableRow key={inspection.id}>
                        <TableCell className="font-medium">{inspection.id}</TableCell>
                        <TableCell>{batch.id}</TableCell>
                        <TableCell>{new Date(inspection.date).toLocaleDateString('es-ES')}</TableCell>
                        <TableCell className="text-sm">{inspection.inspector}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{inspection.type}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={
                            inspection.result === 'Excelente' || inspection.result === 'Certificado' ? 'default' :
                            inspection.result === 'Aprobado' || inspection.result === 'Apto' ? 'secondary' : 'outline'
                          }>
                            {inspection.result}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Progress value={inspection.score} className="h-2 w-16" />
                            <span className="text-sm">{inspection.score}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-1">
                            <Button variant="outline" size="sm">
                              <Eye className="h-3 w-3" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Batch Details Dialog */}
      {selectedBatch && (
        <Dialog open={!!selectedBatch} onOpenChange={() => setSelectedBatch(null)}>
          <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl">Detalles del Lote - {selectedBatch.id}</DialogTitle>
              <DialogDescription>Información completa y certificados de calidad</DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              {/* Overview */}
              <div className="grid grid-cols-4 gap-4">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Package className="h-8 w-8 mx-auto text-amber-600 mb-2" />
                    <p className="text-xs text-muted-foreground">Cantidad Total</p>
                    <p className="text-xl">{(selectedBatch.quantity / 1000).toFixed(1)} T</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Award className="h-8 w-8 mx-auto text-green-600 mb-2" />
                    <p className="text-xs text-muted-foreground">Calidad</p>
                    <p className="text-xl">{selectedBatch.qualityScore}%</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Thermometer className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                    <p className="text-xs text-muted-foreground">Temperatura</p>
                    <p className="text-xl">{selectedBatch.temperature}°C</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Droplets className="h-8 w-8 mx-auto text-cyan-600 mb-2" />
                    <p className="text-xs text-muted-foreground">Humedad</p>
                    <p className="text-xl">{selectedBatch.humidity}%</p>
                  </CardContent>
                </Card>
              </div>

              {/* Inspection History */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Historial de Inspecciones</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {selectedBatch.inspections.map((inspection, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            inspection.score >= 95 ? 'bg-green-100' :
                            inspection.score >= 85 ? 'bg-blue-100' : 'bg-amber-100'
                          }`}>
                            <ClipboardCheck className={`h-5 w-5 ${
                              inspection.score >= 95 ? 'text-green-600' :
                              inspection.score >= 85 ? 'text-blue-600' : 'text-amber-600'
                            }`} />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{inspection.type}</p>
                            <p className="text-xs text-muted-foreground">{inspection.inspector}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge>{inspection.result}</Badge>
                          <p className="text-xs text-muted-foreground mt-1">
                            {new Date(inspection.date).toLocaleDateString('es-ES')}
                          </p>
                        </div>
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
