from aiohttp import web

async def handle(request):
    return web.Response(text="Hello world from the backend.")

app = web.Application()
app.add_routes([web.get('/api/', handle)])
