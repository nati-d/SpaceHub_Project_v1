"use client";

import { Card, Image, Text } from "@mantine/core";

const ProductCard = () => {
  return (
    <Card shadow="sm" radius="md" w={300}>
      <Card.Section>
        <Image
          src="/product.jpg"
          height={160}
          alt="Norway"
        />
      </Card.Section>
      <div className="space-y-2">
        <h3 className="text-lg font-bold">Creativity Cove</h3>
        <Text lineClamp={2} size="xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          nulla quam aut sed corporis voluptates praesentium inventore, sapiente
          ex tempore sit consequatur debitis non! Illo cum ipsa reiciendis
          quidem facere,
        </Text>
        
        <Text size="xs" c='dimmed' className="text-xs">Addis Ababa,Ethiopia</Text>
        <hr />
        <div className="flex justify-between font-semibold">
          <span className="text-blue-10">Per Month</span>
          <span>230 Br</span>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
