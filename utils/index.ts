import { FilterProps } from '@/types';

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // Decide the API path based on whether any filter is applied
  const isSearch = manufacturer || year || model || fuel;
  const basePath = isSearch ? '/api/cars/search' : '/api/cars';

  const url = new URL(`${process.env.NEXT_PUBLIC_BASE_URL || ''}${basePath}`);
  url.searchParams.append('make', manufacturer);
  url.searchParams.append('year', String(year));
  url.searchParams.append('model', model);
  url.searchParams.append('limit', String(limit));
  url.searchParams.append('fuel_type', fuel);

  const response = await fetch(url.toString(), { cache: 'no-store' });

  if (!response.ok) {
    throw new Error('Failed to fetch cars');
  }

  return response.json();
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
}