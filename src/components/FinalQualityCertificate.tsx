import { motion } from 'motion/react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Progress } from './ui/progress'
import {
  Award,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Download,
  Share2,
  Leaf,
  Sprout,
  Truck,
  ShoppingCart,
  Factory,
  QrCode,
  Shield,
  Calendar,
  MapPin,
  User,
  Sparkles
} from 'lucide-react'

interface CertificateStage {
  id: string
  name: string
  icon: React.ElementType
  status: 'completed' | 'in-progress' | 'pending' | 'failed'
  certificateId: string
  date: string
  score: number
  issuer: string
}

interface ConsolidatedBatch {
  id: string
  variety: string
  producer: string
  cooperative: string
  location: string
  startDate: string
  quantity: string
  finalScore: number
  status: 'approved' | 'pending' | 'rejected'
  stages: CertificateStage[]
}

interface FinalQualityCertificateProps {
  batch?: ConsolidatedBatch
  onDownload?: () => void
  onShare?: () => void
}

const defaultBatch: ConsolidatedBatch = {
  id: 'LOT-24-FQ-001',
  variety: 'Papa Waycha Boliviana',
  producer: 'Juan Mamani Condori',
  cooperative: 'Cooperativa Valle Alto',
  location: 'Cochabamba, Bolivia',
  startDate: '2024-01-01',
  quantity: '2,500 kg',
  finalScore: 94.5,
  status: 'approved',
  stages: [
    {
      id: 'cultivation',
      name: 'Cultivo',
      icon: Leaf,
      status: 'completed',
      certificateId: 'CERT-CUL-001',
      date: '2024-01-15',
      score: 96,
      issuer: 'SENASAG'
    },
    {
      id: 'harvest',
      name: 'Cosecha',
      icon: Sprout,
      status: 'completed',
      certificateId: 'CERT-H-001',
      date: '2024-03-20',
      score: 95,
      issuer: 'SENASAG'
    },
    {
      id: 'logistics',
      name: 'Logística',
      icon: Truck,
      status: 'completed',
      certificateId: 'CERT-L-001',
      date: '2024-03-22',
      score: 92,
      issuer: 'INLASA'
    },
    {
      id: 'orders',
      name: 'Pedidos',
      icon: ShoppingCart,
      status: 'completed',
      certificateId: 'CERT-O-001',
      date: '2024-03-25',
      score: 94,
      issuer: 'SENASAG'
    },
    {
      id: 'processing',
      name: 'Procesamiento',
      icon: Factory,
      status: 'completed',
      certificateId: 'CERT-P-001',
      date: '2024-03-28',
      score: 95,
      issuer: 'INLASA'
    }
  ]
}

