// utils/generateToken.js

const jwt = require('jsonwebtoken');

/**
 * Fungsi untuk membuat JSON Web Token (JWT)
 * @param {string} id - ID pengguna (user_id)
 * @param {string} role - Peran pengguna
 * @returns {string} JWT Token
 */
const generateToken = (id, role) => {
  // Tanda tangan (sign) token dengan payload dan secret key dari .env
  return jwt.sign(
    { id, role }, // Payload: Data yang disimpan dalam token
    process.env.JWT_SECRET, // Secret Key untuk menanda-tangani
    {
      expiresIn: '7d', // Token kedaluwarsa dalam 7 hari (contoh)
    }
  );
};

module.exports = generateToken;