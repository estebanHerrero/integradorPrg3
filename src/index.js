import express from 'express'
import {pool} from './db.js'

const app = express()

app.get('/ping', async (req, res) => {
    const [result] = await pool.query('SELECT  1 + 1 AS result')
    res.json(result[0])
});

app.get('/usuarios', (req,res) => res.send('obteniendo usuarios'))

app.get('/usuarios/{id}', (req,res) => res.send('obteniendo usuarios por id'))

app.post('/usuarios', (req,res) => res.send('creando usuarios'))

app.put('/usuarios', (req,res) => res.send('actualizando usuario por id'))

app.delete('/usuarios', (req,res) => res.send('eliminando usuario por id'))



app.listen(3000)
console.log('Listen running on port 3000')