// GET /api/cars
import { NextRequest, NextResponse } from 'next/server';
import cars from '@/data/cars.json';

export async function GET(req: NextRequest) {
  const limit = parseInt(new URL(req.url).searchParams.get('limit') || '10');
  return NextResponse.json(cars.slice(0, limit));
}