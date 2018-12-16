function (context, args) {
  const db = {
    f:(q,p)=>#db.f(q,p),
    u:(q,a)=>#db.u(q,a),
    u1:(q,a)=>#db.u1(q,a),
    us:(q,a)=>#db.us(q,a),
    i:i=>#db.i(i),
    r:r=>#db.r(r),
    Magnara(i){
      if (i) {
      let obj = {
        model: 'Magnara',
        _id:#db.ObjectId(),
        name: i.n || null,
        solutions: i.s || [],
        created: new Date().toUTCString(),
        updated: new Date().toUTCString(),
        length: i.n.length
      }
      return obj
    }
  }
  let dbLib = {
    insertDocument(i) {
      if (i) {
        if (!i.n) {
          throw new Error('Magnara document must have a name.')
        } else {
          let magnara = db.Magnara(i)
          let query = db.f(magnara.name).first()
          if (query) {
            throw new Error('The following Magnara entry already exists:' + '\n' + query)
          } else {
            db.i(magnara)
            return 'The following Magnara entry was created:' + '\n' + magnara
          }
        }
      } else {
        throw new Error('Magnara document cannot be created without input.')
      }
    },
    findDocuments(q) {
      if (q) {
        let query = db.f(q).array()
        if (query) {
          return query
        } else {
          return 'No entries were found.'
        }
      } else {
        throw new Error('Cannot search for undefined.')
      }
    },
    getDocument(q) {
      
    },
    updateDocument(q,u) {
      
    },
    removeDocument(q) {
      
    }
  }
}