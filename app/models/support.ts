import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import User from '#models/user'
import SupportResponse from '#models/support_response'

export default class Support extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare message: string

  @column()
  declare status: 'new' | 'in progress' | 'done'

  @hasOne(() => User)
  declare user: HasOne<typeof User>

  @hasMany(() => SupportResponse)
  declare supportResponses: HasMany<typeof SupportResponse>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
