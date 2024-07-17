import React, { useState } from "react";
import { Input, DatePicker, Typography } from "antd";
import { Button } from "@mantine/core";

const { Title } = Typography;

const BookCard = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState("");

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <main
          style={{
            // width: "25%",
            border: "1px solid #ccc",
            padding: "24px",
            backgroundColor: "#fff",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Title level={3}>320 ETB / month</Title>
          <div
            style={{ margin: "16px 0", borderBottom: "1px solid #ccc" }}
          ></div>

          <div style={{ display: "flex", marginBottom: "16px" }}>
            <div style={{ marginRight: "16px" }}>
              <label htmlFor="checkin">Check In:</label>
              <DatePicker
                id="checkin"
                value={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                style={{ width: "100%", padding: "8px", background: "#f3f3f3" }}
                className="bg-gray-10"
              />
            </div>
            <div>
              <label htmlFor="checkout">Check Out:</label>
              <DatePicker
                id="checkout"
                value={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                style={{ width: "100%", padding: "8px", background: "#f3f3f3" }}
              />
            </div>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="additional-info">Number of people: </label>
            <input
              type="text"
              id="additional-info"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
              className="bg-gray-10"
            />
            <Select
              label="Duration"
              placeholder="Pick value"
              data={["Daily", "Monthly", "Annualy"]}
            />
            <Select
              label="Property Type"
              placeholder="Pick value"
              data={["Coworking Space", "Office", "Workshop"]}
            />
          </div>

          <div
            style={{
              background: "#e6f7ff",
              padding: "12px",
              borderRadius: "4px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "2px",
              }}
            >
              <p>2 days</p>
              <p className="font-semibold">600 ETB</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "2px",
              }}
            >
              <p>Tax</p>
              <p className="font-semibold">80 Br</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Service Fee</p>
              <p className="font-semibold">30</p>
            </div>
          </div>
          <div className="flex justify-between">
            <p>Total</p>
            <p className="font-semibold">710 Br</p>
          </div>

          <Button fullWidth color="#3a77fd">
            Book Now
          </Button>
        </main>
      </div>
    </>
  );
};

export default BookCard;
