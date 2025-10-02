import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import type { Variants } from 'motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Progress } from './ui/progress'
import { FinalQualityCertificate } from './FinalQualityCertificate'
import { 
  TrendingUp, 
  Package, 
  Truck, 
  Factory, 
  AlertTriangle,
  CheckCircle2,
  Clock,
  BarChart3,
  Users,
  Leaf,
  MapPin,
  Calendar,
  Award,
  Activity,
  TrendingDown,
  DollarSign,
  Droplets,
  Thermometer,
  Sun
} from 'lucide-react'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell,
  Tooltip,
  Legend,
  Area,
  AreaChart,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts'

const monthlyData = [
  { month: 'Ene', lotes: 45, certificados: 42, ingresos: 125000 },
  { month: 'Feb', lotes: 52, certificados: 49, ingresos: 145000 },
  { month: 'Mar', lotes: 38, certificados: 35, ingresos: 98000 },
  { month: 'Abr', lotes: 61, certificados: 58, ingresos: 168000 },
  { month: 'May', lotes: 55, certificados: 53, ingresos: 152000 },
  { month: 'Jun', lotes: 48, certificados: 46, ingresos: 132000 },
]

const stageData = [
  { name: 'Cultivo', value: 30, color: '#10b981' },
  { name: 'Cosecha', value: 25, color: '#22c55e' },
  { name: 'Logística', value: 20, color: '#3b82f6' },
  { name: 'Pedidos', value: 15, color: '#f59e0b' },
  { name: 'Procesamiento', value: 10, color: '#ef4444' },
]

const varietyData = [
  { variety: 'Papa Waycha', production: 45, quality: 92, price: 850 },
  { variety: 'Imilla Negra', production: 38, quality: 88, price: 920 },
  { variety: 'Runa Toralapa', production: 28, quality: 95, price: 1100 },
]

const qualityRadarData = [
  { metric: 'Tamaño', value: 85 },
  { metric: 'Color', value: 92 },
  { metric: 'Textura', value: 88 },
  { metric: 'Sabor', value: 90 },
  { metric: 'Nutrientes', value: 87 },
  { metric: 'Orgánico', value: 95 },
]

const cooperativePerformance = [
  { name: 'Coop. Valle Alto', lotes: 35, efficiency: 94, revenue: 85000 },
  { name: 'Coop. Altiplano', lotes: 28, efficiency: 88, revenue: 72000 },
  { name: 'Coop. Uyuni', lotes: 22, efficiency: 91, revenue: 68000 },
  { name: 'Coop. Santa Cruz', lotes: 18, efficiency: 86, revenue: 55000 },
]

