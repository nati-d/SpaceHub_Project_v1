"use client";
import React, { useState } from "react";
import { Grid, Button, Select, Pagination } from "@mantine/core";
import ProductCard from "@/components/ProductCard";
import FilterOptions from "@/components/FilterOptions";
import { Products } from "@/constants";

const ShopPage = () => {
  const [rangeValue, setRangeValue] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handleCategoryChange = (values) => {
    setSelectedCategories(values);
    setCurrentPage(1); 
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setRangeValue([0, 1000]);
    setCurrentPage(1); 
  };

  return (
    <div className="px-32 text-black-50 mt-10">
      <Grid>
        <Grid.Col
          className="hidden lg:inline-block space-y-6"
          span={{ base: 12, md: 0, lg: 3 }}
        >
          <FilterOptions
            selectedCategories={selectedCategories}
            handleCategoryChange={handleCategoryChange}
            rangeValue={rangeValue}
            setRangeValue={setRangeValue}
            clearFilters={clearFilters}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 9 }}>
          <Grid>
            <Grid.Col span={4}>
              <ProductCard />
            </Grid.Col>
            <Grid.Col span={4}>
              <ProductCard />
            </Grid.Col>
            <Grid.Col span={4}>
              <ProductCard />
            </Grid.Col>
            <Grid.Col span={4}>
              <ProductCard />
            </Grid.Col>
            <Grid.Col span={4}>
              <ProductCard />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default ShopPage;
