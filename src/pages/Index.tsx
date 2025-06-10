
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Search, 
  Calendar,
  Clock,
  Database,
  List
} from 'lucide-react';
import { TablesPanel } from '@/components/TablesPanel';
import { OrdersPanel } from '@/components/OrdersPanel';
import { StockPanel } from '@/components/StockPanel';
import { ReportsPanel } from '@/components/ReportsPanel';

const Index = () => {
  const [activePanel, setActivePanel] = useState('dashboard');

  const stats = [
    {
      title: 'Mesas Ocupadas',
      value: '12/20',
      percentage: '60%',
      color: 'bg-restaurant-blue',
      trend: '+2 última hora'
    },
    {
      title: 'Pedidos Hoje',
      value: '45',
      percentage: '+15%',
      color: 'bg-restaurant-green',
      trend: 'vs. ontem'
    },
    {
      title: 'Faturamento',
      value: 'R$ 2.340',
      percentage: '+8%',
      color: 'bg-restaurant-orange',
      trend: 'vs. ontem'
    },
    {
      title: 'Itens em Estoque',
      value: '23',
      percentage: '3 baixos',
      color: 'bg-restaurant-red',
      trend: 'precisam reposição'
    }
  ];

  const quickActions = [
    { icon: Plus, label: 'Novo Pedido', action: () => setActivePanel('orders') },
    { icon: Search, label: 'Buscar Mesa', action: () => setActivePanel('tables') },
    { icon: Database, label: 'Estoque', action: () => setActivePanel('stock') },
    { icon: List, label: 'Relatórios', action: () => setActivePanel('reports') }
  ];

  if (activePanel === 'tables') return <TablesPanel onBack={() => setActivePanel('dashboard')} />;
  if (activePanel === 'orders') return <OrdersPanel onBack={() => setActivePanel('dashboard')} />;
  if (activePanel === 'stock') return <StockPanel onBack={() => setActivePanel('dashboard')} />;
  if (activePanel === 'reports') return <ReportsPanel onBack={() => setActivePanel('dashboard')} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-restaurant-orange-light to-restaurant-blue-light">
      <div className="container mx-auto p-4 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-primary">MesaFácil</h1>
            <p className="text-muted-foreground">Sistema de Gestão para Restaurantes</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{new Date().toLocaleDateString('pt-BR')} - {new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="hover-lift animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.trend}</p>
                  </div>
                  <div className={`w-3 h-12 rounded-full ${stat.color}`}></div>
                </div>
                <Badge variant="secondary" className="mt-2">
                  {stat.percentage}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="animate-fade-in" style={{ animationDelay: '400ms' }}>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-20 flex-col gap-2 hover:scale-105 transition-transform"
                  onClick={action.action}
                >
                  <action.icon className="w-6 h-6" />
                  <span className="text-xs">{action.label}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="animate-fade-in" style={{ animationDelay: '500ms' }}>
            <CardHeader>
              <CardTitle>Atividade Recente</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { time: '14:30', action: 'Mesa 5 - Pedido #1234 finalizado', status: 'success' },
                { time: '14:15', action: 'Mesa 3 - Novo pedido recebido', status: 'info' },
                { time: '14:00', action: 'Estoque: Salmão abaixo do mínimo', status: 'warning' },
                { time: '13:45', action: 'Mesa 12 - Cliente chegou', status: 'info' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.status === 'success' ? 'bg-restaurant-green' :
                    activity.status === 'warning' ? 'bg-restaurant-orange' :
                    'bg-restaurant-blue'
                  }`}></div>
                  <span className="text-sm font-mono text-muted-foreground">{activity.time}</span>
                  <span className="text-sm flex-1">{activity.action}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '600ms' }}>
            <CardHeader>
              <CardTitle>Status das Mesas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 20 }, (_, i) => {
                  const isOccupied = i < 12;
                  return (
                    <div
                      key={i}
                      className={`aspect-square rounded-lg flex items-center justify-center text-xs font-medium cursor-pointer transition-all hover:scale-105 ${
                        isOccupied 
                          ? 'bg-restaurant-red text-white' 
                          : 'bg-restaurant-green text-white'
                      }`}
                      onClick={() => setActivePanel('tables')}
                    >
                      {i + 1}
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-between mt-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-restaurant-green"></div>
                  <span>Livre</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-restaurant-red"></div>
                  <span>Ocupada</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
