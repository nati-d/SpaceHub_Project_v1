"use client"
import React from 'react';
import { Grid, Checkbox, RangeSlider, Text } from '@mantine/core';

const FilterOptions = ({
  selectedCategories,
  handleCategoryChange,
  rangeValue,
  setRangeValue,
  clearFilters,
}) => {
  return (
    <>
      <h1 className="bold-16">Filter Options</h1>
      <div className="space-y-3">
        <Checkbox.Group
          label=""
          value={selectedCategories}
          onChange={handleCategoryChange}
          className="space-y-3 mt-3"
        >
          <label className="bold-16">Category</label>
          <div className="space-y-2 mt-3">
            <Checkbox value="Clothing" label="Clothing" color="dark" />
            <Checkbox value="Accessories" label="Accessories" color="dark" />
            <Checkbox value="Footwear" label="Footwear" color="dark" />
            <Checkbox value="Bags" label="Bags" color="dark" />
            <Checkbox value="Electronics" label="Electronics" color="dark" />
          </div>
        </Checkbox.Group>
        <div className="mt-3 space-y-3">
          <h1 className="bold-16">Price</h1>
          <Text c="dimmed" className="bold-16">
            {rangeValue[0]} ETB - {rangeValue[1]} ETB
          </Text>
          <RangeSlider
            minRange={1}
            min={0}
            max={2000}
            step={1}
            value={rangeValue}
            onChange={setRangeValue}
            color="dark"
          />
        </div>
      </div>
    </>
  );
};

export default FilterOptions;
