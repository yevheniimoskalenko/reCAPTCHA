const firebase = require('firebase')
require('firebase/auth')

module.exports = async (req, res) => {
  const { email, password } = req.body
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password)
    return res.json({ status: 'success', message: 'Greate you sign in!' })
  } catch (e) {
    return res.json({
      status: 'error',
      message: 'user is not found or password is not corected'
    })
  }
}
