const axios = require('axios')
require('dotenv').config()
module.exports = async (req, res) => {
  try {
    await axios({
      method: 'POST',
      url: `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.secret}&response=${req.body.token}`
    }).then((result) => {
      if (result.data.success === true) {
        return res.json(result.data)
      }
    })
  } catch (e) {
    return res.json(e)
  }
}
