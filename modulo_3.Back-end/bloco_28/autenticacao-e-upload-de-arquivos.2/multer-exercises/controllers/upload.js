const upload = (req, res) => {
  return res.status(200).json({ body: req.body, file: req.file });
}

module.exports = upload;