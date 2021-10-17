import mongoose from 'mongoose'

export class MongooseConnection {

  public static async connect(): Promise<void> {
    try {
      await mongoose.connect(`${process.env.DB_CONNECT}`)
      console.log('database connection success!')
    } catch (error) {
      console.log(error)
      process.exit(1)
    }
  }
}