

const jwt = require('jsonwebtoken');
const { promisify } = require('util');


const JWT_SECRET = process.env.JWT_SECRET ;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN 


const signToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};


const verifyToken = async (token) => {
    try {
        return await promisify(jwt.verify)(token, JWT_SECRET);
    } catch (err) {
        throw new Error('Invalid token');
    }
};


const getTokenFromHeaders = (req) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        return authHeader.split(' ')[1];
    }
    return null;
};

module.exports = {
    signToken,
    verifyToken,
    getTokenFromHeaders
};
