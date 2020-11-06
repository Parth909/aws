exports.readProfile = (req, res) => {
  // delete req.profile.hashed_password;
  // delete req.profile["hashed_password"]; -> these 2 don't work for some reason

  req.profile.hashed_password = undefined; // undefined value's property *Only* is not returned by res.json
  // null & false will be returned
  req.profile.salt = undefined;
  return res.json(req.profile);
};
