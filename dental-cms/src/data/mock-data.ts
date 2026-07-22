// Mock data for dental CMS dashboard

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  cost: number;
  inventory: number;
  lowStockThreshold: number;
  status: 'active' | 'draft' | 'archived';
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  productCount: number;
  parentId?: string;
}

export interface Collection {
  id: string;
  name: string;
  handle: string;
  productCount: number;
  createdAt: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  customer: {
    name: string;
    email: string;
  };
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: number;
  createdAt: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  orders: number;
  spent: number;
  createdAt: string;
}

export interface Promotion {
  id: string;
  code: string;
  description: string;
  type: 'percentage' | 'fixed';
  value: number;
  usageCount: number;
  active: boolean;
  expiresAt?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Pro-White Professional Whitening Kit',
    sku: 'PW-KIT-001',
    category: 'Whitening',
    price: 89.99,
    cost: 32.50,
    inventory: 156,
    lowStockThreshold: 20,
    status: 'active',
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    name: 'DentaCare Electric Toothbrush Pro',
    sku: 'DC-ETB-PRO',
    category: 'Oral Care',
    price: 129.99,
    cost: 58.00,
    inventory: 89,
    lowStockThreshold: 15,
    status: 'active',
    createdAt: '2024-02-20',
  },
  {
    id: '3',
    name: 'SensitiveGum Relief Gel',
    sku: 'SG-RG-050',
    category: 'Gum Care',
    price: 24.99,
    cost: 8.75,
    inventory: 342,
    lowStockThreshold: 50,
    status: 'active',
    createdAt: '2024-01-08',
  },
  {
    id: '4',
    name: 'OrthoAlign Clear Retainer Set',
    sku: 'OA-CR-SET',
    category: 'Orthodontics',
    price: 199.99,
    cost: 75.00,
    inventory: 12,
    lowStockThreshold: 25,
    status: 'active',
    createdAt: '2024-03-01',
  },
  {
    id: '5',
    name: 'FreshBreath Mouthwash - Mint',
    sku: 'FB-MW-MNT',
    category: 'Oral Care',
    price: 12.99,
    cost: 4.20,
    inventory: 567,
    lowStockThreshold: 100,
    status: 'active',
    createdAt: '2023-11-22',
  },
  {
    id: '6',
    name: 'EnamelShield Fluoride Treatment',
    sku: 'ES-FT-100',
    category: 'Preventive',
    price: 34.99,
    cost: 12.50,
    inventory: 234,
    lowStockThreshold: 40,
    status: 'active',
    createdAt: '2024-02-14',
  },
  {
    id: '7',
    name: 'KidsFun Dental Care Pack',
    sku: 'KF-DCP-JNR',
    category: 'Kids',
    price: 29.99,
    cost: 11.00,
    inventory: 178,
    lowStockThreshold: 30,
    status: 'active',
    createdAt: '2024-01-30',
  },
  {
    id: '8',
    name: 'GumHealth Probiotic Lozenges',
    sku: 'GH-PL-060',
    category: 'Gum Care',
    price: 19.99,
    cost: 7.25,
    inventory: 8,
    lowStockThreshold: 25,
    status: 'active',
    createdAt: '2024-03-10',
  },
  {
    id: '9',
    name: 'NightGuard Teeth Grinding Protector',
    sku: 'NG-TGP-ADJ',
    category: 'Protective',
    price: 49.99,
    cost: 18.00,
    inventory: 67,
    lowStockThreshold: 15,
    status: 'active',
    createdAt: '2024-02-28',
  },
  {
    id: '10',
    name: 'WaterFlosser Ultra Cordless',
    sku: 'WF-UC-200',
    category: 'Oral Care',
    price: 79.99,
    cost: 35.00,
    inventory: 45,
    lowStockThreshold: 10,
    status: 'active',
    createdAt: '2024-01-18',
  },
];

export const categories: Category[] = [
  { id: '1', name: 'Oral Care', slug: 'oral-care', productCount: 45 },
  { id: '2', name: 'Whitening', slug: 'whitening', productCount: 23 },
  { id: '3', name: 'Gum Care', slug: 'gum-care', productCount: 18 },
  { id: '4', name: 'Orthodontics', slug: 'orthodontics', productCount: 12 },
  { id: '5', name: 'Preventive', slug: 'preventive', productCount: 31 },
  { id: '6', name: 'Kids', slug: 'kids', productCount: 15 },
  { id: '7', name: 'Protective', slug: 'protective', productCount: 9 },
];