const consolidatedBatches = [
  {
    id: 'LOT-24-FQ-001',
    variety: 'Papa Waycha Boliviana',
    producer: 'Juan Mamani Condori',
    cooperative: 'Cooperativa Valle Alto',
    location: 'Cochabamba, Bolivia',
    startDate: '2024-01-01',
    quantity: '2,500 kg',
    finalScore: 94.5,
    status: 'approved' as const,
    stages: [
      {
        id: 'cultivation',
        name: 'Cultivo',
        icon: Leaf,
        status: 'completed' as const,
        certificateId: 'CERT-CUL-001',
        date: '2024-01-15',
        score: 96,
        issuer: 'SENASAG'
      },
      {
        id: 'harvest',
        name: 'Cosecha',
        icon: Package,
        status: 'completed' as const,
        certificateId: 'CERT-H-001',
        date: '2024-03-20',
        score: 95,
        issuer: 'SENASAG'
      },
      {
        id: 'logistics',
        name: 'Logística',
        icon: Truck,
        status: 'completed' as const,
        certificateId: 'CERT-L-001',
        date: '2024-03-22',
        score: 92,
        issuer: 'INLASA'
      },
      {
        id: 'orders',
        name: 'Pedidos',
        icon: CheckCircle2,
        status: 'completed' as const,
        certificateId: 'CERT-O-001',
        date: '2024-03-25',
        score: 94,
        issuer: 'SENASAG'
      },
      {
        id: 'processing',
        name: 'Procesamiento',
        icon: Factory,
        status: 'completed' as const,
        certificateId: 'CERT-P-001',
        date: '2024-03-28',
        score: 95,
        issuer: 'INLASA'
      }
    ]
  },
  {
    id: 'LOT-24-FQ-002',
    variety: 'Papa Imilla Negra',
    producer: 'María Quispe Choque',
    cooperative: 'Cooperativa Altiplano',
    location: 'La Paz, Bolivia',
    startDate: '2024-01-05',
    quantity: '3,200 kg',
    finalScore: 88.2,
    status: 'approved' as const,
    stages: [
      {
        id: 'cultivation',
        name: 'Cultivo',
        icon: Leaf,
        status: 'completed' as const,
        certificateId: 'CERT-CUL-002',
        date: '2024-01-18',
        score: 90,
        issuer: 'SENASAG'
      },
      {
        id: 'harvest',
        name: 'Cosecha',
        icon: Package,
        status: 'completed' as const,
        certificateId: 'CERT-H-002',
        date: '2024-03-15',
        score: 88,
        issuer: 'SENASAG'
      },
      {
        id: 'logistics',
        name: 'Logística',
        icon: Truck,
        status: 'completed' as const,
        certificateId: 'CERT-L-002',
        date: '2024-03-17',
        score: 87,
        issuer: 'INLASA'
      },
      {
        id: 'orders',
        name: 'Pedidos',
        icon: CheckCircle2,
        status: 'completed' as const,
        certificateId: 'CERT-O-002',
        date: '2024-03-20',
        score: 89,
        issuer: 'SENASAG'
      },
      {
        id: 'processing',
        name: 'Procesamiento',
        icon: Factory,
        status: 'completed' as const,
        certificateId: 'CERT-P-002',
        date: '2024-03-23',
        score: 87,
        issuer: 'INLASA'
      }
    ]
  },
  {
    id: 'LOT-24-FQ-003',
    variety: 'Papa Runa Toralapa',
    producer: 'Carlos Huanca Ticona',
    cooperative: 'Cooperativa Uyuni',
    location: 'Potosí, Bolivia',
    startDate: '2024-02-01',
    quantity: '1,800 kg',
    finalScore: 96.8,
    status: 'approved' as const,
    stages: [
      {
        id: 'cultivation',
        name: 'Cultivo',
        icon: Leaf,
        status: 'completed' as const,
        certificateId: 'CERT-CUL-003',
        date: '2024-02-10',
        score: 98,
        issuer: 'SENASAG'
      },
      {
        id: 'harvest',
        name: 'Cosecha',
        icon: Package,
        status: 'completed' as const,
        certificateId: 'CERT-H-003',
        date: '2024-03-25',
        score: 97,
        issuer: 'SENASAG'
      },
      {
        id: 'logistics',
        name: 'Logística',
        icon: Truck,
        status: 'completed' as const,
        certificateId: 'CERT-L-003',
        date: '2024-03-27',
        score: 96,
        issuer: 'INLASA'
      },
      {
        id: 'orders',
        name: 'Pedidos',
        icon: CheckCircle2,
        status: 'completed' as const,
        certificateId: 'CERT-O-003',
        date: '2024-03-29',
        score: 97,
        issuer: 'SENASAG'
      },
      {
        id: 'processing',
        name: 'Procesamiento',
        icon: Factory,
        status: 'in-progress' as const,
        certificateId: 'CERT-P-003',
        date: '2024-03-30',
        score: 96,
        issuer: 'INLASA'
      }
    ]
  }
]

