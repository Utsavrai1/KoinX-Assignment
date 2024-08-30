import cron from "node-cron";
import axios from "axios";
import Price from "../models/price.js";

cron.schedule("*/10 * * * *", async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr"
    );
    const ethPrice = response.data.ethereum.inr;

    // Saving ether price to mongodb
    const newPrice = new Price({ price: ethPrice });
    await newPrice.save();

    console.log(`Price saved: ₹${ethPrice}`);
  } catch (error) {
    console.error("Error fetching Ethereum price:", error);
  }
});

export default cron;
