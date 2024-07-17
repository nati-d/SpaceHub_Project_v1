"use client";
import React from 'react';
import { Grid, Checkbox, RangeSlider, Text } from '@mantine/core';

const FilterOptions = ({
  selectedPropertyTypes,
  handlePropertyTypeChange,
  selectedDurations,
  handleDurationChange,
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
          value={selectedPropertyTypes}
          onChange={handlePropertyTypeChange}
          className="space-y-3 mt-3"
        >
          <label className="bold-16">Property Type</label>
          <div className="space-y-2 mt-3">
            <Checkbox value="Office" label="Office" color="dark" />
            <Checkbox value="Workshop" label="Workshop" color="dark" />
            <Checkbox value="Lab" label="Lab" color="dark" />
            <Checkbox value="Dedicated Desk" label="Dedicated Desk" color="dark" />
            <Checkbox value="Shared Desk" label="Shared Desk" color="dark" />
          </div>
        </Checkbox.Group>
        <Checkbox.Group
          label=""
          value={selectedDurations}
          onChange={handleDurationChange}
          className="space-y-3 mt-3"
        >
          <label className="bold-16">Duration</label>
          <div className="space-y-2 mt-3">
            <Checkbox value="Daily" label="Daily" color="dark" />
            <Checkbox value="Monthly" label="Monthly" color="dark" />
            <Checkbox value="Annually" label="Annually" color="dark" />
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
            marks={[
              { value: 0, label: 'Under 600 Br' },
              { value: 600, label: '600 - 1500 Br' },
              { value: 1500, label: '1500 - 2000 Br' },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default FilterOptions;
