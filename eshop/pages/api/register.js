export default function handler(req, res) {
   
    const user = req.body;
    if (req.method === "POST") {
      res.status(200).json({ name: user });
    } else {
      // Handle any other HTTP method
    }
}