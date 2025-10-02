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
  Plus, Search, Filter, ShoppingCart, Building2, Calendar, DollarSign, Package,
  TrendingUp, CheckCircle, Clock, AlertCircle, FileText, Download, Eye, User,
  CreditCard, Repeat, Target, BarChart3, Users, Mail, Phone
} from 'lucide-react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts'

const orders = [
  {
    id: 'PED-2024-001',
    clientId: 'CLI-001',
    clientName: 'Industrias Alimenticias La Paz S.A.',
    clientType: 'Procesador Industrial',
    contactPerson: 'Ing. Roberto Sánchez',
    contactEmail: 'roberto.sanchez@induslp.bo',
    contactPhone: '+591 2 244 5566',
    orderDate: '2024-01-15',
    deliveryDate: '2024-01-22',
    status: 'En Tránsito',
    frequency: 'Semanal',
    variety: 'Papa Waycha',
    quantity: 24000,
    unitPrice: 8.5,
    totalAmount: 204000,
    batchIds: ['LOT-24-H001'],
    paymentStatus: 'Pagado',
    paymentMethod: 'Transferencia Bancaria',
    deliveryAddress: 'Zona Industrial El Alto, La Paz',
    notes: 'Entrega preferentemente en horario matutino',
    contract: 'CONT-2024-LP-001',
    contractDuration: '12 meses'
  },
  {
    id: 'PED-2024-002',
    clientId: 'CLI-002',
    clientName: 'Distribuidora Regional Oruro',
    clientType: 'Distribuidor',
    contactPerson: 'Lic. María Condori',
    contactEmail: 'maria.condori@distoruro.bo',
    contactPhone: '+591 2 527 8899',
    orderDate: '2024-01-12',
    deliveryDate: '2024-01-16',
    status: 'Entregado',
    frequency: 'Quincenal',
    variety: 'Papa Imilla Negra',
    quantity: 19600,
    unitPrice: 9.2,
    totalAmount: 180320,
    batchIds: ['LOT-24-H002'],
    paymentStatus: 'Pagado',
    paymentMethod: 'Cheque',
    deliveryAddress: 'Av. 6 de Agosto 2345, Oruro',
    notes: 'Cliente frecuente - descuento aplicado',
    contract: 'CONT-2024-OR-002',
    contractDuration: '6 meses'
  },
  {
    id: 'PED-2024-003',
    clientId: 'CLI-003',
    clientName: 'Exportadora Andina Premium S.R.L.',
    clientType: 'Exportador',
    contactPerson: 'Sr. Carlos Huanca',
    contactEmail: 'carlos.huanca@andpremium.bo',
    contactPhone: '+591 2 693 4455',
    orderDate: '2024-01-10',
    deliveryDate: '2024-01-18',
    status: 'En Preparación',
    frequency: 'Mensual',
    variety: 'Papa Runa Toralapa',
    quantity: 18700,
    unitPrice: 11.0,
    totalAmount: 205700,
    batchIds: ['LOT-24-H003'],
    paymentStatus: 'Pendiente',
    paymentMethod: 'Transferencia Bancaria',
    deliveryAddress: 'Puerto Seco Tambo Quemado, Potosí',
    notes: 'Exportación a Perú - Documentación aduanera incluida',
    contract: 'CONT-2024-PT-003',
    contractDuration: '24 meses'
  },
  {
    id: 'PED-2024-004',
    clientId: 'CLI-004',
    clientName: 'Supermercados Bolivar',
    clientType: 'Retail',
    contactPerson: 'Lic. Patricia Rojas',
    contactEmail: 'p.rojas@bolivar.com.bo',
    contactPhone: '+591 4 452 7788',
    orderDate: '2024-01-20',
    deliveryDate: '2024-01-25',
    status: 'Confirmado',
    frequency: 'Semanal',
    variety: 'Papa Waycha',
    quantity: 10500,
    unitPrice: 9.5,
    totalAmount: 99750,
    batchIds: ['LOT-24-H004'],
    paymentStatus: 'Pendiente',
    paymentMethod: 'Crédito 30 días',
    deliveryAddress: 'Centro de Distribución Cochabamba',
    notes: 'Requiere empaque especial para retail',
    contract: 'CONT-2024-CB-004',
    contractDuration: '12 meses'
  },
  {
    id: 'PED-2024-005',
    clientId: 'CLI-005',
    clientName: 'Procesadora de Alimentos Santa Cruz',
    clientType: 'Procesador Industrial',
    contactPerson: 'Ing. Miguel Vargas',
    contactEmail: 'miguel.vargas@procscz.bo',
    contactPhone: '+591 3 334 5566',
    orderDate: '2024-01-18',
    deliveryDate: '2024-01-26',
    status: 'Confirmado',
    frequency: 'Semanal',
    variety: 'Papa Waycha',
    quantity: 32000,
    unitPrice: 8.0,
    totalAmount: 256000,
    batchIds: ['LOT-24-H001'],
    paymentStatus: 'Pendiente',
    paymentMethod: 'Transferencia Bancaria',
    deliveryAddress: 'Parque Industrial Norte, Santa Cruz',
    notes: 'Cliente nuevo - primer pedido',
    contract: 'CONT-2024-SC-005',
    contractDuration: '18 meses'
  }
]

