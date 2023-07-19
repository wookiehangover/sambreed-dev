export async function get(context) {
  const resp = await fetch('https://feedbin.com/starred/0daa4d965211c65910806c5d426a3f41.xml')
  return new Response(resp.body, { headers: { 'content-type': 'application/xml' } })
}
