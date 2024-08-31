const checkHealth = (req, res) => {
  const { message } = req.body;
  console.log(message);
  return res.send("Healty");
};

export { checkHealth };
