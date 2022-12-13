module.exports = (req, res) => {
  if (req.method === 'GET') {
    res.json([
      {
        name: "John Doe",
        location: "Dallas, TX"
      },
      {
        name: "Jason Statham",
        location: "London, UK"
      },
      {
        name: "DEROCK",
        location: "California, USA"
      },
      {
        name: "Whitney Philips",
        location: "Seatle, USA"
      },
      {
        name: "Bill Gaither",
        location: "Minnesota, USA"
      },
    ]);
  } else {
    const { name, location } = req.body;

    res.send({ status: "User Created", name, location });
  }
}