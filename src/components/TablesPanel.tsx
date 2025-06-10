
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Plus, Clock, Users } from 'lucide-react';

interface TablesPanelProps {
  onBack: () => void;
}

export const TablesPanel: React.FC<TablesPanelProps> = ({ onBack }) => {
  const [tables] = useState([
    { id: 1, status: 'occupied', customers: 4, waiter: 'Ana', time: '45 min', order: 1234 },
    { id: 2, status: 'free', customers: 0, waiter: '', time: '', order: null },
    { id: 3, status: 'occupied', customers: 2, waiter: 'João', time: '15 min', order: 1235 },
    { id: 4, status: 'reserved', customers: 6, waiter: 'Maria', time: '19:30', order: null },
    { id: 5, status: 'free', customers: 0, waiter: '', time: '', order: null },
    { id: 6, status: 'occupied', customers: 3, waiter: 'Pedro', time: '1h 20min', order: 1236 },
    { id: 7, status: 'free', customers: 0, waiter: '', time: '', order: null },
    { id: 8, status: 'occupied', customers: 2, waiter: 'Ana', time: '30 min', order: 1237 },
    { id: 9, status: 'cleaning', customers: 0, waiter: 'Limpeza', time: '5 min', order: null },
    { id: 10, status: 'free', customers: 0, waiter: '', time: '', order: null },
    { id: 11, status: 'occupied', customers: 5, waiter: 'João', time: '2h 10min', order: 1238 },
    { id: 12, status: 'free', customers: 0, waiter: '', time: '', order: null },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'free': return 'bg-restaurant-green';
      case 'occupied': return 'bg-restaurant-red';
      case 'reserved': return 'bg-restaurant-blue';
      case 'cleaning': return 'bg-restaurant-orange';
      default: return 'bg-restaurant-gray';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'free': return 'Livre';
      case 'occupied': return 'Ocupada';
      case 'reserved': return 'Reservada';
      case 'cleaning': return 'Limpeza';
      default: return 'Desconhecido';
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
              <h1 className="text-2xl font-bold">Gestão de Mesas</h1>
              <p className="text-muted-foreground">Controle visual do salão</p>
            </div>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Nova Reserva
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-restaurant-green">8</div>
              <div className="text-sm text-muted-foreground">Livres</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-restaurant-red">5</div>
              <div className="text-sm text-muted-foreground">Ocupadas</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-restaurant-blue">1</div>
              <div className="text-sm text-muted-foreground">Reservadas</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-restaurant-orange">1</div>
              <div className="text-sm text-muted-foreground">Limpeza</div>
            </CardContent>
          </Card>
        </div>

        {/* Tables Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tables.map((table) => (
            <Card key={table.id} className="hover-lift cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg">Mesa {table.id}</h3>
                  <Badge className={`${getStatusColor(table.status)} text-white`}>
                    {getStatusText(table.status)}
                  </Badge>
                </div>
                
                {table.status !== 'free' && (
                  <div className="space-y-2">
                    {table.customers > 0 && (
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4" />
                        <span>{table.customers} pessoas</span>
                      </div>
                    )}
                    
                    {table.time && (
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{table.time}</span>
                      </div>
                    )}
                    
                    {table.waiter && (
                      <div className="text-sm">
                        <span className="font-medium">Garçom: </span>
                        <span>{table.waiter}</span>
                      </div>
                    )}
                    
                    {table.order && (
                      <div className="text-sm">
                        <span className="font-medium">Pedido: </span>
                        <span>#{table.order}</span>
                      </div>
                    )}
                  </div>
                )}
                
                {table.status === 'free' && (
                  <div className="text-center py-4">
                    <Button size="sm" className="w-full">
                      Ocupar Mesa
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Legend */}
        <Card>
          <CardHeader>
            <CardTitle>Legenda</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-restaurant-green"></div>
                <span className="text-sm">Livre</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-restaurant-red"></div>
                <span className="text-sm">Ocupada</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-restaurant-blue"></div>
                <span className="text-sm">Reservada</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-restaurant-orange"></div>
                <span className="text-sm">Limpeza</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