export const collections: Collection[] = [
  { id: '1', name: 'Summer Smile Sale', handle: 'summer-smile-sale', productCount: 28, createdAt: '2024-06-01' },
  { id: '2', name: 'Professional Grade', handle: 'professional-grade', productCount: 15, createdAt: '2024-01-15' },
  { id: '3', name: 'Family Pack', handle: 'family-pack', productCount: 22, createdAt: '2024-03-20' },
  { id: '4', name: 'New Arrivals', handle: 'new-arrivals', productCount: 12, createdAt: '2024-06-15' },
];

export const orders: Order[] = [
  { id: '1', orderNumber: 'ORD-2024-001234', customer: { name: 'Dr. Sarah Chen', email: 'sarah.chen@dentalcare.com' }, status: 'delivered', total: 459.95, items: 5, createdAt: '2024-06-18' },
  { id: '2', orderNumber: 'ORD-2024-001235', customer: { name: 'Michael Roberts', email: 'm.roberts@email.com' }, status: 'shipped', total: 129.99, items: 1, createdAt: '2024-06-19' },
  { id: '3', orderNumber: 'ORD-2024-001236', customer: { name: 'Bright Smile Clinic', email: 'orders@brightsmile.com' }, status: 'processing', total: 1249.90, items: 15, createdAt: '2024-06-20' },
  { id: '4', orderNumber: 'ORD-2024-001237', customer: { name: 'Emma Thompson', email: 'emma.t@email.com' }, status: 'pending', total: 89.99, items: 1, createdAt: '2024-06-21' },
  { id: '5', orderNumber: 'ORD-2024-001238', customer: { name: 'David Park', email: 'd.park@email.com' }, status: 'delivered', total: 234.97, items: 3, createdAt: '2024-06-17' },
  { id: '6', orderNumber: 'ORD-2024-001239', customer: { name: 'Happy Kids Dental', email: 'supply@happykids.com' }, status: 'shipped', total: 567.85, items: 8, createdAt: '2024-06-19' },
  { id: '7', orderNumber: 'ORD-2024-001240', customer: { name: 'Lisa Anderson', email: 'lisa.a@email.com' }, status: 'cancelled', total: 49.99, items: 1, createdAt: '2024-06-16' },
];

export const customers: Customer[] = [
  { id: '1', name: 'Dr. Sarah Chen', email: 'sarah.chen@dentalcare.com', phone: '+1 (555) 123-4567', orders: 24, spent: 2845.60, createdAt: '2023-03-15' },
  { id: '2', name: 'Michael Roberts', email: 'm.roberts@email.com', phone: '+1 (555) 234-5678', orders: 8, spent: 567.92, createdAt: '2023-08-22' },
  { id: '3', name: 'Bright Smile Clinic', email: 'orders@brightsmile.com', phone: '+1 (555) 345-6789', orders: 45, spent: 12456.75, createdAt: '2022-11-10' },
  { id: '4', name: 'Emma Thompson', email: 'emma.t@email.com', phone: '+1 (555) 456-7890', orders: 3, spent: 189.97, createdAt: '2024-01-05' },
  { id: '5', name: 'David Park', email: 'd.park@email.com', phone: '+1 (555) 567-8901', orders: 12, spent: 892.45, createdAt: '2023-06-18' },
  { id: '6', name: 'Happy Kids Dental', email: 'supply@happykids.com', phone: '+1 (555) 678-9012', orders: 32, spent: 8934.20, createdAt: '2023-02-28' },
];

export const promotions: Promotion[] = [
  { id: '1', code: 'SUMMER20', description: 'Summer Sale - 20% off all products', type: 'percentage', value: 20, usageCount: 234, active: true, expiresAt: '2024-08-31' },
  { id: '2', code: 'NEWCUSTOMER', description: 'First order discount', type: 'percentage', value: 15, usageCount: 567, active: true },
  { id: '3', code: 'FREESHIP', description: 'Free shipping on orders over $50', type: 'fixed', value: 10, usageCount: 892, active: true },
  { id: '4', code: 'FLASH50', description: 'Flash sale - $50 off orders over $200', type: 'fixed', value: 50, usageCount: 45, active: false, expiresAt: '2024-06-30' },
  { id: '5', code: 'WHITENING30', description: '30% off whitening products', type: 'percentage', value: 30, usageCount: 123, active: true, expiresAt: '2024-07-15' },
];

export const stats = {
  totalRevenue: 45678.90,
  revenueChange: 12.5,
  totalOrders: 1234,
  ordersChange: 8.3,
  totalCustomers: 567,
  customersChange: 5.2,
  totalProducts: 153,
  lowStockProducts: 12,
};
