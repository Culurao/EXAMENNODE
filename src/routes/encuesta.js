//Enrutado de encuesta
const { Router } = require('express')
const router = Router()
const { postEncuesta, putEncuesta, deleteEncuesta, getEncuesta, patchEncuesta } = require('../controller/encuesta')

router.get('/', getEncuesta)
router.post('/', postEncuesta)
router.delete('/', deleteEncuesta)
router.put('/', putEncuesta)
router.patch('/', patchEncuesta)

module.exports = router