export function FinalQualityCertificate({ 
  batch = defaultBatch, 
  onDownload, 
  onShare 
}: FinalQualityCertificateProps) {
  const getStatusConfig = (status: ConsolidatedBatch['status']) => {
    switch (status) {
      case 'approved':
        return {
          color: 'from-green-500 to-emerald-600',
          textColor: 'text-green-600',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          label: 'CERTIFICADO APROBADO'
        }
      case 'pending':
        return {
          color: 'from-amber-500 to-orange-600',
          textColor: 'text-amber-600',
          bgColor: 'bg-amber-50',
          borderColor: 'border-amber-200',
          label: 'CERTIFICACIÓN PENDIENTE'
        }
      case 'rejected':
        return {
          color: 'from-red-500 to-rose-600',
          textColor: 'text-red-600',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          label: 'CERTIFICACIÓN RECHAZADA'
        }
    }
  }

  const getStageStatusIcon = (status: CertificateStage['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-5 w-5 text-green-600" />
      case 'in-progress':
        return <Clock className="h-5 w-5 text-blue-600 animate-pulse" />
      case 'pending':
        return <Clock className="h-5 w-5 text-gray-400" />
      case 'failed':
        return <AlertTriangle className="h-5 w-5 text-red-600" />
    }
  }

  const statusConfig = getStatusConfig(batch.status)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 100,
        damping: 15 
      }}
    >
      <Card className={`overflow-hidden border-2 ${statusConfig.borderColor} shadow-2xl`}>
        {/* Header con gradiente */}
        <div className={`h-3 bg-gradient-to-r ${statusConfig.color}`} />
        
        <CardContent className="p-0">
          {/* Título principal */}
          <div className={`p-6 ${statusConfig.bgColor} border-b-2 ${statusConfig.borderColor}`}>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className={`p-4 rounded-full bg-gradient-to-br ${statusConfig.color}`}
                >
                  <Award className="h-8 w-8 text-white" />
                </motion.div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <Shield className={`h-5 w-5 ${statusConfig.textColor}`} />
                    <h2 className="text-2xl">Certificado Final de Calidad</h2>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sistema de Trazabilidad PatataHub - Bolivia
                  </p>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Badge 
                  className={`text-sm px-4 py-2 ${statusConfig.textColor} ${statusConfig.bgColor}`}
                  variant="outline"
                >
                  {statusConfig.label}
                </Badge>
              </motion.div>
            </motion.div>
          </div>

          {/* Información del lote */}
          <div className="p-6 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Columna izquierda - Info principal */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="md:col-span-2 space-y-4"
              >
                {/* ID del lote */}
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Sparkles className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Lote Certificado</p>
                    <p className="text-xl">{batch.id}</p>
                  </div>
                </div>

                {/* Grid de información */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Leaf className="h-4 w-4 text-green-600" />
                      <p className="text-xs text-muted-foreground">Variedad</p>
                    </div>
                    <p className="text-sm">{batch.variety}</p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-blue-600" />
                      <p className="text-xs text-muted-foreground">Productor</p>
                    </div>
                    <p className="text-sm">{batch.producer}</p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-red-600" />
                      <p className="text-xs text-muted-foreground">Ubicación</p>
                    </div>
                    <p className="text-sm">{batch.location}</p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-amber-600" />
                      <p className="text-xs text-muted-foreground">Inicio</p>
                    </div>
                    <p className="text-sm">
                      {new Date(batch.startDate).toLocaleDateString('es-ES')}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-purple-600" />
                      <p className="text-xs text-muted-foreground">Cooperativa</p>
                    </div>
                    <p className="text-sm">{batch.cooperative}</p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Factory className="h-4 w-4 text-cyan-600" />
                      <p className="text-xs text-muted-foreground">Cantidad</p>
                    </div>
                    <p className="text-sm">{batch.quantity}</p>
                  </div>
                </div>
              </motion.div>

              {/* Columna derecha - Score y QR */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-center justify-center space-y-4 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl"
              >
                {/* Score circular */}
                <div className="relative">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="none"
                    />
                    <motion.circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 56 }}
                      animate={{ 
                        strokeDashoffset: 2 * Math.PI * 56 * (1 - batch.finalScore / 100) 
                      }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#059669" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.p
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1, type: "spring" }}
                      className="text-3xl text-green-600"
                    >
                      {batch.finalScore}
                    </motion.p>
                    <p className="text-xs text-muted-foreground">Calidad Total</p>
                  </div>
                </div>

                {/* QR Code simulado */}
                <div className="p-3 bg-white rounded-lg border-2 border-gray-200">
                  <QrCode className="h-20 w-20 text-gray-800" />
                </div>
                <p className="text-xs text-center text-muted-foreground">
                  Escanea para verificar autenticidad
                </p>
              </motion.div>
            </div>
          </div>

          {/* Pipeline de certificaciones */}
          <div className="p-6 bg-gradient-to-b from-white to-gray-50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg flex items-center space-x-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span>Trazabilidad Completa de Certificaciones</span>
              </h3>
              <Badge variant="outline" className="text-xs">
                {batch.stages.filter(s => s.status === 'completed').length}/{batch.stages.length} Completadas
              </Badge>
            </div>

            {/* Timeline de etapas */}
            <div className="relative">
              {/* Línea conectora */}
              <div className="absolute top-8 left-0 right-0 h-1 bg-gray-200 hidden md:block" />
              <motion.div
                className="absolute top-8 left-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600 hidden md:block"
                initial={{ width: 0 }}
                animate={{ 
                  width: `${(batch.stages.filter(s => s.status === 'completed').length / batch.stages.length) * 100}%` 
                }}
                transition={{ duration: 2, ease: "easeOut" }}
              />

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                {batch.stages.map((stage, index) => {
                  const StageIcon = stage.icon
                  return (
                    <motion.div
                      key={stage.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="relative"
                    >
                      <Card className={`p-4 text-center ${
                        stage.status === 'completed' 
                          ? 'bg-white border-green-200 shadow-md' 
                          : 'bg-gray-50 border-gray-200'
                      }`}>
                        {/* Ícono de la etapa */}
                        <div className={`mx-auto mb-3 p-3 rounded-full ${
                          stage.status === 'completed'
                            ? 'bg-gradient-to-br from-green-500 to-emerald-600'
                            : stage.status === 'in-progress'
                            ? 'bg-gradient-to-br from-blue-500 to-cyan-600'
                            : 'bg-gray-300'
                        } relative z-10`}>
                          <StageIcon className="h-6 w-6 text-white" />
                        </div>

                        {/* Nombre de la etapa */}
                        <p className="text-sm mb-2">{stage.name}</p>

                        {/* Estado */}
                        <div className="flex justify-center mb-2">
                          {getStageStatusIcon(stage.status)}
                        </div>

                        {/* Score */}
                        {stage.status === 'completed' && (
                          <>
                            <Progress value={stage.score} className="h-2 mb-2" />
                            <p className="text-xs text-green-600 mb-1">
                              {stage.score}%
                            </p>
                          </>
                        )}

                        {/* Certificado ID */}
                        <p className="text-xs text-muted-foreground mb-1">
                          {stage.certificateId}
                        </p>

                        {/* Fecha e Issuer */}
                        {stage.status === 'completed' && (
                          <>
                            <p className="text-xs text-muted-foreground">
                              {new Date(stage.date).toLocaleDateString('es-ES')}
                            </p>
                            <Badge variant="outline" className="text-xs mt-2">
                              {stage.issuer}
                            </Badge>
                          </>
                        )}
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Footer con acciones */}
          <div className="p-6 bg-gray-100 border-t flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-xs text-muted-foreground">Emitido por</p>
                  <p className="text-sm">SENASAG - Bolivia</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="text-xs text-muted-foreground">Fecha de emisión</p>
                  <p className="text-sm">{new Date().toLocaleDateString('es-ES')}</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                onClick={onShare}
                className="flex items-center space-x-2"
              >
                <Share2 className="h-4 w-4" />
                <span>Compartir</span>
              </Button>
              <Button 
                onClick={onDownload}
                className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              >
                <Download className="h-4 w-4" />
                <span>Descargar Certificado</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}