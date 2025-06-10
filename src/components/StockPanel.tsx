
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Plus, Search, AlertTriangle } from 'lucide-react';

interface StockPanelProps {
  onBack: () => void;
}

export const StockPanel: React.FC<StockPanelProps> = ({ onBack }) => {
  const [stockItems] = useState([
    {
      id: 1,
      name: 'Salmão Fresco',
      category: 'Carnes e Peixes',
      current: 5,
      minimum: 10,
      unit: 'kg',
      cost: 45.90,
      supplier: 'Peixaria Central'
    },
    {
      id: 2,
      name: 'Tomate Italiano',
      category: 'Vegetais',
      current: 15,
      minimum: 5,
      unit: 'kg',
      cost: 8.50,
      supplier: 'Hortifruti Silva'
    },
    {
      id: 3,
      name: 'Mozzarella de Búfala',
      category: 'Laticínios',
      current: 3,
      minimum: 5,
      unit: 'kg',
      cost: 28.90,
      supplier: 'Laticínios Boa Vista'
    },
    {
      id: 4,
      name: 'Farinha 00',
      category: 'Grãos',
      current: 25,
      minimum: 10,
      unit: 'kg',
      cost: 12.30,
      supplier: 'Moinho São João'
    },
    {
      id: 5,
      name: 'Azeite Extra Virgem',
      category: 'Óleos',
      current: 2,
      minimum: 4,
      unit: 'L',
      cost: 35.80,
      supplier: 'Importadora Gourmet'
    },
    {
      id: 6,
      name: 'Coca-Cola 350ml',
      category: 'Bebidas',
      current: 48,
      minimum: 20,
      unit: 'unid',
      cost: 2.50,
      supplier: 'Distribuidora Refreshing'
    }
  ]);

  const [filter, setFilter] = useState('all');

  const filteredItems = stockItems.filter(item => {
    if (filter === 'low') return item.current <= item.minimum;
    if (filter === 'ok') return item.current > item.minimum;
    return true;
  });

  const getStockStatus = (current: number, minimum: number) => {
    if (current <= minimum) return { status: 'low', color: 'bg-restaurant-red', text: 'Baixo' };
    if (current <= minimum * 1.5) return { status: 'medium', color: 'bg-restaurant-orange', text: 'Médio' };
    return { status: 'good', color: 'bg-restaurant-green', text: 'Bom' };
  };

  const lowStockCount = stockItems.filter(item => item.current <= item.minimum).length;

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
              <h1 className="text-2xl font-bold">Controle de Estoque</h1>
              <p className="text-muted-foreground">Gestão de inventário e fornecedores</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Search className="w-4 h-4 mr-2" />
              Buscar
            </Button>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Novo Item
            </Button>
          </div>
        </div>

        {/* Alerts */}
        {lowStockCount > 0 && (
          <Card className="border-restaurant-red bg-restaurant-red-light">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-restaurant-red" />
                <div>
                  <h3 className="font-semibold text-restaurant-red">Atenção!</h3>
                  <p className="text-sm">
                    {lowStockCount} {lowStockCount === 1 ? 'item está' : 'itens estão'} com estoque baixo e {lowStockCount === 1 ? 'precisa' : 'precisam'} de reposição.
                  </p>
                </div>
                <Button size="sm" variant="outline" className="ml-auto">
                  Gerar Pedido
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">{stockItems.length}</div>
              <div className="text-sm text-muted-foreground">Total de Itens</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-restaurant-red">{lowStockCount}</div>
              <div className="text-sm text-muted-foreground">Estoque Baixo</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-restaurant-green">
                {stockItems.filter(item => item.current > item.minimum * 1.5).length}
              </div>
              <div className="text-sm text-muted-foreground">Estoque Bom</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">R$ 1.234</div>
              <div className="text-sm text-muted-foreground">Valor Total</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex gap-2">
          <Button 
            variant={filter === 'all' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setFilter('all')}
          >
            Todos
          </Button>
          <Button 
            variant={filter === 'low' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setFilter('low')}
          >
            Estoque Baixo
          </Button>
          <Button 
            variant={filter === 'ok' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setFilter('ok')}
          >
            Estoque OK
          </Button>
        </div>

        {/* Stock Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredItems.map((item) => {
            const stockStatus = getStockStatus(item.current, item.minimum);
            
            return (
              <Card key={item.id} className="hover-lift">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-bold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                    </div>
                    <Badge className={`${stockStatus.color} text-white`}>
                      {stockStatus.text}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <div className="text-sm text-muted-foreground">Atual</div>
                      <div className="font-bold">{item.current} {item.unit}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Mínimo</div>
                      <div className="font-bold">{item.minimum} {item.unit}</div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="text-sm text-muted-foreground">Custo Unitário</div>
                    <div className="font-bold">R$ {item.cost.toFixed(2)}</div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-muted-foreground">Fornecedor</div>
                    <div className="text-sm">{item.supplier}</div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>0</span>
                      <span>Mínimo: {item.minimum}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${stockStatus.color}`}
                        style={{ width: `${Math.min((item.current / (item.minimum * 2)) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      Ajustar
                    </Button>
                    {item.current <= item.minimum && (
                      <Button size="sm" className="flex-1">
                        Repor
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
