// GET /api/cars
import { NextRequest, NextResponse } from 'next/server';
import cars from '@/data/cars.json';

export async function GET(req: NextRequest) {
  return NextResponse.json(cars);
}