import axios from "axios";
import Price from "../models/price.js";

//Function to fetch ethereum price

const fetchPrices = async () => {
  try {
    console.log("Cron job started: Fetching Ethereum price");
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr"
    );
    const ethPrice = response.data.ethereum.inr;

    // Saving ether price to mongodb
    const newPrice = new Price({ price: ethPrice });
    await newPrice.save();

    console.log(`Cron job successful: Ethereum price saved at ₹${ethPrice}`);
  } catch (error) {
    console.error("Error fetching Ethereum price:", error);
  }
};

export { fetchPrices };
