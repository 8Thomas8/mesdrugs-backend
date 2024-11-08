import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import Support from '#models/support'
import User from '#models/user'

export default class SupportResponse extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare message: string

  @hasOne(() => User)
  declare user: HasOne<typeof User>

  @hasOne(() => Support)
  declare support: HasOne<typeof Support>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