const clients = [
  {
    id: 'CLI-001',
    name: 'Industrias Alimenticias La Paz S.A.',
    type: 'Procesador Industrial',
    rut: '1234567890',
    address: 'Zona Industrial El Alto, La Paz',
    city: 'La Paz',
    contactPerson: 'Ing. Roberto Sánchez',
    email: 'roberto.sanchez@induslp.bo',
    phone: '+591 2 244 5566',
    activeOrders: 3,
    totalPurchased: 156000,
    creditLimit: 500000,
    paymentTerms: '30 días',
    status: 'Activo',
    rating: 5
  },
  {
    id: 'CLI-002',
    name: 'Distribuidora Regional Oruro',
    type: 'Distribuidor',
    rut: '2345678901',
    address: 'Av. 6 de Agosto 2345, Oruro',
    city: 'Oruro',
    contactPerson: 'Lic. María Condori',
    email: 'maria.condori@distoruro.bo',
    phone: '+591 2 527 8899',
    activeOrders: 2,
    totalPurchased: 98000,
    creditLimit: 300000,
    paymentTerms: '15 días',
    status: 'Activo',
    rating: 4
  },
  {
    id: 'CLI-003',
    name: 'Exportadora Andina Premium S.R.L.',
    type: 'Exportador',
    rut: '3456789012',
    address: 'Puerto Seco Tambo Quemado, Potosí',
    city: 'Potosí',
    contactPerson: 'Sr. Carlos Huanca',
    email: 'carlos.huanca@andpremium.bo',
    phone: '+591 2 693 4455',
    activeOrders: 1,
    totalPurchased: 205700,
    creditLimit: 800000,
    paymentTerms: '45 días',
    status: 'Activo',
    rating: 5
  }
]

const monthlyOrdersData = [
  { month: 'Ene', orders: 18, revenue: 890000 },
  { month: 'Feb', orders: 15, revenue: 750000 },
  { month: 'Mar', orders: 21, revenue: 1020000 },
  { month: 'Abr', orders: 17, revenue: 840000 },
  { month: 'May', orders: 14, revenue: 695000 }
]

const ordersByClientType = [
  { name: 'Procesador Industrial', value: 45, color: '#3b82f6' },
  { name: 'Distribuidor', value: 30, color: '#10b981' },
  { name: 'Exportador', value: 15, color: '#f59e0b' },
  { name: 'Retail', value: 10, color: '#8b5cf6' }
]

