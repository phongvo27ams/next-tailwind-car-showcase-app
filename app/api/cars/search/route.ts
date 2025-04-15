// GET /api/cars/search
import { NextRequest, NextResponse } from 'next/server';
import cars from '@/data/cars.json';

// Fetch filtered cars based on search params
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const make = searchParams.get('make')?.toLowerCase() || '';
  const model = searchParams.get('model')?.toLowerCase() || '';
  const year = searchParams.get('year');
  const fuel = searchParams.get('fuel_type')?.toLowerCase() || '';
  const limit = parseInt(searchParams.get('limit') || '10');

  // Filter mock data based on the search parameters
  const filteredCars = cars.filter((car) => {
    return (
      (make ? car.make.toLowerCase().includes(make) : true) &&
      (model ? car.model.toLowerCase().includes(model) : true) &&
      (year ? car.year === parseInt(year) : true) &&
      (fuel ? car.fuel_type.toLowerCase().includes(fuel) : true)
    );
  });

  // Return the filtered cars up to the limit
  return NextResponse.json(filteredCars.slice(0, limit));
}