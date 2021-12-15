import { Request, Response } from 'express'

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function paginate(items: any, currentLimit?: number, currentPage?: number) {

  const page = currentPage || 1
  const limit = currentLimit || 10
  const offset = (page - 1) * limit  

  const paginatedItems = items.slice(offset).slice(0, limit)

  const totalPages = Math.ceil(items.length / limit)

  // console.log('Limit ', limit)
  // console.log('Offset ', offset)
  // console.log(paginatedItems)

  return {
    page: page,
    limit: limit,
    previousPage: page - 1 ? page - 1 : null,
    nextPage: (totalPages > page) ? page + 1 : null,
    totalItems: items.length,
    totalPages: totalPages,
    data: paginatedItems
  }

}

function paginateExample(req: Request, res: Response) {

  return res.json(paginate(array, 3, 4))

}

export { paginate, paginateExample }