import { TBreed, TCowCategory, TLabel, TLocation } from './interface';

export const location: TLocation[] = [
  'Dhaka',
  'Chattogram',
  'Barishal',
  'Rajshahi',
  'Sylhet',
  'Comilla',
  'Rangpur',
  'Mymensingh',
];

export const breed: TBreed[] = [
  'Brahman',
  'Nellore',
  'Sahiwal',
  'Gir',
  'Indigenous',
  'Tharparkar',
  'Kankrej',
];

export const label: TLabel[] = ['for sale', 'sold out'];

export const cowCategory: TCowCategory[] = ['Dairy', 'Beef', 'Dual Purpose'];

export const cowSearchableFields: string[] = [
  'name',
  'age',
  'price',
  'location',
  'breed',
  'weight',
  'label',
  'category',
];

export const cowFilterableFields: string[] = [
  'searchTerm',
  ...cowSearchableFields,
];