export function Dashboard() {
  const [selectedBatchIndex, setSelectedBatchIndex] = useState(0)
  const [animatedValues, setAnimatedValues] = useState({
    producers: 0,
    batches: 0,
    certificates: 0,
    transit: 0,
    processing: 0,
    revenue: 0
  })

  useEffect(() => {
    const targets = {
      producers: 248,
      batches: 186,
      certificates: 235,
      transit: 42,
      processing: 18,
      revenue: 820000
    }

    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setAnimatedValues({
        producers: Math.floor(targets.producers * progress),
        batches: Math.floor(targets.batches * progress),
        certificates: Math.floor(targets.certificates * progress),
        transit: Math.floor(targets.transit * progress),
        processing: Math.floor(targets.processing * progress),
        revenue: Math.floor(targets.revenue * progress)
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setAnimatedValues(targets)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const stats = [
    {
      title: 'Productores Activos',
      value: animatedValues.producers.toString(),
      change: '+12',
      changeType: 'positive' as const,
      icon: Users,
      description: 'este mes',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Parcelas en Cultivo',
      value: '142',
      change: '+18',
      changeType: 'positive' as const,
      icon: Leaf,
      description: 'activas',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Lotes Activos',
      value: animatedValues.batches.toString(),
      change: '+8%',
      changeType: 'positive' as const,
      icon: Package,
      description: 'vs. mes anterior',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Certificados Válidos',
      value: animatedValues.certificates.toString(),
      change: '+8%',
      changeType: 'positive' as const,
      icon: Award,
      description: 'certificaciones activas',
      color: 'from-amber-500 to-amber-600'
    },
    {
      title: 'En Tránsito',
      value: animatedValues.transit.toString(),
      change: '-5%',
      changeType: 'negative' as const,
      icon: Truck,
      description: 'lotes en logística',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      title: 'Procesamiento',
      value: animatedValues.processing.toString(),
      change: '+15%',
      changeType: 'positive' as const,
      icon: Factory,
      description: 'en planta industrial',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Ingresos Mensuales',
      value: `Bs ${(animatedValues.revenue / 1000).toFixed(0)}K`,
      change: '+12%',
      changeType: 'positive' as const,
      icon: DollarSign,
      description: 'este mes',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'Calidad Promedio',
      value: '91.5%',
      change: '+2.3%',
      changeType: 'positive' as const,
      icon: CheckCircle2,
      description: 'certificados aprobados',
      color: 'from-teal-500 to-teal-600'
    }
  ]

  const recentCertificates = [
    {
      id: 'CERT-2024-001',
      lote: 'LOT-24-H001',
      type: 'Calidad Cosecha Papa Waycha',
      status: 'Válido',
      date: '2024-01-15',
      expiry: '2024-07-15',
      issuer: 'SENASAG'
    },
    {
      id: 'CERT-2024-002',
      lote: 'LOT-24-L003',
      type: 'Transporte Frío Bolivia',
      status: 'Válido',
      date: '2024-01-14',
      expiry: '2024-04-14',
      issuer: 'INLASA'
    },
    {
      id: 'CERT-2024-003',
      lote: 'LOT-24-P005',
      type: 'Procesamiento Papa Imilla',
      status: 'Pendiente',
      date: '2024-01-13',
      expiry: '2024-06-13',
      issuer: 'SENASAG'
    },
    {
      id: 'CERT-2024-004',
      lote: 'LOT-24-H002',
      type: 'Calidad Papa Runa',
      status: 'Por Vencer',
      date: '2024-01-12',
      expiry: '2024-01-20',
      issuer: 'ECOCERT'
    }
  ]

  const alerts = [
    {
      type: 'warning',
      message: '3 certificados de papas bolivianas vencen en los próximos 7 días',
      time: 'Hace 2 horas',
      priority: 'media'
    },
    {
      type: 'error',
      message: 'Lote Papa Waycha LOT-24-L008 sin certificado de transporte',
      time: 'Hace 4 horas',
      priority: 'alta'
    },
    {
      type: 'success',
      message: 'Nuevo certificado SENASAG aprobado para Papa Imilla LOT-24-H015',
      time: 'Hace 6 horas',
      priority: 'baja'
    },
    {
      type: 'warning',
      message: 'Condiciones climáticas adversas en Cochabamba - revisar parcelas',
      time: 'Hace 8 horas',
      priority: 'media'
    }
  ]

  const activeRoutes = [
    { from: 'Cochabamba', to: 'La Paz', lotes: 8, status: 'En Tránsito', eta: '2 horas' },
    { from: 'La Paz', to: 'Santa Cruz', lotes: 12, status: 'En Tránsito', eta: '6 horas' },
    { from: 'Potosí', to: 'Oruro', lotes: 5, status: 'Programado', eta: '4 horas' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  } satisfies Variants

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  } satisfies Variants

  return (
    <div className="space-y-6">
      {/* Selector de lotes */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border border-purple-200"
      >
        <div className="flex items-center space-x-3">
          <Award className="h-6 w-6 text-purple-600" />
          <div>
            <h3 className="text-sm">Certificados Consolidados Disponibles</h3>
            <p className="text-xs text-muted-foreground">{consolidatedBatches.length} lotes certificados</p>
          </div>
        </div>
        <div className="flex space-x-2">
          {consolidatedBatches.map((batch, index) => (
            <Button
              key={batch.id}
              variant={selectedBatchIndex === index ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedBatchIndex(index)}
              className={selectedBatchIndex === index ? 'bg-gradient-to-r from-purple-600 to-blue-600' : ''}
            >
              {batch.id}
            </Button>
          ))}
        </div>
      </motion.div>

      {/* Certificado Final Consolidado - Posición destacada */}
      <FinalQualityCertificate 
        batch={consolidatedBatches[selectedBatchIndex]}
        onDownload={() => console.log('Descargando certificado final...', consolidatedBatches[selectedBatchIndex].id)}
        onShare={() => console.log('Compartiendo certificado...', consolidatedBatches[selectedBatchIndex].id)}
      />

      {/* Stats Grid con animaciones */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className={`h-2 bg-gradient-to-r ${stat.color}`} />
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10`}>
                        <Icon className="h-4 w-4 text-white" style={{ filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.3))' }} />
                      </div>
                    </div>
                    <motion.p 
                      className="text-2xl mb-1"
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1, type: "spring" }}
                    >
                      {stat.value}
                    </motion.p>
                    <div className="flex items-center space-x-1">
                      {stat.changeType === 'positive' ? (
                        <TrendingUp className="h-3 w-3 text-green-600" />
                      ) : (
                        <TrendingDown className="h-3 w-3 text-red-600" />
                      )}
                      <span className={`text-xs ${
                        stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </span>
                      <span className="text-xs text-muted-foreground">{stat.description}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Gráficos principales */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lotes y Certificados por Mes */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5" />
                <span>Producción e Ingresos Mensuales</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={monthlyData}>
                  <defs>
                    <linearGradient id="colorLotes" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorCertificados" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="lotes" 
                    stroke="#3b82f6" 
                    fillOpacity={1} 
                    fill="url(#colorLotes)"
                    name="Lotes"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="certificados" 
                    stroke="#22c55e" 
                    fillOpacity={1} 
                    fill="url(#colorCertificados)"
                    name="Certificados"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Distribución por Etapa */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Distribución por Etapa</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={stageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    dataKey="value"
                    label={(entry) => `${entry.value}%`}
                  >
                    {stageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 mt-4">
                {stageData.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm">{item.name}</span>
                    </div>
                    <span className="text-sm">{item.value}%</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Variedades y Calidad */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Producción por Variedad */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Leaf className="h-5 w-5" />
                <span>Producción por Variedad</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={varietyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="variety" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="production" fill="#10b981" name="Producción (ton)" />
                  <Bar dataKey="quality" fill="#3b82f6" name="Calidad (%)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Análisis de Calidad */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>Análisis de Calidad</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <RadarChart data={qualityRadarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="metric" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar 
                    name="Calidad" 
                    dataKey="value" 
                    stroke="#10b981" 
                    fill="#10b981" 
                    fillOpacity={0.6} 
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Rendimiento de Cooperativas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Rendimiento por Cooperativa</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {cooperativePerformance.map((coop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="text-sm mb-1">{coop.name}</h4>
                      <div className="grid grid-cols-3 gap-4 text-xs text-muted-foreground">
                        <div>
                          <span className="block">Lotes</span>
                          <span className="text-foreground">{coop.lotes}</span>
                        </div>
                        <div>
                          <span className="block">Eficiencia</span>
                          <span className="text-foreground">{coop.efficiency}%</span>
                        </div>
                        <div>
                          <span className="block">Ingresos</span>
                          <span className="text-foreground">Bs {(coop.revenue / 1000).toFixed(0)}K</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Progress value={coop.efficiency} className="h-2" />
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Certificados Recientes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Certificados Recientes</span>
                <Badge variant="secondary">{recentCertificates.length}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentCertificates.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                    className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm mb-1">{cert.id}</p>
                        <p className="text-xs text-muted-foreground mb-1">{cert.lote} • {cert.type}</p>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <Award className="h-3 w-3" />
                          <span>{cert.issuer}</span>
                        </div>
                      </div>
                      <Badge 
                        variant={
                          cert.status === 'Válido' ? 'default' : 
                          cert.status === 'Pendiente' ? 'secondary' : 'destructive'
                        }
                        className="text-xs"
                      >
                        {cert.status}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Rutas Activas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Truck className="h-5 w-5" />
                  <span>Rutas Activas</span>
                </div>
                <Badge variant="secondary">{activeRoutes.length}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {activeRoutes.map((route, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <MapPin className="h-4 w-4 text-blue-600" />
                        <span>{route.from}</span>
                        <span className="text-muted-foreground">→</span>
                        <span>{route.to}</span>
                      </div>
                      <Badge variant={route.status === 'En Tránsito' ? 'default' : 'secondary'} className="text-xs">
                        {route.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{route.lotes} lotes</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>ETA: {route.eta}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Alertas y Notificaciones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Alertas y Notificaciones</span>
                <Badge variant="destructive">{alerts.filter(a => a.type === 'error').length}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {alerts.map((alert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3 + index * 0.1 }}
                    className={`p-3 rounded-lg border ${
                      alert.type === 'error' ? 'bg-red-50 border-red-200' :
                      alert.type === 'warning' ? 'bg-amber-50 border-amber-200' :
                      'bg-green-50 border-green-200'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {alert.type === 'warning' && <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />}
                      {alert.type === 'error' && <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />}
                      {alert.type === 'success' && <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />}
                      <div className="flex-1">
                        <p className="text-sm">{alert.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Condiciones Climáticas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Sun className="h-5 w-5" />
              <span>Condiciones Climáticas en Regiones de Cultivo</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { region: 'Cochabamba', temp: 18, humidity: 65, condition: 'Soleado' },
                { region: 'La Paz', temp: 12, humidity: 72, condition: 'Nublado' },
                { region: 'Potosí', temp: 10, humidity: 68, condition: 'Parcial' },
                { region: 'Oruro', temp: 14, humidity: 70, condition: 'Soleado' },
              ].map((climate, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm">{climate.region}</h4>
                    <Sun className="h-5 w-5 text-amber-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Thermometer className="h-4 w-4 text-red-500" />
                      <span className="text-sm">{climate.temp}°C</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Droplets className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">{climate.humidity}%</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {climate.condition}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