export function OrdersModule() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedOrder, setSelectedOrder] = useState<typeof orders[0] | null>(null)
  const [filterStatus, setFilterStatus] = useState('all')

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.clientName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || order.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const totalOrders = orders.length
  const totalRevenue = orders.reduce((sum, o) => sum + o.totalAmount, 0)
  const pendingOrders = orders.filter(o => o.status !== 'Entregado').length
  const activeClients = clients.length

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-lg"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&h=300&fit=crop"
          alt="Gestión de pedidos"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-800/90 flex items-center justify-between p-6">
          <div className="text-white">
            <h2 className="text-xl">Módulo de Pedidos</h2>
            <p className="text-sm opacity-90">Gestión de órdenes, clientes y contratos comerciales</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">
                <Plus className="w-4 h-4 mr-2" />
                Nuevo Pedido
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>Registrar Nuevo Pedido</DialogTitle>
                <DialogDescription>Complete la información del pedido</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Cliente</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      {clients.map(client => (
                        <SelectItem key={client.id} value={client.id}>{client.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Fecha de Pedido</Label>
                  <Input type="date" />
                </div>
                <div>
                  <Label>Variedad</Label>
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
                  <Label>Cantidad (kg)</Label>
                  <Input type="number" placeholder="24000" />
                </div>
                <div>
                  <Label>Precio Unitario (Bs/kg)</Label>
                  <Input type="number" step="0.1" placeholder="8.5" />
                </div>
                <div>
                  <Label>Fecha de Entrega</Label>
                  <Input type="date" />
                </div>
                <div>
                  <Label>Frecuencia</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="unico">Único</SelectItem>
                      <SelectItem value="semanal">Semanal</SelectItem>
                      <SelectItem value="quincenal">Quincenal</SelectItem>
                      <SelectItem value="mensual">Mensual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Método de Pago</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="transferencia">Transferencia Bancaria</SelectItem>
                      <SelectItem value="cheque">Cheque</SelectItem>
                      <SelectItem value="credito">Crédito</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-2">
                  <Label>Dirección de Entrega</Label>
                  <Input placeholder="Dirección completa" />
                </div>
                <div className="col-span-2">
                  <Label>Notas Adicionales</Label>
                  <Input placeholder="Instrucciones especiales..." />
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <Button variant="outline">Cancelar</Button>
                <Button>Registrar Pedido</Button>
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
        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              Total Pedidos
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{totalOrders}</div>
            <Progress value={75} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              Ingresos Totales
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">Bs {(totalRevenue / 1000).toFixed(0)}K</div>
            <Progress value={88} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              Clientes Activos
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{activeClients}</div>
            <Progress value={65} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-amber-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              Pendientes
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{pendingOrders}</div>
            <Progress value={60} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-cyan-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              Entregados
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{orders.filter(o => o.status === 'Entregado').length}</div>
            <Progress value={90} className="h-1 mt-2" />
          </CardContent>
        </Card>
      </motion.div>

      <Tabs defaultValue="orders" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="orders">Pedidos</TabsTrigger>
          <TabsTrigger value="clients">Clientes</TabsTrigger>
          <TabsTrigger value="contracts">Contratos</TabsTrigger>
          <TabsTrigger value="invoices">Facturación</TabsTrigger>
          <TabsTrigger value="analytics">Análisis</TabsTrigger>
        </TabsList>

        <TabsContent value="orders" className="space-y-4">
          <div className="flex space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar pedido..."
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
                <SelectItem value="Confirmado">Confirmado</SelectItem>
                <SelectItem value="En Preparación">En Preparación</SelectItem>
                <SelectItem value="En Tránsito">En Tránsito</SelectItem>
                <SelectItem value="Entregado">Entregado</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Lista de Pedidos</CardTitle>
              <CardDescription>Gestión completa de órdenes de compra</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID Pedido</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Variedad</TableHead>
                    <TableHead>Cantidad</TableHead>
                    <TableHead>Monto</TableHead>
                    <TableHead>Entrega</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Pago</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>
                        <div>
                          <p className="text-sm font-medium">{order.clientName}</p>
                          <p className="text-xs text-muted-foreground">{order.clientType}</p>
                        </div>
                      </TableCell>
                      <TableCell>{order.variety}</TableCell>
                      <TableCell>{(order.quantity / 1000).toFixed(1)} T</TableCell>
                      <TableCell className="font-medium">Bs {order.totalAmount.toLocaleString()}</TableCell>
                      <TableCell className="text-sm">
                        {new Date(order.deliveryDate).toLocaleDateString('es-ES')}
                      </TableCell>
                      <TableCell>
                        <Badge variant={
                          order.status === 'Entregado' ? 'default' :
                          order.status === 'En Tránsito' ? 'secondary' : 'outline'
                        }>
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={order.paymentStatus === 'Pagado' ? 'default' : 'destructive'}>
                          {order.paymentStatus}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm" onClick={() => setSelectedOrder(order)}>
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

        <TabsContent value="clients" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client) => (
              <Card key={client.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
                  <CardTitle className="text-base flex items-center justify-between">
                    <span>{client.name}</span>
                    <Badge>{client.type}</Badge>
                  </CardTitle>
                  <CardDescription>{client.city}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span>{client.contactPerson}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs">{client.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{client.phone}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground text-xs">Pedidos Activos</p>
                      <p className="font-medium">{client.activeOrders}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Total Comprado</p>
                      <p className="font-medium">Bs {(client.totalPurchased / 1000).toFixed(0)}K</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Límite Crédito</p>
                      <p className="font-medium">Bs {(client.creditLimit / 1000).toFixed(0)}K</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Términos Pago</p>
                      <p className="font-medium">{client.paymentTerms}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Calificación</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < client.rating ? 'text-amber-500' : 'text-gray-300'}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button className="w-full" variant="outline" size="sm">
                    <Eye className="h-3 w-3 mr-2" />
                    Ver Historial
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="contracts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Contratos Activos</CardTitle>
              <CardDescription>Acuerdos comerciales vigentes con clientes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-8 w-8 text-purple-600" />
                        <div>
                          <h4 className="font-medium">{order.contract}</h4>
                          <p className="text-sm text-muted-foreground">{order.clientName}</p>
                        </div>
                      </div>
                      <Badge variant="default">Activo</Badge>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground text-xs">Duración</p>
                        <p className="font-medium">{order.contractDuration}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs">Frecuencia</p>
                        <p className="font-medium">{order.frequency}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs">Cantidad Mensual</p>
                        <p className="font-medium">{(order.quantity / 1000).toFixed(1)} T</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs">Valor Total</p>
                        <p className="font-medium">Bs {order.totalAmount.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-3 pt-3 border-t">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-3 w-3 mr-1" />
                        Ver Contrato
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Download className="h-3 w-3 mr-1" />
                        Descargar PDF
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="invoices" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Facturación y Pagos</CardTitle>
              <CardDescription>Control de facturas y estado de pagos</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Factura</TableHead>
                    <TableHead>Pedido</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Monto</TableHead>
                    <TableHead>Método Pago</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order, index) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">FAC-{String(index + 1).padStart(4, '0')}</TableCell>
                      <TableCell>{order.id}</TableCell>
                      <TableCell className="text-sm">{order.clientName}</TableCell>
                      <TableCell>{new Date(order.orderDate).toLocaleDateString('es-ES')}</TableCell>
                      <TableCell className="font-medium">Bs {order.totalAmount.toLocaleString()}</TableCell>
                      <TableCell className="text-sm">{order.paymentMethod}</TableCell>
                      <TableCell>
                        <Badge variant={order.paymentStatus === 'Pagado' ? 'default' : 'destructive'}>
                          {order.paymentStatus}
                        </Badge>
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
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Pedidos por Mes</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyOrdersData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="orders" fill="#8b5cf6" name="Pedidos" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ingresos Mensuales</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyOrdersData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#10b981" name="Ingresos (Bs)" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Distribución por Tipo de Cliente</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={ordersByClientType}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      dataKey="value"
                    >
                      {ordersByClientType.map((entry, index) => (
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
                <CardTitle>Top 5 Clientes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {clients
                    .sort((a, b) => b.totalPurchased - a.totalPurchased)
                    .map((client, index) => (
                      <div key={client.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
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
                            <p className="text-sm font-medium">{client.name}</p>
                            <p className="text-xs text-muted-foreground">{client.type}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">Bs {(client.totalPurchased / 1000).toFixed(0)}K</p>
                          <p className="text-xs text-muted-foreground">{client.activeOrders} pedidos</p>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Order Details Dialog */}
      {selectedOrder && (
        <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl">Detalles del Pedido - {selectedOrder.id}</DialogTitle>
              <DialogDescription>Información completa del pedido</DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              <div className="grid grid-cols-4 gap-4">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <ShoppingCart className="h-8 w-8 mx-auto text-purple-600 mb-2" />
                    <p className="text-xs text-muted-foreground">Cantidad</p>
                    <p className="text-xl">{(selectedOrder.quantity / 1000).toFixed(1)} T</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <DollarSign className="h-8 w-8 mx-auto text-green-600 mb-2" />
                    <p className="text-xs text-muted-foreground">Monto Total</p>
                    <p className="text-xl">Bs {(selectedOrder.totalAmount / 1000).toFixed(0)}K</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Repeat className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                    <p className="text-xs text-muted-foreground">Frecuencia</p>
                    <p className="text-xl">{selectedOrder.frequency}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <CreditCard className="h-8 w-8 mx-auto text-amber-600 mb-2" />
                    <p className="text-xs text-muted-foreground">Pago</p>
                    <p className="text-base">{selectedOrder.paymentStatus}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Información del Cliente</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Nombre</p>
                      <p className="font-medium">{selectedOrder.clientName}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Contacto</p>
                      <p className="font-medium">{selectedOrder.contactPerson}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Email</p>
                      <p className="font-medium text-xs">{selectedOrder.contactEmail}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Teléfono</p>
                      <p className="font-medium">{selectedOrder.contactPhone}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Detalles de Entrega</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Fecha de Entrega</p>
                      <p className="font-medium">{new Date(selectedOrder.deliveryDate).toLocaleDateString('es-ES')}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Dirección</p>
                      <p className="font-medium">{selectedOrder.deliveryAddress}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Notas</p>
                      <p className="font-medium text-xs">{selectedOrder.notes}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
