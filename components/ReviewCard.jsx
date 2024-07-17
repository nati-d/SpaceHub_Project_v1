import { Text } from "@mantine/core";
import React from "react";

const ReviewCard = () => {
  return (
    <div>
      <div className="flex gap-3 items-center">
        <div
          className="w-[70px] h-[80px] rounded-md border"
          style={{
            background: `url('./Hero.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >h</div>
        <div>
          <Text size="lg">Abebe Teklu</Text>
          <Text size="sm" c="dimmed">
            June 23 2024
          </Text>
        </div>
      </div>
      <p>
        sit nullam volutpat sit. A in pellentesque nulla aliquam fringilla
        mauris elementum. Ipsum tortor sed feugiat montes scelerisque id aenean.
        Rhoncus sed varius in eget ipsum sit vel venenatis faucibus. it nullam
        volutpat sit. A in pellentesque nulla aliquam fringilla mauris
        elementum. Ipsum tortor sed feugiat montes scelerisque id aenean.
        Rhoncus sed varius in eget ipsum sit vel venenatis faucibus.
      </p>
    </div>
  );
};

export default ReviewCard;
