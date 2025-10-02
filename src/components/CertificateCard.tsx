import type { ComponentProps } from 'react'
import type { LucideIcon } from 'lucide-react'

import { Card, CardContent, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import {
  Calendar,
  FileText,
  Download,
  Eye,
  AlertTriangle,
  CheckCircle2,
  Clock,
  User,
  MapPin
} from 'lucide-react'

interface Certificate {
  id: string
  type: string
  status: 'valid' | 'expiring' | 'expired' | 'pending'
  issuedDate: string
  expiryDate: string
  issuer: string
  location?: string
  batchId: string
  description?: string
  documents?: string[]
}

type BadgeVariant = NonNullable<ComponentProps<typeof Badge>['variant']>

type StatusConfig = {
  variant: BadgeVariant
  icon: LucideIcon
  color: string
  label: string
}

interface CertificateCardProps {
  certificate: Certificate
  onView?: (id: string) => void
  onDownload?: (id: string) => void
}

const getStatusConfig = (status: Certificate['status']): StatusConfig => {
  switch (status) {
    case 'valid':
      return {
        variant: 'default',
        icon: CheckCircle2,
        color: 'text-green-600',
        label: 'Valido'
      }
    case 'expiring':
      return {
        variant: 'secondary',
        icon: AlertTriangle,
        color: 'text-amber-600',
        label: 'Por Vencer'
      }
    case 'expired':
      return {
        variant: 'destructive',
        icon: AlertTriangle,
        color: 'text-red-600',
        label: 'Vencido'
      }
    case 'pending':
      return {
        variant: 'outline',
        icon: Clock,
        color: 'text-blue-600',
        label: 'Pendiente'
      }
    default:
      {
        const exhaustiveCheck: never = status
        throw new Error(`Unhandled certificate status: ${exhaustiveCheck}`)
      }
  }
}

const formatDate = (dateString: string): string =>
  new Date(dateString).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

const getDaysUntilExpiry = (dateString: string): number => {
  const today = new Date()
  const expiry = new Date(dateString)
  const diffTime = expiry.getTime() - today.getTime()
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}

export function CertificateCard({ certificate, onView, onDownload }: CertificateCardProps) {
  const statusConfig = getStatusConfig(certificate.status)
  const StatusIcon = statusConfig.icon
  const daysUntilExpiry = getDaysUntilExpiry(certificate.expiryDate)

  return (
    <Card className="w-full hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <h3 className="text-sm">{certificate.type}</h3>
            </div>
            <p className="text-xs text-muted-foreground">ID: {certificate.id}</p>
          </div>
          <div className="flex items-center space-x-2">
            <StatusIcon className={`h-4 w-4 ${statusConfig.color}`} />
            <Badge variant={statusConfig.variant} className="text-xs">
              {statusConfig.label}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3">
          {/* Batch information */}
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span className="text-muted-foreground">Lote:</span>
            <span>{certificate.batchId}</span>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <div className="flex items-center space-x-1 text-muted-foreground mb-1">
                <Calendar className="h-3 w-3" />
                <span>Emitido</span>
              </div>
              <p>{formatDate(certificate.issuedDate)}</p>
            </div>
            <div>
              <div className="flex items-center space-x-1 text-muted-foreground mb-1">
                <Calendar className="h-3 w-3" />
                <span>Vence</span>
              </div>
              <p className={daysUntilExpiry <= 7 ? 'text-amber-600' : ''}>
                {formatDate(certificate.expiryDate)}
              </p>
              {daysUntilExpiry <= 30 && daysUntilExpiry > 0 && (
                <p className="text-xs text-amber-600 mt-1">
                  {daysUntilExpiry} dias restantes
                </p>
              )}
            </div>
          </div>

          {/* Issuer */}
          <div className="flex items-center space-x-2 text-sm">
            <User className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">Emisor:</span>
            <span className="text-xs">{certificate.issuer}</span>
          </div>

          {/* Location */}
          {certificate.location && (
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="h-3 w-3 text-muted-foreground" />
              <span className="text-muted-foreground">Ubicacion:</span>
              <span className="text-xs">{certificate.location}</span>
            </div>
          )}

          {/* Description */}
          {certificate.description && (
            <p className="text-xs text-muted-foreground">{certificate.description}</p>
          )}

          {/* Attached documents */}
          {certificate.documents && certificate.documents.length > 0 && (
            <div className="pt-2 border-t">
              <p className="text-xs text-muted-foreground mb-2">
                {certificate.documents.length} documento(s) adjunto(s)
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex space-x-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => onView?.(certificate.id)}
            >
              <Eye className="h-3 w-3 mr-1" />
              Ver
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => onDownload?.(certificate.id)}
            >
              <Download className="h-3 w-3 mr-1" />
              Descargar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
