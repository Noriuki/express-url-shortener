import {Request, Response} from 'express'
import crypto from 'crypto'
import URLModel from '../database/model/URL'

export class UrlShortenerController {

  public static async shorten(req: Request, res: Response): Promise<void> {

    const {originURL} = req.body

    /* verify if url already exists */
    const url = await URLModel.findOne({originURL})
    if(url) res.json(url)

    try {
      const hash = crypto.randomBytes(16).toString('hex')
      const shortUrl = `${process.env.API_URL}/${hash}`

      const newUrl = await URLModel.create({
        hash: hash ,
        originUrl: String(originURL),
        shortUrl: shortUrl
      })
      res.json({
        success: true,
        data: {      
          newUrl
        }
      })
    } catch(err) {
      console.log(err)
    }
  
  }

  public static async redirect(req: Request, res: Response): Promise<void> {
    const {hash} = req.params

    try {
      const url = await URLModel.findOne({hash})

      if(url) res.redirect(url.originUrl)
      else res.status(400).json({success: false, message: 'url not found'})
    } catch(err) {
      console.log(err)
    }
  }

}