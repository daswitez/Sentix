import { useState } from 'react'
import { Layout } from './components/Layout'
import { Dashboard } from './components/Dashboard'
import { ProducersModule } from './components/ProducersModule'
import { CultivationModule } from './components/CultivationModule'
import { HarvestModule } from './components/HarvestModule'
import { LogisticsModule } from './components/LogisticsModule'
import { OrdersModule } from './components/OrdersModule'
import { ProcessingModule } from './components/ProcessingModule'
import { TabsContent } from './components/ui/tabs'
import { Analytics } from "@vercel/analytics/next"


export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  

  return (
    
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      <TabsContent value="dashboard">
        <Dashboard />
      </TabsContent>
      
      <TabsContent value="producers">
        <ProducersModule />
      </TabsContent>
      
      <TabsContent value="cultivation">
        <CultivationModule />
      </TabsContent>
      
      <TabsContent value="harvest">
        <HarvestModule />
      </TabsContent>
      
      <TabsContent value="logistics">
        <LogisticsModule />
      </TabsContent>
      
      <TabsContent value="orders">
        <OrdersModule />
      </TabsContent>
      
      <TabsContent value="processing">
        <ProcessingModule />
      </TabsContent>
      <Analytics/>
    </Layout>
  )
}