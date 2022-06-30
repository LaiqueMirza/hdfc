
const { createProxyMiddleware} = require("http-proxy-middleware")
module.exports = app =>{
    app.use(
        createProxyMiddleware('/maps/api/place/nearbysearch/json?key=AIzaSyC68H9SdF9KiJWStgwPugHIgY_IILwefRo',
        {
            target:'https://maps.googleapis.com',
            changeOrigin:true
        })
    )
}