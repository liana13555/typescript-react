/*
 * Кастомные типы с Type
 * - Идентификатор c type composition
 * - Состояние с union
 */

type ID = number | string

const userId: ID = 5
const postId: ID = '545dsht1asergf'

type Coords = [number, number]

const coords: Coords = [50.4501, 30.5234];


// union
type ReqStatus = 'request' | 'success' | 'error'

const requestStatus: ReqStatus = 'success'

type CellSize = 2 | 4 | 8 | 16

const cell: CellSize = 4

export { }
