'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@/components';
import { fuels, yearsOfProduction } from '@contants';

import { fetchCars } from '@utils';

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const [totalCarsCount, setTotalCarsCount] = useState(0);

  // Search states
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');

  // Filter states
  const [fuel, setFuel] = useState('');
  const [year, setYear] = useState();

  // Pagination states
  const [limit, setLimit] = useState(8);

  const getCars = async () => {
    setLoading(true);

    try {
      const result = await fetchCars({
        manufacturer: manufacturer || '',
        year: year || '',
        fuel: fuel || '',
        limit: limit || 8,
        model: model || '',
      });

      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCars();
  }, [fuel, year, limit, manufacturer, model]);

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel}></CustomFilter>
            <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear}></CustomFilter>
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map(car => (
                <CarCard car={car} />
              ))}
            </div>

            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src="/loader.svg"
                  alt="Loader"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}

            <ShowMore
              pageNumber={limit / 4}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />

          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results.</h2>
          </div>
        )}
      </div>
    </main>
  );
}