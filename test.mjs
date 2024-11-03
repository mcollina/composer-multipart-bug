import fs from 'node:fs'

const blob = fs.openAsBlob(import.meta.filename)

{
  const body = new FormData()
  body.append('data', blob)

  const res = await fetch('http://localhost:3042/foo/upload', {
    method: 'POST',
    body
  })

  // Successful if 200
  console.log(res.status, await res.json())
}

{
  const body = new FormData()
  body.append('data', blob)

  const res = await fetch('http://localhost:3042/service/upload', {
    method: 'POST',
    body
  })

  // Successful if 200
  console.log(res.status, await res.json())
}
