// Middleware to verify token and extract user details
const authenticateToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) return res.sendStatus(401);
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  };


  export default authenticateToken