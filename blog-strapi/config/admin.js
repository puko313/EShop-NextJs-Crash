module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4679dcc87784db59a2ecfc0c8344bf5f'),
  },
});
