const firebase = require('firebase')
require('firebase/auth')
module.exports = async (req, res) => {
  const { email, password } = req.body
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    return res.json({ status: 'ok' })
  } catch (e) {
    return res.json({ status: 'error' })
  }
}
