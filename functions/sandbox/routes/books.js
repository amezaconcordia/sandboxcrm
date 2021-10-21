const express = require('express')
const axios = require('axios')
const catalystToken = require('../catalysToken')
// const fetch = require('node-fetch')
let router = express.Router()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

// Obtener contacto por id
router.get('/getContacto/:id', async (req, res) => {
  // obtener access token
  const accessToken = await catalystToken(req)

  //Config Axios
  const idContacto = req.params.id

  const config = {
    method: 'get',
    url: `https://books.zoho.com/api/v3/contacts/${idContacto}?organization_id=${process.env.ORGANIZATION_BOOKS}`,
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
    },
  }

  // Realizar peticion con Axios
  try {
    const resp = await axios(config)
    res.json(resp.data)
  } catch (error) {
    res.send({ error })
  }
})

module.exports = router
