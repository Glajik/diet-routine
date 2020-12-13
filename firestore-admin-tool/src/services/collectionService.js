import Repository from '../repositories/Repository'

/**
 * Get docId from document path
 * @param {string} path
 */
export const getDocId = (path) => {
  const [last] = path.split('/').slice(-1)
  return last
}

/**
 * Convert Firestore document to plain object
 * @param {Document} doc Document
 */
export const docToEntry = doc => {
  const { path, obj, created, updated } = doc

  return {
    docId: getDocId(path),
    created: new Date(created),
    updated: new Date(updated),
    ...obj,
  }
}

class CollectionService extends Repository {
  getAll() {
    const docs = super.getAll()
    console.debug(`Got ${docs.length} document(s) from "${super.collection}" collection (CollectionService)`)
    return docs.map(docToEntry)
  }

  getById(docId) {
    const doc = super.getById(docId)
    return docToEntry(doc)
  }

  create(data) {
    const doc = super.create(data)
    return docToEntry(doc)
  }

  updateById(docId, data) {
    const doc = super.updateById(docId, data)
    return docToEntry(doc)
  }

  replaceById(docId, data) {
    const doc = super.replaceById(docId, data)
    return docToEntry(doc)
  }
}

export default CollectionService
