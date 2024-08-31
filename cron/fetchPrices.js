import axios from "axios";
import Price from "../models/price.js";

//Function to fetch ethereum price

const fetchPrices = async () => {
  try {
    console.log("Cron job started: Fetching Ethereum price");
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": "CG-2dpqtLrtQnVqDXyop5NfJ1mU",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Api response was not ok");
    }

    const jsonResponse = await response.json();
    console.log(jsonResponse);
    const ethPrice = jsonResponse.ethereum.inr;

    // Saving ether price to mongodb
    const newPrice = new Price({ price: ethPrice });
    await newPrice.save();

    console.log(`Cron job successful: Ethereum price saved at ₹${ethPrice}`);
  } catch (error) {
    console.error("Coingecko Api Refused fetching Ethereum price.");
  }
};

export { fetchPrices };
