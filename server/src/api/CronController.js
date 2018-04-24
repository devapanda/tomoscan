import { Router } from 'express'
import Web3Util from '../helpers/web3'
import CronTab from '../services/CronTab'

const CronController = Router()

CronController.get('/cron/blocks', async (req, res) => {
  try {
    let blocks = await CronTab.getBlocks()

    return res.json({blocks: blocks})
  }
  catch (e) {
    console.log(e)
    throw e
  }
})

CronController.get('/cron/blocks/:slug', async (req, res) => {
  try {
    let web3 = await Web3Util.getWeb3()
    let result = await web3.eth.getBlock(req.params.slug)

    return res.json(result)
  }
  catch (e) {
    console.log(e)
    throw e
  }
})

CronController.get('/cron/txs', async (req, res) => {
  try {
    let txs = await CronTab.getTransactions()

    return res.json({txs: txs})
  }
  catch (e) {
    console.log(e)
    throw e
  }
})

CronController.get('/cron/tokens', async (req, res) => {
  try {
    let tokens = await CronTab.getTokens()

    return res.json({tokens: tokens})
  }
  catch (e) {
    console.log(e)
    throw e
  }
})

export default CronController