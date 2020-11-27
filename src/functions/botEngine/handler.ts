export const handlerBotEngine = (event: any, context: any, callback: any) => {
  console.log('Request arrived...')
  const body = JSON.parse(event.body)

  console.log(JSON.stringify(body, null, 2))
  callback(null, {
    statusCode: 200,
    body: body,
  })
}