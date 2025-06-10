
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Database, List } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

interface ReportsPanelProps {
  onBack: () => void;
}

export const ReportsPanel: React.FC<ReportsPanelProps> = ({ onBack }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  const salesData = [
    { time: '12:00', sales: 120 },
    { time: '13:00', sales: 280 },
    { time: '14:00', sales: 450 },
    { time: '15:00', sales: 320 },
    { time: '16:00', sales: 280 },
    { time: '17:00', sales: 380 },
    { time: '18:00', sales: 620 },
    { time: '19:00', sales: 750 },
    { time: '20:00', sales: 890 },
    { time: '21:00', sales: 680 },
    { time: '22:00', sales: 420 }
  ];

  const topProducts = [
    { name: 'Hambúrguer Artesanal', quantity: 24, revenue: 1080 },
    { name: 'Pizza Margherita', quantity: 18, revenue: 720 },
    { name: 'Salmão Grelhado', quantity: 12, revenue: 948 },
    { name: 'Lasanha Bolonhesa', quantity: 15, revenue: 675 },
    { name: 'Risoto de Camarão', quantity: 8, revenue: 560 }
  ];

  const paymentMethods = [
    { name: 'PIX', value: 45, color: '#ea580c' },
    { name: 'Cartão Débito', value: 30, color: '#3b82f6' },
    { name: 'Cartão Crédito', value: 20, color: '#10b981' },
    { name: 'Dinheiro', value: 5, color: '#6b7280' }
  ];

  const periods = [
    { value: 'today', label: 'Hoje' },
    { value: 'week', label: 'Esta Semana' },
    { value: 'month', label: 'Este Mês' },
    { value: 'custom', label: 'Personalizado' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-restaurant-orange-light to-restaurant-blue-light">
      <div className="container mx-auto p-4 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={onBack}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Relatórios e Analytics</h1>
              <p className="text-muted-foreground">Insights do seu restaurante</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>

        {/* Period Selector */}
        <div className="flex gap-2">
          {periods.map((period) => (
            <Button
              key={period.value}
              variant={selectedPeriod === period.value ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedPeriod(period.value)}
            >
              {period.label}
            </Button>
          ))}
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Faturamento</p>
                  <p className="text-2xl font-bold">R$ 5.840</p>
                  <p className="text-xs text-restaurant-green">+12% vs ontem</p>
                </div>
                <div className="w-3 h-12 rounded-full bg-restaurant-green"></div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pedidos</p>
                  <p className="text-2xl font-bold">87</p>
                  <p className="text-xs text-restaurant-blue">+5% vs ontem</p>
                </div>
                <div className="w-3 h-12 rounded-full bg-restaurant-blue"></div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Ticket Médio</p>
                  <p className="text-2xl font-bold">R$ 67</p>
                  <p className="text-xs text-restaurant-orange">+8% vs ontem</p>
                </div>
                <div className="w-3 h-12 rounded-full bg-restaurant-orange"></div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Clientes</p>
                  <p className="text-2xl font-bold">156</p>
                  <p className="text-xs text-restaurant-gray">= vs ontem</p>
                </div>
                <div className="w-3 h-12 rounded-full bg-restaurant-gray"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Vendas por Hora</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="sales" 
                    stroke="hsl(22, 89%, 52%)" 
                    strokeWidth={2}
                    dot={{ fill: "hsl(22, 89%, 52%)" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card>
            <CardHeader>
              <CardTitle>Métodos de Pagamento</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={paymentMethods}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {paymentMethods.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>Produtos Mais Vendidos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{product.name}</div>
                      <div className="text-sm text-muted-foreground">{product.quantity} vendidos</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">R$ {product.revenue}</div>
                    <div className="text-sm text-muted-foreground">faturamento</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="cursor-pointer hover-lift">
            <CardContent className="p-6 text-center">
              <Database className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold">Relatório de Estoque</h3>
              <p className="text-sm text-muted-foreground">Análise completa do inventário</p>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover-lift">
            <CardContent className="p-6 text-center">
              <List className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold">Relatório Financeiro</h3>
              <p className="text-sm text-muted-foreground">Demonstrativo de resultados</p>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover-lift">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold">Análise Semanal</h3>
              <p className="text-sm text-muted-foreground">Tendências e padrões</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
