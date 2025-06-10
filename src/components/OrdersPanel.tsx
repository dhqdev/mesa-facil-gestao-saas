
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Plus, Search, Clock } from 'lucide-react';

interface OrdersPanelProps {
  onBack: () => void;
}

export const OrdersPanel: React.FC<OrdersPanelProps> = ({ onBack }) => {
  const [orders] = useState([
    {
      id: 1234,
      table: 5,
      waiter: 'Ana',
      items: ['Hambúrguer Artesanal', 'Batata Frita', 'Refrigerante'],
      status: 'preparing',
      time: '15 min',
      total: 'R$ 45,90'
    },
    {
      id: 1235,
      table: 3,
      waiter: 'João',
      items: ['Salmão Grelhado', 'Risoto de Camarão'],
      status: 'ready',
      time: '5 min',
      total: 'R$ 78,50'
    },
    {
      id: 1236,
      table: 6,
      waiter: 'Pedro',
      items: ['Pizza Margherita', 'Coca-Cola', 'Água'],
      status: 'delivered',
      time: '2h ago',
      total: 'R$ 32,00'
    },
    {
      id: 1237,
      table: 8,
      waiter: 'Ana',
      items: ['Lasanha Bolonhesa', 'Salada Caesar'],
      status: 'pending',
      time: 'Agora',
      total: 'R$ 55,80'
    }
  ]);

  const [newOrder, setNewOrder] = useState({
    table: '',
    items: [] as string[],
    newItem: ''
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-restaurant-orange';
      case 'preparing': return 'bg-restaurant-blue';
      case 'ready': return 'bg-restaurant-green';
      case 'delivered': return 'bg-restaurant-gray';
      default: return 'bg-restaurant-gray';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'Pendente';
      case 'preparing': return 'Preparando';
      case 'ready': return 'Pronto';
      case 'delivered': return 'Entregue';
      default: return 'Desconhecido';
    }
  };

  const addItem = () => {
    if (newOrder.newItem.trim()) {
      setNewOrder({
        ...newOrder,
        items: [...newOrder.items, newOrder.newItem.trim()],
        newItem: ''
      });
    }
  };

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
              <h1 className="text-2xl font-bold">Gestão de Pedidos</h1>
              <p className="text-muted-foreground">Controle de pedidos em tempo real</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Search className="w-4 h-4 mr-2" />
              Buscar
            </Button>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Novo Pedido
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Orders List */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-lg font-semibold">Pedidos Ativos</h2>
            {orders.map((order) => (
              <Card key={order.id} className="hover-lift">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h3 className="font-bold">Pedido #{order.id}</h3>
                      <Badge className={`${getStatusColor(order.status)} text-white`}>
                        {getStatusText(order.status)}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{order.total}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {order.time}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <span className="text-sm font-medium">Mesa: </span>
                      <span>{order.table}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Garçom: </span>
                      <span>{order.waiter}</span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="text-sm font-medium mb-1">Itens:</div>
                    <ul className="text-sm space-y-1">
                      {order.items.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-2">
                    {order.status === 'pending' && (
                      <Button size="sm" variant="outline">Enviar p/ Cozinha</Button>
                    )}
                    {order.status === 'ready' && (
                      <Button size="sm">Marcar como Entregue</Button>
                    )}
                    <Button size="sm" variant="outline">Editar</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* New Order Form */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Novo Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Mesa</label>
                  <Input
                    type="number"
                    placeholder="Número da mesa"
                    value={newOrder.table}
                    onChange={(e) => setNewOrder({...newOrder, table: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium">Adicionar Item</label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Nome do item"
                      value={newOrder.newItem}
                      onChange={(e) => setNewOrder({...newOrder, newItem: e.target.value})}
                      onKeyPress={(e) => e.key === 'Enter' && addItem()}
                    />
                    <Button size="sm" onClick={addItem}>
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                {newOrder.items.length > 0 && (
                  <div>
                    <label className="text-sm font-medium">Itens do Pedido</label>
                    <div className="space-y-2 mt-2">
                      {newOrder.items.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                          <span className="text-sm">{item}</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => setNewOrder({
                              ...newOrder,
                              items: newOrder.items.filter((_, i) => i !== index)
                            })}
                          >
                            ×
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <Button className="w-full" disabled={!newOrder.table || newOrder.items.length === 0}>
                  Criar Pedido
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Status dos Pedidos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-restaurant-orange"></div>
                    <span className="text-sm">Pendentes</span>
                  </div>
                  <span className="font-bold">1</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-restaurant-blue"></div>
                    <span className="text-sm">Preparando</span>
                  </div>
                  <span className="font-bold">1</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-restaurant-green"></div>
                    <span className="text-sm">Prontos</span>
                  </div>
                  <span className="font-bold">1</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
